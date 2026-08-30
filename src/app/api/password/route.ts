import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeText, validateUsername } from '../../../utils/security';

// GET: Check if user has a custom password set and return it
export async function GET(req: Request) {
  try {
    // 1. Anti-DoS Rate limit check
    const rateCheck = checkRateLimit(req, 30, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const { searchParams } = new URL(req.url);
    const rawUsername = searchParams.get('username');
    if (!rawUsername) return NextResponse.json({ success: false, error: 'Missing username' }, { status: 400 });

    const username = sanitizeText(rawUsername);
    if (!validateUsername(username)) {
      return NextResponse.json({ success: false, error: 'Invalid username format' }, { status: 400 });
    }

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: null });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS user_passwords (
        username TEXT PRIMARY KEY,
        password_hash TEXT NOT NULL,
        changed_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Parameterized prepared query (SQLi immune)
    const { rows } = await sql`SELECT password_hash, changed_at FROM user_passwords WHERE username = ${username}`;
    if (rows.length === 0) {
      return NextResponse.json({ success: true, data: null });
    }
    return NextResponse.json({ success: true, data: { password: rows[0].password_hash, changedAt: rows[0].changed_at } });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

// POST: Save / update the user's custom password
export async function POST(req: Request) {
  try {
    // 1. Anti-DoS Rate limit & payload size check (Strict limit for sensitive password endpoint: max 10 requests per minute)
    const rateCheck = checkRateLimit(req, 10, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 100 * 1024); // max 100KB
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    const body = await req.json();
    const rawUsername = body?.username;
    const rawPassword = body?.newPassword;

    if (!rawUsername || !rawPassword) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const username = sanitizeText(rawUsername);
    const newPassword = sanitizeText(rawPassword);

    if (!validateUsername(username)) {
      return NextResponse.json({ success: false, error: 'Invalid username format' }, { status: 400 });
    }

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode - no DB' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS user_passwords (
        username TEXT PRIMARY KEY,
        password_hash TEXT NOT NULL,
        changed_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Parameterized upsert query (SQLi & Race Condition safe)
    await sql`
      INSERT INTO user_passwords (username, password_hash, changed_at)
      VALUES (${username}, ${newPassword}, NOW())
      ON CONFLICT (username) DO UPDATE
        SET password_hash = ${newPassword}, changed_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

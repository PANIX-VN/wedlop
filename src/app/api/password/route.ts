import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeText, validateUsername } from '../../../utils/security';

/**
 * SECURITY NOTE:
 * GET /api/password is restricted — only allowed when INTERNAL_API_SECRET matches,
 * preventing any anonymous external caller from retrieving stored passwords.
 * If INTERNAL_API_SECRET is not set (dev/local mode), falls through to allow local development.
 *
 * POST /api/password: Passwords are stored WITHOUT sanitization (sanitizeText would corrupt
 * passwords containing special chars like &, <, >, ', "). Only length/type validation is applied.
 */

// GET: Check if user has a custom password (server-side internal use only)
export async function GET(req: Request) {
  try {
    // 1. Rate limit
    const rateCheck = checkRateLimit(req, 30, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    // 2. SECURITY: Restrict this endpoint - only allow if caller has internal secret
    //    This prevents any anonymous user from fetching stored passwords.
    const internalSecret = process.env.INTERNAL_API_SECRET;
    if (internalSecret) {
      const provided = req.headers.get('x-internal-secret');
      if (provided !== internalSecret) {
        // Return "not found" rather than "unauthorized" to avoid leaking endpoint existence
        return NextResponse.json({ success: true, data: null });
      }
    }

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
    // 1. Strict rate limit for password endpoint (max 10 req/min)
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

    // Sanitize username (safe to sanitize), but NOT the password —
    // sanitizeText HTML-encodes special chars (&, <, >, ', ") which corrupts passwords.
    const username = sanitizeText(rawUsername);

    // Password validation: only type + length check, no HTML encoding
    if (typeof rawPassword !== 'string' || rawPassword.length < 8 || rawPassword.length > 128) {
      return NextResponse.json({ success: false, error: 'Password must be 8-128 characters' }, { status: 400 });
    }
    // The password value is used directly (parameterized SQL prevents injection)
    const newPassword: string = rawPassword;

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

    // Parameterized upsert — SQL injection safe even without sanitization
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

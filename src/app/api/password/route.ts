import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// GET: Check if user has a custom password set and return it
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    if (!username) return NextResponse.json({ success: false, error: 'Missing username' }, { status: 400 });

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
    return NextResponse.json({ success: false, error: error.message });
  }
}

// POST: Save / update the user's custom password
export async function POST(req: Request) {
  try {
    const { username, newPassword } = await req.json();
    if (!username || !newPassword) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
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

    await sql`
      INSERT INTO user_passwords (username, password_hash, changed_at)
      VALUES (${username}, ${newPassword}, NOW())
      ON CONFLICT (username) DO UPDATE
        SET password_hash = ${newPassword}, changed_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

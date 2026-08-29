import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// GET: Fetch recent audit logs from database
export async function GET() {
  try {
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: [] });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id TEXT PRIMARY KEY,
        timestamp TIMESTAMPTZ DEFAULT NOW(),
        display_time TEXT NOT NULL,
        username TEXT NOT NULL,
        user_role TEXT NOT NULL,
        user_name TEXT NOT NULL,
        action TEXT NOT NULL,
        details TEXT NOT NULL
      )
    `;

    const { rows } = await sql`
      SELECT id, timestamp, display_time as "displayTime", username, user_role as "userRole", user_name as "userName", action, details
      FROM audit_logs
      ORDER BY timestamp DESC
      LIMIT 200
    `;

    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, data: [] });
  }
}

// POST: Record a new audit log entry into database
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, timestamp, displayTime, username, userRole, userName, action, details } = body;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id TEXT PRIMARY KEY,
        timestamp TIMESTAMPTZ DEFAULT NOW(),
        display_time TEXT NOT NULL,
        username TEXT NOT NULL,
        user_role TEXT NOT NULL,
        user_name TEXT NOT NULL,
        action TEXT NOT NULL,
        details TEXT NOT NULL
      )
    `;

    await sql`
      INSERT INTO audit_logs (id, timestamp, display_time, username, user_role, user_name, action, details)
      VALUES (${id || `log_${Date.now()}`}, ${timestamp || new Date().toISOString()}, ${displayTime}, ${username}, ${userRole}, ${userName}, ${action}, ${details})
      ON CONFLICT (id) DO NOTHING
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

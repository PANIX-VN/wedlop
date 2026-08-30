import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeObject } from '../../../utils/security';

// GET: Fetch audit logs from database
export async function GET(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: [] });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id TEXT PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
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
      LIMIT 300
    `;

    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error', data: [] }, { status: 500 });
  }
}

// POST: Insert a new audit log into database
export async function POST(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 40, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 100 * 1024); // max 100KB
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    const rawLog = await req.json();
    const log = sanitizeObject(rawLog);

    if (!log || !log.id || !log.action || !log.details) {
      return NextResponse.json({ success: false, error: 'Missing required audit log fields' }, { status: 400 });
    }

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id TEXT PRIMARY KEY,
        timestamp TIMESTAMPTZ NOT NULL,
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
      VALUES (
        ${log.id},
        ${log.timestamp || new Date().toISOString()},
        ${log.displayTime || ''},
        ${log.username || 'khach'},
        ${log.userRole || 'KHÁCH'},
        ${log.userName || 'Khách'},
        ${log.action},
        ${log.details}
      )
      ON CONFLICT (id) DO NOTHING
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

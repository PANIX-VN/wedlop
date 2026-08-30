import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeObject } from '../../../utils/security';

// GET: Fetch all dynamic duty records from database
export async function GET(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: null });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS duty_records (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        day_type TEXT NOT NULL,
        assignments JSONB NOT NULL,
        is_custom_modified BOOLEAN DEFAULT FALSE,
        notes TEXT,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    const { rows } = await sql`
      SELECT id, date, day_type as "dayType", assignments, is_custom_modified as "isCustomModified", notes
      FROM duty_records ORDER BY date DESC
    `;

    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error', data: null }, { status: 500 });
  }
}

// POST: Save or update a dynamic duty record
export async function POST(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 30, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 200 * 1024); // max 200KB
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    const rawRecord = await req.json();
    const record = sanitizeObject(rawRecord);

    if (!record || !record.id || !record.date || !record.dayType) {
      return NextResponse.json({ success: false, error: 'Missing required duty fields' }, { status: 400 });
    }

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS duty_records (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        day_type TEXT NOT NULL,
        assignments JSONB NOT NULL,
        is_custom_modified BOOLEAN DEFAULT FALSE,
        notes TEXT,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO duty_records (id, date, day_type, assignments, is_custom_modified, notes, updated_at)
      VALUES (
        ${record.id},
        ${record.date},
        ${record.dayType},
        ${JSON.stringify(record.assignments || [])}::jsonb,
        ${!!record.isCustomModified},
        ${record.notes || ''},
        NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        day_type = EXCLUDED.day_type,
        assignments = EXCLUDED.assignments,
        is_custom_modified = EXCLUDED.is_custom_modified,
        notes = EXCLUDED.notes,
        updated_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

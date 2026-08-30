import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeObject } from '../../../utils/security';

// GET: Fetch all attendance records from database
export async function GET(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: null });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS attendance_records (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        type TEXT NOT NULL,
        absent_ids JSONB NOT NULL,
        late_ids JSONB NOT NULL,
        excused_ids JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    const { rows } = await sql`
      SELECT id, date, type, absent_ids as "absentIds", late_ids as "lateIds", excused_ids as "excusedIds"
      FROM attendance_records ORDER BY date DESC
    `;

    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error', data: null }, { status: 500 });
  }
}

// POST: Save or update an attendance record
export async function POST(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 30, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 200 * 1024); // max 200KB
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    const rawRecord = await req.json();
    const record = sanitizeObject(rawRecord);

    if (!record || !record.id || !record.date || !record.type) {
      return NextResponse.json({ success: false, error: 'Missing required record fields' }, { status: 400 });
    }

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS attendance_records (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        type TEXT NOT NULL,
        absent_ids JSONB NOT NULL,
        late_ids JSONB NOT NULL,
        excused_ids JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO attendance_records (id, date, type, absent_ids, late_ids, excused_ids, updated_at)
      VALUES (
        ${record.id},
        ${record.date},
        ${record.type},
        ${JSON.stringify(record.absentIds || [])}::jsonb,
        ${JSON.stringify(record.lateIds || [])}::jsonb,
        ${JSON.stringify(record.excusedIds || [])}::jsonb,
        NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        absent_ids = EXCLUDED.absent_ids,
        late_ids = EXCLUDED.late_ids,
        excused_ids = EXCLUDED.excused_ids,
        updated_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

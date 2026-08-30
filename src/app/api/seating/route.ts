import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeObject } from '../../../utils/security';

// GET: Fetch seating layout from database
export async function GET(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: null });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS seating_store (
        id INT PRIMARY KEY DEFAULT 1,
        layout JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    const { rows } = await sql`
      SELECT layout FROM seating_store WHERE id = 1
    `;

    if (rows.length > 0) {
      return NextResponse.json({ success: true, data: rows[0].layout });
    }

    return NextResponse.json({ success: true, data: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error', data: null }, { status: 500 });
  }
}

// POST: Save seating layout to database
export async function POST(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 30, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 500 * 1024); // max 500KB
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    const body = await req.json();
    const cleanLayout = sanitizeObject(body);

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS seating_store (
        id INT PRIMARY KEY DEFAULT 1,
        layout JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO seating_store (id, layout, updated_at)
      VALUES (1, ${JSON.stringify(cleanLayout)}::jsonb, NOW())
      ON CONFLICT (id) DO UPDATE SET layout = EXCLUDED.layout, updated_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

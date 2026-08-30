import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeObject } from '../../../utils/security';

// GET: Fetch rules list from database
export async function GET(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: null });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS rules_store (
        id INT PRIMARY KEY DEFAULT 1,
        data JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    const { rows } = await sql`
      SELECT data FROM rules_store WHERE id = 1
    `;

    if (rows.length > 0) {
      return NextResponse.json({ success: true, data: rows[0].data });
    }

    return NextResponse.json({ success: true, data: null });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error', data: null }, { status: 500 });
  }
}

// POST: Save rules list to database
export async function POST(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 20, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 1024 * 1024); // max 1MB
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    const body = await req.json();
    const cleanData = sanitizeObject(body);

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS rules_store (
        id INT PRIMARY KEY DEFAULT 1,
        data JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO rules_store (id, data, updated_at)
      VALUES (1, ${JSON.stringify(cleanData)}::jsonb, NOW())
      ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

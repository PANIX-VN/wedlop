import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: [] });
    }
    const { rows } = await sql`SELECT * FROM attendance`;
    const formatted = rows.map(r => ({
      date: r.date,
      records: JSON.parse(r.records_json),
    }));
    return NextResponse.json({ success: true, data: formatted });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    const { date, records } = await req.json();
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }
    const jsonStr = JSON.stringify(records);
    await sql`
      INSERT INTO attendance (date, records_json)
      VALUES (${date}, ${jsonStr})
      ON CONFLICT (date) DO UPDATE SET records_json = ${jsonStr};
    `;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

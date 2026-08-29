import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: null });
    }
    const { rows } = await sql`SELECT * FROM seating WHERE id = 'current'`;
    return NextResponse.json({
      success: true,
      data: rows.length > 0 ? JSON.parse(rows[0].layout_json) : null,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    const layout = await req.json();
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }
    const jsonStr = JSON.stringify(layout);
    await sql`
      INSERT INTO seating (id, layout_json)
      VALUES ('current', ${jsonStr})
      ON CONFLICT (id) DO UPDATE SET layout_json = ${jsonStr};
    `;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

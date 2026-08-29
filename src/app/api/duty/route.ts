import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, data: [] });
    }
    const { rows } = await sql`SELECT * FROM duty`;
    const formatted = rows.map(r => ({
      date: r.date,
      dayName: r.day_name,
      type: r.type,
      assignedStudentIds: JSON.parse(r.assigned_students_json),
      customNote: r.custom_note || '',
    }));
    return NextResponse.json({ success: true, data: formatted });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    const { date, dayName, type, assignedStudentIds, customNote } = await req.json();
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }
    const jsonStr = JSON.stringify(assignedStudentIds);
    await sql`
      INSERT INTO duty (date, day_name, type, assigned_students_json, custom_note)
      VALUES (${date}, ${dayName}, ${type}, ${jsonStr}, ${customNote || ''})
      ON CONFLICT (date) DO UPDATE SET
        day_name = ${dayName},
        type = ${type},
        assigned_students_json = ${jsonStr},
        custom_note = ${customNote || ''};
    `;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

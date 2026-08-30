import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// GET: Fetch custom roles and user role assignments from database
export async function GET() {
  try {
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, userRoles: {}, customRoles: [] });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS roles_store (
        id INT PRIMARY KEY DEFAULT 1,
        user_roles JSONB NOT NULL,
        custom_roles JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    const { rows } = await sql`
      SELECT user_roles as "userRoles", custom_roles as "customRoles"
      FROM roles_store WHERE id = 1
    `;

    if (rows.length > 0) {
      return NextResponse.json({
        success: true,
        userRoles: rows[0].userRoles || {},
        customRoles: rows[0].customRoles || [],
      });
    }

    return NextResponse.json({ success: true, userRoles: {}, customRoles: [] });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, userRoles: {}, customRoles: [] });
  }
}

// POST: Save custom roles and user role assignments to database
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userRoles, customRoles } = body;

    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: 'Local mode' });
    }

    await sql`
      CREATE TABLE IF NOT EXISTS roles_store (
        id INT PRIMARY KEY DEFAULT 1,
        user_roles JSONB NOT NULL,
        custom_roles JSONB NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO roles_store (id, user_roles, custom_roles, updated_at)
      VALUES (1, ${JSON.stringify(userRoles || {})}::jsonb, ${JSON.stringify(customRoles || [])}::jsonb, NOW())
      ON CONFLICT (id) DO UPDATE SET user_roles = EXCLUDED.user_roles, custom_roles = EXCLUDED.custom_roles, updated_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

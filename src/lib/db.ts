import { sql } from '@vercel/postgres';

export async function queryDatabase(queryString: string, params: any[] = []) {
  if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
    return null;
  }
  try {
    return await sql.query(queryString, params);
  } catch (error) {
    console.error('Database query error:', error);
    return null;
  }
}

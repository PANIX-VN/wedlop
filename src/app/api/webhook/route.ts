import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit, checkPayloadSize } from '../../../utils/rateLimit';
import { sanitizeObject, sanitizeText } from '../../../utils/security';

// In-memory fallback cache for user profiles (used in local mode or when SQL is unavailable)
export const inMemoryProfilesStore = new Map<string, any>();

export async function POST(req: Request) {
  try {
    // 1. Rate Limit & Payload Size Security Checks
    const rateCheck = checkRateLimit(req, 120, 60 * 1000); // Max 120 requests/min
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const payloadCheck = checkPayloadSize(req, 2 * 1024 * 1024); // Max 2MB payload
    if (!payloadCheck.success && payloadCheck.response) return payloadCheck.response;

    // 2. Extract Webhook Secret from Headers or Request Body
    const headerSecret = req.headers.get('x-webhook-secret') ||
      req.headers.get('authorization')?.replace('Bearer ', '');

    const rawBody = await req.json().catch(() => null);
    if (!rawBody) {
      return NextResponse.json({ success: false, error: 'Invalid JSON payload' }, { status: 400 });
    }

    const bodySecret = rawBody.secret;
    const providedSecret = headerSecret || bodySecret;
    const expectedSecret = process.env.SHEET_WEBHOOK_SECRET;

    // 3. Secret Authentication Check
    if (!expectedSecret || providedSecret !== expectedSecret) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized: Secret key không hợp lệ hoặc chưa được cấu hình (401 Unauthorized)',
        },
        { status: 401 }
      );
    }

    // 4. Sanitize and Parse Data Payload
    const cleanBody = sanitizeObject(rawBody);
    let items: any[] = [];

    if (Array.isArray(cleanBody)) {
      items = cleanBody;
    } else if (cleanBody.data && Array.isArray(cleanBody.data)) {
      items = cleanBody.data;
    } else if (cleanBody.users && Array.isArray(cleanBody.users)) {
      items = cleanBody.users;
    } else if (cleanBody.records && Array.isArray(cleanBody.records)) {
      items = cleanBody.records;
    } else {
      // Single profile object payload
      const { secret: _, ...singleData } = cleanBody;
      if (Object.keys(singleData).length > 0) {
        items = [singleData];
      }
    }

    if (items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Payload không chứa dữ liệu profile hợp lệ' },
        { status: 400 }
      );
    }

    // 5. Upsert Data to Database / Storage
    let updatedCount = 0;
    const isDbConnected = !!(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (isDbConnected) {
      // Ensure database table exists
      await sql`
        CREATE TABLE IF NOT EXISTS user_profiles (
          user_id TEXT PRIMARY KEY,
          data JSONB NOT NULL,
          updated_at TIMESTAMPTZ DEFAULT NOW()
        )
      `;
    }

    for (const item of items) {
      const rawId = item.user_id || item.userId || item.username || item.stt || item.id;
      if (!rawId) continue;

      const userId = sanitizeText(String(rawId)).toLowerCase();
      const profileRecord = {
        ...item,
        user_id: userId,
        updated_at: new Date().toISOString(),
      };

      // Save to In-Memory Map Fallback Store
      inMemoryProfilesStore.set(userId, profileRecord);

      // Save to Vercel Postgres SQL Database if available
      if (isDbConnected) {
        await sql`
          INSERT INTO user_profiles (user_id, data, updated_at)
          VALUES (${userId}, ${JSON.stringify(profileRecord)}, NOW())
          ON CONFLICT (user_id) DO UPDATE
          SET data = EXCLUDED.data, updated_at = NOW()
        `;
      }

      updatedCount++;
    }

    // 6. Return Success Response
    return NextResponse.json({
      success: true,
      count: updatedCount,
      message: `Đã đồng bộ thành công ${updatedCount} profile người dùng từ Google Sheets.`,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Webhook Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Lỗi máy chủ khi xử lý Webhook: ' + (error?.message || 'Server error'),
      },
      { status: 500 }
    );
  }
}

// Handle non-POST HTTP methods gracefully
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: 'Phương thức GET không được hỗ trợ. Vui lòng gửi HTTP POST request từ Google Apps Script kèm secret key.',
    },
    { status: 405 }
  );
}

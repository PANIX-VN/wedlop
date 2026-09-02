import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { checkRateLimit } from '../../../utils/rateLimit';
import { sanitizeText } from '../../../utils/security';
import { CLASS_ACCOUNTS } from '../../../data/accounts';
import { INITIAL_STUDENTS } from '../../../data/initialData';
import { inMemoryProfilesStore } from '../webhook/route';

// Helper function to extract user_id from GET/POST request
function extractUserId(req: Request): string | null {
  const url = new URL(req.url);
  const paramId = url.searchParams.get('user_id') ||
    url.searchParams.get('userId') ||
    url.searchParams.get('username') ||
    url.searchParams.get('stt') ||
    url.searchParams.get('id');

  if (paramId) return sanitizeText(paramId).toLowerCase();

  const headerId = req.headers.get('x-user-id') ||
    req.headers.get('x-username') ||
    req.headers.get('user_id');

  if (headerId) return sanitizeText(headerId).toLowerCase();

  return null;
}

// Filter out sensitive auth keys before returning to Frontend
function filterSafeProfile(data: any) {
  if (!data || typeof data !== 'object') return data;
  const { password, password_hash, customPassword, secret, ...safeData } = data;
  return safeData;
}

export async function GET(req: Request) {
  try {
    // 1. Rate Limit Security Check (Max 60 req/min)
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    // 2. Identify user_id from session / request
    const userId = extractUserId(req);
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Thiếu thông tin người dùng. Vui lòng truyền ?user_id=... hoặc header x-user-id.',
        },
        { status: 400 }
      );
    }

    const isDbConnected = !!(process.env.POSTGRES_URL || process.env.DATABASE_URL);
    let profileData: any = null;

    // 3. Query Database if connected
    if (isDbConnected) {
      try {
        await sql`
          CREATE TABLE IF NOT EXISTS user_profiles (
            user_id TEXT PRIMARY KEY,
            data JSONB NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NOW()
          )
        `;

        const { rows } = await sql`
          SELECT data FROM user_profiles WHERE LOWER(user_id) = ${userId}
        `;

        if (rows.length > 0) {
          profileData = rows[0].data;
        }
      } catch (dbError) {
        console.warn('Database query fallback:', dbError);
      }
    }

    // 4. Fallback to In-Memory Webhook Store if not in DB
    if (!profileData && inMemoryProfilesStore.has(userId)) {
      profileData = inMemoryProfilesStore.get(userId);
    }

    // 5. Fallback to static system accounts / student data if profile not synced yet
    if (!profileData) {
      const accountMatch = CLASS_ACCOUNTS.find(
        a => a.username.toLowerCase() === userId || String(a.stt) === userId
      );

      const studentMatch = INITIAL_STUDENTS.find(
        s => String(s.stt) === userId || s.name.toLowerCase().includes(userId)
      );

      if (accountMatch || studentMatch) {
        profileData = {
          user_id: userId,
          stt: accountMatch?.stt ?? studentMatch?.stt ?? null,
          name: accountMatch?.name ?? studentMatch?.name ?? userId,
          role: accountMatch?.role ?? 'HỌC SINH',
          username: accountMatch?.username ?? userId,
          group: studentMatch?.group ?? 1,
          status: 'Sẵn sàng',
          synced_from_sheet: false,
          updated_at: new Date().toISOString(),
        };
      }
    }

    // If profile still not found
    if (!profileData) {
      return NextResponse.json(
        {
          success: false,
          error: `Không tìm thấy thông tin profile cho user_id: '${userId}'`,
        },
        { status: 404 }
      );
    }

    // 6. Return sanitized safe Profile payload
    const safeProfile = filterSafeProfile(profileData);

    return NextResponse.json({
      success: true,
      user_id: userId,
      profile: safeProfile,
    });
  } catch (error: any) {
    console.error('Profile GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Lỗi máy chủ khi truy vấn Profile: ' + (error?.message || 'Server error'),
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const rateCheck = checkRateLimit(req, 60, 60 * 1000);
    if (!rateCheck.success && rateCheck.response) return rateCheck.response;

    const body = await req.json().catch(() => ({}));
    let userId = body.user_id || body.userId || body.username || body.stt;

    if (!userId) {
      userId = extractUserId(req);
    }

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Thiếu thông tin user_id trong JSON body hoặc query.' },
        { status: 400 }
      );
    }

    userId = sanitizeText(String(userId)).toLowerCase();

    // Delegate to GET handler flow using created request URL
    const getUrl = new URL(req.url);
    getUrl.searchParams.set('user_id', userId);
    const mockGetReq = new Request(getUrl.toString(), { headers: req.headers });

    return await GET(mockGetReq);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Lỗi máy chủ POST Profile: ' + (error?.message || 'Server error') },
      { status: 500 }
    );
  }
}

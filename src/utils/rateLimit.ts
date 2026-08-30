/**
 * WARNING — In-Memory Rate Limiter (Vercel Serverless Limitation)
 *
 * This rate limiter uses a Node.js in-memory Map. On Vercel serverless functions,
 * each function instance runs in its own isolated environment with separate memory.
 * This means:
 *  - The rate limiter WILL work for single-instance abuse (same lambda instance)
 *  - It WILL NOT stop distributed or cross-instance attacks reliably
 *
 * For production-grade distributed rate limiting, consider:
 *  - Vercel KV (https://vercel.com/storage/kv)
 *  - Upstash Redis (https://upstash.com)
 *  - Cloudflare Rate Limiting
 *
 * The current implementation still provides meaningful protection against
 * naive bots/scrapers and is acceptable for a school-class management app.
 */
import { NextResponse } from 'next/server';

interface RateLimitStore {
  count: number;
  resetTime: number;
}

const ipStore: Map<string, RateLimitStore> = new Map();

// Periodic cleanup every 5 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipStore.entries()) {
      if (now > record.resetTime) {
        ipStore.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * In-memory sliding window Rate Limiter
 * @param req Incoming Request
 * @param limit Maximum requests allowed in timeframe
 * @param windowMs Timeframe window in milliseconds (default: 60,000ms = 1 min)
 */
export function checkRateLimit(
  req: Request,
  limit: number = 60,
  windowMs: number = 60 * 1000
): { success: boolean; response?: NextResponse } {
  // Extract client IP address from headers
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const ip = forwarded ? forwarded.split(',')[0].trim() : realIp || '127.0.0.1';

  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record || now > record.resetTime) {
    ipStore.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (record.count >= limit) {
    const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
    return {
      success: false,
      response: NextResponse.json(
        {
          success: false,
          error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau giây lát (Too Many Requests / Anti-DoS Rate Limit)',
          retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfterSeconds),
            'X-RateLimit-Limit': String(limit),
            'X-RateLimit-Remaining': '0',
          },
        }
      ),
    };
  }

  record.count += 1;
  return { success: true };
}

/**
 * Verify payload size limit (Anti-DoS memory exhaustion)
 * @param req Incoming Request
 * @param maxBytes Maximum allowed payload size in bytes (default: 1MB)
 */
export function checkPayloadSize(
  req: Request,
  maxBytes: number = 1024 * 1024
): { success: boolean; response?: NextResponse } {
  const contentLength = req.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > maxBytes) {
    return {
      success: false,
      response: NextResponse.json(
        {
          success: false,
          error: 'Dung lượng dữ liệu quá lớn (Payload Too Large)',
        },
        { status: 413 }
      ),
    };
  }
  return { success: true };
}

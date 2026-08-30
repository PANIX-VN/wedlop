import { NextResponse } from 'next/server';

/**
 * Internal API authentication helper.
 *
 * Set INTERNAL_API_SECRET in Vercel Environment Variables to restrict
 * sensitive API endpoints from anonymous external callers.
 *
 * If INTERNAL_API_SECRET is not set (local/dev mode), all requests are allowed
 * so development workflow is not broken.
 *
 * Usage in API routes:
 *   const auth = verifyInternalSecret(req);
 *   if (!auth.ok && auth.response) return auth.response;
 */
export function verifyInternalSecret(req: Request): { ok: boolean; response?: NextResponse } {
  const secret = process.env.INTERNAL_API_SECRET;
  // If no secret configured (dev/local), allow all requests
  if (!secret) return { ok: true };

  const provided = req.headers.get('x-internal-secret');
  if (provided !== secret) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      ),
    };
  }
  return { ok: true };
}

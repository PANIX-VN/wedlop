/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Hide original source code files (.tsx, .ts) in browser DevTools Sources tab
  productionBrowserSourceMaps: false,

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Referrer policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Disable unused browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // HSTS — force HTTPS for 1 year
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Content-Security-Policy — restrict resource sources
          // 'unsafe-inline' needed for Tailwind CSS-in-JS & Next.js hydration scripts
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https:",
              "connect-src 'self' https://*.vercel.app https://*.neon.tech https://docs.google.com https://sheets.googleapis.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          // NOTE: X-XSS-Protection is intentionally OMITTED.
          // It is deprecated and removed from modern browsers. In older IE versions
          // it could actually introduce XSS vulnerabilities instead of preventing them.
        ],
      },
    ];
  },
};

export default nextConfig;

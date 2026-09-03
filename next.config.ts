import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Everything on this site is same-origin: fonts are self-hosted via
// next/font (downloaded at build time, no external font CDN calls at
// runtime), all images are local, and the one external embed is the
// Google Maps iframe in Admission.tsx. That keeps this CSP tight without
// needing a nonce-based setup. 'unsafe-eval' is dev-only, for Turbopack's
// HMR runtime — production drops it.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'" + (isDev ? " ws:" : ""), // ws: for Turbopack's dev HMR socket
  "frame-src https://maps.google.com https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
]
  .join("; ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Belt-and-braces alongside frame-ancestors above — older browsers that
  // don't read CSP still respect this.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Browsers ignore this over plain HTTP, so it's harmless in local dev
  // and takes effect automatically once served over HTTPS (Vercel does
  // this by default).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Every route, including the API route — none of this is
        // page-specific.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

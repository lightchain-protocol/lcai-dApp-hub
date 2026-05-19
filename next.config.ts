import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image policy:
  // dApp logos and thumbnails are repo-local under /public/images/. We do NOT
  // allowlist any external hosts - community PRs that try to point iconSrc /
  // imageSrc at an external URL will be rejected by lib/loadAdditionalDapps.ts.
  // See README § "Image and asset guidelines" + BUGS.md #B3.
  images: {
    remotePatterns: [],
    // Block obviously dangerous SVGs (XSS via <script> in inline SVG).
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Reduce fingerprinting / give us less to upgrade on a CVE in Next itself.
  poweredByHeader: false,

  // Defense-in-depth headers. The Lightchain edge / CDN may already set some
  // of these - duplicates are harmless, and shipping them at the app layer
  // means self-hosted deploys get the same protections.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

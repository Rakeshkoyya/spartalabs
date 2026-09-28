import type { NextConfig } from "next";

/**
 * Conservative defaults. This site loads no third-party scripts, embeds nothing
 * and sets no tracking cookies, so it can afford headers a site carrying ad
 * tech could not.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  /** Self-contained server bundle for the Docker image (Dokploy). */
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  /** One host only: www serving its own copy splits ranking signals in two. */
  async redirects() {
    return [
      /** Case studies now live whole on /work; old detail URLs land on their panel. */
      {
        source: "/work/ai-tutor-learning-portal",
        destination: "/work#ai-learning-platform",
        permanent: true,
      },
      {
        source: "/work/:slug",
        destination: "/work#:slug",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.spartalabs.in" }],
        destination: "https://spartalabs.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

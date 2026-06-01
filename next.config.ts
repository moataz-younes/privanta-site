import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { SECURITY_HEADERS } from "./lib/security/headers";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    const embeddableFrameHeaders = [
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com data:",
          "img-src 'self' data: https:",
          "frame-ancestors 'self'",
        ].join("; "),
      },
    ];

    return [
      {
        source: "/maat-dashboard-mockup.html",
        headers: embeddableFrameHeaders,
      },
      {
        source: "/:path*",
        headers: [...SECURITY_HEADERS],
      },
    ];
  },
  pageExtensions: ["tsx", "ts", "route.ts"],
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      const vite = process.env.VITE_DEV_SERVER_URL ?? "http://127.0.0.1:8080";
      return {
        fallback: [
          {
            source: "/:path*",
            destination: `${vite}/:path*`,
          },
        ],
      };
    }

    return {
      fallback: [
        {
          source: "/:path((?!api|_next|assets|favicon.ico|.*\\..*).*)",
          destination: "/index.html",
        },
      ],
    };
  },
  typescript: {
    tsconfigPath: "./tsconfig.next.json",
  },
  eslint: {
    dirs: ["app", "lib"],
  },
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": projectRoot,
    };
    return config;
  },
};

export default nextConfig;

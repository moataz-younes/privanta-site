import path from "node:path";
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { SECURITY_HEADERS } from "./lib/security/headers";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...SECURITY_HEADERS],
      },
    ];
  },
  pageExtensions: ["tsx", "ts", "route.ts"],
  async rewrites() {
    if (process.env.NODE_ENV !== "development") {
      return [];
    }
    const vite = process.env.VITE_DEV_SERVER_URL ?? "http://127.0.0.1:8080";
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `${vite}/:path*`,
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

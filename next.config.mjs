import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Static HTML export for GitHub Pages (no Node server required)
  output: "export",
  // Project Pages live under /<repo>; the deploy workflow sets this env var
  basePath,
  trailingSlash: true,
  // Pin the tracing root to this project (multiple lockfiles exist on the machine)
  outputFileTracingRoot: __dirname,
  images: {
    // GitHub Pages can't run the Next image optimizer
    unoptimized: true,
  },
};

export default nextConfig;

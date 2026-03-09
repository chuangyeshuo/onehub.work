import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/onehub.work',
  assetPrefix: '/onehub.work',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

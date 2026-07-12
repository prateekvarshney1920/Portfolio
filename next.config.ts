import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // GitHub avatars + assets (used by the GitHub section in Phase 7)
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: '**.githubusercontent.com' },
    ],
  },
  experimental: {
    // Tree-shake large icon/motion barrels for smaller bundles.
    optimizePackageImports: ['lucide-react', 'motion'],
  },
};

export default nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  eslint: { dirs: ['src'], ignoreDuringBuilds: true },
  images: { domains: ['via.placeholder.com'] },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);

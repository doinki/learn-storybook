const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV !== 'test',
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  eslint: { dirs: ['src'], ignoreDuringBuilds: true },
  images: { domains: ['via.placeholder.com'] },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);

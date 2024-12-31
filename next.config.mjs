/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enable the SWC minifier
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  // Enable gzip compression
  compress: true,
  // Enhanced image optimization settings
  images: {
    domains: ['charmladonna.com'],
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    quality: 75,
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
  },
  // Headers for caching
  async headers() {
    return [
      {
        source: '/gallery/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig 
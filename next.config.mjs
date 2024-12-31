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
  // CDN and caching optimizations
  images: {
    domains: ['charmladonna.com'],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
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
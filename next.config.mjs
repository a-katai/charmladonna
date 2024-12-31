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
}

export default nextConfig 
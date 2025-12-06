import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'eduflex-api.ioconnect.ai', 'images.unsplash.com'],
  },
  // Cấu hình rewrites để proxy API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://eduflex-api.ioconnect.ai/api/:path*',
      },
      {
        source: '/dashboard',
        destination: '/',
      },
      {
        source: '/dashboard/:path*',
        destination: '/:path*',
      },

    ]
  },
  // CORS headers cho API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ]
      }
    ]
  }
}

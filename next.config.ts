import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['eduflex-api.ioconnect.io', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    API_URL: process.env.API_URL,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  }
};

export default nextConfig;

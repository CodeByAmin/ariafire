// next.config.js
import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'],  // اگر نیاز داری
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  experimental: {
  // اگر ارور compiler داری
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(process.cwd(), 'payload.config.ts'),  // این خط کلیدی!
    }
    return config
  },
}

export default withPayload(nextConfig)
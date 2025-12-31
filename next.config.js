// next.config.js
import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: ['localhost', 'ariafire.ir'],
    formats: ['image/avif', 'image/webp'],
  },
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(process.cwd(), 'payload.config.ts'),
    }
    return config
  },
  
  // برای Payload، هیچ rewrites/redirects لازم نیست
}

export default withPayload(nextConfig)
// payload.config.ts
import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import path from 'path'

// Globals
import { HomePage } from './src/globals/HomePage'
import { ContactPage } from './src/globals/ContactPage'
import { FireSuppressionPage } from './src/globals/fireSuppressionPage'
import { MonitoringPage } from './src/globals/MonitoringPage'
import { ProductPage } from './src/globals/ProductPage'
import { SiteSettings } from './src/globals/SiteSettings'

// Collections
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'

export default buildConfig({
  // تنظیمات سرور
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  
  // Editor
  editor: lexicalEditor(),
  
  // Admin settings
  admin: {
    user: Users.slug,
    autoLogin: false,
    meta: {
      titleSuffix: ' - Ariafire Admin',
      // favicon و ogImage در اینجا وجود ندارند
    },
  },
  
  // Routes
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/api/graphql',
    graphQLPlayground: '/api/graphql-playground',
  },
  
  // Secret برای JWT
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-this-in-production',
  
  // Database
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://postgres:password@localhost:5432/ariafire',
    },
  }),
  
  // Collections
  collections: [
    Users,
    Media,
  ],
  
  // Globals
  globals: [
    SiteSettings,
    HomePage,
    ProductPage,
    MonitoringPage,
    FireSuppressionPage,
    ContactPage,
  ],
  
  // Image processing
  sharp,
  
  // TypeScript types
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  
  // CORS
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://ariafire.ir',
  ],
  
  // CSRF
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://ariafire.ir',
  ],
})
// payload.config.ts
import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { HomePage } from './src/globals/HomePage'
import { ContactPage } from './src/globals/ContactPage'
import { FireSuppressionPage } from './src/globals/fireSuppressionPage'
import { MonitoringPage } from './src/globals/MonitoringPage'
import { ProductPage } from './src/globals/ProductPage'

import { Media } from './src/collections/Media' // Collection هست، نه Global
import { SiteSettings } from '@/globals/SiteSettings'

export default buildConfig({
  editor: lexicalEditor(),

  // فقط Globalها اینجا میان
  globals: [
    HomePage,
    ContactPage,
    FireSuppressionPage,
    MonitoringPage,
    ProductPage,
    SiteSettings
  ],

  // Collectionها اینجا میان
  collections: [
    Media,
    // دیگر collectionها مثل Users و ...
  ],

  secret: process.env.PAYLOAD_SECRET!,

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
    },
  }),

  sharp,
})
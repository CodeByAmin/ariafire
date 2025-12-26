// src/collections/Media.ts
import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'رسانه',
    plural: 'رسانه‌ها',
  },
  access: {
    read: () => true, // همه بتونن ببینن
  },
  upload: {
    staticDir: '../public/media', // فایل‌ها در public/media ذخیره بشن
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        crop: 'center',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        crop: 'center',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'متن جایگزین (Alt Text)',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'کپشن (اختیاری)',
    },
  ],
}
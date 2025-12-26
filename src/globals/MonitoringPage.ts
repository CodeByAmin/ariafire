// src/globals/MonitoringPage.ts
import { GlobalConfig } from 'payload'

export const MonitoringPage: GlobalConfig = {
  slug: 'monitoring-page',
  label: 'صفحه مانیتورینگ بوق',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      required: true,
      defaultValue: 'مانیتورینگ بوق سه‌مرحله‌ای آریافایر | هشدار هوشمند دما',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'هشدار صوتی پله‌ای در دماهای ۸۰، ۱۰۰ و ۱۲۰ درجه سانتی‌گراد قبل از وقوع آتش‌سوزی',
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      defaultValue: 'سیستم مانیتورینگ بوق سه‌مرحله‌ای',
    },
    {
      name: 'stage1Temp',
      type: 'text',
      defaultValue: '۸۰°C',
    },
    {
      name: 'stage1Title',
      type: 'text',
      defaultValue: 'هشدار اولیه',
    },
    {
      name: 'stage1Desc',
      type: 'textarea',
      defaultValue: 'بوق ملایم برای آگاهی راننده',
    },
    {
      name: 'stage2Temp',
      type: 'text',
      defaultValue: '۱۰۰°C',
    },
    {
      name: 'stage2Title',
      type: 'text',
      defaultValue: 'هشدار جدی',
    },
    {
      name: 'stage2Desc',
      type: 'textarea',
      defaultValue: 'بوق قوی‌تر + نوتیفیکیشن به مرکز',
    },
    {
      name: 'stage3Temp',
      type: 'text',
      defaultValue: '۱۲۰°C',
    },
    {
      name: 'stage3Title',
      type: 'text',
      defaultValue: 'هشدار بحرانی',
    },
    {
      name: 'stage3Desc',
      type: 'textarea',
      defaultValue: 'فعال‌سازی خودکار اطفای حریق',
    },
    {
      name: 'galleryImages',
      type: 'array',
      label: 'گالری تصاویر مانیتورینگ',
      fields: [
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
        { name: 'alt', type: 'text', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
  ],
}
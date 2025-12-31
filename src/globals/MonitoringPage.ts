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
    
    // بخش معرفی
    {
      name: 'introImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر بخش معرفی',
    },
    {
      name: 'introTitle',
      type: 'text',
      defaultValue: 'هوشمند‌ترین سیستم هشدار پیش از آتش‌سوزی',
    },
    {
      name: 'introDescription',
      type: 'textarea',
      defaultValue: 'سیستم مانیتورینگ آریافایر با استفاده از سنسورهای حساس دمایی، وضعیت موتور و قطعات حیاتی خودرو را به صورت لحظه‌ای رصد می‌کند. در صورت تشخیص افزایش دمای غیرعادی، بلافاصله هشدارهای صوتی پلکانی را فعال می‌نماید.',
    },
    
    // مراحل هشدار
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
    
    // بخش قابلیت‌ها
    {
      name: 'featuresImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر بخش قابلیت‌ها',
    },
    {
      name: 'featuresTitle',
      type: 'text',
      defaultValue: 'قابلیت‌های منحصربه‌فرد سیستم',
    },
    {
      name: 'featuresList',
      type: 'array',
      label: 'لیست قابلیت‌ها',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'عنوان قابلیت',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'توضیحات',
        },
      ],
    },
    
    // بخش مزایا
    {
      name: 'benefitsImage',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر بخش مزایا',
    },
    {
      name: 'benefitsTitle',
      type: 'text',
      defaultValue: 'مزایای استفاده از سیستم مانیتورینگ',
    },
    {
      name: 'benefitsList',
      type: 'array',
      label: 'لیست مزایا',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'عنوان مزیت',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'توضیحات',
        },
      ],
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
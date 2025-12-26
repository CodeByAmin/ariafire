// src/globals/FireSuppressionPage.ts
import { GlobalConfig } from 'payload'

export const FireSuppressionPage: GlobalConfig = {
  slug: 'fire-suppression-page',
  label: 'صفحه اطفای حریق خودکار',
  admin: {
    group: 'صفحات محصول',
  },
  fields: [
    // === متادیتا ===
    {
      name: 'metaTitle',
      type: 'text',
      required: true,
      defaultValue: 'اطفای حریق خودکار آریافایر | خاموش کردن آتش در ۰.۳ ثانیه',
      label: 'عنوان صفحه (SEO)',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'پاشش فوم ضدحریق ۳۶۰ درجه در کمتر از ۰.۳ ثانیه بدون نیاز به راننده',
      label: 'توضیحات متا (SEO)',
    },

    // === Hero Section ===
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      defaultValue: 'اطفای حریق خودکار در ۰.۳ ثانیه',
      label: 'عنوان اصلی هیرو',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      required: true,
      defaultValue: 'فوم مخصوص ضدحریق با پاشش ۳۶۰ درجه، آتش را قبل از گسترش کاملاً مهار می‌کند.',
      label: 'زیرعنوان هیرو',
    },

    // === بخش توضیحات ===
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'چگونه سیستم اطفای آریافایر کار می‌کند؟',
      label: 'عنوان بخش توضیحات',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'با استفاده از سنسورهای حرارتی پیشرفته و مخزن فوم مخصوص، سیستم در کمتر از ۰.۳ ثانیه واکنش نشان داده و آتش را به صورت کامل خاموش می‌کند.',
      label: 'توضیحات بخش',
    },

    // === گالری اسکرول‌شونده ===
    {
      name: 'galleryImages',
      type: 'array',
      label: 'گالری تصاویر و ویدیوها (اسکرول افقی)',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media', // حتماً collection media داشته باشی
          required: true,
          label: 'تصویر یا ویدیو',
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          defaultValue: 'سیستم اطفای حریق آریافایر',
          label: 'متن جایگزین (برای SEO و دسترسی)',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'کپشن تصویر (اختیاری)',
        },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'تصویر', value: 'image' },
            { label: 'ویدیو', value: 'video' },
          ],
          defaultValue: 'image',
          label: 'نوع رسانه',
        },
      ],
    },

    // === CTA نهایی (اختیاری - می‌تونی متنش رو تغییر بدی) ===
    {
      name: 'ctaTitle',
      type: 'text',
      defaultValue: 'ایمنی ناوگان خود را همین امروز تضمین کنید',
      label: 'عنوان CTA نهایی',
    },
    {
      name: 'ctaDescription',
      type: 'textarea',
      defaultValue: 'بیش از ۵۰۰۰ کامیون در ایران با آریافایر در برابر آتش‌سوزی محافظت می‌شوند',
      label: 'توضیحات CTA نهایی',
    },
  ],
}
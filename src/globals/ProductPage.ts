// src/globals/ProductPage.ts
import { GlobalConfig } from 'payload'

export const ProductPage: GlobalConfig = {
  slug: 'product-page',
  label: 'صفحه جزئیات محصول',
  admin: {
    group: 'صفحات محصول',
  },
  fields: [
    // === متادیتا ===
    {
      name: 'metaTitle',
      type: 'text',
      required: true,
      defaultValue: 'جزئیات محصول آریافایر | سیستم ایمنی پیشرفته چرخ کامیون',
      label: 'عنوان صفحه (SEO)',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'معرفی کامل سیستم آریافایر با مانیتورینگ بوق سه‌مرحله‌ای، اطفای حریق خودکار، نصب سریع و گارانتی ۵ ساله',
      label: 'توضیحات متا (SEO)',
    },

    // === هیرو اصلی ===
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      defaultValue: 'سیستم ایمنی هوشمند آریافایر',
      label: 'عنوان اصلی هیرو',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      required: true,
      defaultValue: 'محصولی کاملاً ایرانی با تکنولوژی پیشرفته جهانی. طراحی شده برای جلوگیری از آتش‌سوزی چرخ کامیون و تریلی با تشخیص و واکنش در کمتر از نیم ثانیه.',
      label: 'زیرعنوان هیرو',
    },

    // === بخش ویژگی‌های کلیدی (مثل کارت‌ها) ===
    {
      name: 'keyFeatures',
      type: 'array',
      label: 'ویژگی‌های کلیدی محصول',
      minRows: 3,
      maxRows: 8,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'عنوان ویژگی',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'توضیحات',
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'حفاظت', value: 'shield' },
            { label: 'سرعت', value: 'zap' },
            { label: 'هشدار', value: 'alert' },
            { label: 'مانیتورینگ', value: 'activity' },
            { label: 'نصب', value: 'truck' },
            { label: 'حرارت', value: 'flame' },
          ],
          defaultValue: 'shield',
          label: 'آیکون',
        },
      ],
      defaultValue: [
        {
          title: 'اطفای خودکار در ۰.۳ ثانیه',
          description: 'فوم ضدحریق با پاشش ۳۶۰ درجه قبل از گسترش آتش',
          icon: 'shield',
        },
        {
          title: 'هشدار بوق سه‌مرحله‌ای',
          description: 'هشدار صوتی در دماهای ۸۰، ۱۰۰ و ۱۲۰ درجه',
          icon: 'alert',
        },
        {
          title: 'مانیتورینگ ۲۴/۷',
          description: 'نظارت از راه دور با اپلیکیشن و پنل وب',
          icon: 'activity',
        },
      ],
    },

    // === گالری تصاویر محصول ===
    {
      name: 'productGallery',
      type: 'array',
      label: 'گالری تصاویر محصول (اسکرول افقی)',
      minRows: 4,
      maxRows: 15,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'تصویر یا ویدیو محصول',
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          defaultValue: 'محصول آریافایر - سیستم ایمنی چرخ کامیون',
          label: 'متن جایگزین (SEO)',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'کپشن تصویر (اختیاری)',
        },
      ],
    },

    // === بخش مزایا یا مشخصات فنی ===
    {
      name: 'specsTitle',
      type: 'text',
      defaultValue: 'مشخصات فنی و مزایای آریافایر',
      label: 'عنوان بخش مشخصات',
    },
    {
      name: 'specsList',
      type: 'array',
      label: 'لیست مشخصات فنی',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'عنوان مشخصه',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'مقدار',
        },
      ],
      defaultValue: [
        { label: 'زمان واکنش اطفای حریق', value: 'کمتر از ۰.۳ ثانیه' },
        { label: 'زمان تشخیص دما', value: '۰.۵ ثانیه' },
        { label: 'محدوده دمایی سنسور', value: '-۴۰ تا ۴۰۰ درجه سانتی‌گراد' },
        { label: 'گارانتی', value: '۵ سال کامل' },
        { label: 'نصب', value: 'کمتر از ۵ دقیقه' },
        { label: 'سازگاری', value: 'تمام کامیون‌ها و تریلی‌ها' },
      ],
    },

    // === CTA نهایی ===
    {
      name: 'ctaTitle',
      type: 'text',
      defaultValue: 'بیش از ۵۰۰۰ کامیون در ایران مجهز به آریافایر هستند',
      label: 'عنوان CTA نهایی',
    },
    {
      name: 'ctaButtonText',
      type: 'text',
      defaultValue: 'درخواست مشاوره رایگان',
      label: 'متن دکمه CTA',
    },
  ],
}
// src/globals/SiteSettings.ts
import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'تنظیمات سایت (هدر و فوتر)',
  admin: {
    group: 'تنظیمات عمومی',
  },
  fields: [
    // === اطلاعات برند ===
    {
      name: 'brandName',
      type: 'text',
      required: true,
      defaultValue: 'آریافایر',
      label: 'نام برند',
    },
    {
      name: 'brandTagline',
      type: 'text',
      defaultValue: 'سیستم ایمنی چرخ',
      label: 'شعار برند (زیر لوگو)',
    },

    // === لینک‌های منوی اصلی ===
    {
      name: 'mainMenu',
      type: 'array',
      label: 'منوی اصلی',
      minRows: 4,
      maxRows: 8,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'متن لینک',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'لینک (مثل / یا /product)',
        },
        {
          name: 'pageId',
          type: 'text',
          required: true,
          label: 'شناسه صفحه (برای active کردن، مثل home, product)',
        },
      ],
      defaultValue: [
        { text: 'خانه', href: '/', pageId: 'home' },
        { text: 'محصول', href: '/product', pageId: 'product' },
        { text: 'مانیتورینگ بوق', href: '/monitoring', pageId: 'monitoring' },
        { text: 'اطفای حریق', href: '/fire-suppression', pageId: 'fire-suppression' },
        { text: 'تماس با ما', href: '/contact', pageId: 'contact' },
      ],
    },

    // === اطلاعات تماس ===
    {
      name: 'phone',
      type: 'text',
      required: true,
      defaultValue: '0902-709-7989',
      label: 'شماره تلفن اصلی',
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      defaultValue: 'https://wa.me/989027097989',
      label: 'لینک واتساپ',
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      defaultValue: 'info@ariafire.ir',
      label: 'ایمیل',
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: 'تهران، خیابان انقلاب، پلاک ۱۲۳',
      label: 'آدرس',
    },

    // === لینک‌های اجتماعی ===
    {
      name: 'socialLinks',
      type: 'array',
      label: 'لینک‌های شبکه‌های اجتماعی',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'نام شبکه (مثل اینستاگرام)',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'لینک',
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'واتساپ', value: 'whatsapp' },
            { label: 'اینستاگرام', value: 'instagram' },
            { label: 'لینکدین', value: 'linkedin' },
          ],
          defaultValue: 'instagram',
        },
      ],
      defaultValue: [
        { name: 'واتساپ', href: 'https://wa.me/989027097989', icon: 'whatsapp' },
        { name: 'اینستاگرام', href: 'https://instagram.com/ariafire', icon: 'instagram' },
        { name: 'لینکدین', href: 'https://linkedin.com/company/ariafire', icon: 'linkedin' },
      ],
    },
{
  name: 'contactNumber',
  type: 'text',
  label: 'شماره تماس اصلی',
  defaultValue: '09027097989',
  required: true
},
{
  name: 'whatsappNumber',
  type: 'text',
  label: 'شماره واتساپ',
  defaultValue: '09027097989',
  required: true
},
    // === لینک‌های سریع فوتر ===
    {
      name: 'quickLinks',
      type: 'array',
      label: 'لینک‌های سریع فوتر',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'لینک داخلی (مثل #features)',
        },
      ],
      defaultValue: [
        { name: 'ویژگی‌ها', href: '#features' },
        { name: 'نحوه کار', href: '#how-it-works' },
        { name: 'مزایا', href: '#benefits' },
        { name: 'تماس', href: '#contact' },
      ],
    },

    // === متن کپی‌رایت ===
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: 'آریافایر. تمامی حقوق محفوظ است.',
      label: 'متن کپی‌رایت',
    },
//     {
//       name: 'designerText',
//       type: 'text',
//       defaultValue: 'طراحی شده توسط تیم نرم افزار بیتکو',
//       label: 'متن طراح (در فوتر)',
//     },
  ],
}
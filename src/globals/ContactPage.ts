import { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
   label: 'صفحه تماس با ما',
  admin: {
    group: 'صفحات', // اختیاری: گروه‌بندی در منو
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'تماس با ما | آریافایر',
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      defaultValue: 'آماده‌ایم تا به شما کمک کنیم',
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'تیم متخصص آریافایر همیشه در کنار شماست. مشاوره رایگان، نصب در محل و پشتیبانی مادام‌العمر.',
    },
    {
      name: 'badgeText',
      type: 'text',
      defaultValue: 'پشتیبانی ۲۴ ساعته • پاسخگویی فوری',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      defaultValue: '0902-709-7989',
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      defaultValue: 'https://wa.me/989027097989',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'info@ariafire.ir',
    },
    {
      name: 'address',
      type: 'text',
      defaultValue: 'تهران، خیابان انقلاب اسلامی، پلاک ۱۲۳',
    },
    {
      name: 'mapEmbed',
      type: 'textarea', // یا 'code' اگر بخوای HTML embed رو کامل ویرایش کنه
      defaultValue: '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d681.4076138974785!2d51.387043132498555!3d35.66865073664664!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1766741982525!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    // فیلدهای دیگه مثل CTA متن‌ها، تعداد کامیون‌ها و ...
    {
      name: 'ctaStats',
      type: 'text',
      defaultValue: '۵۰۰۰ کامیون',
    },
    {
      name: 'ctaPhone',
      type: 'text',
      defaultValue: '۰۹۲۱-۰۸۲-۷۳۶۷',
    },
  ],
}
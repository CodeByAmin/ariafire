import { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'صفحه تماس با ما',
  admin: {
    group: 'صفحات',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'اطلاعات متا',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'عنوان صفحه',
              required: true,
              defaultValue: 'تماس با ما | آریافایر',
            },
            {
              name: 'heroTitle',
              type: 'text',
              label: 'عنوان هیرو',
              required: true,
              defaultValue: 'آماده‌ایم تا به شما کمک کنیم',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'توضیحات هیرو',
              required: true,
              defaultValue: 'تیم متخصص آریافایر همیشه در کنار شماست. مشاوره رایگان، نصب در محل و پشتیبانی مادام‌العمر.',
            },
          ]
        },
        {
          label: 'اطلاعات تماس',
          fields: [
            {
              name: 'badgeText',
              type: 'text',
              label: 'متن بنر',
              defaultValue: 'پشتیبانی ۲۴ ساعته • پاسخگویی فوری',
            },
            {
              name: 'phone',
              type: 'text',
              label: 'شماره تلفن',
              required: true,
              defaultValue: '۰۹۰۲-۷۰۹-۷۹۸۹',
            },
            {
              name: 'whatsappLink',
              type: 'text',
              label: 'لینک واتساپ',
              required: true,
              defaultValue: 'https://wa.me/989027097989',
            },
            {
              name: 'whatsappText',
              type: 'text',
              label: 'متن دکمه واتساپ',
              defaultValue: 'کلیک برای چت مستقیم',
            },
            {
              name: 'email',
              type: 'email',
              label: 'ایمیل',
              required: true,
              defaultValue: 'info@ariafire.ir',
            },
          ]
        },
        {
          label: 'آدرس و نقشه',
          fields: [
            {
              name: 'addressTitle',
              type: 'text',
              label: 'عنوان آدرس',
              defaultValue: 'دفتر مرکزی تهران',
            },
            {
              name: 'address',
              type: 'text',
              label: 'آدرس کامل',
              defaultValue: 'تهران، خیابان انقلاب اسلامی، پلاک ۱۲۳',
            },
            {
              name: 'workingHours',
              type: 'text',
              label: 'ساعات کاری',
              defaultValue: 'شنبه تا پنجشنبه: ۸ صبح تا ۸ شب',
            },
            {
              name: 'mapEmbed',
              type: 'textarea',
              label: 'کد نقشه (HTML)',
              defaultValue: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.123456789!2d51.386451!3d35.668553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzA2LjgiTiA1McKwMjMnMTEuMiJF!5e0!3m2!1sen!2sus!4v1735700000000!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            },
          ]
        },
        {
          label: 'فرم تماس',
          fields: [
            {
              name: 'formTitle',
              type: 'text',
              label: 'عنوان فرم',
              defaultValue: 'ارسال پیام',
            },
            {
              name: 'nameLabel',
              type: 'text',
              label: 'لیبل نام',
              defaultValue: 'نام کامل',
            },
            {
              name: 'phoneLabel',
              type: 'text',
              label: 'لیبل تلفن',
              defaultValue: 'تلفن',
            },
            {
              name: 'emailLabel',
              type: 'text',
              label: 'لیبل ایمیل',
              defaultValue: 'ایمیل',
            },
            {
              name: 'fleetLabel',
              type: 'text',
              label: 'لیبل ناوگان',
              defaultValue: 'تعداد کامیون در ناوگان',
            },
            {
              name: 'messageLabel',
              type: 'text',
              label: 'لیبل پیام',
              defaultValue: 'پیام شما',
            },
            {
              name: 'submitButton',
              type: 'text',
              label: 'متن دکمه ارسال',
              defaultValue: 'ارسال پیام و دریافت مشاوره رایگان',
            },
          ]
        },
        {
          label: 'CTA پایانی',
          fields: [
            {
              name: 'ctaStats',
              type: 'text',
              label: 'آمار',
              defaultValue: '۵۰۰۰ کامیون',
            },
            {
              name: 'ctaText',
              type: 'textarea',
              label: 'متن CTA',
              defaultValue: 'نوبت شماست! همین حالا تماس بگیرید و ایمنی ناوگان خود را تضمین کنید.',
            },
            {
              name: 'ctaPhone',
              type: 'text',
              label: 'شماره CTA',
              defaultValue: '۰۹۰۲-۷۰۹-۷۹۸۹',
            },
            {
              name: 'ctaButton',
              type: 'text',
              label: 'متن دکمه CTA',
              defaultValue: 'تماس فوری',
            },
          ]
        }
      ]
    }
  ]
}
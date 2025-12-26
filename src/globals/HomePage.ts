// src/collections/HomePage.ts
import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'صفحه اصلی',
  admin: {
    group: 'صفحات',
  },
  fields: [
    // === متادیتا ===
    {
      name: 'metaTitle',
      type: 'text',
      required: true,
      defaultValue: 'آریافایر | سیستم ایمنی چرخ کامیون و تریلی',
      label: 'عنوان صفحه (SEO)',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'هشدار در ۰.۵ ثانیه، اطفای خودکار در ۰.۳ ثانیه، مانیتورینگ ۲۴ ساعته چرخ‌های کامیون و تریلی',
      label: 'توضیحات متا (SEO)',
    },

    // === Hero Section ===
    {
      name: 'heroBadge',
      type: 'text',
      defaultValue: 'جدیدترین تکنولوژی ایمنی حمل‌ونقل',
      label: 'متن badge بالای هیرو',
    },
    {
      name: 'heroMainTitle',
      type: 'text',
      required: true,
      defaultValue: 'ایمنی کامل چرخ‌های',
      label: 'عنوان اصلی هیرو (قسمت اول)',
    },
    {
      name: 'heroSubTitle',
      type: 'text',
      required: true,
      defaultValue: 'کامیون و تریلی',
      label: 'عنوان فرعی هیرو',
    },
    {
      name: 'heroTagline',
      type: 'text',
      defaultValue: 'هشدار در ۰.۵ ثانیه • اطفای خودکار • مانیتورینگ ۲۴/۷',
      label: 'تگ‌لاین زیر عنوان',
    },
    {
      name: 'heroCtaPrimary',
      type: 'text',
      defaultValue: 'شروع سفارش',
      label: 'متن دکمه اصلی CTA',
    },
    {
      name: 'heroCtaSecondary',
      type: 'text',
      defaultValue: 'مشاهده ویژگی‌ها',
      label: 'متن دکمه ثانویه',
    },

    // === آمارهای هیرو ===
    {
      name: 'stats',
      type: 'array',
      label: 'آمارهای بخش هیرو',
      labels: { singular: 'آمار', plural: 'آمارها' },
      fields: [
        { name: 'number', type: 'text', required: true, label: 'عدد' },
        { name: 'title', type: 'text', required: true, label: 'عنوان' },
        { name: 'description', type: 'text', required: true, label: 'توضیحات' },
      ],
      defaultValue: [
        { number: '5000+', title: 'کامیون محافظت شده', description: 'بیش از ۵۰۰۰ کامیون و تریلی با سیستم ایمنی پیشرفته ما محافظت می‌شوند' },
        { number: '1200+', title: 'آتش‌سوزی جلوگیری شده', description: 'بیش از ۱۲۰۰ مورد آتش‌سوزی بالقوه پیشگیری شده است' },
        { number: '0.5 ثانیه', title: 'هشدار فوق سریع', description: 'سیستم ما در کمتر از نیم‌ثانیه خطر را شناسایی و هشدار می‌دهد' },
      ],
    },

    // === Features Section ===
    {
      name: 'featuresTitle',
      type: 'text',
      defaultValue: 'چرا آریافایر بهترین انتخاب است؟',
      label: 'عنوان بخش ویژگی‌ها',
    },
    {
      name: 'featuresBadge',
      type: 'text',
      defaultValue: 'تکنولوژی پیشرفته',
      label: 'متن Badge ویژگی‌ها',
    },
    {
      name: 'featuresDescription',
      type: 'textarea',
      defaultValue: 'محصولی از تکنولوژی پیشرفته ایرانی و گارانتی ۵ ساله',
      label: 'توضیحات بخش ویژگی‌ها',
    },

    // === لیست ویژگی‌ها (کاملاً قابل ویرایش) ===
    {
      name: 'featuresList',
      type: 'array',
      label: 'لیست ویژگی‌های اصلی',
      minRows: 3,
      maxRows: 9,
      labels: { singular: 'ویژگی', plural: 'ویژگی‌ها' },
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
          label: 'توضیحات ویژگی',
        },
        {
          name: 'stats',
          type: 'text',
          required: true,
          label: 'آمار اصلی (مثل ۰.۳ ثانیه)',
        },
        {
          name: 'time',
          type: 'text',
          required: true,
          label: 'متن کوچک کنار آمار (مثل واکنش فوری)',
        },
        {
          name: 'details',
          type: 'array',
          label: 'لیست جزئیات (تیک‌دار)',
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'مورد',
            },
          ],
          minRows: 1,
          maxRows: 6,
        },
      ],
      defaultValue: [
        {
          title: 'سیستم اطفای خودکار',
          description: 'تشخیص و خاموش کردن خودکار آتش در کمتر از ۰.۳ ثانیه با استفاده از فوم ضدحریق پیشرفته',
          stats: '۰.۳ ثانیه',
          time: 'واکنش فوری',
          details: [
            { item: 'فوم ضدحریق مخصوص' },
            { item: 'پاشش ۳۶۰ درجه' },
            { item: 'بدون نیاز به اپراتور' },
          ],
        },
        {
          title: 'هشدار فوق سریع',
          description: 'تشخیص افزایش دمای غیرعادی چرخ‌ها در ۰.۵ ثانیه با سنسورهای حرارتی پیشرفته',
          stats: '۰.۵ ثانیه',
          time: 'تشخیص آنی',
          details: [
            { item: 'سنسورهای حرارتی آلمانی' },
            { item: 'محدوده دمایی -۴۰ تا ۴۰۰ درجه' },
            { item: 'کالیبراسیون خودکار' },
          ],
        },
        {
          title: 'هشدار صوتی و تصویری',
          description: 'آلارم صوتی ۱۲۰ دسی‌بل به همراه نمایشگر LED رنگی در کابین راننده',
          stats: '۱۲۰ دسی‌بل',
          time: 'هشدار چندگانه',
          details: [
            { item: 'آلارم صوتی پرقدرت' },
            { item: 'نمایشگر LED رنگی' },
            { item: 'هشدار به مرکز کنترل' },
          ],
        },
        {
          title: 'مانیتورینگ ۲۴ ساعته',
          description: 'نظارت دائمی از راه دور با اپلیکیشن موبایل و پنل مدیریت آنلاین',
          stats: '۲۴/۷',
          time: 'نظارت دائمی',
          details: [
            { item: 'اپلیکیشن اختصاصی' },
            { item: 'پنل مدیریت وب' },
            { item: 'گزارش‌گیری لحظه‌ای' },
          ],
        },
        {
          title: 'نصب سریع و آسان',
          description: 'نصب در کمتر از ۵ دقیقه روی تمام انواع کامیون‌ها، تریلی‌ها و وسایل نقلیه سنگین',
          stats: '۵ دقیقه',
          time: 'نصب سریع',
          details: [
            { item: 'سازگار با تمام مدل‌ها' },
            { item: 'بدون نیاز به تغییرات اساسی' },
            { item: 'نصب در محل ناوگان' },
          ],
        },
        {
          title: 'مقاوم در برابر حرارت',
          description: 'تحمل دمای تا ۱۲۰۰ درجه سانتی‌گراد با استفاده از مواد کامپوزیتی پیشرفته',
          stats: '۱۲۰۰°C',
          time: 'مقاومت بالا',
          details: [
            { item: 'مواد کامپوزیتی' },
            { item: 'عایق‌بندی حرارتی' },
            { item: 'بدون خرابی در دمای بالا' },
          ],
        },
      ],
    },

    // === CTA بخش ویژگی‌ها ===
    {
      name: 'featuresCtaStats',
      type: 'text',
      defaultValue: '۵۰۰۰ کامیون',
      label: 'آمار CTA ویژگی‌ها',
    },
    {
      name: 'featuresCtaText',
      type: 'textarea',
      defaultValue: 'به خانواده بزرگ آریافایر بپیوندید و خیالتان از بابت ایمنی چرخ‌های ناوگانتان راحت باشد',
      label: 'متن CTA ویژگی‌ها',
    },

    // === WhatsApp Form Section ===
    {
      name: 'contactBadge',
      type: 'text',
      defaultValue: 'ارسال فوری به واتساپ',
      label: 'متن Badge فرم تماس',
    },
    {
      name: 'contactTitle',
      type: 'text',
      defaultValue: 'در کمتر از ۳۰ ثانیه سیستم ایمنی سفارش دهید',
      label: 'عنوان بخش تماس',
    },
    {
      name: 'contactDescription',
      type: 'textarea',
      defaultValue: 'اطلاعات شما مستقیماً به واتساپ تیم فروش ارسال شده و در ۵ دقیقه پاسخ می‌گیرید',
      label: 'توضیحات بخش تماس',
    },
    {
      name: 'whatsappBenefits',
      type: 'array',
      label: 'مزایای واتساپ',
      labels: { singular: 'مزیت', plural: 'مزایا' },
      fields: [
        { name: 'title', type: 'text', label: 'عنوان مزیت' },
        { name: 'desc', type: 'text', label: 'توضیحات مزیت' },
      ],
      defaultValue: [
        { title: 'پاسخ در ۵ دقیقه', desc: 'تیم فروش فوری پاسخ می‌دهد' },
        { title: 'مشاوره رایگان', desc: 'کارشناسان متخصص' },
        { title: 'نصب سریع', desc: 'در محل ناوگان شما' },
        { title: 'گارانتی مادام العمر', desc: 'پشتیبانی ۲۴/۷' },
      ],
    },
  ],
}
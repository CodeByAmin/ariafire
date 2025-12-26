// app/page.js
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import WhatsAppForm from '@/components/WhatsAppForm'
import SupportPanel from '@/components/SupportPanel'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

// متادیتای دینامیک از Payload
export async function generateMetadata() {
  const payload = await getPayloadHMR({ config })
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'home-page' })
  } catch (e) {}

  return {
    title: data?.metaTitle || 'آریافایر | سیستم ایمنی چرخ کامیون',
    description: data?.metaDescription || 'سیستم ایمنی پیشرفته برای چرخ‌های کامیون و تریلی',
  }
}

export default async function HomePage() {
  const payload = await getPayloadHMR({ config })
  
  let homeData = {}
  try {
    homeData = await payload.findGlobal({ slug: 'home-page' })
  } catch (error) {
    console.error('Error loading home page data:', error)
  }

  // fallback برای جلوگیری از کرش
  const data = {
    heroBadge: 'جدیدترین تکنولوژی ایمنی حمل‌ونقل',
    heroMainTitle: 'ایمنی کامل چرخ‌های',
    heroSubTitle: 'کامیون و تریلی',
    heroTagline: 'هشدار در ۰.۵ ثانیه • اطفای خودکار • مانیتورینگ ۲۴/۷',
    heroCtaPrimary: 'شروع سفارش',
    heroCtaSecondary: 'مشاهده ویژگی‌ها',
    stats: [
      { number: '5000+', title: 'کامیون محافظت شده', description: 'بیش از ۵۰۰۰ کامیون...' },
      { number: '1200+', title: 'آتش‌سوزی جلوگیری شده', description: 'بیش از ۱۲۰۰ مورد...' },
      { number: '0.5 ثانیه', title: 'هشدار فوق سریع', description: 'سیستم ما در کمتر از نیم‌ثانیه...' },
    ],
    featuresTitle: 'چرا آریافایر بهترین انتخاب است؟',
    featuresBadge: 'تکنولوژی پیشرفته',
    featuresDescription: 'محصولی از تکنولوژی پیشرفته ایرانی و گارانتی ۵ ساله',
    featuresCtaStats: '۵۰۰۰ کامیون',
    featuresCtaText: 'به خانواده بزرگ آریافایر بپیوندید...',
    contactBadge: 'ارسال فوری به واتساپ',
    contactTitle: 'در کمتر از ۳۰ ثانیه سیستم ایمنی سفارش دهید',
    contactDescription: 'اطلاعات شما مستقیماً به واتساپ تیم فروش ارسال شده و در ۵ دقیقه پاسخ می‌گیرید',
    whatsappBenefits: [
      { title: 'پاسخ در ۵ دقیقه', desc: 'تیم فروش فوری پاسخ می‌دهد' },
      { title: 'مشاوره رایگان', desc: 'کارشناسان متخصص' },
      { title: 'نصب سریع', desc: 'در محل ناوگان شما' },
      { title: 'گارانتی مادام العمر', desc: 'پشتیبانی ۲۴/۷' },
    ],
    ...homeData,
  }

  return (
    <>
      <Header currentPage="home" />
      
      <Hero data={data} />
      <Features data={data} />
      <HowItWorks /> {/* این بخش فعلاً ثابت است، بعداً می‌تونید گسترش بدید */}
      <WhatsAppForm data={data} />
      <SupportPanel />
      
      <Footer />
    </>
  )
}
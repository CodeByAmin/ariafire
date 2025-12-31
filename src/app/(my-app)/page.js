// app/page.js → بهتره به page.tsx تغییر نام بدی (اختیاری اما توصیه می‌شه)
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

  // دریافت داده‌های صفحه اصلی
  let homeData = {}
  try {
    homeData = await payload.findGlobal({ slug: 'home-page' })
  } catch (error) {
    console.error('Error loading home page data:', error)
  }

  // دریافت تنظیمات سایت (برای هدر و فوتر)
  let siteSettings = {}
  try {
    siteSettings = await payload.findGlobal({ slug: 'site-settings' })
  } catch (error) {
    console.error('Error loading site settings:', error)
  }
  return (
    <>
      {/* حالا siteSettings درست پاس داده می‌شه */}
      <Header currentPage="home" siteData={siteSettings} />
    <Hero data={homeData} />
      <Features data={homeData} />
      <HowItWorks data={homeData} />
      <WhatsAppForm data={homeData} />
      <SupportPanel />
      
      <Footer siteData={siteSettings} />
    </>
  )
}
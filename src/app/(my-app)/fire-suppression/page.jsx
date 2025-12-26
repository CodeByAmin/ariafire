// app/fire-suppression/page.js → تغییر نام بده به page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const payload = await getPayloadHMR({ config })
  let pageData = {}
  try {
    pageData = await payload.findGlobal({ slug: 'fire-suppression-page' })
  } catch (e) {}

  return {
    title: pageData?.metaTitle || 'اطفای حریق خودکار آریافایر',
    description: pageData?.metaDescription || 'سیستم اطفای خودکار آتش چرخ کامیون در ۰.۳ ثانیه',
  }
}

export default async function FireSuppressionPage() {
  const payload = await getPayloadHMR({ config })
  
  let pageData = {}
  try {
    pageData = await payload.findGlobal({ slug: 'fire-suppression-page' })
  } catch (error) {
    console.error('Error loading fire suppression page:', error)
  }

  const {
    heroTitle = 'اطفای حریق خودکار در ۰.۳ ثانیه',
    heroSubtitle = 'فوم مخصوص ضدحریق با پاشش ۳۶۰ درجه، آتش را قبل از گسترش کاملاً مهار می‌کند.',
    sectionTitle = 'چگونه سیستم اطفای آریافایر کار می‌کند؟',
    sectionDescription = 'با استفاده از سنسورهای حرارتی پیشرفته و مخزن فوم مخصوص، سیستم در کمتر از ۰.۳ ثانیه واکنش نشان داده و آتش را به صورت کامل خاموش می‌کند.',
    galleryImages = [],
    ctaTitle = 'ایمنی ناوگان خود را همین امروز تضمین کنید',
    ctaDescription = 'بیش از ۵۰۰۰ کامیون در ایران با آریافایر در برابر آتش‌سوزی محافظت می‌شوند',
  } = pageData
  let siteSettings = {}
  try {
    siteSettings = await payload.findGlobal({ slug: 'site-settings' })
  } catch (error) {
    console.error('Error loading site settings:', error)
  }
  return (
    <>
      <Header currentPage="fire-suppression" siteData={siteSettings}/>

      <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          </div>
        </section>

        {/* توضیحات + گالری اسکرول‌شونده */}
        <section className="py-16 px-6 bg-white/70">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                {sectionTitle}
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {sectionDescription}
              </p>
            </div>

            {/* Horizontal Scroll Gallery */}
            {galleryImages.length > 0 && (
              <div className="relative">
                <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
                  {galleryImages.map((item, index) => {
                    const media = item.media
                    const isVideo = item.type === 'video'

                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 w-11/12 sm:w-96 lg:w-[500px] snap-center rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
                      >
                        <div className="relative aspect-video">
                          {isVideo ? (
                            <video
                              src={media?.url}
                              controls
                              className="w-full h-full object-cover"
                              poster={media?.thumbnailURL}
                            >
                              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                            </video>
                          ) : (
                            <Image
                              src={media?.url || '/placeholder.jpg'}
                              alt={item.alt || 'سیستم اطفای حریق آریافایر'}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 90vw, 500px"
                              priority={index < 3}
                            />
                          )}
                        </div>
                        {item.caption && (
                          <div className="absolute bottom-0 left-0 right-0 p-5 text-center bg-gradient-to-t from-black/70 to-transparent">
                            <p className="text-white font-medium drop-shadow-lg">{item.caption}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Scroll Hint */}
                <div className="text-center mt-8 text-gray-500">
                  <span className="inline-flex items-center gap-3 text-lg font-medium">
                    ← اسکرول کنید برای مشاهده بیشتر →
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
              {ctaDescription}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-red-600 font-bold text-xl lg:text-2xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              درخواست مشاوره رایگان
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer siteData={siteSettings}/>
    </>
  )
}
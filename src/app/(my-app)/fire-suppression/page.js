// app/fire-suppression/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Shield, Zap, Clock, AlertTriangle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const payload = await getPayloadHMR({ config })
  let pageData = {}
  try {
    pageData = await payload.findGlobal({ slug: 'fire-suppression-page' })
  } catch (e) {}

  return {
    title: pageData?.metaTitle || 'سیستم اطفای حریق خودکار آریافایر',
    description: pageData?.metaDescription || 'پاشش فوم ضدحریق ۳۶۰ درجه در کمتر از ۰.۳ ثانیه بدون نیاز به راننده',
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
    heroTitle = 'سیستم اطفای حریق خودکار آریافایر',
    heroSubtitle = 'خاموش کردن آتش در کمتر از ۰.۳ ثانیه با فوم مخصوص ضدحریق',
    sectionTitle = 'چگونه سیستم اطفای حریق خودکار کار می‌کند؟',
    sectionDescription = 'سیستم هوشمند اطفای حریق آریافایر با تشخیص خودکار آتش و پاشش ۳۶۰ درجه فوم مخصوص، آتش‌سوزی را قبل از گسترش کامل مهار می‌کند.',
    galleryImages = [],
    ctaTitle = 'محافظت از سرمایه‌های شما در برابر آتش‌سوزی',
    ctaDescription = 'همراه با سیستم اطفای حریق خودکار آریافایر',
  } = pageData
  
  let siteSettings = {}
  try {
    siteSettings = await payload.findGlobal({ slug: 'site-settings' })
  } catch (error) {
    console.error('Error loading site settings:', error)
  }

  // ویژگی‌های سیستم
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'واکنش فوق‌العاده سریع',
      description: 'شناسایی و اطفا در کمتر از ۰.۳ ثانیه'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'پوشش ۳۶۰ درجه',
      description: 'پاشش کامل در تمام نقاط موتور و کابین'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'فعالسازی خودکار',
      description: 'بدون نیاز به دخالت راننده یا اپراتور'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'تشخیص هوشمند حرارت',
      description: 'سنسورهای حساس به تغییرات دمایی ناگهانی'
    }
  ]

  return (
    <>
      <Header currentPage="fire-suppression" siteData={siteSettings}/>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-40 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* برچسب */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                سیستم اطفای حریق خودکار
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                {heroTitle}
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                {heroSubtitle}
              </p>

              {/* زمان واکنش */}
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-12">
                <Zap className="w-8 h-8 mr-3 animate-pulse" />
                <div className="text-left">
                  <div className="text-sm font-medium opacity-90">زمان واکنش</div>
                  <div className="text-3xl font-bold">۰.۳ ثانیه</div>
                </div>
              </div>

              {/* ویژگی‌های برتر */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 text-red-600 rounded-xl mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* توضیحات و گالری */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  {sectionTitle}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-l from-red-500 to-orange-500 rounded-full"></div>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                {sectionDescription}
              </p>

              {/* مراحل کار */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    ۱
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">تشخیص خودکار</h3>
                  <p className="text-gray-600">سنسورهای حرارتی پیشرفته افزایش دمای ناگهانی را شناسایی می‌کنند</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    ۲
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">فعال‌سازی فوری</h3>
                  <p className="text-gray-600">سیستم در کمتر از ۰.۳ ثانیه دستور پاشش را صادر می‌کند</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    ۳
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">پاشش کامل</h3>
                  <p className="text-gray-600">فوم مخصوص ضدحریق تمام نقاط خطر را پوشش می‌دهد</p>
                </div>
              </div>
            </div>

            {/* گالری تصاویر */}
            {galleryImages.length > 0 && (
              <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100">
                  {galleryImages.map((item, index) => {
                    const media = item.media
                    const isVideo = item.type === 'video'

                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 w-[90vw] sm:w-[500px] md:w-[600px] snap-center"
                      >
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
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
                              className="object-cover hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 90vw, 600px"
                              priority={index < 2}
                            />
                          )}
                          
                          {item.caption && (
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                              <p className="text-white text-lg font-medium drop-shadow-lg">{item.caption}</p>
                            </div>
                          )}
                          
                          {/* برچسب نوع */}
                          <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                            {isVideo ? 'ویدیو' : 'تصویر'}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* راهنمای اسکرول */}
                <div className="text-center mt-8">
                  <div className="inline-flex items-center gap-2 text-gray-500">
                    <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">برای مشاهده بیشتر اسکرول کنید</span>
                    <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* آمار و ارقام */}
        <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">۰.۳</div>
                <div className="text-gray-300">ثانیه زمان واکنش</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">۳۶۰°</div>
                <div className="text-gray-300">پوشش کامل</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">۵۰۰۰+</div>
                <div className="text-gray-300">وسیله نقلیه مجهز</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">۱۰۰٪</div>
                <div className="text-gray-300">رضایت مشتریان</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pattern */}
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Shield className="w-6 h-6" />
                <span className="font-medium">محافظت تضمینی</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {ctaTitle}
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
                {ctaDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-red-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  <span>درخواست مشاوره رایگان</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <span>مشاهده محصولات</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
              
              {/* تماس سریع */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="inline-flex items-center gap-6 text-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-mono">۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </div>
                  <div className="h-6 w-px bg-white/30"></div>
                  <div>پشتیبانی ۲۴/۷</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteData={siteSettings}/>
    </>
  )
}
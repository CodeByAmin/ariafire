// app/(my-app)/monitoring/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import { CheckCircle, Shield, Bell, Thermometer } from 'lucide-react'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const payload = await getPayloadHMR({ config })
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'monitoring-page' })
  } catch (e) {}
  return {
    title: data?.metaTitle || 'مانیتورینگ بوق سه‌مرحله‌ای آریافایر',
    description: data?.metaDescription || 'هشدار صوتی هوشمند قبل از آتش‌سوزی',
  }
}

export default async function MonitoringPage() {
  const payload = await getPayloadHMR({ config })
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'monitoring-page' })
  } catch (e) {}

  const {
    heroTitle = 'سیستم مانیتورینگ بوق سه‌مرحله‌ای',
    introImage,
    introTitle = 'هوشمند‌ترین سیستم هشدار پیش از آتش‌سوزی',
    introDescription = 'سیستم مانیتورینگ آریافایر با استفاده از سنسورهای حساس دمایی، وضعیت موتور و قطعات حیاتی خودرو را به صورت لحظه‌ای رصد می‌کند.',
    stage1Temp = '۸۰°C', stage1Title = 'هشدار اولیه', stage1Desc = 'بوق ملایم برای آگاهی راننده',
    stage2Temp = '۱۰۰°C', stage2Title = 'هشدار جدی', stage2Desc = 'بوق قوی‌تر + نوتیفیکیشن به مرکز',
    stage3Temp = '۱۲۰°C', stage3Title = 'هشدار بحرانی', stage3Desc = 'فعال‌سازی خودکار اطفای حریق',
    featuresImage,
    featuresTitle = 'قابلیت‌های منحصربه‌فرد سیستم',
    featuresList = [
      { title: 'مانیتورینگ لحظه‌ای', description: 'نظارت ۲۴ ساعته بر دمای موتور و سیستم‌های حیاتی' },
      { title: 'سنسورهای حساس', description: 'استفاده از سنسورهای با دقت ±۱ درجه سانتی‌گراد' },
      { title: 'ارتباط آنلاین', description: 'اتصال دائمی به مرکز کنترل از طریق شبکه‌های مخابراتی' },
    ],
    benefitsImage,
    benefitsTitle = 'مزایای استفاده از سیستم مانیتورینگ',
    benefitsList = [
      { title: 'پیشگیری از آتش‌سوزی', description: 'کاهش ۹۵٪ احتمال وقوع آتش‌سوزی در خودرو' },
      { title: 'کاهش خسارات', description: 'صرفه‌جویی میلیونی در هزینه‌های تعمیر و بیمه' },
      { title: 'آرامش خاطر', description: 'اطمینان از سلامت خودرو در هر زمان و مکان' },
    ],
    galleryImages = [],
  } = data

  let siteSettings = {}
  try {
    siteSettings = await payload.findGlobal({ slug: 'site-settings' })
  } catch (error) {
    console.error('Error loading site settings:', error)
  }

  return (
    <>
      <Header currentPage="monitoring" siteData={siteSettings}/>
      <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          <div className="max-w-6xl mx-auto relative">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-orange-600 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5" />
              <span className="font-medium">سیستم ایمنی هوشمند</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              {heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              هشدار صوتی هوشمند در سه مرحله قبل از وقوع آتش‌سوزی
            </p>
          </div>
        </section>

        {/* Intro Section - Image Left, Text Right */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Box */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  {introImage?.url ? (
                    <Image
                      src={introImage.url}
                      alt={introTitle}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  ) : (
                    <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center">
                      <Thermometer className="w-32 h-32 text-orange-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Text Box */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-orange-600 mb-4">
                  <Bell className="w-6 h-6" />
                  <span className="font-bold">معرفی سیستم</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {introTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {introDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="font-medium">پایش ۲۴ ساعته</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-medium">دقت بالا</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Stages Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                مراحل هشدار هوشمند
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                سیستم به صورت پلکانی با افزایش دما، هشدارهای صوتی و عملیاتی را فعال می‌کند
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Stage 1 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gradient-to-br from-white to-yellow-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-yellow-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-black text-yellow-500">{stage1Temp}</div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-yellow-600">۱</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-700 mb-4">{stage1Title}</h3>
                  <p className="text-gray-600 leading-relaxed">{stage1Desc}</p>
                  <div className="mt-6 pt-6 border-t border-yellow-100">
                    <div className="flex items-center gap-2 text-yellow-600">
                      <Bell className="w-5 h-5" />
                      <span className="text-sm font-medium">بوق ملایم • LED چشمک‌زن</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gradient-to-br from-white to-orange-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-orange-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-black text-orange-500">{stage2Temp}</div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">۲</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">{stage2Title}</h3>
                  <p className="text-gray-600 leading-relaxed">{stage2Desc}</p>
                  <div className="mt-6 pt-6 border-t border-orange-100">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Bell className="w-5 h-5" />
                      <span className="text-sm font-medium">بوق قوی • ارسال پیامک • اتصال به مرکز</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gradient-to-br from-white to-red-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-red-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-black text-red-500">{stage3Temp}</div>
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-red-600">۳</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">{stage3Title}</h3>
                  <p className="text-gray-600 leading-relaxed">{stage3Desc}</p>
                  <div className="mt-6 pt-6 border-t border-red-100">
                    <div className="flex items-center gap-2 text-red-600">
                      <Bell className="w-5 h-5" />
                      <span className="text-sm font-medium">بوق ممتد • فعال‌سازی خودکار • تماس اضطراری</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Text Left, Image Right */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Box */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-orange-600 mb-4">
                  <Shield className="w-6 h-6" />
                  <span className="font-bold">امکانات پیشرفته</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {featuresTitle}
                </h2>
                <div className="space-y-6">
                  {featuresList.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Box */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  {featuresImage?.url ? (
                    <Image
                      src={featuresImage.url}
                      alt={featuresTitle}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  ) : (
                    <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-32 h-32 text-purple-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Image Left, Text Right */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Box */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  {benefitsImage?.url ? (
                    <Image
                      src={benefitsImage.url}
                      alt={benefitsTitle}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  ) : (
                    <div className="w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-32 h-32 text-green-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Text Box */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-green-600 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold">مزایای کلیدی</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  {benefitsTitle}
                </h2>
                <div className="space-y-6">
                  {benefitsList.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {galleryImages.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  گالری تصاویر سیستم
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  تصاویر واقعی از نصب و عملکرد سیستم مانیتورینگ آریافایر
                </p>
              </div>
              <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500">
                {galleryImages.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-96 snap-center rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.media?.url || '/placeholder.jpg'}
                        alt={item.alt || 'مانیتورینگ آریافایر'}
                        width={800}
                        height={600}
                        className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {item.caption && (
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                        <p className="text-center text-gray-700 font-medium">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              برای محافظت از خودروی خود اقدام کنید
            </h2>
            <p className="text-xl mb-8 opacity-90">
              همین امروز سیستم مانیتورینگ هوشمند آریافایر را نصب کنید و از آرامش خاطر کامل برخوردار شوید
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105">
                درخواست نصب
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-bold text-lg transition-all">
                مشاوره رایگان
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer siteData={siteSettings}/>
    </>
  )
}
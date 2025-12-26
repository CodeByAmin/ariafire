// app/(my-app)/monitoring/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'

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
    stage1Temp = '۸۰°C', stage1Title = 'هشدار اولیه', stage1Desc = 'بوق ملایم برای آگاهی راننده',
    stage2Temp = '۱۰۰°C', stage2Title = 'هشدار جدی', stage2Desc = 'بوق قوی‌تر + نوتیفیکیشن به مرکز',
    stage3Temp = '۱۲۰°C', stage3Title = 'هشدار بحرانی', stage3Desc = 'فعال‌سازی خودکار اطفای حریق',
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
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">
              {heroTitle}
            </h1>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow">
                <div className="text-6xl font-black text-yellow-500 mb-4">{stage1Temp}</div>
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">{stage1Title}</h3>
                <p className="text-gray-600 leading-relaxed">{stage1Desc}</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow">
                <div className="text-6xl font-black text-orange-500 mb-4">{stage2Temp}</div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">{stage2Title}</h3>
                <p className="text-gray-600 leading-relaxed">{stage2Desc}</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow">
                <div className="text-6xl font-black text-red-500 mb-4">{stage3Temp}</div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">{stage3Title}</h3>
                <p className="text-gray-600 leading-relaxed">{stage3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* گالری اسکرول‌شونده */}
        {galleryImages.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-500">
                {galleryImages.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-96 snap-center rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={item.media?.url || '/placeholder.jpg'}
                      alt={item.alt || 'مانیتورینگ آریافایر'}
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                    {item.caption && <p className="p-4 text-center bg-gray-100">{item.caption}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer siteData={siteSettings}/>
    </>
  )
}
// app/(my-app)/product/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import { Shield, Zap, AlertTriangle, Activity, Truck, Flame } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const iconMap = {
  shield: <Shield className="w-10 h-10" />,
  zap: <Zap className="w-10 h-10" />,
  alert: <AlertTriangle className="w-10 h-10" />,
  activity: <Activity className="w-10 h-10" />,
  truck: <Truck className="w-10 h-10" />,
  flame: <Flame className="w-10 h-10" />,
}

export async function generateMetadata() {
  const payload = await getPayloadHMR({ config })
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'product-page' })
  } catch (e) {}
  return {
    title: data?.metaTitle || 'جزئیات محصول آریافایر',
    description: data?.metaDescription || 'سیستم ایمنی پیشرفته چرخ کامیون',
  }
}

export default async function ProductPage() {
  const payload = await getPayloadHMR({ config })
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'product-page' })
  } catch (e) {}

  const {
    heroTitle = 'سیستم ایمنی هوشمند آریافایر',
    heroSubtitle = 'محصولی کاملاً ایرانی با تکنولوژی پیشرفته جهانی...',
    keyFeatures = [],
    productGallery = [],
    specsTitle = 'مشخصات فنی و مزایای آریافایر',
    specsList = [],
    ctaTitle = 'بیش از ۵۰۰۰ کامیون در ایران مجهز به آریافایر هستند',
    ctaButtonText = 'درخواست مشاوره رایگان',
  } = data

  return (
    <>
      <Header currentPage="product" />

      <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero */}
        <section className="py-20 lg:py-32 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">
              {heroTitle}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          </div>
        </section>

        {/* Key Features */}
        {keyFeatures.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                  <div className="text-orange-500 mb-6 flex justify-center">
                    {iconMap[feature.icon] || <Shield className="w-10 h-10" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Product Gallery */}
        {productGallery.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory">
                {productGallery.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-96 lg:w-[600px] snap-center rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.media?.url || '/placeholder.jpg'}
                      alt={item.alt}
                      width={1200}
                      height={800}
                      className="object-cover"
                    />
                    {item.caption && <p className="p-4 text-center bg-gray-100">{item.caption}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Specs Table */}
        {specsList.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-12">{specsTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specsList.map((spec, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg flex justify-between">
                    <span className="font-semibold text-gray-800">{spec.label}</span>
                    <span className="text-orange-600 font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">{ctaTitle}</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-orange-600 font-bold text-2xl rounded-3xl shadow-2xl hover:scale-105 transition-all"
            >
              {ctaButtonText}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
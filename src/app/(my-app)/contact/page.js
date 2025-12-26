// app/contact/page.js
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, MessageCircle, Zap } from 'lucide-react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

// متادیتا بر اساس داده‌های Global
export async function generateMetadata() {
  const payload = await getPayloadHMR({ config })
  
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'contact-page' })
  } catch (error) {
    // اگر Global وجود نداشت یا خطایی بود
  }

  return {
    title: data?.title || 'تماس با ما | آریافایر',
    description: data?.heroDescription || 'با تیم متخصص آریافایر تماس بگیرید و مشاوره رایگان دریافت کنید.',
  }
}

export default async function ContactPage() {
  const payload = await getPayloadHMR({ config })
  
  let data = {}
  try {
    data = await payload.findGlobal({ slug: 'contact-page' })
  } catch (error) {
    console.error('Error fetching contact page global:', error)
  }

  // fallback برای جلوگیری از ارور در JSX
  const {
    title = 'تماس با ما | آریافایر',
    heroTitle = 'آماده‌ایم تا به شما کمک کنیم',
    heroDescription = 'تیم متخصص آریافایر همیشه در کنار شماست. مشاوره رایگان، نصب در محل و پشتیبانی مادام‌العمر.',
    badgeText = 'پشتیبانی ۲۴ ساعته • پاسخگویی فوری',
    phone = '0902-709-7989',
    whatsappLink = 'https://wa.me/989027097989',
    whatsappText = 'کلیک برای چت مستقیم',
    email = 'info@ariafire.ir',
    addressTitle = 'دفتر مرکزی تهران',
    address = 'تهران، خیابان انقلاب اسلامی، پلاک ۱۲۳',
    workingHours = 'شنبه تا پنجشنبه: ۸ صبح تا ۸ شب',
    mapEmbed = '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d681.4076138974785!2d51.387043132498555!3d35.66865073664664!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1766741982525!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    ctaStats = '۵۰۰۰ کامیون',
    ctaText = 'نوبت شماست! همین حالا تماس بگیرید و ایمنی ناوگان خود را تضمین کنید.',
    ctaPhone = '۰۹۰۲-۷۰۹-۷۹۸۹',
  } = data

  // استخراج شماره تلفن بدون فاصله و صفر اول برای لینک واتساپ
  const cleanPhone = phone.replace(/[^0-9]/g, '').replace(/^0/, '98')

  return (
    <>
      <Header currentPage="contact" />

      <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-red-50/30">
  {/* Background Blobs - بیشتر و قوی‌تر */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-0 left-20 w-64 h-64 bg-amber-400 rounded-full blur-3xl animate-pulse delay-500"></div>
    <div className="absolute bottom-40 right-40 w-80 h-80 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1500"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-300 to-red-400 rounded-full blur-3xl opacity-30"></div>
  </div>

  <div className="relative max-w-5xl mx-auto px-4 text-center">
    <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm mb-8 shadow-lg">
      <Zap className="w-5 h-5 ml-2 text-orange-500" />
      {badgeText}
    </div>

    <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
      {heroTitle}{' '}
      <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
        کمک کنیم
      </span>
    </h1>

    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      {heroDescription}
    </p>
  </div>
</section>

        {/* Contact Info Cards */}
       <section className="py-16 px-4 bg-gray-50/50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    {/* تلفن */}
    <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-400 border border-gray-100 hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Phone className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">تماس مستقیم</h3>
      <a 
        href={`tel:${cleanPhone}`} 
        className="block text-2xl font-black text-gray-900 mb-2 hover:text-orange-600 transition-colors"
      >
        {phone}
      </a>
      <p className="text-gray-600 text-sm">پشتیبانی ۲۴ ساعته • ۷ روز هفته</p>
    </div>

    {/* واتساپ – سبز نگه داشتم چون برند واتساپه و کاربر انتظار داره */}
    <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-400 border border-gray-100 hover:-translate-y-1 relative overflow-hidden">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">واتساپ</h3>
      <p className="text-lg text-gray-700 mb-3">پاسخ در کمتر از ۵ دقیقه</p>
      <a
        href={whatsappLink || `https://wa.me/${cleanPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-green-600 font-bold hover:text-green-700 hover:underline"
      >
        {whatsappText || 'شروع چت در واتساپ'}
        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.644h-.004c-1.803-.013-3.509-1.688-4.76-3.296 1.746 1.1 3.903.95 5.764.95zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
      <span className="absolute top-4 right-4 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
        سریع‌ترین راه
      </span>
    </div>

    {/* ایمیل */}
    <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-400 border border-gray-100 hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Mail className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">ایمیل</h3>
      <a 
        href={`mailto:${email}`} 
        className="block text-2xl font-black text-gray-900 mb-3 break-all hover:text-orange-600 transition-colors"
      >
        {email}
      </a>
      <p className="text-gray-600 text-sm">پاسخ در کمتر از ۲۴ ساعت</p>
    </div>
  </div>
</section>
        {/* فرم + نقشه */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* فرم تماس */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <MessageCircle className="w-8 h-8 ml-3 text-orange-500" />
                ارسال پیام
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">نام کامل</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all" placeholder="نام و نام خانوادگی" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">تلفن</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ایمیل</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">تعداد کامیون در ناوگان</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all">
                    <option>۱ تا ۱۰</option>
                    <option>۱۱ تا ۵۰</option>
                    <option>۵۱ تا ۱۰۰</option>
                    <option>بیش از ۱۰۰</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">پیام شما</label>
                  <textarea rows="5" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all resize-none" placeholder="سوالات یا نیازهای خود را بنویسید..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 px-8 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  ارسال پیام و دریافت مشاوره رایگان
                </button>
              </form>
            </div>

            {/* نقشه و آدرس */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold flex items-center">
                    <MapPin className="w-7 h-7 ml-3 text-red-600" />
                    {addressTitle}
                  </h3>
                </div>
                <div className="h-96" dangerouslySetInnerHTML={{ __html: mapEmbed }} />
                <div className="p-6 space-y-3">
                  <p className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 ml-2 text-orange-500" />
                    {address}
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 ml-2 text-orange-500" />
                    {workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA نهایی */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              بیش از <span className="text-orange-600">{ctaStats}</span> کامیون به آریافایر اعتماد کرده‌اند
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {ctaText}
            </p>
            <a 
              href={`tel:+98${cleanPhone}`} 
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-7 h-7 ml-4" />
              تماس فوری: <span className='mr-2' dir='ltr'>{ctaPhone} </span> 
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
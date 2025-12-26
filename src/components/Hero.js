'use client'
import { useEffect, useState } from 'react'
import { Play, Shield, Zap, Truck } from 'lucide-react'

export default function Hero({ data = {} }) {
  const [isVisible, setIsVisible] = useState(false)

  // داده‌های پیش‌فرض در صورت عدم دریافت از Payload
  const defaultData = {
    heroBadge: 'جدیدترین تکنولوژی ایمنی حمل‌ونقل',
    heroMainTitle: 'ایمنی کامل چرخ‌های',
    heroSubTitle: 'کامیون و تریلی',
    heroTagline: 'هشدار در ۰.۵ ثانیه • اطفای خودکار • مانیتورینگ ۲۴/۷',
    heroCtaPrimary: 'شروع سفارش',
    heroCtaSecondary: 'مشاهده ویژگی‌ها',
    stats: [
      { number: '5000+', title: 'کامیون محافظت شده', description: 'بیش از ۵۰۰۰ کامیون و تریلی با سیستم ایمنی پیشرفته ما محافظت می‌شوند' },
      { number: '1200+', title: 'آتش‌سوزی جلوگیری شده', description: 'بیش از ۱۲۰۰ مورد آتش‌سوزی بالقوه پیشگیری شده است' },
      { number: '0.5 ثانیه', title: 'هشدار فوق سریع', description: 'سیستم ما در کمتر از نیم‌ثانیه خطر را شناسایی و هشدار می‌دهد' },
    ],
  }

  const {
    heroBadge = defaultData.heroBadge,
    heroMainTitle = defaultData.heroMainTitle,
    heroSubTitle = defaultData.heroSubTitle,
    heroTagline = defaultData.heroTagline,
    heroCtaPrimary = defaultData.heroCtaPrimary,
    heroCtaSecondary = defaultData.heroCtaSecondary,
    stats = defaultData.stats,
  } = data

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const heroElement = document.getElementById('hero-section')
    if (heroElement) observer.observe(heroElement)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ marginTop: "60px" }}>
          <source src="/fire.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center px-5 py-2 bg-white/20 border border-white/30 backdrop-blur-sm rounded-full text-sm mb-6 animate-slide-up">
          <Zap className="w-4 h-4 ml-2 text-orange-300" />
          {heroBadge}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-tight mb-10 animate-slide-up">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
            {heroMainTitle}
          </span>
          <br />
          <span className="text-white mt-6 inline-block">{heroSubTitle}</span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl text-orange-200 font-semibold mb-14 animate-slide-up">
          {heroTagline}
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-slide-up">
          <a
            href="#contact"
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              {heroCtaPrimary}
            </div>
          </a>

          <a
            href="#features"
            className="px-10 py-4 rounded-2xl border border-white/40 backdrop-blur-sm text-lg hover:bg-white/10 transition"
          >
            <Shield className="w-5 h-5 ml-2 inline-block" />
            {heroCtaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mb-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl transition duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-orange-400 mb-4 flex justify-center">
                <Truck className="w-10 h-10" />
              </div>
              <div className="text-4xl font-extrabold">{stat.number}</div>
              <div className="text-orange-300 font-bold mt-1 mb-2 text-lg">{stat.title}</div>
              <p className="text-gray-200 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="animate-bounce w-6 h-12 border-2 border-white/40 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
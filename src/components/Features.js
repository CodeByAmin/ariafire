'use client'
import React from 'react' // این خط را اضافه کنید
import { Shield, Zap, AlertTriangle, Activity, Truck, Flame, Clock, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const defaultIcons = [
  Shield, Zap, AlertTriangle, Activity, Truck, Flame
]
export default function Features({ data = {} }) {
  const [isVisible, setIsVisible] = useState(false)

  const defaultData = {
    featuresTitle: 'چرا آریافایر بهترین انتخاب است؟',
    featuresBadge: 'تکنولوژی پیشرفته',
    featuresDescription: 'محصولی از تکنولوژی پیشرفته ایرانی و گارانتی ۵ ساله',
    featuresCtaStats: '۵۰۰۰ کامیون',
    featuresCtaText: 'به خانواده بزرگ آریافایر بپیوندید و خیالتان از بابت ایمنی چرخ‌های ناوگانتان راحت باشد',
    featuresList: [], // اگر از Payload چیزی نیومد، حداقل خالی باشه
  }

  const {
    featuresTitle = defaultData.featuresTitle,
    featuresBadge = defaultData.featuresBadge,
    featuresDescription = defaultData.featuresDescription,
    featuresCtaStats = defaultData.featuresCtaStats,
    featuresCtaText = defaultData.featuresCtaText,
    featuresList = defaultData.featuresList,
  } = data

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('features-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div id="features-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 backdrop-blur-sm rounded-full text-sm mb-6 shadow-lg">
            <Zap className="w-4 h-4 text-orange-500" />
            {featuresBadge}
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent">
              {featuresTitle}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {featuresDescription}
          </p>
        </div>

        {/* Dynamic Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index} // ← key اصلی برای کارت‌ها
              className={`
                group relative p-8 bg-white rounded-3xl border border-gray-100 
                shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon + Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                   <div className="text-white">
                  {React.createElement(defaultIcons[index] || Shield, { className: "w-12 h-12" })}
                </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">
                      <Clock className="w-3 h-3" />
                      {feature.time}
                    </div>
                    <div className="text-2xl font-black text-gray-900 mt-2">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  {feature.description}
                </p>

                {/* Details List - حالا key داره! */}
                <ul className="space-y-2">
                  {(feature.details || []).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-500 flex-shrink-0" />
                      {detail.item || detail}
                    </li>
                  ))}
                </ul>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-10 border border-orange-200 max-w-5xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              🚛 بیش از <span className="text-orange-600 text-3xl">{featuresCtaStats}</span> در سراسر ایران از آریافایر استفاده می‌کنند
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {featuresCtaText}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
            >
              <Shield className="w-6 h-6" />
              درخواست مشاوره رایگان
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
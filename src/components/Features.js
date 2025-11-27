'use client'
import { Shield, Zap, AlertTriangle, Activity, Truck, Flame, Clock, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'سیستم اطفای خودکار',
    description: 'تشخیص و خاموش کردن خودکار آتش در کمتر از ۰.۳ ثانیه با استفاده از فوم ضدحریق پیشرفته',
    stats: '۰.۳ ثانیه',
    time: 'واکنش فوری',
    details: ['فوم ضدحریق مخصوص', 'پاشش ۳۶۰ درجه', 'بدون نیاز به اپراتور']
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'هشدار فوق سریع',
    description: 'تشخیص افزایش دمای غیرعادی چرخ‌ها در ۰.۵ ثانیه با سنسورهای حرارتی پیشرفته',
    stats: '۰.۵ ثانیه',
    time: 'تشخیص آنی',
    details: ['سنسورهای حرارتی آلمانی', 'محدوده دمایی -۴۰ تا ۴۰۰ درجه', 'کالیبراسیون خودکار']
  },
  {
    icon: <AlertTriangle className="w-12 h-12" />,
    title: 'هشدار صوتی و تصویری',
    description: 'آلارم صوتی ۱۲۰ دسی‌بل به همراه نمایشگر LED رنگی در کابین راننده',
    stats: '۱۲۰ دسی‌بل',
    time: 'هشدار چندگانه',
    details: ['آلارم صوتی پرقدرت', 'نمایشگر LED رنگی', 'هشدار به مرکز کنترل']
  },
  {
    icon: <Activity className="w-12 h-12" />,
    title: 'مانیتورینگ ۲۴ ساعته',
    description: 'نظارت دائمی از راه دور با اپلیکیشن موبایل و پنل مدیریت آنلاین',
    stats: '۲۴/۷',
    time: 'نظارت دائمی',
    details: ['اپلیکیشن اختصاصی', 'پنل مدیریت وب', 'گزارش‌گیری لحظه‌ای']
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: 'نصب سریع و آسان',
    description: 'نصب در کمتر از ۵ دقیقه روی تمام انواع کامیون‌ها، تریلی‌ها و وسایل نقلیه سنگین',
    stats: '۵ دقیقه',
    time: 'نصب سریع',
    details: ['سازگار با تمام مدل‌ها', 'بدون نیاز به تغییرات اساسی', 'نصب در محل ناوگان']
  },
  {
    icon: <Flame className="w-12 h-12" />,
    title: 'مقاوم در برابر حرارت',
    description: 'تحمل دمای تا ۱۲۰۰ درجه سانتی‌گراد با استفاده از مواد کامپوزیتی پیشرفته',
    stats: '۱۲۰۰°C',
    time: 'مقاومت بالا',
    details: ['مواد کامپوزیتی', 'عایق‌بندی حرارتی', 'بدون خرابی در دمای بالا']
  }
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const featuresElement = document.getElementById('features-section')
    if (featuresElement) {
      observer.observe(featuresElement)
    }

    return () => {
      if (featuresElement) {
        observer.unobserve(featuresElement)
      }
    }
  }, [])

  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div id="features-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 bg-white border border-gray-200 backdrop-blur-sm rounded-full text-sm mb-6 shadow-lg">
            <Zap className="w-4 h-4 ml-2 text-orange-500" />
            تکنولوژی پیشرفته
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent">
              چرا آریافایر <span className="text-gray-900">بهترین انتخاب است؟</span>
            </span>
            <br />
           
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            محصولی از <strong className="text-orange-600">تکنولوژی پیشرفته ایرانی</strong> و{' '}
            {/* <strong className="text-blue-600">تولید داخلی</strong> با{' '} */}
            <strong className="text-green-600">گارانتی ۵ ساله</strong>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative p-8 bg-white rounded-3xl border border-gray-100 
                shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">
                      <Clock className="w-3 h-3 ml-1" />
                      {feature.time}
                    </div>
                    <div className="text-2xl font-black text-gray-900 mt-2">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  {feature.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚛 بیش از <span className="text-orange-600">۵۰۰۰ کامیون</span> در سراسر ایران از آریافایر استفاده می‌کنند
            </h3>
            <p className="text-gray-600 mb-6">
              به خانواده بزرگ آریافایر بپیوندید و خیالتان از بابت ایمنی چرخ‌های ناوگانتان راحت باشد
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Shield className="w-5 h-5 ml-2" />
              درخواست مشاوره رایگان
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
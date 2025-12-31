'use client'
import { useState, useEffect } from 'react'
import { Zap, Shield, Activity, Truck, Clock, Play, Pause, AlertTriangle } from 'lucide-react'

const steps = [
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'تشخیص هوشمند دما',
    description: 'سنسورهای حرارتی پیشرفته دمای چرخ‌ها را به صورت لحظه‌ای مانیتور می‌کنند و هرگونه افزایش غیرعادی دما (بالای ۱۲۰ درجه) را در ۰.۵ ثانیه تشخیص می‌دهند.',
    time: '۰.۵ ثانیه',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    details: ['سنسورهای حرارتی آلمانی', 'محدوده دمایی -۴۰ تا ۴۰۰ درجه', 'کالیبراسیون خودکار']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'هشدار چندگانه',
    description: 'سیستم بلافاصله آلارم صوتی ۱۲۰ دسی‌بل فعال کرده و هشدار تصویری به راننده و مرکز کنترل ارسال می‌کند.',
    time: 'همزمان',
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
    details: ['آلارم صوتی ۱۲۰ دسی‌بل', 'نمایشگر LED رنگی', 'ارسال نوتیفیکیشن']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'اطفای خودکار',
    description: 'فوم ضدحریق مخصوص به صورت ۳۶۰ درجه پاشیده شده و شعله‌ها در کمتر از ۰.۳ ثانیه کاملاً خاموش می‌شوند.',
    time: '۰.۳ ثانیه',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500/10',
    details: ['فوم ضدحریق مخصوص', 'پاشش ۳۶۰ درجه', 'بدون باقی‌مانده شیمیایی']
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'گزارش‌دهی لحظه‌ای',
    description: 'تمام مراحل به صورت زنده در اپلیکیشن موبایل و پنل مدیریت نمایش داده شده و گزارش کامل ثبت می‌شود.',
    time: '۲۴/۷',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    details: ['اپلیکیشن موبایل', 'پنل مدیریت وب', 'گزارش‌گیری آنلاین']
  }
]

export default function HowItWorks({ data = {} }) {
  const {
    howItWorksBadge = 'فرآیند هوشمند',
    howItWorksTitle = 'سیستم چگونه کار می‌کند؟',
    howItWorksDescription = 'از <strong className="text-orange-600">تشخیص هوشمند</strong> تا <strong className="text-red-600">اطفای خودکار</strong> - همه چیز در کمتر از ۱ ثانیه!',
    howItWorksSteps = defaultSteps,
    howItWorksCtaText = 'می‌خواهید این سیستم را روی ناوگان خود نصب کنید؟',
    howItWorksCtaButton = 'درخواست دموی رایگان',
  } = data
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // اتوپلی خودکار
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const progress = ((activeStep + 1) / steps.length) * 100

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 bg-white border border-gray-200 backdrop-blur-sm rounded-full text-sm mb-6 shadow-lg">
            <Play className="w-4 h-4 ml-2 text-orange-500" />
            فرآیند هوشمند
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent">
              سیستم چگونه     <span className="text-gray-900">کار می‌کند؟</span>
            </span>
      
        
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            از <strong className="text-orange-600">تشخیص هوشمند</strong> تا{' '}
            <strong className="text-red-600">اطفای خودکار</strong> - همه چیز در کمتر از ۱ ثانیه!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">مرحله {activeStep + 1} از {steps.length}</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'توقف' : 'پخش خودکار'}</span>
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps List */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveStep(index)
                  setIsPlaying(false)
                }}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-white shadow-2xl scale-105 border-r-4 border-orange-500'
                    : 'bg-white/50 shadow-lg hover:shadow-xl hover:bg-white'
                }`}
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  {/* Step Number */}
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg
                    bg-gradient-to-r ${step.color} shadow-lg
                    ${activeStep === index ? 'scale-110' : 'scale-100'}
                    transition-transform duration-300
                  `}>
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-xl font-bold ${
                        activeStep === index ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-2 space-x-reverse text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="font-mono text-gray-500">{step.time}</span>
                      </div>
                    </div>
                    
                    <p className={`mb-4 leading-relaxed ${
                      activeStep === index ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <span
                          key={detailIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`
                    flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                    ${step.bgColor} transition-colors duration-300
                  `}>
                    <div className={activeStep === index ? 'scale-110' : 'scale-100'}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Demo */}
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className={`
                  mx-auto w-24 h-24 mb-6 flex items-center justify-center rounded-2xl
                  bg-gradient-to-r ${steps[activeStep].color} shadow-lg
                `}>
                  <div className="text-white scale-125">
                    {steps[activeStep].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {steps[activeStep].title}
                </h3>
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
                  <Clock className="w-4 h-4 ml-2" />
                  زمان: {steps[activeStep].time}
                </div>
              </div>

              {/* Animated Process */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                
                {/* Step-specific Animation */}
                {activeStep === 0 && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full animate-ping mx-auto mb-4 opacity-20"></div>
                      <p className="text-gray-600 font-medium">تشخیص دما...</p>
                    </div>
                  </div>
                )}
                
                {activeStep === 1 && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-500 rounded-full animate-bounce mx-auto mb-4 opacity-80"></div>
                      <p className="text-gray-600 font-medium">ارسال هشدار...</p>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-red-500 rounded-full animate-pulse mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">اطفای خودکار...</p>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-lg animate-spin mx-auto mb-4 opacity-80"></div>
                      <p className="text-gray-600 font-medium">ثبت گزارش...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4 text-sm">
                  می‌خواهید این سیستم را روی ناوگان خود نصب کنید؟
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Truck className="w-5 h-5 ml-2" />
                  درخواست دموی رایگان
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
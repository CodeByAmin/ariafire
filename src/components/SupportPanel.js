'use client'
import { useState, useEffect, useRef } from 'react'
import { Phone, MessageCircle, Headphones, Clock, Zap, X, Mail, Shield, Truck } from 'lucide-react'

const WHATSAPP_NUMBER = '989210827367'

export default function SupportPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  // بستن پنل هنگام کلیک خارج از آن
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        panelRef.current && 
        !panelRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const quickActions = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'تماس مستقیم',
      description: '0921-082-7367',
      action: () => window.open('tel:+989210827367', '_blank'),
      bg: 'from-green-500/10 to-green-600/10',
      border: 'border-green-200',
      iconColor: 'text-green-600',
      hover: 'hover:shadow-green-100'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'واتساپ',
      description: 'پاسخ فوری',
      action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'),
      bg: 'from-emerald-500/10 to-emerald-600/10',
      border: 'border-emerald-200',
      iconColor: 'text-emerald-600',
      hover: 'hover:shadow-emerald-100'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'فرم تماس',
      description: 'ارسال پیام',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-200',
      iconColor: 'text-blue-600',
      hover: 'hover:shadow-blue-100'
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: 'مشاهده محصولات',
      description: 'کاتالوگ کامل',
      action: () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      bg: 'from-orange-500/10 to-orange-600/10',
      border: 'border-orange-200',
      iconColor: 'text-orange-600',
      hover: 'hover:shadow-orange-100'
    }
  ]

  return (
    <>
      {/* دکمه شناور بهبود یافته */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-500/30 transition-all duration-300 flex items-center justify-center group"
        style={{ 
          animation: 'pulse-glow 2.5s infinite',
          boxShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.4)'
        }}
        aria-label="پنل پشتیبانی"
      >
        <div className="relative">
          <Headphones className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </button>

      {/* پنل بهبود یافته */}
      {isOpen && (
        <div 
          ref={panelRef}
          className="fixed bottom-28 right-6 z-[9999] w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/40"
          style={{ 
            animation: 'slide-up 0.3s ease-out',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Header با طراحی جدید */}
          <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 p-5 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">پشتیبانی آریافایر</h3>
                  <p className="text-xs opacity-90 flex items-center mt-1">
                    <Clock className="w-3 h-3 ml-1" />
                    پاسخگویی 24 ساعته
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                aria-label="بستن پنل"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* محتوای اصلی */}
          <div className="p-5 space-y-5">
            {/* وضعیت پشتیبانی */}
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center ml-3">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">هم اکنون فعال</p>
                  <p className="text-xs text-green-600 font-medium">آماده پاسخگویی</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">آنلاین</span>
              </div>
            </div>

            {/* تماس سریع */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-700 flex items-center">
                <Zap className="w-4 h-4 ml-2 text-orange-500" />
                تماس سریع
              </h4>
              
              <a
                href={`tel:+989210827367`}
                className="group flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="mr-3 flex-1">
                  <p className="font-bold text-gray-900">تماس فوری</p>
                  <p className="text-sm text-gray-600 mt-1">0921-082-7367</p>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="mr-3 flex-1">
                  <p className="font-bold text-gray-900">واتساپ</p>
                  <p className="text-sm text-gray-600 mt-1">پاسخگویی فوری</p>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>

            {/* اقدامات سریع */}
            <div className="pt-2">
              <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center">
                <Zap className="w-4 h-4 ml-2 text-orange-500" />
                اقدامات سریع
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      action.action()
                      setIsOpen(false)
                    }}
                    className={`
                      group flex flex-col items-center p-3 rounded-xl text-center transition-all duration-300
                      bg-gradient-to-br ${action.bg} border ${action.border} 
                      hover:shadow-lg transform hover:-translate-y-1
                      ${action.hover}
                    `}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 ${action.iconColor}`}>
                      {action.icon}
                    </div>
                    <span className="font-medium text-xs text-gray-800 mb-1">{action.title}</span>
                    <span className="text-xs text-gray-600">{action.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
            <p className="text-center text-xs text-gray-600">
              آریافایر • سیستم ایمنی پیشرفته کامیون‌ها • ۱۴۰۴
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 25px 50px -5px rgba(249, 115, 22, 0.6);
          }
        }
      `}</style>
    </>
  )
}
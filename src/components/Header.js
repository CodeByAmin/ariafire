// components/Header.tsx
'use client'

import Link from 'next/link'
import { Menu, X, Phone, Shield, MessageCircle, Instagram, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

const socialIconMap = {
  whatsapp: <MessageCircle className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
}

export default function Header({ currentPage = 'home', siteData = {} }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCalling, setIsCalling] = useState(false)

  const {
    brandName = 'آریافایر',
    brandTagline = 'سیستم ایمنی چرخ',
    mainMenu = [],
    phone = '09027097989',
    contactNumber = '09027097989', // شماره تماس اصلی
    whatsappNumber = '09027097989', // شماره واتساپ
  } = siteData

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // تابع برای تماس تلفنی
  const handleCallClick = () => {
    setIsCalling(true)
    
    // شماره تماس را پاکسازی کنیم (حذف فاصله و خط تیره)
    const cleanNumber = contactNumber.replace(/\D/g, '')
    
    // ساخت لینک تماس تلفنی
    const telLink = `tel:${cleanNumber}`
    
    // باز کردن دیالر تلفن در موبایل
    window.location.href = telLink
    
    // ریست وضعیت بعد از 2 ثانیه
    setTimeout(() => {
      setIsCalling(false)
    }, 2000)
  }

  // تابع برای باز کردن واتساپ
  const handleWhatsAppClick = () => {
    const cleanNumber = whatsappNumber.replace(/\D/g, '')
    const message = encodeURIComponent('سلام، از وبسایت آریافایر درخواست مشاوره دارم.')
    const whatsappLink = `https://wa.me/${cleanNumber}?text=${message}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100 py-2' 
          : 'bg-white/80 backdrop-blur-xl py-4'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {brandName}
              </h1>
              <p className="text-xs text-gray-500 -mt-1">{brandTagline}</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {mainMenu.map((item) => (
              <Link
                key={item.pageId}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 ${
                  currentPage === item.pageId 
                    ? 'text-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.text}
                {currentPage === item.pageId && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* دکمه واتساپ */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              title="ارسال پیام در واتساپ"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">واتساپ</span>
            </button>

            {/* دکمه تماس تلفنی */}
            <button
              onClick={handleCallClick}
              disabled={isCalling}
              className={`flex items-center gap-2 px-6 py-3 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isCalling
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:-translate-y-1'
              }`}
              title="تماس تلفنی"
            >
              {isCalling ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm">در حال اتصال...</span>
                </>
              ) : (
                <>
                  <Phone className="w-5 h-5" />
                  <span>تماس</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/50 border border-gray-200"
            aria-label="منو"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100 mt-4 pt-4">
            {/* Menu Items */}
            <nav className="flex flex-col space-y-2 mb-4">
              {mainMenu.map((item) => (
                <Link
                  key={item.pageId}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-5 rounded-xl text-right font-medium transition-colors ${
                    currentPage === item.pageId
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Buttons */}
            <div className="flex flex-col gap-3 px-4">
              {/* شماره تماس */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="text-right">
                  <p className="text-sm text-gray-500">شماره تماس:</p>
                  <p className="font-bold text-gray-900 text-lg">{contactNumber}</p>
                </div>
                <Phone className="w-5 h-5 text-gray-400" />
              </div>

              {/* دکمه‌های تماس */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    handleWhatsAppClick()
                    setIsOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>واتساپ</span>
                </button>

                <button
                  onClick={() => {
                    handleCallClick()
                    setIsOpen(false)
                  }}
                  disabled={isCalling}
                  className={`flex items-center justify-center gap-2 py-4 font-bold rounded-2xl shadow-lg ${
                    isCalling
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  }`}
                >
                  {isCalling ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>در حال اتصال</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      <span>تماس تلفنی</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
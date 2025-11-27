'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Shield } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#features', text: 'ویژگی‌ها' },
    { href: '#how-it-works', text: 'نحوه کار' },
    { href: '#benefits', text: 'مزایا' },
    { href: '#contact', text: 'تماس' }
  ]

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100 py-0.5' 
        : 'bg-white/80 backdrop-blur-xl py-1'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* لوگو */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-primary rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                آریافایر
              </h1>
              <p className="text-xs md:text-sm text-gray-500 leading-tight">سیستم ایمنی چرخ</p>
            </div>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-gray-700 font-medium py-2 px-3 rounded-xl transition-all duration-300 hover:text-orange-600 text-sm"
              >
                <span className="relative z-10">{item.text}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* دکمه تماس */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-4 md:px-6 py-2 md:py-3 gradient-primary text-white font-semibold rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
          >
            <span>تماس فوری</span>
            <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          </a>

          {/* منوی موبایل */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl border border-gray-200 bg-white/50"
            aria-label="منوی اصلی"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* منوی موبایل */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-3">
            <nav className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 rounded-xl text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 text-right"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 gradient-primary text-white font-semibold rounded-xl text-sm"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4 ml-2" />
                تماس فوری
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
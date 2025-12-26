// components/Header.tsx (یا .js — اما اگر از any استفاده کردی .tsx بهتره)
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

  const {
    brandName = 'آریافایر',
    brandTagline = 'سیستم ایمنی چرخ',
    mainMenu = [],
    phone = '0902-709-7989',
  } = siteData

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            تماس فوری
            <Phone className="w-5 h-5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/50 border border-gray-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden pb-6 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col space-y-2">
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
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-lg"
              >
                تماس فوری
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
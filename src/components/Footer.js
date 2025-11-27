'use client'
import { MessageCircle, Instagram, Linkedin, Phone, Mail, MapPin, Shield, Zap, Truck, Flame } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'ویژگی‌ها', href: '#features', icon: <Zap className="w-4 h-4" /> },
    { name: 'نحوه کار', href: '#how-it-works', icon: <Shield className="w-4 h-4" /> },
    { name: 'مزایا', href: '#benefits', icon: <Truck className="w-4 h-4" /> },
    { name: 'تماس', href: '#contact', icon: <MessageCircle className="w-4 h-4" /> },
  ]

  const socialLinks = [
    { 
      name: 'واتساپ', 
      href: 'https://wa.me/989210827367', 
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'hover:bg-green-500'
    },
    { 
      name: 'اینستاگرام', 
      href: 'https://instagram.com/ariafire', 
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:bg-pink-500'
    },
    { 
      name: 'لینکدین', 
      href: 'https://linkedin.com/company/ariafire', 
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-600'
    },
  ]

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: '۰۹۲۱-۰۸۲-۷۳۶۷' },
    { icon: <Mail className="w-4 h-4" />, text: 'info@ariafire.ir' },
    { icon: <MapPin className="w-4 h-4" />, text: 'تهران، خیابان انقلاب، پلاک ۱۲۳' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-black-900 to-orange-900 text-white relative overflow-hidden border-t border-white/10">
      {/* Background Decoration - هماهنگ با هیرو */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section - هماهنگ با هدر */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  آریافایر
                </h2>
                <p className="text-orange-300 text-sm font-medium">سیستم ایمنی پیشرفته</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-base max-w-2xl">
              سیستم هوشمند ایمنی چرخ کامیون و تریلی. جلوگیری از آتش‌سوزی با تکنولوژی پیشرفته 
              تشخیص و اطفای خودکار در کمتر از ۰.۵ ثانیه.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 space-x-reverse pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 
                    transition-all duration-300 transform hover:-translate-y-1 
                    hover:shadow-lg ${social.color} group
                  `}
                  aria-label={social.name}
                >
                  <div className="text-white group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - هماهنگ با منوی هدر */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center text-orange-400">
              <Zap className="w-5 h-5 ml-2" />
              لینک‌های سریع
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center space-x-2 space-x-reverse text-gray-300 hover:text-white 
                             hover:translate-x-2 transition-all duration-300 group w-full text-right text-sm font-medium"
                  >
                    <span className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center text-orange-400">
              <MessageCircle className="w-5 h-5 ml-2" />
              تماس با ما
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3 space-x-reverse text-gray-300 text-sm">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                    {contact.icon}
                  </div>
                  <span className="font-medium">{contact.text}</span>
                </li>
              ))}
            </ul>

            {/* Emergency Contact - هماهنگ با دکمه‌های هیرو */}
            <div className="mt-4 p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 backdrop-blur-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-orange-300">پشتیبانی 24/7</span>
              </div>
              <a 
                href="tel:+989210827367" 
                className="text-white font-bold text-base mt-1 block hover:text-orange-300 transition-colors duration-300"
              >
                ۰۹۲۱-۰۸۲-۷۳۶۷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="text-gray-400 text-xs md:text-sm">
              © {currentYear} آریافایر. تمامی حقوق محفوظ است.
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse text-xs md:text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">
                حریم خصوصی
              </button>
              <button className="hover:text-white transition-colors duration-300">
                شرایط استفاده
              </button>
              <span className="flex items-center space-x-2 space-x-reverse">
                <span>طراحی شده توسط</span>
                <span className="text-orange-400 font-bold">aminbit</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'
import { 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Zap, 
  Truck 
} from 'lucide-react'

const socialIconMap = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  linkedin: Linkedin,
}

// آرایه از کامپوننت‌های آیکون (نه JSX مستقیم) — این روش هیچ خطای jsx-key نمی‌ده
const quickLinkIconComponents = [
  { icon: Zap, name: 'آیتم ۱' },
  { icon: Shield, name: 'آیتم ۲' },
  { icon: Truck, name: 'آیتم ۳' },
  { icon: MessageCircle, name: 'آیتم ۴' },
]

export default function Footer({ siteData = {} }) {
  const currentYear = new Date().getFullYear()

  const {
    brandName = 'آریافایر',
    brandTagline = 'سیستم ایمنی پیشرفته',
    quickLinks = [],
    socialLinks = [],
    phone = '0902-709-7989',
    email = 'info@ariafire.ir',
    address = 'تهران، خیابان انقلاب، پلاک ۱۲۳',
    copyrightText = 'آریافایر. تمامی حقوق محفوظ است.',
    designerText = 'طراحی شده توسط تیم نرم افزار بیتکو',
  } = siteData

  const scrollToSection = (href) => {
    if (typeof window !== 'undefined' && href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-black to-orange-900 text-white relative overflow-hidden border-t border-white/10">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  {brandName}
                </h2>
                <p className="text-orange-300 text-sm font-medium">{brandTagline}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl">
              سیستم هوشمند ایمنی چرخ کامیون و تریلی. جلوگیری از آتش‌سوزی با تکنولوژی پیشرفته تشخیص و اطفای خودکار در کمتر از ۰.۵ ثانیه.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 space-x-reverse pt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = socialIconMap[social.icon] || MessageCircle
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 
                      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                      ${social.color || ''}
                    `}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center text-orange-400">
              <Zap className="w-5 h-5 ml-2" />
              لینک‌های سریع
            </h3>
            <ul className="space-y-3">
          {quickLinks.map((link, index) => {
            const IconComponent = quickLinkIconComponents[index]?.icon || Zap
            return (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center space-x-2 space-x-reverse text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group w-full text-right text-sm font-medium"
                >
                  <span className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span>{link.name}</span>
                </button>
              </li>
            )
          })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center text-orange-400">
              <MessageCircle className="w-5 h-5 ml-2" />
              تماس با ما
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse text-gray-300 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="font-medium hover:text-orange-300 transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse text-gray-300 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${email}`} className="font-medium hover:text-orange-300 transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse text-gray-300 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">{address}</span>
              </li>
            </ul>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 backdrop-blur-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-orange-300">پشتیبانی ۲۴ ساعته</span>
              </div>
              <a 
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="text-white font-bold text-base mt-2 block hover:text-orange-300 transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-gray-400 text-sm">
            <div>
              © {currentYear} {copyrightText}
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse">
              <button className="hover:text-white transition-colors">حریم خصوصی</button>
              <button className="hover:text-white transition-colors">شرایط استفاده</button>
              <span>{designerText}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'
import { useState } from 'react'
import { Send, Phone, Mail, User, MessageSquare, MapPin, Truck, Shield, Zap, Clock, CheckCircle, Play } from 'lucide-react'

const WHATSAPP_NUMBER = '989210827367'

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    trucks: '',
    message: 'سلام، علاقه‌مند به سیستم ایمنی چرخ کامیون هستم'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const createWhatsAppMessage = () => {
    const { name, phone, email, company, trucks, message } = formData
    return `*درخواست سیستم آریافایر* 🚛🔥

👤 *نام:* ${name || 'مشخص نشده'}
📱 *تلفن:* ${phone || 'مشخص نشده'}
✉️ *ایمیل:* ${email || 'مشخص نشده'}
🏢 *شرکت:* ${company || 'مشخص نشده'}
🚛 *تعداد کامیون:* ${trucks || 'مشخص نشده'}

💬 *پیام:*
${message}

---
*لطفاً فوری تماس بگیرید*
_ارسال شده از وبسایت آریافایر_`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(createWhatsAppMessage())}`
      window.open(whatsappUrl, '_blank')
      
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          trucks: '',
          message: 'سلام، علاقه‌مند به سیستم ایمنی چرخ کامیون هستم'
        })
        setIsSent(true)
        setTimeout(() => setIsSent(false), 5000)
      }, 1500)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: 'پاسخ در ۵ دقیقه', desc: 'تیم فروش فوری پاسخ می‌دهد' },
    { icon: <Shield className="w-6 h-6" />, title: 'مشاوره رایگان', desc: 'کارشناسان متخصص' },
    { icon: <Clock className="w-6 h-6" />, title: 'نصب سریع', desc: 'در محل ناوگان شما' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'گارانتی مادام العمر', desc: 'پشتیبانی ۲۴/۷' }
  ]

  return (
    <section id="contact" className="relative py-20 bg-black  overflow-hidden">
      {/* Video Background - هماهنگ با هیرو */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/firetruck.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - هماهنگ با هیرو */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 bg-white/20 border border-white/30 backdrop-blur-sm rounded-full text-sm mb-6">
            <MessageSquare className="w-4 h-4 ml-2 text-orange-300" />
            ارسال فوری به واتساپ
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              در کمتر از ۳۰ ثانیه
            </span>
            <br />
            <span className="text-white">سیستم ایمنی سفارش دهید</span>
          </h2>
          
          <p className="text-xl text-orange-200 font-semibold max-w-3xl mx-auto leading-relaxed">
            اطلاعات شما <strong className="text-orange-300">مستقیماً به واتساپ تیم فروش</strong> ارسال شده و 
            <strong className="text-green-300"> در ۵ دقیقه پاسخ می‌گیرید</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* فرم اصلی */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-30"></div>
            <form onSubmit={handleSubmit} className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* نام */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <User className="w-4 h-4 ml-2 text-orange-400" />
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-lg"
                    placeholder="نام کامل شما"
                  />
                </div>

                {/* تلفن */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <Phone className="w-4 h-4 ml-2 text-green-400" />
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 text-lg"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  />
                </div>

                {/* ایمیل */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <Mail className="w-4 h-4 ml-2 text-blue-400" />
                    ایمیل (اختیاری)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                    placeholder="example@email.com"
                  />
                </div>

                {/* تعداد کامیون‌ها */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <Truck className="w-4 h-4 ml-2 text-orange-400" />
                    تعداد کامیون‌ها
                  </label>
                  <select
                    name="trucks"
                    value={formData.trucks}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-lg"
                  >
                    <option value="" className="bg-slate-800 text-white">انتخاب کنید</option>
                    <option value="1-5" className="bg-slate-800 text-white">۱ تا ۵ دستگاه</option>
                    <option value="6-20" className="bg-slate-800 text-white">۶ تا ۲۰ دستگاه</option>
                    <option value="21-50" className="bg-slate-800 text-white">۲۱ تا ۵۰ دستگاه</option>
                    <option value="50+" className="bg-slate-800 text-white">بیش از ۵۰ دستگاه</option>
                  </select>
                </div>

                {/* شرکت */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 ml-2 text-purple-400" />
                    شرکت / ناوگان حمل و نقل
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                    placeholder="نام شرکت یا ناوگان حمل و نقل"
                  />
                </div>

                {/* پیام */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <MessageSquare className="w-4 h-4 ml-2 text-indigo-400" />
                    پیام (اختیاری)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-lg resize-none"
                    placeholder="نیازمندی‌های خاص خود را بنویسید..."
                  />
                </div>
              </div>

              {/* دکمه ارسال - هماهنگ با هیرو */}
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full mt-8 py-5 px-8 rounded-2xl font-bold text-lg flex items-center justify-center
                  bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl hover:shadow-2xl
                  hover:-translate-y-1 transform transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  relative overflow-hidden group
                  ${isSent ? 'from-green-500 to-emerald-600' : ''}
                `}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin ml-3"></div>
                    در حال ارسال...
                  </div>
                ) : isSent ? (
                  <div className="flex items-center animate-pulse">
                    <CheckCircle className="w-6 h-6 ml-3" />
                    ارسال شد! منتظر تماس باشید
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 ml-3 group-hover:animate-bounce" />
                    ارسال فوری به واتساپ
                  </div>
                )}
              </button>

              {isSent && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                  <p className="text-green-300 font-medium animate-pulse">
                    ✅ پیام به واتساپ ارسال شد! تیم ما در ۵ دقیقه آینده با شما تماس می‌گیرد
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* مزایا و اطلاعات */}
          <div className="space-y-6">
            {/* کارت اصلی */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl border border-orange-500/30 p-8">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 mx-auto">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                چرا از طریق واتساپ؟
              </h3>
              <p className="text-orange-200 text-center text-lg leading-relaxed">
                <strong className="text-orange-300">مستقیم با تیم فروش</strong> در ارتباط باشید و 
                <strong className="text-green-300"> سریع‌ترین پاسخ</strong> را دریافت کنید
              </p>
            </div>

            {/* لیست مزایا */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-orange-400">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{benefit.title}</h4>
                      <p className="text-orange-200 text-xs mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* اطلاعات تماس اضطراری */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl border border-green-500/30 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white flex items-center">
                    <Phone className="w-4 h-4 ml-2 text-green-400" />
                    تماس اضطراری
                  </h4>
                  <p className="text-green-200 text-sm mt-1">پشتیبانی ۲۴ ساعته</p>
                </div>
                <a 
                  href={`tel:+98${WHATSAPP_NUMBER}`}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                >
                  ۰۹۲۱-۰۸۲-۷۳۶۷
                </a>
              </div>
            </div>

            {/* دکمه جایگزین - هماهنگ با هیرو */}
            <a 
              href="#features"
              className="block w-full py-4 px-6 rounded-2xl border border-white/40 backdrop-blur-sm text-white text-center hover:bg-white/10 transition-all duration-300"
            >
              <Shield className="w-5 h-5 ml-2 inline-block" />
              ابتدا ویژگی‌ها را مشاهده کنید
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
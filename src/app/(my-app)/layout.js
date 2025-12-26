import './globals.css'
import { Vazirmatn } from 'next/font/google'  // جایگزین Inter با Vazirmatn برای فارسی

const vazirmatn = Vazirmatn({ subsets: ['arabic'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'آریافایر | سیستم ایمنی چرخ کامیون و تریلی با اطفای حریق و مانیتورینگ بوق',
  description: 'سیستم هوشمند آریافایر: اطفای حریق خودکار در 0.3 ثانیه، مانیتورینگ بوق در سه دما (80°C، 100°C، 120°C)، هشدار سریع و نظارت 24/7 برای کامیون و تریلی.',
  keywords: 'آریافایر, سیستم ایمنی چرخ کامیون, اطفای حریق تریلی, مانیتورینگ دما بوق, جلوگیری آتش سوزی چرخ, تکنولوژی ایرانی ایمنی ناوگان',
  openGraph: {
    title: 'آریافایر: ایمنی کامل چرخ کامیون با اطفای حریق و بوق هشدار',
    description: 'جلوگیری از آتش‌سوزی با سیستم مانیتورینگ بوق در سه سطح دما و اطفای خودکار.',
    images: '/og-image.jpg',  // اضافه کن به public
    locale: 'fa_IR',
    type: 'website',
    url: 'https://ariafire.ir',  // دامنه واقعی‌ت رو بگذار
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آریافایر - سیستم ایمنی پیشرفته',
    description: 'مانیتورینگ بوق در 80، 100 و 120 درجه + اطفای حریق.',
  },
  robots: 'index, follow',  // برای SEO
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        {children}
        {/* Structured Data برای محصول */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "آریافایر - سیستم ایمنی چرخ کامیون",
              "description": "سیستم اطفای حریق خودکار و مانیتورینگ بوق در سه دمای مختلف (80°C کم، 100°C متوسط، 120°C شدید) برای جلوگیری از آتش‌سوزی.",
              "brand": {"@type": "Brand", "name": "آریافایر"},
              "offers": {"@type": "Offer", "priceCurrency": "IRR", "price": "مشاوره رایگان"},
              "review": [{"@type": "Review", "reviewRating": {"@type": "Rating", "ratingValue": "5"}}],
            })
          }}
        />
      </body>
    </html>
  )
}
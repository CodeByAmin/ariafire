import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'آریافایر | سیستم ایمنی چرخ و اطفای حریق کامیون و تریلی',
  description: 'هشدار سریع در 0.5 ثانیه + اطفای خودکار + مانیتورینگ 24/7. بهترین سیستم ایمنی برای ناوگان حمل و نقل.',
  keywords: 'کامیون, تریلی, اطفای حریق, ایمنی چرخ, مانیتورینگ هوشمند, آریافایر',
  openGraph: {
    title: 'آریافایر | سیستم ایمنی چرخ کامیون',
    description: 'جلوگیری از آتش‌سوزی چرخ در 0.3 ثانیه',
    images: '/og-image.jpg',
    locale: 'fa_IR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
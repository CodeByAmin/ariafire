import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'  // جدید ساختم
import WhatsAppForm from '@/components/WhatsAppForm'
import SupportPanel from '@/components/SupportPanel'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <WhatsAppForm />
      <SupportPanel />
      <Footer />
    </main>
  )
}
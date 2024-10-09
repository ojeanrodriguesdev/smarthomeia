import Footer from '@/components/layout/Footer'
import Faq from '@/components/pages/Faq'
import Feature from '@/components/pages/Feature'
import FeatureTwo from '@/components/pages/FeatureTwo'
import HeroSection from '@/components/pages/HeroSection'
import Pricing from '@/components/pages/Pricing'
import Testimonials from '@/components/pages/Testimonials'

export default function Home() {
  return (
    <main className='bg-black'>
      <HeroSection />
      <Feature />
      <FeatureTwo />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  )
}
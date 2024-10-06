import Feature from '@/components/pages/Feature'
import FeatureTwo from '@/components/pages/FeatureTwo'
import HeroSection from '@/components/pages/HeroSection'
import Testimonials from '@/components/pages/Testimonials'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Feature />
      <FeatureTwo />
      <Testimonials />
    </main>
  )
}
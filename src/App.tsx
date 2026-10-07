import { useState } from 'react'
import { Benefits } from './components/Benefits'
import { ContactCta } from './components/ContactCta'
import { ContactDialog } from './components/ContactDialog'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { LandscapeImage } from './components/LandscapeImage'
import { LogoCloud } from './components/LogoCloud'
import { MobileNav } from './components/MobileNav'
import { Navigation, NavPill } from './components/Navigation'
import { Specifications } from './components/Specifications'
import { Testimonial } from './components/Testimonial'
import { sectionIds } from './content'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  return (
    <div id={sectionIds.top} className="flex min-h-screen flex-col bg-white pb-5 md:px-10">
      <MobileNav onContact={openContact} />
      <Navigation onContact={openContact} />
      <NavPill />

      <Hero />
      <main className="flex flex-col">
        <LogoCloud />
        <Benefits />
        <Features />
        <Specifications />
        <Testimonial />
        <HowItWorks />
        <LandscapeImage />
        <ContactCta onContact={openContact} />
      </main>
      <Footer />

      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

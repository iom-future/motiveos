import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { DeveloperExperience } from './components/DeveloperExperience'
import { IntelligenceArchitecture } from './components/IntelligenceArchitecture'
import { WorldModel } from './components/WorldModel'
import { Applications } from './components/Applications'
import { Simulation } from './components/Simulation'
import { Audience } from './components/Audience'
import { Integrations } from './components/Integrations'
import { Safety } from './components/Safety'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { EarlyAccess } from './components/EarlyAccess'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export function App() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-stagger', {
          y: 22,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
        })

        gsap.utils.toArray('.reveal-up').forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          })
        })
      })
      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080B10] text-[#F4F7FA]">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <DeveloperExperience />
        <IntelligenceArchitecture />
        <WorldModel />
        <Applications />
        <Simulation />
        <Audience />
        <Integrations />
        <Safety />
        <Team />
        <Testimonials />
        <EarlyAccess />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

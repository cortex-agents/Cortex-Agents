import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/portfolio'
import Testimonials from '@/components/Testimonials'
import ServiceCTA from '@/components/services/ServiceCTA'

export default function Home() {
  const ctaData = {
    heading: "READY TO SCALE?",
    subheading: "Stop losing revenue to slow, generic software. Let's engineer a solution that dictates your market.",
    primaryLink: "/contact",
    primaryCTA: "Get a Quote"
  };

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <ServiceCTA ctaData={ctaData} />
    </main>
  )
}

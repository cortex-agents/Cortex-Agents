'use client';

import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/ourTeam'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  )
}

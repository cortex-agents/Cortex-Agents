'use client';

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

const About = dynamic(() => import('@/components/About'), { ssr: false })
const Services = dynamic(() => import('@/components/Services'), { ssr: false })
const Team = dynamic(() => import('@/components/ourTeam'), { ssr: false })
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/Testimonial'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <Suspense fallback={null}>
        <Team />
      </Suspense>
      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </main>
  )
}

import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

const About = dynamic(() => import('@/components/About'), { ssr: true })
const Services = dynamic(() => import('@/components/Services'), { ssr: true })
const Team = dynamic(() => import('@/components/ourTeam'), { ssr: true })
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/Testimonial'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Team />
      <Portfolio/>
      <Testimonials />
      <Contact/>
   </main>
  )
}

export default Home

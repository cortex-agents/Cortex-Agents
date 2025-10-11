import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Team from '@/components/ourTeam'
import Portfolio from '@/components/portfolio'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div>

      <Hero/>
      <About/>
      <Team />
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

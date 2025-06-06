import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/portfolio'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonial'
import WhatsAppButton from '@/components/WhatsAppButton'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default Home

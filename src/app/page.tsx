import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Team from '@/components/ourTeam'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Team />
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
   </div>
  )
}

export default Home

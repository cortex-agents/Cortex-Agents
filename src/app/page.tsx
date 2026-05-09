import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

// Loading skeleton for below-fold sections
function SectionSkeleton() {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-[#02040a]">
      <div className="w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

// Lazy load below-fold components - they only load when scrolled into view
const About = dynamic(() => import('@/components/About'), {
  loading: () => <SectionSkeleton />,
})
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <SectionSkeleton />,
})
const Team = dynamic(() => import('@/components/ourTeam'), {
  loading: () => <SectionSkeleton />,
})
const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <SectionSkeleton />,
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <SectionSkeleton />,
})

const Home = () => {
  return (
    <div>
      <Hero/>
      <Suspense fallback={<SectionSkeleton />}>
        <About/>
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services/>
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Portfolio/>
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact/>
      </Suspense>
   </div>
  )
}

export default Home

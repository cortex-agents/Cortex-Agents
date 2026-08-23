import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/services-data';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from '@/components/ui/Animations';
import AuditForm from '@/components/AuditForm';

export const metadata = {
  title: 'Services',
  description: 'Explore our high-end services: Autonomous AI Agents, Intelligent Chatbots, Next.js Web Development, and scalable Cloud Infrastructure.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Cortex Agents',
    description: 'Explore our high-end services: Autonomous AI Agents, Intelligent Chatbots, Next.js Web Development, and scalable Cloud Infrastructure.',
    url: '/services',
  }
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Section spacing="loose" className="pt-32 pb-20">
        <div className="mb-20">
          <FadeInUp className="mb-8">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              Capabilities
            </span>
          </FadeInUp>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            OUR SERVICES
          </h1>
          <FadeInUp delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              We build high-performance websites, intelligent chatbots, and autonomous digital systems that scale businesses effortlessly.
            </p>
          </FadeInUp>
          <AccentBar className="w-16 h-1 bg-accent mt-10" />
        </div>

        <StaggerGroup className="flex flex-col border-t border-border">
          {servicesData.map((service, index) => (
            <StaggerItem key={service.slug}>
              <div 
                className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-border py-12 hover:bg-muted/50 transition-colors duration-150 ease-fast"
              >
                {/* Number */}
                <div className="hidden md:block w-12 text-sm font-mono text-muted-foreground">
                  0{index + 1}
                </div>
                
                {/* Title */}
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors duration-150 ease-fast">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <p className="text-muted-foreground text-lg">
                    {service.shortDescription}
                  </p>
                </div>
                
                {/* Action */}
                <div className="md:w-auto flex justify-start md:justify-end">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-lg font-bold uppercase tracking-widest text-foreground flex items-center group-hover:text-accent transition-colors duration-150 ease-fast"
                  >
                    Explore <span className="ml-2 inline-block transition-transform duration-150 ease-fast group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Free Tech Audit Section */}
      <Section spacing="standard" className="pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Copy */}
          <div>
            <FadeInUp className="mb-8">
              <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
                Free Consultation
              </span>
            </FadeInUp>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              GET YOUR FREE<br />TECH AUDIT.
            </h2>
            
            <FadeInUp delay={0.1}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                We evaluate your current technical infrastructure and identify exact opportunities where Custom AI or Next.js architecture can reduce costs and automate your business workflows.
              </p>
              
              <ul className="space-y-4 mb-10 font-mono text-sm text-muted-foreground uppercase tracking-widest">
                <li className="flex items-center gap-4">
                  <span className="text-accent">01</span> 45-Minute Strategy Call
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-accent">02</span> AI Feasibility Assessment
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-accent">03</span> Actionable Tech Roadmap
                </li>
              </ul>
            </FadeInUp>
            
            <AccentBar className="w-16 h-1 bg-accent" />
          </div>
          
          {/* Right Column - Form */}
          <FadeInUp delay={0.2} className="bg-muted/30 border border-border p-8 md:p-10">
            <AuditForm />
          </FadeInUp>
          
        </div>
      </Section>

      {/* Back to Home CTA */}
      <Section spacing="standard" className="border-t border-border flex justify-center pb-20">
        <Button variant="ghost" href="/">
          ← Back to Home
        </Button>
      </Section>
    </main>
  );
}

import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { FadeInUp, AccentBar } from './ui/Animations';

export default function Hero() {
  return (
    <Section spacing="loose" className="min-h-[85vh] flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-x-hidden">
      <div>
        <FadeInUp className="mb-6 md:mb-8">
          <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            Intelligence Meets Execution
          </span>
        </FadeInUp>
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[130px] leading-[0.85] font-bold tracking-tighter mb-8 md:mb-12 uppercase">
          SYSTEMS THAT<br />
          THINK AND<br />
          <span className="text-accent italic font-serif tracking-normal pr-2">EXECUTE.</span>
        </h1>
        
        <FadeInUp delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-24 items-start">
          <div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              <strong className="text-foreground font-medium">Cortex Agents</strong> is a specialized software engineering firm building autonomous AI workflows, multi-tenant SaaS, and high-performance Next.js platforms. We engineer intelligent systems that run your entire business on autopilot.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-4 md:space-y-6">
            <Button variant="primary" size="lg" href="/services">
              Explore Capabilities{' '}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="ghost" size="default" href="/portfolio" className="pl-0 md:pl-4">
              View The Outcomes
            </Button>
          </div>
        </FadeInUp>
      </div>
      
      {/* Decorative horizontal accent */}
      <AccentBar className="mt-20 md:mt-32 w-16 md:w-24 h-1 bg-accent" />
    </Section>
  );
}


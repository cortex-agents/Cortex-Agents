import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export default function Hero() {
  return (
    <Section spacing="loose" className="min-h-[85vh] flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-5xl">
        <div className="mb-6 md:mb-8">
          <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            Cortex Agents
          </span>
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[130px] leading-[0.85] font-bold tracking-tighter mb-8 md:mb-12">
          WE BUILD<br />
          THE FUTURE<br />
          WITH <span className="text-accent italic font-serif tracking-normal pr-2">AI.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-24 items-start">
          <div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              We design and engineer intelligent software systems. From autonomous AI agents to high-performance web applications, we translate complex technology into editorial, fast, and decisive products.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-4 md:space-y-6">
            <Button variant="primary" size="lg" href="/contact">
              Start Your Project{' '}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="ghost" size="default" href="/portfolio" className="pl-0 md:pl-4">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative horizontal accent */}
      <div className="mt-20 md:mt-32 w-16 md:w-24 h-1 bg-accent" />
    </Section>
  );
}

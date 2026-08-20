import React from 'react';
import { Section } from '../ui/Section';

export default function AboutHero() {
  return (
    <Section spacing="loose" className="min-h-[80vh] flex flex-col justify-center pt-32 pb-20">
      <div className="max-w-5xl">
        <div className="mb-8">
          <span className="font-mono text-sm tracking-widest uppercase text-accent">
            Who We Are
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-bold tracking-tighter mb-12 uppercase">
          WE ARE THE TEAM BEHIND YOUR NEXT BIG THING.
        </h1>
        
        <div className="mt-12 md:mt-16 max-w-2xl">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            A Karachi-based AI & Web agency built by developers who got tired of average—so we decided to build something better.
          </p>
        </div>
      </div>
      
      {/* Decorative horizontal accent */}
      <div className="mt-24 w-24 h-1 bg-accent" />
    </Section>
  );
}

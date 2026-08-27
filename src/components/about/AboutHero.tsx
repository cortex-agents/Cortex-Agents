import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, AccentBar } from '../ui/Animations';

export default function AboutHero() {
  return (
    <Section spacing="loose" className="min-h-[80vh] flex flex-col justify-center pt-32 pb-20 overflow-x-hidden">
      <div>
        <FadeInUp className="mb-8">
          <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            The Manifesto
          </span>
        </FadeInUp>
        
        <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-bold tracking-tighter mb-12 uppercase">
          ENGINEERS.<br />
          NOT AN<br />
          AGENCY.
        </h1>
        
        <FadeInUp delay={0.1} className="mt-12 md:mt-16 max-w-2xl">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Cortex is the neural center; Agents are the execution. <strong className="text-foreground font-medium">Cortex Agents</strong> is a Karachi-based engineering unit built by developers tired of slow, broken software. Our mission is to eliminate endless meetings and engineer high-performance systems that execute flawlessly.
          </p>
        </FadeInUp>
      </div>
      
      <AccentBar className="mt-12 md:mt-24 w-24 h-1 bg-accent" />
    </Section>
  );
}

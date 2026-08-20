import React from 'react';
import { Section } from './ui/Section';
import Link from 'next/link';
import { FadeInUp, AccentBar, CounterStat, StaggerGroup, StaggerItem } from './ui/Animations';

export default function About() {
  return (
    <Section hasTopBorder spacing="loose" id="about">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <FadeInUp className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            WE DON&apos;T WRITE CODE. WE ENGINEER BUSINESS OUTCOMES.
          </h2>
          <AccentBar className="w-16 h-1 bg-accent mb-8" />
        </FadeInUp>
        
        <FadeInUp delay={0.1} className="lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-xl">
            Cortex is the neural center. Agents are the autonomous execution. We are a Karachi-based engineering unit built by developers who got tired of slow, broken software.
          </p>
          <p>
            We don&apos;t build generic websites. We build AI-native systems, multi-tenant SaaS, and Next.js platforms that run your business on autopilot.
          </p>
          <p>
            One codebase. Infinite scalability. We strip away the fluff, focusing purely on performance, security, and conversion. Your capabilities scale. Your headcount stays exactly the same.
          </p>
          <div className="pt-8">
            <Link 
              href="/about" 
              className="group inline-flex items-center text-foreground font-semibold uppercase tracking-wider text-sm hover:text-accent transition-colors duration-150 ease-fast"
            >
              Read the manifesto
              <span className="ml-2 transition-transform duration-150 ease-fast group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeInUp>
      </div>
      
      {/* Editorial Stats Block */}
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-32 border-t border-border pt-12">
        <StaggerItem>
          <div className="flex flex-col">
            <CounterStat value={50} suffix="+" className="font-display text-5xl md:text-8xl font-bold tracking-tighter" />
            <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-4">Systems Deployed</span>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex flex-col">
            <CounterStat value={2} suffix="+" className="font-display text-5xl md:text-8xl font-bold tracking-tighter" />
            <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-4">Years of Engineering</span>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex flex-col">
            <CounterStat value={100} suffix="%" className="font-display text-5xl md:text-8xl font-bold tracking-tighter" />
            <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-4">Code Ownership</span>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </Section>
  );
}


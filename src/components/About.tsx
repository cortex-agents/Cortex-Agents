import React from 'react';
import { Section } from './ui/Section';
import Link from 'next/link';

export default function About() {
  return (
    <Section hasTopBorder spacing="loose" id="about">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            BRIDGING THE GAP BETWEEN HUMAN AMBITION AND MACHINE EFFICIENCY.
          </h2>
          <div className="w-16 h-1 bg-accent mb-8" />
        </div>
        
        <div className="lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-xl">
            A Karachi-based AI &amp; Web agency built by developers who got tired of average—so we decided to build something better.
            We don&apos;t just write code. We solve business problems with technology.
          </p>
          <p>
            Cortex Agents is not a traditional agency. We don&apos;t just build websites; we build autonomous digital assets that work while you sleep—scaling your capabilities without scaling your effort.
          </p>
          <p>
            Our approach is editorial, precise, and highly technical. We strip away the unnecessary, focusing purely on performance, typography, and functionality. We build systems that command attention and drive real business outcomes.
          </p>
          <div className="pt-8">
            <Link 
              href="/about" 
              className="group inline-flex items-center text-foreground font-semibold uppercase tracking-wider text-sm hover:text-accent transition-colors duration-150 ease-fast"
            >
              Read our full story
              <span className="ml-2 transition-transform duration-150 ease-fast group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Editorial Stats Block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-t border-border pt-12">
        <div className="flex flex-col">
          <span className="font-display text-6xl md:text-8xl font-bold tracking-tighter">50+</span>
          <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-4">Projects Delivered</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-6xl md:text-8xl font-bold tracking-tighter">2+</span>
          <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-4">Years Experience</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-6xl md:text-8xl font-bold tracking-tighter">100<span className="text-4xl md:text-6xl">%</span></span>
          <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground mt-4">Client Satisfaction</span>
        </div>
      </div>
    </Section>
  );
}

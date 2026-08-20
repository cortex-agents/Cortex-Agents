import React from 'react';
import { Section } from '../ui/Section';

export default function Story() {
  return (
    <Section spacing="standard" hasTopBorder>
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground uppercase mb-6">
              How It Started
            </h2>
          </div>
          <p>
            Cortex Agents was born out of a simple frustration: too many businesses had an outdated, slow, and broken digital presence, while the tools to fix this had never been more powerful or accessible.
          </p>
          <p>
            A specialized team of engineers, each an expert in their own domain, came together in Karachi with one shared belief: that every business, no matter its size, deserves a world-class digital presence. Not templated. Not generic. Custom-built, thoughtfully designed, and engineered to perform.
          </p>
          <p>
            Since then, we have delivered 50+ projects across web development, UI/UX design, AI chatbots, and intelligent automation—helping businesses across Pakistan and beyond look professional, operate efficiently, and grow faster with technology.
          </p>
        </div>

        {/* Right Large Quote */}
        <div className="lg:col-span-5 pt-8 lg:pt-0 lg:border-l lg:border-border lg:pl-16">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-snug">
            &quot;We don&apos;t just write code. We solve business problems with technology.&quot;
          </blockquote>
          <div className="mt-8 font-mono text-sm uppercase tracking-widest text-accent">
            — Cortex Agents
          </div>
        </div>
        
      </div>
    </Section>
  );
}

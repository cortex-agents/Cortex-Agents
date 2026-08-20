import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp } from '../ui/Animations';

export default function Story() {
  return (
    <Section spacing="standard" hasTopBorder>
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <FadeInUp className="lg:col-span-7 space-y-8 text-lg text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground uppercase mb-6">
              How It Started
            </h2>
          </div>
          <p>
            Cortex Agents was born from a single observation: the internet is full of slow, bloated software built by agencies that care more about billing hours than shipping results.
          </p>
          <p>
            A unit of elite engineers in Karachi came together with one mandate: build systems that scale. No WordPress templates. No unmaintainable codebases. Just autonomous infrastructure, intelligent AI layers, and Next.js platforms.
          </p>
          <p>
            Since then, we have engineered over 50 systems. We automate customer support, build enterprise SaaS, and scale digital operations. We don&apos;t build pages. We build revenue engines.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15} className="lg:col-span-5 pt-8 border-t border-border lg:border-t-0 lg:border-l lg:border-border lg:pl-16 lg:pt-0">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-snug">
            &quot;Code is a commodity. Business outcomes are not.&quot;
          </blockquote>
          <div className="mt-8 font-mono text-sm uppercase tracking-widest text-accent">
            — Cortex Agents
          </div>
        </FadeInUp>
        
      </div>
    </Section>
  );
}

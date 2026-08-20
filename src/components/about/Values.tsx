import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from '../ui/Animations';

const values = [
  { 
    title: "Ruthless Transparency", 
    desc: "We tell you what your project actually needs—not what sounds expensive. If a feature won&apos;t generate ROI, we refuse to build it. No fluff, no hidden fees." 
  },
  { 
    title: "Code That Scales", 
    desc: "We don&apos;t ship 'good enough'. Every system, database schema, and AI agent is rigorously tested before deployment. If it doesn't perform under pressure, it doesn't ship." 
  },
  { 
    title: "Deadlines Are Laws", 
    desc: "Traditional agencies treat deadlines as suggestions. We treat them as operational laws. We deliver on time, communicate proactively, and never leave you in the dark." 
  },
  { 
    title: "Business Outcomes Only", 
    desc: "A beautiful website that doesn't generate revenue is a failure. We measure our code by one metric: the financial and operational scale it brings to your business." 
  }
];

export default function Values() {
  return (
    <Section spacing="standard" hasTopBorder>
      <FadeInUp className="mb-16 md:mb-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
          The Engineering Standard
        </h2>
        <AccentBar className="w-16 h-1 bg-accent mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl">
          We don&apos;t do generic culture decks. We do operational laws. This is how we build.
        </p>
      </FadeInUp>

      <StaggerGroup className="flex flex-col border-t border-border">
        {values.map((val, index) => (
          <StaggerItem key={index}>
            <div 
              className="group flex flex-col md:flex-row md:items-start justify-between border-b border-border py-8 md:py-12 hover:bg-muted/50 transition-colors duration-150 ease-fast"
            >
              <div className="hidden md:block w-16 text-sm font-mono text-muted-foreground mt-1">
                0{index + 1}
              </div>
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="font-display text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors duration-150 ease-fast">
                  {val.title}
                </h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

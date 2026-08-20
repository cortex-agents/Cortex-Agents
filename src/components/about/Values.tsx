import React from 'react';
import { Section } from '../ui/Section';

const values = [
  { 
    title: "Honest Communication", 
    desc: "We tell you what your project actually needs — not what sounds impressive. If something won't work, we say so upfront. No surprises, no hidden fees, no false promises." 
  },
  { 
    title: "Uncompromising Quality", 
    desc: "We do not ship work we are not proud of. Every website, every chatbot, every agent goes through thorough review before it reaches you. Good enough is never good enough for us." 
  },
  { 
    title: "We Respect Your Time", 
    desc: "Deadlines are commitments, not suggestions. We deliver on time, communicate proactively, and never leave you wondering what is happening with your project." 
  },
  { 
    title: "Your Success Is Our Success", 
    desc: "We measure our work by one thing — results for you. A beautiful website that does not bring clients is a failure. We build with your business goals in mind, always." 
  }
];

export default function Values() {
  return (
    <Section spacing="standard" hasTopBorder>
      <div className="mb-16 md:mb-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
          What We Stand For
        </h2>
        <div className="w-16 h-1 bg-accent mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl">
          These are not just words on a page — they are the standards we hold ourselves to on every single project.
        </p>
      </div>

      <div className="flex flex-col border-t border-border">
        {values.map((val, index) => (
          <div 
            key={index}
            className="group flex flex-col md:flex-row md:items-start justify-between border-b border-border py-12 hover:bg-muted/50 transition-colors duration-150 ease-fast"
          >
            {/* Number */}
            <div className="hidden md:block w-16 text-sm font-mono text-muted-foreground mt-1">
              0{index + 1}
            </div>
            
            {/* Title */}
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="font-display text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors duration-150 ease-fast">
                {val.title}
              </h3>
            </div>
            
            {/* Description */}
            <div className="md:w-1/2">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {val.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

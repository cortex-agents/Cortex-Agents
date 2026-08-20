import React from 'react';
import { Section } from '../ui/Section';

const stats = [
  { num: "50+", label: "Projects Delivered", desc: "Websites, chatbots, agents" },
  { num: "02+", label: "Years of Experience", desc: "Building real products" },
  { num: "100%", label: "Client Satisfaction", desc: "Genuinely happy clients" },
  { num: "06", label: "Core Experts", desc: "Each a specialist" }
];

export default function Stats() {
  return (
    <Section spacing="standard" hasTopBorder>
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
          In Numbers
        </h2>
        <div className="w-16 h-1 bg-accent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col border-l border-border pl-6">
            <span className="text-6xl md:text-7xl font-bold tracking-tighter font-mono text-foreground mb-4">
              {stat.num}
            </span>
            <span className="text-sm tracking-widest uppercase font-bold text-foreground mb-2">
              {stat.label}
            </span>
            <span className="text-sm text-muted-foreground">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem, CounterStat } from '../ui/Animations';

const stats = [
  { num: 50, suffix: "+", label: "Projects Delivered", desc: "Websites, chatbots, agents" },
  { num: 2, suffix: "+", label: "Years of Experience", desc: "Building real products" },
  { num: 100, suffix: "%", label: "Client Satisfaction", desc: "Genuinely happy clients" },
  { num: 6, suffix: "", prefix: "0", label: "Core Experts", desc: "Each a specialist" }
];

export default function Stats() {
  return (
    <Section spacing="standard" hasTopBorder>
      <FadeInUp className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
          In Numbers
        </h2>
        <AccentBar />
      </FadeInUp>

      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-16 gap-x-8">
        {stats.map((stat, i) => (
          <StaggerItem key={i}>
            <div className="flex flex-col border-l border-border pl-6">
              <CounterStat 
                value={stat.num} 
                suffix={stat.suffix}
                className="text-6xl md:text-7xl font-bold tracking-tighter font-mono text-foreground mb-4"
              />
              <span className="text-sm tracking-widest uppercase font-bold text-foreground mb-2">
                {stat.label}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.desc}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

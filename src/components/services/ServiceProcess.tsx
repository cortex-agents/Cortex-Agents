import React from 'react';
import { Section } from '../ui/Section';

export default function ServiceProcess({ processData }: { processData: { heading?: string; description?: string; steps?: {number: string; duration: string; title: string; description: string}[] } }) {
  if (!processData || !processData.steps) return null;

  return (
    <Section spacing="standard" hasTopBorder>
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">
          {processData.heading}
        </h2>
        {processData.description && (
          <p className="text-xl text-muted-foreground max-w-2xl">
            {processData.description}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {processData.steps.map((step: {number: string; duration: string; title: string; description: string}, i: number) => (
          <div key={i} className="flex flex-col group border-t border-border pt-6 hover:border-accent transition-colors duration-300">
            <div className="flex justify-between items-end mb-4">
              <span className="text-4xl font-mono tracking-tighter text-muted-foreground group-hover:text-foreground">
                {step.number}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-accent border border-accent px-2 py-1">
                {step.duration}
              </span>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

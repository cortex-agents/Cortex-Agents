import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, StaggerGroup, StaggerItem } from '../ui/Animations';

export default function ServiceProblems({ problemsData }: { problemsData: { heading?: string; subheading?: string; problems?: string[] } }) {
  if (!problemsData || !problemsData.problems) return null;

  return (
    <Section spacing="standard" hasTopBorder>
      <FadeInUp className="mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6 max-w-2xl">
          {problemsData.heading}
        </h2>
        {problemsData.subheading && (
          <p className="text-xl text-muted-foreground max-w-2xl">
            {problemsData.subheading}
          </p>
        )}
      </FadeInUp>

      <StaggerGroup className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {problemsData.problems.map((problem: string, i: number) => (
          <StaggerItem key={i}>
            <div className="flex gap-4 border-t border-border pt-6">
              <span className="text-accent font-mono text-xl mt-1">✕</span>
              <p className="text-lg text-foreground leading-relaxed">
                {problem}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

import React from 'react';
import { Section } from '../ui/Section';
import { FadeInUp, StaggerGroup, StaggerItem } from '../ui/Animations';

export default function ServiceFeatures({ featuresData }: { featuresData: { heading?: string; description?: string; features?: {icon: React.ReactNode; title: string; description: string}[] } }) {
  if (!featuresData || !featuresData.features) return null;

  return (
    <Section spacing="standard" hasTopBorder>
      <FadeInUp className="mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">
          {featuresData.heading}
        </h2>
        {featuresData.description && (
          <p className="text-xl text-muted-foreground max-w-2xl">
            {featuresData.description}
          </p>
        )}
      </FadeInUp>

      <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-12">
        {featuresData.features.map((feature: {icon: React.ReactNode; title: string; description: string}, i: number) => (
          <StaggerItem key={i}>
            <div className="pl-6 border-l border-border hover:border-accent transition-colors duration-300">
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3 flex items-center gap-3">
                <span className="text-accent">{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

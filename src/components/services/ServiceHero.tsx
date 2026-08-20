import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface ServiceHeroProps {
  service: { hero: { badge: string; title: string; subtitle: string; heroDescription: string; }; cta: { primaryLink: string; primaryCTA: string; } };
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <Section spacing="loose" className="pt-32">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              {service.hero.badge}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            {service.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-serif italic mb-6">
            {service.hero.subtitle}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            {service.hero.heroDescription}
          </p>
          <Button variant="primary" size="lg" href={service.cta.primaryLink}>
            {service.cta.primaryCTA}
          </Button>
        </div>
      </div>
    </Section>
  );
}

import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { FadeInUp } from '../ui/Animations';

interface ServiceHeroProps {
  service: {
    hero: { badge: string; title: string; subtitle: string; heroDescription: string; };
    cta: { primaryLink: string; primaryCTA: string; };
    priceFrom: { amount: number; unit: "one-time" | "monthly" };
  };
}

function formatPrice(priceFrom: { amount: number; unit: "one-time" | "monthly" }) {
  const amount = `$${priceFrom.amount.toLocaleString("en-US")}`;
  return priceFrom.unit === "monthly" ? `From ${amount} / mo` : `From ${amount}`;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <Section spacing="loose" className="pt-32">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <FadeInUp className="mb-8">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              {service.hero.badge}
            </span>
          </FadeInUp>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            {service.hero.title}
          </h1>
          <FadeInUp delay={0.1}>
            <p className="text-xl md:text-2xl text-foreground font-serif italic mb-6">
              {service.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              {service.hero.heroDescription}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="primary" size="lg" href={service.cta.primaryLink}>
                {service.cta.primaryCTA}
              </Button>
              <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground border border-border px-4 py-3">
                {formatPrice(service.priceFrom)}
              </span>
            </div>
          </FadeInUp>
        </div>
      </div>
    </Section>
  );
}

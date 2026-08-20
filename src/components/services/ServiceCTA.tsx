import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export default function ServiceCTA({ ctaData }: { ctaData: unknown }) {
  if (!ctaData || typeof ctaData !== 'object') return null;
  const cta = ctaData as { heading?: string; subheading?: string; primaryLink?: string; primaryCTA?: string };

  return (
    <Section spacing="loose" hasTopBorder hasBottomBorder className="text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
          {cta.heading}
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          {cta.subheading}
        </p>
        <Button variant="primary" size="lg" href={cta.primaryLink}>
          {cta.primaryCTA}{' '}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </Section>
  );
}

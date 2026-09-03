import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { caseStudies } from '@/lib/case-studies-data';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from '@/components/ui/Animations';
import { breadcrumbSchema, collectionPageSchema } from '@/lib/schema';
import { OG_BASE, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

const HUB_DESCRIPTION =
  'Explore how Cortex Agents designs, builds, automates, and operates intelligent digital systems for ambitious businesses.';

export const metadata = {
  title: 'Case Studies | Engineering Solutions',
  description: HUB_DESCRIPTION,
  alternates: { canonical: '/case-studies' },
  openGraph: {
    ...OG_BASE,
    title: 'Case Studies | Cortex Agents',
    description: HUB_DESCRIPTION,
    url: '/case-studies',
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <JsonLd
        data={collectionPageSchema({
          name: `Case Studies | ${SITE_NAME}`,
          url: absoluteUrl('/case-studies'),
          description: HUB_DESCRIPTION,
          items: caseStudies.map((cs) => ({
            name: cs.title,
            url: absoluteUrl(`/case-studies/${cs.slug}`),
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Case Studies', url: absoluteUrl('/case-studies') },
        ])}
      />
      <Section spacing="loose" className="pt-32 pb-20">
        <div className="mb-24">
          <FadeInUp className="mb-6">
            <span className="font-mono text-sm tracking-wider uppercase text-accent">
              Case Studies
            </span>
          </FadeInUp>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            ENGINEERING SOLUTIONS THAT DELIVER BUSINESS IMPACT
          </h1>
          <FadeInUp delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {HUB_DESCRIPTION}
            </p>
          </FadeInUp>
          <AccentBar className="w-16 h-1 bg-accent mt-10" />
        </div>

        <StaggerGroup className="flex flex-col gap-y-24">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.slug}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-border pt-12">
                
                {/* Meta & Summary Column */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4 block">
                      {cs.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                      <Link href={`/case-studies/${cs.slug}`} className="hover:text-accent transition-colors duration-150 ease-fast focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                        {cs.title}
                      </Link>
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      {cs.summary}
                    </p>
                    
                    {cs.outcomes && cs.outcomes.length > 0 && (
                      <div className="mb-8 border-l-2 border-accent pl-4">
                        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground mb-2">Key Outcome</p>
                        <p className="text-lg">{cs.outcomes[0]}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent font-semibold group/link"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-150" />
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left scale-x-100 group-hover/link:scale-x-110 transition-transform duration-150" />
                    </Link>
                  </div>
                </div>

                {/* Services & Tech Column */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    aria-label={`Read the ${cs.title} case study`}
                    className="block relative aspect-video w-full overflow-hidden bg-muted border border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-fast"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </Link>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Services</h4>
                      <ul className="flex flex-col gap-2">
                        {cs.services.map(s => (
                          <li key={s.slug} className="text-sm font-semibold">
                            {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Technology</h4>
                      <p className="text-sm font-semibold leading-relaxed">
                        {cs.technologies.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        
        {/* Contact CTA */}
        <FadeInUp className="mt-32 pt-24 border-t border-border flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Building a system like this?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            Let&apos;s discuss the technical and business requirements behind your next project.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Discuss Your Project
          </Button>
        </FadeInUp>
      </Section>
    </main>
  );
}

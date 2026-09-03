import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { caseStudies } from '@/lib/case-studies-data';
import { FadeInUp, AccentBar } from '@/components/ui/Animations';
import { breadcrumbSchema } from '@/lib/schema';
import { OG_BASE, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = caseStudies.find(cs => cs.slug === resolvedParams.slug);
  if (!caseStudy) return { title: 'Not Found' };

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.summary,
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
    openGraph: {
      ...OG_BASE,
      title: `${caseStudy.title} | Cortex Agents`,
      description: caseStudy.summary,
      url: `/case-studies/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        }
      ],
      type: 'article',
    }
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const caseStudy = caseStudies.find(cs => cs.slug === resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: caseStudy.title,
          description: caseStudy.summary,
          image: [absoluteUrl(caseStudy.image)],
          url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
          author: {
            "@type": "Organization",
            name: SITE_NAME,
          }
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Case Studies', url: absoluteUrl('/case-studies') },
          { name: caseStudy.title, url: absoluteUrl(`/case-studies/${caseStudy.slug}`) },
        ])}
      />

      <article>
        {/* Hero Section */}
        <Section spacing="loose" className="pt-32 pb-20 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-8">
              <FadeInUp className="mb-6">
                <span className="font-mono text-sm tracking-wider uppercase text-accent">
                  {caseStudy.category}
                </span>
              </FadeInUp>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 max-w-4xl">
                {caseStudy.title}
              </h1>
              <FadeInUp delay={0.1}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  {caseStudy.summary}
                </p>
              </FadeInUp>
              
              {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
                <FadeInUp delay={0.2} className="mt-12 inline-block border border-border p-6 bg-muted">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">Key Outcome</span>
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-accent">{caseStudy.outcomes[0]}</span>
                </FadeInUp>
              )}
            </div>

            {/* Client Context Metadata */}
            <FadeInUp delay={0.3} className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border flex flex-col gap-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Industry</h4>
                <p className="text-lg font-semibold">{caseStudy.industry}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Engagement</h4>
                <p className="text-lg font-semibold">{caseStudy.engagementType}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Timeline</h4>
                <p className="text-lg font-semibold">{caseStudy.timeline}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">Services</h4>
                <ul className="flex flex-col gap-1">
                  {caseStudy.services.map(s => (
                    <li key={s.slug} className="text-lg font-semibold">
                      <Link href={`/services/${s.slug}`} className="hover:text-accent transition-colors border-b border-border hover:border-accent">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </Section>

        {/* Visual Hero */}
        <Section className="py-0 px-0 max-w-none">
          <div className="relative aspect-[21/9] w-full bg-muted border-b border-border">
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.title} overview`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
              sizes="100vw"
            />
          </div>
        </Section>

        {/* The Challenge & Architecture */}
        <Section spacing="standard" className="py-24 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">The Challenge</h2>
              <AccentBar className="w-12 h-1 bg-accent mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-muted p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">Architecture</h2>
              <AccentBar className="w-8 h-1 bg-accent mb-6" />
              <div className="font-mono text-sm leading-loose tracking-wider">
                {caseStudy.architecture.split(' → ').map((node, i, arr) => (
                  <React.Fragment key={node}>
                    <span className="font-semibold text-foreground">{node}</span>
                    {i < arr.length - 1 && <span className="text-accent mx-3">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* The Solution */}
        <Section spacing="standard" className="py-24 border-b border-border">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">The Solution</h2>
            <AccentBar className="w-12 h-1 bg-accent mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {caseStudy.solution.map((item, index) => (
              <div key={index} className="flex gap-6">
                <span className="font-mono text-2xl text-accent/50 font-bold tracking-widest mt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Stack & Outcomes */}
        <Section spacing="standard" className="py-24 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Outcomes */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Results</h2>
              <AccentBar className="w-12 h-1 bg-accent mb-8" />
              <ul className="flex flex-col gap-6">
                {caseStudy.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-accent font-mono text-xl">✓</span>
                    <span className="text-2xl font-bold tracking-tight leading-tight">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Technology</h2>
              <AccentBar className="w-12 h-1 bg-accent mb-8" />
              <div className="flex flex-wrap gap-4">
                {caseStudy.technologies.map(tech => (
                  <span key={tech} className="font-mono text-sm uppercase tracking-wider border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Section>

        {/* CTA */}
        <Section spacing="standard" className="py-32 text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6">Building a system like this?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
            Let&apos;s discuss the technical and business requirements behind your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Discuss Your Project
            </Button>
            <Button variant="secondary" size="lg" href="/case-studies">
              Explore More Case Studies
            </Button>
          </div>
        </Section>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

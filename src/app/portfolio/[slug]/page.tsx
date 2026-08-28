import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from '@/components/ui/Animations';
import products, { getProject } from '@/components/data/products';
import { Product } from '@/components/data/products_types';
import { servicesData } from '@/lib/services-data';
import { creativeWorkSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((project) => ({ slug: project.slug }));
}

// Only slugs that exist in the products array are valid URLs. Anything else is
// a hard 404 rather than a rendered-but-empty page, which is what search
// engines classify as a soft 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found' };

  const path = `/portfolio/${project.slug}`;

  return {
    title: project.seoTitle,
    description: project.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${project.seoTitle} | ${SITE_NAME}`,
      description: project.metaDescription,
      url: path,
      type: 'article',
      siteName: SITE_NAME,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // Resolved from services-data, so a renamed service title updates here on its
  // own and a bad slug simply drops out instead of rendering a dead link.
  const services = project.servicesUsed
    .map((serviceSlug) => servicesData.find((service) => service.slug === serviceSlug))
    .filter((service): service is (typeof servicesData)[number] => Boolean(service));

  // Next two projects in the array, wrapping around — keeps every project page
  // linked to two siblings so none of the nine is a dead end.
  const index = products.findIndex((item) => item.slug === project.slug);
  const related = [1, 2].map((offset) => products[(index + offset) % products.length]);

  return (
    <main className="bg-background text-foreground">
      <JsonLd data={creativeWorkSchema(project)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Portfolio', url: absoluteUrl('/portfolio') },
          { name: project.title, url: absoluteUrl(`/portfolio/${project.slug}`) },
        ])}
      />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <Section spacing="loose" className="pt-32 pb-16">
        <FadeInUp className="mb-8">
          <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            Case Study
          </span>
        </FadeInUp>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] mb-8 max-w-4xl">
          {project.title}
        </h1>

        <FadeInUp delay={0.1}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeInUp>

        <AccentBar className="w-16 h-1 bg-accent mt-10" />
      </Section>

      {/* ── Screenshot ──────────────────────────────────────────────────── */}
      <Section spacing="tight" className="pt-0 pb-16">
        <FadeInUp className="relative aspect-[16/10] w-full overflow-hidden bg-muted border border-border">
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </FadeInUp>
      </Section>

      {/* ── Challenge ───────────────────────────────────────────────────── */}
      <Section spacing="standard" hasTopBorder>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <FadeInUp className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              01 — The Problem
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.95] mt-6">
              THE<br />CHALLENGE.
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </FadeInUp>
        </div>
      </Section>

      {/* ── Approach ────────────────────────────────────────────────────── */}
      <Section spacing="standard" hasTopBorder>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <FadeInUp className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              02 — What We Built
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.95] mt-6">
              THE<br />APPROACH.
            </h2>
          </FadeInUp>

          <div className="lg:col-span-7 lg:col-start-6">
            <StaggerGroup className="border-t border-border">
              {project.approach.map((step, stepIndex) => (
                <StaggerItem key={step}>
                  <div className="flex gap-6 md:gap-8 border-b border-border py-6">
                    <span className="font-mono text-sm text-accent shrink-0 pt-1">
                      {String(stepIndex + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      {/* ── Outcome ─────────────────────────────────────────────────────── */}
      {/* Qualitative only. No percentages, revenue figures or timelines appear
          here on purpose — we do not publish numbers we cannot substantiate. */}
      <Section spacing="standard" hasTopBorder>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <FadeInUp className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              03 — What Changed
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.95] mt-6">
              THE<br />OUTCOME.
            </h2>
          </FadeInUp>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-border">
              {project.outcome.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-border py-6 text-lg text-muted-foreground leading-relaxed"
                >
                  <span className="text-accent font-mono shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the live ${project.title} site in a new tab`}
                className="inline-flex items-center justify-center whitespace-nowrap uppercase tracking-wider font-semibold transition-all duration-150 ease-fast border border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-3 gap-2.5 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View Live Site ↗
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Services this project is evidence for ───────────────────────── */}
      {/* Links down from a proof asset into the money pages it supports — the
          same cluster logic the /learn guides use, from the other direction. */}
      {services.length > 0 && (
        <Section spacing="standard" hasTopBorder>
          <FadeInUp className="mb-12">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              Services Applied
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.95] mt-8 mb-8">
              WANT THIS<br />FOR YOURS?
            </h2>
            <AccentBar className="w-16 h-1 bg-accent" />
          </FadeInUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {services.map((service) => (
              <StaggerItem key={service.slug} className="bg-background">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors duration-150 ease-fast hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-snug mb-4 group-hover:text-accent transition-colors duration-150 ease-fast">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-widest text-accent">
                    Explore →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      )}

      {/* ── Related projects ────────────────────────────────────────────── */}
      <Section spacing="standard" hasTopBorder>
        <FadeInUp className="mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase mb-6">
            More Work
          </h2>
          <AccentBar />
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {related.map((item: Product) => (
            <StaggerItem key={item.slug} className="bg-background">
              <Link
                href={`/portfolio/${item.slug}`}
                className="group flex h-full flex-col p-8 transition-colors duration-150 ease-fast hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4">
                  {item.tags[0]}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:text-accent transition-colors duration-150 ease-fast">
                  {item.title}
                </h3>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ── Closing CTAs ────────────────────────────────────────────────── */}
      <Section spacing="standard" hasTopBorder className="pb-20">
        <div className="flex flex-wrap gap-8">
          <Button variant="ghost" href="/portfolio">
            ← All Projects
          </Button>
          <Button variant="ghost" href="/contact">
            Start Your Build →
          </Button>
        </div>
      </Section>
    </main>
  );
}

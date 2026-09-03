import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from './ui/Animations';
import { caseStudies } from '@/lib/case-studies-data';
import { articles } from '@/lib/learn-data';

export default function HomeEvidence() {
  const featuredCases = caseStudies.slice(0, 2);
  const featuredInsights = articles.slice(0, 3);

  return (
    <Section spacing="standard" className="border-t border-border bg-muted/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Case Studies */}
        <div>
          <FadeInUp className="mb-12">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1 block w-fit mb-6">
              Proven Results
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
              Case Studies
            </h2>
            <AccentBar className="w-12 h-1 bg-accent mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We engineer solutions that dictate markets. See how we&apos;ve transformed enterprise operations through AI and high-performance software.
            </p>
          </FadeInUp>

          <StaggerGroup className="flex flex-col gap-8">
            {featuredCases.map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/case-studies/${cs.slug}`} className="group flex flex-col sm:flex-row gap-6 p-6 border border-border bg-background hover:bg-muted/50 transition-colors duration-300">
                  <div className="relative w-full sm:w-48 aspect-video sm:aspect-square flex-shrink-0 overflow-hidden border border-border">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-fast"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                      {cs.industry}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-150">
                      {cs.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      View Case Study
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          
          <FadeInUp delay={0.4} className="mt-8">
            <Link href="/case-studies" className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1">
              Explore all case studies →
            </Link>
          </FadeInUp>
        </div>

        {/* Right Column: Insights */}
        <div className="lg:border-l lg:border-border lg:pl-24">
          <FadeInUp className="mb-12">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1 block w-fit mb-6">
              Knowledge Base
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
              Insights
            </h2>
            <AccentBar className="w-12 h-1 bg-accent mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technical breakdowns, engineering strategies, and unfiltered thoughts on the state of AI and web architecture.
            </p>
          </FadeInUp>

          <StaggerGroup className="flex flex-col gap-6">
            {featuredInsights.map((article) => (
              <StaggerItem key={article.slug}>
                <Link href={`/learn/${article.slug}`} className="group block py-6 border-b border-border hover:pl-4 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                    <span className="text-accent">{article.intent}</span>
                    <span>•</span>
                    <span>{article.readingTime} Min Read</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-150">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed text-sm">
                    {article.answerFirst}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          
          <FadeInUp delay={0.4} className="mt-10">
            <Link href="/learn" className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1">
              Read all insights →
            </Link>
          </FadeInUp>
        </div>

      </div>
    </Section>
  );
}

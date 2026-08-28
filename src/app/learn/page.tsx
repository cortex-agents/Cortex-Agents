import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { articles, formatArticleDate } from '@/lib/learn-data';
import { breadcrumbSchema, collectionPageSchema } from '@/lib/schema';
import { OG_BASE, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from '@/components/ui/Animations';

const HUB_TITLE = 'Learn';
const HUB_DESCRIPTION =
  'Plain-English guides to AI agents, automation, and modern web engineering — what each technology actually does, what it costs, and when it is the wrong choice.';
const HUB_PATH = '/learn';

export const metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  alternates: { canonical: HUB_PATH },
  openGraph: {
    ...OG_BASE,
    title: `${HUB_TITLE} | ${SITE_NAME}`,
    description: HUB_DESCRIPTION,
    url: HUB_PATH,
  },
};

export default function LearnPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Declares this page as a collection and lists every article it holds, so
          a crawler gets the full child-URL set from the hub's own markup. */}
      <JsonLd
        data={collectionPageSchema({
          name: `${HUB_TITLE} | ${SITE_NAME}`,
          url: absoluteUrl(HUB_PATH),
          description: HUB_DESCRIPTION,
          items: articles.map((article) => ({
            name: article.title,
            url: absoluteUrl(`/learn/${article.slug}`),
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: HUB_TITLE, url: absoluteUrl(HUB_PATH) },
        ])}
      />

      <Section spacing="loose" className="pt-32 pb-20">
        <div className="mb-20">
          <FadeInUp className="mb-8">
            <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
              Knowledge Base
            </span>
          </FadeInUp>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            LEARN
          </h1>
          <FadeInUp delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Straight answers about AI agents, automation, and modern web engineering. Every guide
              starts with the answer, explains the trade-offs honestly, and tells you when the
              technology is <span className="text-foreground">not</span> the right fit.
            </p>
          </FadeInUp>
          <AccentBar className="w-16 h-1 bg-accent mt-10" />
        </div>

        {articles.length === 0 ? (
          <FadeInUp className="border border-border bg-muted/30 p-8 md:p-12">
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
              In Progress
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              The first batch of guides is being written. In the meantime, every service page
              carries a detailed FAQ covering the same ground.
            </p>
            <div className="mt-8">
              <Button variant="secondary" href="/services">
                Browse Services
              </Button>
            </div>
          </FadeInUp>
        ) : (
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {articles.map((article, index) => (
              <StaggerItem key={article.slug} className="bg-background">
                <Link
                  href={`/learn/${article.slug}`}
                  className="group flex h-full flex-col p-8 md:p-10 transition-colors duration-150 ease-fast hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
                >
                  <div className="flex items-center justify-between mb-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent">
                      {String(index + 1).padStart(2, '0')} / {article.intent}
                    </span>
                    <span>{article.readingTime} Min Read</span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-5 group-hover:text-accent transition-colors duration-150 ease-fast">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-4">
                    {article.answerFirst}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {formatArticleDate(article.dateModified)}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors duration-150 ease-fast">
                      Read{' '}
                      <span className="ml-1 inline-block transition-transform duration-150 ease-fast group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </Section>

      {/* Back to Home CTA */}
      <Section spacing="standard" className="border-t border-border flex justify-center pb-20">
        <Button variant="ghost" href="/">
          ← Back to Home
        </Button>
      </Section>
    </main>
  );
}

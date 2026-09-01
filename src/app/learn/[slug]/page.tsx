import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { FadeInUp, AccentBar, StaggerGroup, StaggerItem } from '@/components/ui/Animations';
import {
  articles,
  getArticle,
  relatedArticles,
  serviceForArticle,
  formatArticleDate,
  type Article,
} from '@/lib/learn-data';
import { memberByName } from '@/lib/team-data';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Body copy may carry inline internal links written as `[anchor](/path)`. Only
// root-relative paths match, so article data can never smuggle an external or
// javascript: link into the page. This exists because a contextual link inside a
// sentence is worth far more — to a reader and to a crawler — than a "related
// links" list bolted onto the end of a section.
const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

function InlineText({ text }: { text: string }) {
  const pattern = new RegExp(INLINE_LINK.source, 'g');
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    parts.push(
      <Link
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        className="text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors duration-150 ease-fast"
      >
        {match[1]}
      </Link>
    );
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

// Only slugs that exist in `learn-data` are valid URLs. Anything else is a hard
// 404 rather than a rendered-but-empty page, which is what search engines
// classify as a soft 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article Not Found' };

  const path = `/learn/${article.slug}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${article.seoTitle} | ${SITE_NAME}`,
      description: article.metaDescription,
      url: path,
      type: 'article',
      siteName: SITE_NAME,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const author = memberByName(article.author);
  const service = serviceForArticle(article);
  const related = relatedArticles(article);

  return (
    <main className="bg-background text-foreground">
      <JsonLd data={articleSchema(article)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Learn', url: absoluteUrl('/learn') },
          { name: article.title, url: absoluteUrl(`/learn/${article.slug}`) },
        ])}
      />
      {article.faqs && article.faqs.length > 0 && <JsonLd data={faqPageSchema(article.faqs)} />}

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <Section spacing="loose" className="pt-32 pb-16">
        <FadeInUp className="mb-8">
          <span className="font-mono text-sm tracking-widest uppercase text-accent border border-accent px-3 py-1">
            {article.intent}
          </span>
        </FadeInUp>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] mb-8 max-w-4xl">
          {article.title}
        </h1>

        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>
              By{' '}
              {author ? (
                <Link
                  href={`/about#${author.slug}`}
                  className="text-foreground hover:text-accent transition-colors duration-150 ease-fast"
                >
                  {author.name}
                </Link>
              ) : (
                <span className="text-foreground">{article.author}</span>
              )}
            </span>
            <span>{formatArticleDate(article.datePublished)}</span>
            <span>{article.readingTime} Min Read</span>
          </div>
        </FadeInUp>

        <AccentBar className="w-16 h-1 bg-accent mt-10" />
      </Section>

      {/* ── Answer-first block ──────────────────────────────────────────── */}
      {/* The direct answer sits above everything else on purpose: answer engines
          and AI Overviews quote the passage that answers the question first. */}
      <Section spacing="tight" className="pt-0 pb-16">
        <FadeInUp className="max-w-3xl border-l-4 border-accent bg-muted/30 px-6 py-6 md:px-8 md:py-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4">
            Short Answer
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            {article.answerFirst}
          </p>
        </FadeInUp>
      </Section>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <Section spacing="tight" className="pt-0 pb-16">
        <div className="max-w-3xl">
          {article.sections.map((section, index) => (
            <FadeInUp key={section.heading} delay={index === 0 ? 0 : 0.05} className="mb-14">
              <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase leading-tight mb-6">
                {section.heading}
              </h2>

              {section.body.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-lg text-muted-foreground leading-relaxed mb-5"
                >
                  <InlineText text={paragraph} />
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-6 mb-2 border-t border-border">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-4 border-b border-border py-4 text-lg text-muted-foreground leading-relaxed"
                    >
                      <span className="text-accent font-mono shrink-0">—</span>
                      <span>
                        <InlineText text={bullet} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="mt-8 overflow-x-auto border border-border">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-muted/50">
                        {section.table.headers.map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="border-b border-border px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-accent whitespace-nowrap"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-border last:border-b-0">
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className={
                                cellIndex === 0
                                  ? 'px-4 py-4 align-top text-sm font-bold text-foreground'
                                  : 'px-4 py-4 align-top text-sm text-muted-foreground leading-relaxed'
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.afterTable && (
                <p className="mt-4 font-mono text-xs tracking-widest uppercase text-muted-foreground leading-relaxed">
                  {section.afterTable}
                </p>
              )}
            </FadeInUp>
          ))}
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      {article.faqs && article.faqs.length > 0 && <ServiceFAQ faqs={article.faqs} />}

      {/* ── CTA into the money page this article supports ───────────────── */}
      {service && (
        <Section spacing="standard" hasTopBorder>
          <FadeInUp className="border border-border bg-muted/30 p-8 md:p-12 max-w-4xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-5">
              Next Step
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.95] mb-6">
              {service.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {service.shortDescription}
            </p>
            <Button variant="secondary" href={`/services/${service.slug}`}>
              See how we build it →
            </Button>
          </FadeInUp>
        </Section>
      )}

      {/* ── Related spokes ──────────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section spacing="standard" hasTopBorder>
          <FadeInUp className="mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase mb-6">
              Keep Reading
            </h2>
            <AccentBar />
          </FadeInUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {related.map((item: Article) => (
              <StaggerItem key={item.slug} className="bg-background">
                <Link
                  href={`/learn/${item.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors duration-150 ease-fast hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4">
                    {item.intent}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:text-accent transition-colors duration-150 ease-fast">
                    {item.title}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      )}

      {/* ── Authorship / freshness ──────────────────────────────────────── */}
      <Section spacing="standard" hasTopBorder className="pb-20">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
            Written By
          </p>
          <p className="text-lg text-foreground mb-2">
            {author ? (
              <Link
                href={`/about#${author.slug}`}
                className="hover:text-accent transition-colors duration-150 ease-fast"
              >
                {author.name}
              </Link>
            ) : (
              article.author
            )}
            {author && (
              <span className="text-muted-foreground"> — {author.role}</span>
            )}
          </p>
          <p className="text-sm text-muted-foreground">
            Published {formatArticleDate(article.datePublished)} · Last reviewed{' '}
            {formatArticleDate(article.dateModified)}
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            <Button variant="ghost" href="/learn">
              ← All Guides
            </Button>
            <Button variant="ghost" href="/contact">
              Talk To Us →
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}

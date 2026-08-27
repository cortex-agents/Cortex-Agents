// src/lib/learn-data.ts
// Single source of truth for the /learn knowledge hub. Follows the same pattern
// as `services-data.ts`: content lives in typed data, the route renders it, and
// the sitemap derives its URLs from this array — so a new article can never be
// published without also being listed and linked.
//
// `slug` is the article's permanent URL (`/learn/<slug>`). Do not rename a slug
// once published — that breaks every inbound link and discards the ranking the
// URL has accumulated. Retire an article instead of renaming it.
//
// Required shape for every article (spec §7): `answerFirst` answers the title
// question directly in ≤60 words, then sections, then honest limitations, then
// FAQs, then a CTA to the money page named in `feedsService`. Answer engines
// quote the paragraph that answers the question first — burying the answer under
// an introduction is what stops a page from being cited.
//
// Hard rule: zero invented statistics. If a figure cannot be attributed to a
// named public source inline, the claim is omitted.

import type { FAQ } from "./services-data";
import { servicesData } from "./services-data";

/** Search intent this article targets. Drives the micro-label on the card. */
export type ArticleIntent =
  | "Definition"
  | "Comparison"
  | "Cost"
  | "How-To"
  | "Strategy";

/** Optional comparison table inside a section — the shape answer engines quote. */
export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleSection {
  heading: string;
  /** Paragraphs, rendered in order. */
  body: string[];
  bullets?: string[];
  table?: ArticleTable;
}

export interface Article {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag — may differ from the H1 to fit the SERP width. */
  seoTitle: string;
  /** 150–160 chars. SERP ad copy, not a ranking factor. */
  metaDescription: string;
  /** ≤60 words that directly answer the title question. Rendered first. */
  answerFirst: string;
  intent: ArticleIntent;
  /** Slug of the money page this article feeds. Must exist in `servicesData`. */
  feedsService: string;
  sections: ArticleSection[];
  faqs?: FAQ[];
  /** Sibling article slugs, for the in-page "Related" block. */
  relatedSlugs: string[];
  /** Must match a `name` in `team-data.ts` — resolved to a Person in schema. */
  author: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  /** Minutes. Shown in the card meta line. */
  readingTime: number;
}

export const articles: Article[] = [];

/** Look up one article by slug. */
export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/**
 * Articles that feed a given service page. Powers the "Learn more" block on
 * `/services/[slug]`, so the money page → spoke direction of the internal
 * cluster stays in sync automatically.
 */
export function articlesForService(serviceSlug: string): Article[] {
  return articles.filter((article) => article.feedsService === serviceSlug);
}

/** Resolve `relatedSlugs` to real articles, silently dropping unknown slugs. */
export function relatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((slug) => getArticle(slug))
    .filter((related): related is Article => Boolean(related));
}

/** The service this article points at, for the CTA block. */
export function serviceForArticle(article: Article) {
  return servicesData.find((service) => service.slug === article.feedsService);
}

/**
 * "2026-08-28" → "28 Aug 2026". Fixed locale + UTC so the string is identical
 * at build time and at request time (no hydration mismatch, no drift between
 * the visible date and the ISO date in `Article.datePublished`).
 */
export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

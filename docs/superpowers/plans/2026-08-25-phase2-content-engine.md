# Phase 2 — Content Engine & Entity Authority — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the site from "findable" into "authoritative" — add the informational content layer, make the team machine-readable as entities, and give the 10 money pages supporting content that links into them. Target symptoms: brand name not ranking, uneven service visibility, team members not surfacing.

**Architecture:** Extend the existing single-source pattern. Content lives in typed data modules (`src/lib/learn-data.ts`, reuse `src/components/data/products.ts`) exactly like `services-data.ts`; every new schema builder is added to `src/lib/schema.ts` and rendered by the existing `<JsonLd>`; every new route uses `generateStaticParams` for SSG; the sitemap derives new URLs from the data arrays so it can never desync. No new dependencies — plain TSX content, no MDX pipeline.

**Tech Stack:** Next.js 15.5 (App Router), React 19, TypeScript, Tailwind v4, framer-motion. Next.js Metadata API + `MetadataRoute`.

**Spec:** `docs/superpowers/specs/2026-08-25-phase2-content-engine-design.md`

## Global Constraints

- **Domain: `https://cortexagents.org` ONLY.** Never emit `cortexagents.com`. All URLs via `SITE_URL` / `absoluteUrl()`.
- **Do NOT change** the theme ("Cyber Chrome & Neural Azure"), colors, existing layout, or any framer-motion animation. New pages **reuse existing components** (`Section`, `FadeInUp`, existing card/typography patterns). Parent `../CLAUDE.md` rule — non-negotiable.
- **No invented data.** No fabricated client names, results, metrics, rankings, traffic, or search volumes in any shipped copy. If a number is unavailable, omit it.
- **No new npm dependencies.**
- **Testing model:** no unit-test runner. Test cycle = `npm run build` (types/routes) + inspect generated output (`/sitemap.xml`, rendered JSON-LD via curl on `npm start`) + `grep` checks. Lighthouse skipped (owner's decision) **except** if a new route introduces heavy client JS — then re-check.
- **Git:** branch off `main` (e.g. `seo/content-engine`). **`git pull` first** — `main` advances outside this thread. Commit per task. `gh` CLI is NOT installed → PRs via GitHub MCP (`create_pull_request` / `merge_pull_request`), repo `cortex-agents/Cortex-Agents`.
- **Path alias:** `@/` → `src/`.
- **Stage only intended files** — never `git add .` / `-A` (repo has unrelated dirty files).

---

## Task 1 — Populate `metaDescription` for all 10 services (D1)

**Files:** `src/lib/services-data.ts`

- [x] For each of the 10 services, add a `metaDescription` (the field already exists at line ~34 and is already consumed at `services/[slug]/page.tsx:30`).
- [x] Each must be **150–160 characters**, unique, and contain: the primary service keyword, a concrete benefit, and a soft CTA. Written for a **worldwide** audience (Locked decision #3 — Hybrid positioning).
- [x] Do **not** change `seoTitle`, `shortDescription`, or any visible copy — `metaDescription` is `<head>`-only.

**Verify:**
- [x] `npm run build` green.
- [x] `grep -c "metaDescription:" src/lib/services-data.ts` → **11** (10 values + 1 interface line).
- [x] Character count of each new string is 150–160.
- [x] `npm start` + curl one service page → `<meta name="description">` shows the new text, not the slogan.

> 📚 **Why:** the meta description does not rank you — it is the **ad copy** in the search result. A 90-char slogan wastes half the available width and gives no reason to click. Better click-through from the same position = more traffic, and Google treats engagement as a quality signal.

---

## Task 2 — Entity layer: `Person` schema for the team (D2)

**Files:** `src/lib/schema.ts`, `src/lib/team-data.ts` (new), `src/components/TeamMemberCard.tsx` (new), `src/components/ourTeam.tsx`, `src/components/ui/BrandIcons.tsx`, `src/app/about/page.tsx`

- [x] Extract the 6-member array currently inline in `ourTeam.tsx:10-15` into `src/lib/team-data.ts` with an exported `TeamMember` interface (`id`, `name`, `slug`, `role`, `ownership`, `image`, `bio`, `expertise`, `linkedin`, `socials`) and `teamData` array. Import it back into `ourTeam.tsx`.
- [x] **Scope addition (owner request, 2026-08-27):** each portrait is now a **3D flip card** — front = portrait (unchanged), back = bio + focus areas + profile links. Built as a new client component `TeamMemberCard.tsx` so `ourTeam.tsx` stays a server component. `bio` + `expertise` exist so `Person.description` / `knowsAbout` mirror **visible** page content (Google's structured-data requirement), and `socials: TeamSocial[]` is the extension point for each member's additional verified profiles beyond LinkedIn — every entry renders in the card's "Connect" row **and** in that person's `sameAs`.
- [x] Add `personSchema(member: TeamMember)` to `src/lib/schema.ts`: `@type: "Person"`, `name`, `jobTitle` (= `role`), `image` (via `absoluteUrl`), `url` (= `absoluteUrl('/about#<slug>')`), `description` (= `bio`), `knowsAbout` (= `expertise`), `sameAs` (= all profiles via `memberProfiles()`), `worksFor` → `@id` reference to the Organization.
- [x] Add `aboutPageSchema()`: `@type: "AboutPage"`, `name`, `url`, `isPartOf` → WebSite, `mainEntity` → Organization reference.
- [x] Extend `organizationSchema()` with `employee: teamData.map(...)` (name + jobTitle + sameAs per person) so the relationship is declared **both** directions.
- [x] Render on `/about`: `<JsonLd data={aboutPageSchema()} />` plus one `<JsonLd data={personSchema(m)} />` per member.
- [x] Add a stable `id` anchor per member card in the card component (e.g. `id="okasha-nadeem"`) so each `Person.url` resolves to a real anchor, with `scroll-mt-28` so the sticky header does not cover it.

**Verify:**
- [x] `npm run build` green — 27/27 static pages.
- [x] `npm start` + curl `/about` → **9** `application/ld+json` blocks: Organization, WebSite, AboutPage, and 6 `Person`, each with `worksFor`, `knowsAbout`, and `sameAs`.
- [x] curl `/` → Organization block contains `employee` with 6 entries.
- [x] All 6 anchor ids present in `/about` HTML and match every `Person.url`.
- [x] Card back is **server-rendered** (bio text, 30 skill chips, 6 Connect rows in the static HTML — not JS-only), and the hidden face carries `inert` so it stays out of the tab order.
- [x] Tailwind emitted the 3D CSS (`perspective:1400px`, `transform-style:preserve-3d`, `backface-visibility:hidden`, `rotateY(180deg)`) plus a `prefers-reduced-motion` fallback.
- [x] Theme untouched: same brutalist tokens (`bg-muted`, `border-border`, `text-accent`, `font-mono` uppercase labels, `ease-fast`, zero radius); grid, stagger animations, portrait grayscale→colour hover and the LinkedIn shortcut all unchanged.

> 📚 **Why:** the owner reported that some team members do not surface for "Who is {name} at Cortex Agents". Right now their names are only *text*. `Person` + `worksFor` + `sameAs` (LinkedIn) states as **data** that this named human works at this named company — which is exactly what a knowledge graph and an AI answer engine need in order to answer that question confidently.

---

## Task 3 — `/learn` hub infrastructure (D3)

**Files:** `src/lib/learn-data.ts` (new), `src/lib/schema.ts`, `src/app/learn/page.tsx` (new), `src/app/learn/[slug]/page.tsx` (new), `src/app/sitemap.ts`

- [x] Create `src/lib/learn-data.ts` mirroring the `services-data.ts` conventions: exported `Article` interface — `slug`, `title`, `seoTitle`, `metaDescription`, `answerFirst` (≤60-word direct answer), `intent`, `feedsService` (service slug), `sections: { heading, body }[]` (plus optional `bullets` / `table` so a comparison table stays data, not markup), `faqs?: FAQ[]`, `relatedSlugs`, `author` (team member name), `datePublished`, `dateModified`, `readingTime` — plus an empty-for-now `articles: Article[]` array (populated in Task 5). Helpers: `getArticle`, `articlesForService`, `relatedArticles`, `serviceForArticle`, `formatArticleDate`.
- [x] Add `articleSchema(article)` to `schema.ts`: `@type: "Article"`, `headline`, `description`, `image` (default OG), `author` → Person (resolved from `team-data` via new `memberByName()`, referenced by `@id` so the byline points at the SAME entity `/about` declares), `publisher` → Organization, `datePublished`, `dateModified`, `mainEntityOfPage`, `isPartOf` → WebSite, `inLanguage`, `url`.
- [x] Add `collectionPageSchema({ name, url, description, items? })` — emits an `ItemList` of children when `items` are passed, omits it when empty — and generalize breadcrumbs: `breadcrumbSchema(trail: {name, url}[])`, service-page call site updated to pass its trail.
- [x] Build `/learn` hub page: intro copy, 2-col bordered card grid (reuses `Section`/`FadeInUp`/`StaggerGroup`), `CollectionPage` + `BreadcrumbList` schema, full metadata (title/description/canonical/OG), plus an honest empty state for the window before Task 5 lands.
- [x] Build `/learn/[slug]` page: `generateStaticParams` from `articles`, `dynamicParams = false` (unknown slug = hard 404, not a soft 404), `generateMetadata` (title/description/canonical/OG `type: article` + published/modified times), renders answer-first block → sections (paragraphs / bullets / comparison table) → FAQ (reuses `ServiceFAQ`) → CTA to `feedsService` → related spokes → author + last-reviewed line; emits `Article` + `BreadcrumbList` + `FAQPage` (when `faqs` present).
- [x] Extend `src/app/sitemap.ts` to append `/learn` and every `articles` slug — derived from the array, **no hardcoded list**.

**Verify:**
- [x] `npm run build` green — **28/28** static pages; `/learn` is `○ (Static)`; `/learn/[slug]` is `● SSG` (0 paths while the array is empty).
- [x] `/sitemap.xml` → 17 URLs, includes `https://cortexagents.org/learn`.
- [x] Existing service pages' breadcrumb JSON-LD is **byte-identical** to before the refactor — 379 bytes, verified char-by-char against a re-implementation of the old builder (same key order `@type,position,name,item`, same `&` escaping).
- [x] `/learn` emits 4 JSON-LD blocks (Organization, WebSite, CollectionPage, BreadcrumbList); canonical + `og:url` = `.org`; `ItemList` correctly omitted while there are no articles.
- [x] No theme/color/animation changes; new pages use existing components only.
- [x] Zero `cortexagents.com` in rendered output.

---

## Task 4 — `/portfolio/[slug]` project pages (D5)

**Files:** `src/components/data/products.ts`, `src/lib/schema.ts`, `src/app/portfolio/[slug]/page.tsx` (new), `src/app/portfolio/page.tsx`, `src/app/sitemap.ts`

- [ ] Extend each of the 9 entries in `products.ts` with: `slug`, `seoTitle`, `metaDescription`, `servicesUsed` (service slugs it demonstrates), `challenge`, `approach`, `outcome` (qualitative only — **no invented metrics**), `stack` (from existing `tags`). Keep existing fields and the current portfolio grid rendering intact.
- [ ] Add `creativeWorkSchema(project)` to `schema.ts`: `@type: "CreativeWork"`, `name`, `description`, `url` (canonical project page), `sameAs` (the live demo link), `creator` → Organization, `keywords` (stack), `about` → the service(s) demonstrated.
- [ ] Build `/portfolio/[slug]` with `generateStaticParams`, `generateMetadata`, `CreativeWork` + `BreadcrumbList` schema, honest write-up sections, a live-demo link (`rel="noopener noreferrer"`), and links to the service page(s) in `servicesUsed`.
- [ ] Link each card on `/portfolio` to its detail page (keep the existing live-demo link too, and keep the existing per-card `aria-label` accessibility pattern).
- [ ] Extend `sitemap.ts` with all 9 project URLs, derived from the array.

**Verify:**
- [ ] `npm run build` green; 9 project paths listed as ● SSG.
- [ ] `/sitemap.xml` contains all 9 project URLs.
- [ ] `grep -rn "vercel.app" src/app/portfolio/` → demo links present only as external `sameAs`/CTA, never as canonical.
- [ ] No fabricated client name, percentage, revenue figure, or timeline anywhere in the new copy.
- [ ] Portfolio grid visuals + animations unchanged.

---

## Task 5 — First spoke batch: 6 articles (D4)

**Files:** `src/lib/learn-data.ts`

- [x] Write the 6 articles from spec §7 (A1–A6) into `articles`. Each: 1,200–2,000 words, **answer-first** opening (≤60 words that directly answer the title), then definition/comparison table, detail sections, an honest "when this is *not* the right choice" section, 3–5 FAQs, CTA to its `feedsService`, `author` = a real team member, `datePublished`/`dateModified` set.
- [x] Each article links to **exactly one** money page as its primary target plus 1–2 sibling articles via `relatedSlugs`. Anchors must be natural and varied — **no repeated exact-match anchor text**.
- [x] A3 (AEO/GEO) must be genuinely useful and non-promotional — it is the differentiator article and the most likely to be cited.
- [x] `metaDescription` per article: 150–160 chars.
- [x] Zero invented statistics. Where an industry figure would normally appear, either cite a named public source inline or omit the claim.

**Shipped set** — 6 different money pages get one spoke each, so no service competes with itself:

| # | Slug | Intent | Feeds | Author | Words |
|---|------|--------|-------|--------|-------|
| A1 | `what-is-an-ai-agent` | Definition | `ai-agents` | Syed Hamza Ali | 1,336 |
| A2 | `ai-agent-vs-ai-chatbot-vs-automation` | Comparison | `ai-chatbots` | Muhammad Ubaid Raza | 1,259 |
| A3 | `what-are-aeo-and-geo` | Definition | `seo-optimization` | Okasha Nadeem | 1,577 |
| A4 | `custom-web-application-cost` | Cost | `custom-saas-enterprise` | Syed Muhammad Huzaifa | 1,537 |
| A5 | `dedicated-developers-vs-freelancers-vs-in-house` | Comparison | `dedicated-teams` | Okasha Nadeem | 1,294 |
| A6 | `nextjs-vs-wordpress-for-business-websites` | Comparison | `web-development` | Taha Qureshi | 1,465 |

**Supporting change:** `ArticleSection.body` is `string[]`, which could not hold contextual links. Rather than add a markdown dependency, `learn/[slug]/page.tsx` gained a ~20-line `InlineText` parser that accepts **only** `[anchor](/root-relative)` — so anchors are natural and varied inside sentences, and article data structurally cannot smuggle an external or `javascript:` link into the page.

**Verify:**
- [x] `npm run build` green; `/learn/[slug]` shows **6** SSG paths; 34/34 static pages.
- [x] `/sitemap.xml` → 23 URLs, contains all 6 article URLs, all `.org`.
- [x] curl all 6 → each emits valid `Article` + `BreadcrumbList` + `FAQPage` JSON-LD (plus site-wide Organization + WebSite); canonical + OG `.org`; `Article.author.@id` = the SAME `/about#<slug>` Person `@id` that `/about` declares.
- [x] Each article's HTML links to its `feedsService` page **twice** (once inline mid-sentence, once as the closing CTA), plus its 1–2 siblings and its author's `/about` anchor. Zero orphans.
- [x] Rendered word count per article **1,259–1,577** (all inside 1,200–2,000).
- [x] `metaDescription` 150–160 chars × 6; `answerFirst` ≤60 words × 6 (48–57).
- [x] Zero unparsed `[text](/path)` left in any rendered body; unknown slug still hard-404s.
- [x] Manual read-through: no invented metric. The only external figures used are Google's published Core Web Vitals thresholds (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1, attributed to web.dev in A6) and Google's structured-data visibility requirement (A3) — both named public sources, no numbers of our own.

> ⚠️ **Windows build gotcha (cost ~20 min here):** running `npm run build` while an old `next start` still holds `.next` open produces a **corrupt** build — the 6 article HTML files land on disk but their `.meta` says `"status": 404`, so every article 404s while the build log looks perfectly green. Always stop the server (kill whatever listens on :3000), `rm -rf .next`, then build.


---

## Task 6 — Internal-linking pass + navigation (D6)

**Files:** `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/app/services/[slug]/page.tsx`, `src/lib/services-data.ts` (optional `relatedArticles`)

- [x] Add `/learn` to the header nav and the footer `quickLinks` (footer array is at `Footer.tsx:10-17`). Keep existing styling/animation patterns exactly.
- [x] On each service page, render a "Learn more" block listing the articles whose `feedsService` matches that slug — derived from `learn-data`, so it stays in sync automatically. Reuse existing card/section components.
- [x] Ensure every spoke links **up** to its money page and every money page links **down** to its spokes (bidirectional cluster).
- [x] Confirm no orphan pages: every new URL is reachable from at least one internal link.

**As built:** `Learn` sits between `Portfolio` and `About Us` in `NAV_ITEMS` (desktop + mobile menu share the array) and between `Projects` and `About Us` in the footer's `quickLinks`. The service-page block is a `Related Reading` / "BEFORE YOU DECIDE." section placed **after the FAQ and before the free-audit form** — a reader who just finished the FAQs and still has questions is exactly the person a guide serves, and the conversion path (audit → CTA) stays last. It renders `articlesForService(service.slug)` in the same bordered `gap-px` `StaggerGroup` grid the `/learn` hub uses, and is conditional, so the 4 services with no spoke yet show nothing rather than an empty heading.

**Verify:**
- [x] `npm run build` green — 34/34; zero prerendered `"status": 404` across all `/learn` and `/services` meta files.
- [x] `/learn` reachable from header **and** footer (2 occurrences of `href="/learn"` in the homepage HTML).
- [x] Bidirectional cluster confirmed for all **6** pairs — service page links down to its spoke *and* the spoke links back up to that service page.
- [x] Services with **no** spoke (`ui-ux-design`, `cloud-solutions`, `managed-it-services`, `graphic-designing`) render no Related Reading block at all.
- [x] No orphans: all 6 article URLs appear on the `/learn` hub, and each is also linked from its money page and from 1–2 sibling articles.
- [x] Nav/footer visuals and animations unchanged — only an array entry was added; the service-page block reuses `Section` / `FadeInUp` / `AccentBar` / `StaggerGroup` with existing brutalist tokens.


---

## Final verification (whole branch)

- [ ] `npm run build` green — static route count **≥ 43** (27 existing + `/learn` + 6 articles + 9 projects).
- [ ] `/sitemap.xml` contains every new URL, all `.org`, no duplicates.
- [ ] `grep -rn "cortexagents\.com" src/ public/` → **zero matches**.
- [ ] All 10 service pages emit a unique 150–160-char meta description.
- [ ] `/about` emits 6 `Person` blocks; homepage Organization has `employee`.
- [ ] Google Rich Results Test on one `/learn/[slug]` and on `/about` → no errors.
- [ ] Zero invented metrics/client names/rankings/volumes in shipped copy.
- [ ] Visual review: no theme, color, or animation change; only genuinely new pages differ.
- [ ] Request-index the new hub URLs in GSC after deploy.

---

## Post-merge follow-ups (not part of this branch)

- After ~4 weeks of GSC data: export the Performance report and re-rank spec §7's keyword map against **real** queries; plan the second spoke batch from that.
- Re-evaluate pSEO industry pages (deferred, score 0) once the `/learn` template has proven itself.
- Case studies with real metrics — blocked on the owner supplying client permission + numbers.

---
**End of plan**

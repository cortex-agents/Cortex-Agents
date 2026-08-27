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

- [ ] Create `src/lib/learn-data.ts` mirroring the `services-data.ts` conventions: exported `Article` interface — `slug`, `title`, `seoTitle`, `metaDescription`, `answerFirst` (≤60-word direct answer), `intent`, `feedsService` (service slug), `sections: { heading, body }[]`, `faqs?: FAQ[]`, `relatedSlugs`, `author` (team member name), `datePublished`, `dateModified`, `readingTime` — plus an empty-for-now `articles: Article[]` array (populated in Task 5).
- [ ] Add `articleSchema(article)` to `schema.ts`: `@type: "Article"`, `headline`, `description`, `image` (default OG), `author` → Person (resolved from `team-data`), `publisher` → Organization, `datePublished`, `dateModified`, `mainEntityOfPage`, `url`.
- [ ] Add `collectionPageSchema({ name, url, description })` and generalize breadcrumbs — refactor `breadcrumbSchema` into a reusable `breadcrumbSchema(trail: {name, url}[])` and update the existing service-page call site to pass its trail (behaviour-identical output).
- [ ] Build `/learn` hub page: intro copy, grid of article cards (reuse existing card/`FadeInUp` patterns), `CollectionPage` + `BreadcrumbList` schema, full metadata (title/description/canonical/OG).
- [ ] Build `/learn/[slug]` page: `generateStaticParams` from `articles`, `generateMetadata` (title/description/canonical/OG per article), renders answer-first block → sections → FAQ → CTA to `feedsService` → author + last-reviewed line; emits `Article` + `BreadcrumbList` + `FAQPage` (when `faqs` present).
- [ ] Extend `src/app/sitemap.ts` to append `/learn` and every `articles` slug — derived from the array, **no hardcoded list**.

**Verify:**
- [ ] `npm run build` green; `/learn` appears as a static route; `/learn/[slug]` shows as ● SSG (0 paths while the array is empty is acceptable at this stage).
- [ ] `/sitemap.xml` includes `/learn`.
- [ ] Existing service pages' breadcrumb JSON-LD output is **byte-identical** to before the refactor (diff the curl output).
- [ ] No theme/color/animation changes; new pages use existing components.

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

- [ ] Write the 6 articles from spec §7 (A1–A6) into `articles`. Each: 1,200–2,000 words, **answer-first** opening (≤60 words that directly answer the title), then definition/comparison table, detail sections, an honest "when this is *not* the right choice" section, 3–5 FAQs, CTA to its `feedsService`, `author` = a real team member, `datePublished`/`dateModified` set.
- [ ] Each article links to **exactly one** money page as its primary target plus 1–2 sibling articles via `relatedSlugs`. Anchors must be natural and varied — **no repeated exact-match anchor text**.
- [ ] A3 (AEO/GEO) must be genuinely useful and non-promotional — it is the differentiator article and the most likely to be cited.
- [ ] `metaDescription` per article: 150–160 chars.
- [ ] Zero invented statistics. Where an industry figure would normally appear, either cite a named public source inline or omit the claim.

**Verify:**
- [ ] `npm run build` green; `/learn/[slug]` shows **6** SSG paths.
- [ ] `/sitemap.xml` contains all 6 article URLs.
- [ ] curl one article → valid `Article` + `BreadcrumbList` + `FAQPage` JSON-LD; canonical + OG are `.org`.
- [ ] Each article's HTML contains a link to its `feedsService` page.
- [ ] Word count per article ≥ 1,200.
- [ ] Manual read-through: no invented metric, no keyword stuffing, answer-first paragraph actually answers the question.

---

## Task 6 — Internal-linking pass + navigation (D6)

**Files:** `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/app/services/[slug]/page.tsx`, `src/lib/services-data.ts` (optional `relatedArticles`)

- [ ] Add `/learn` to the header nav and the footer `quickLinks` (footer array is at `Footer.tsx:10-17`). Keep existing styling/animation patterns exactly.
- [ ] On each service page, render a "Learn more" block listing the articles whose `feedsService` matches that slug — derived from `learn-data`, so it stays in sync automatically. Reuse existing card/section components.
- [ ] Ensure every spoke links **up** to its money page and every money page links **down** to its spokes (bidirectional cluster).
- [ ] Confirm no orphan pages: every new URL is reachable from at least one internal link.

**Verify:**
- [ ] `npm run build` green.
- [ ] `/learn` reachable from header **and** footer.
- [ ] curl `/services/ai-agents` → contains links to A1 and A2; curl `/learn/<A1 slug>` → contains a link back to `/services/ai-agents`.
- [ ] No new route is orphaned (grep the rendered HTML of hubs for each slug).
- [ ] Nav/footer visuals and animations unchanged.

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

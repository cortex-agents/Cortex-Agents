# Phase 2 — Content Engine & Entity Authority — Design Spec

- **Project:** Cortex Agents (`https://cortexagents.org`)
- **Date:** 2026-08-25
- **Methodology:** `/beyond-seo` (source-code audit mode — Mode 3/5 hybrid) + superpowers brainstorming → writing-plans → implement
- **Status:** Design drafted → to be reviewed → then implementation plan
- **Predecessor:** Phase 0+1 Foundation — SHIPPED & LIVE (PR #4 `efcb822`), social/entity link-up (PR #5 `511ecd1`)
- **Audience note:** Owner is an AI + Full-Stack dev with near-zero SEO background. `📚 SEO lesson` notes explain the *why*.

---

## 1. Goal

Phase 0+1 made the site **findable and understandable**. Phase 2 makes it **authoritative and citable** — so that:

1. Cortex Agents ranks for its **own brand name** (`cortex agents`), not only long specific queries.
2. **Team members** are recognized as real people employed by the entity ("Who is Okasha Nadeem at Cortex Agents").
3. The 10 service pages start ranking for **commercial queries** because supporting content feeds them authority.
4. AI answer engines (Google AI Overviews, ChatGPT, Claude, Perplexity) can **cite** the site as a source.

> 📚 **SEO lesson — why content is the "engine":** Foundation = the chassis (Google *can* read you). Content + entity signals = the engine (Google has a *reason* to rank you). A 16-page site with zero informational content has almost nothing to be an authority *about* — so Google only matches it on very specific queries where competition is near-zero. That is exactly the symptom the owner reported.

---

## 2. Owner's reported symptoms → root cause

| Symptom (owner, 2026-08-25) | Confirmed root cause | Fixed by |
|---|---|---|
| "`cortex agents` search pe website nahi aati" | Brand-new domain + thin entity signals; nothing on-site establishes the brand as a notable entity beyond the homepage | D2 (entity/Person schema), D3–D4 (content depth), + time |
| "Kuch services aati hain, kuch nahi" | Service pages have **zero supporting content** pointing at them — no internal link equity, no topical proof | D3–D4 (`/learn` hub + spokes with internal links to money pages) |
| "Kuch team members Google pe nahi aate" | Team is rendered as **UI only** — no `Person` structured data, no machine-readable employment link to the Organization | D2 (Person schema + `employee` on Organization) |
| "Sirf lambi query pe aati hai" | Only exact-match long-tail has low enough competition for a site with no authority | D3–D5 (topical authority + more indexed pages) |

---

## 3. Confirmed audit findings (source-code audit, 2026-08-25)

All findings below were verified by reading the repository — **Confirmed**, not estimated.

| # | Finding | Evidence | Severity |
|---|---|---|---|
| F1 | **Zero informational content.** No `/learn`, no blog, no articles. Site is 16 URLs, all commercial/company pages. | `src/app/` route inventory | **Critical** (for growth) |
| F2 | **`metaDescription` unpopulated on all 10 services.** Field is declared and consumed, but never set — so every service page serves a 77–115-char marketing slogan as its search snippet. | `services-data.ts:34`, `services/[slug]/page.tsx:30` (`?? shortDescription`) | **High** |
| F3 | **No `Person` schema for the 6 team members.** Names, roles, and personal LinkedIn URLs exist in UI only. Google has no machine-readable statement that these people work at Cortex Agents. | `src/components/ourTeam.tsx:10-15` | **High** |
| F4 | **Portfolio has no individual pages.** 9 real projects with live URLs exist as data, rendered on one page. No `/portfolio/[slug]`, so 9 pieces of proof produce **1** indexable URL. | `src/components/data/products.ts`, `src/app/portfolio/page.tsx` | **Medium** |
| F5 | **No `Article`/`BlogPosting`, `AboutPage`, or `CreativeWork` schema** anywhere — because there is no content to attach them to yet. | `grep JsonLd` → only layout + service pages | Medium (unlocked by D3–D5) |
| F6 | FAQ content is **strong** (all 10 services have `faqs`, already in `FAQPage` schema). Good AEO base to build on. | `services-data.ts`, `services/[slug]/page.tsx:65` | — (strength) |
| F7 | **No real client case-study data.** Portfolio projects are largely demo/hackathon builds on `*.vercel.app` with no client names and **no measurable results**. | `src/components/data/products.ts` | Constraint |

---

## 4. Data availability & honesty constraints

| Source | Status | Consequence |
|---|---|---|
| `APIFY_API_TOKEN` | **Not present** in the runtime shell | No live SERP/volume/backlink scraping this cycle |
| GSC (Search Console) | **Connected & verified**, but property is ~2 days old — not enough query data yet | Keyword picks this cycle are **Directional**, derived from existing service/FAQ content + intent logic — **not** verified search volumes |
| GA4 | Not set up (Phase 3) | No conversion data |
| Client results/metrics | **None available** | **No case studies with numbers.** Project pages will describe the real build honestly, with zero invented metrics |

> **Non-negotiable:** no invented search volumes, rankings, traffic, client names, or results anywhere in Phase 2 output. Where a number would be expected and is unavailable, the content omits it rather than estimating it.
>
> **Re-prioritization checkpoint:** once GSC has ~4 weeks of data, pull the Performance report (queries + impressions + position) and re-rank the keyword→page map against **real** data.

---

## 5. Strategy — hub & cluster

```
Homepage  ───────────────────────────────┐
                                         │
/services (hub)                          │  internal links
  └── /services/[10 money pages] ◄───────┤
                                         │
/learn (content hub)                     │
  └── /learn/[spoke articles] ───────────┘   each spoke links to 1 money page
                                             + 1 sibling spoke

/portfolio (proof hub)
  └── /portfolio/[9 project pages] ──────►  links to the service it demonstrates

/about  ── Person schema × 6 ──►  Organization (employee)
```

> 📚 **SEO lesson — why hub & cluster, not "random blogs":** Google judges topical authority by *clusters*, not isolated posts. Ten unrelated articles teach Google nothing. Six articles that all orbit "AI agents / automation" and link into `/services/ai-agents` tell Google: *this site is about AI agents.* Every article must have a job — rank for a long-tail query **and** pass authority to a money page.

---

## 6. Deliverables (priority-scored)

Scoring per `/beyond-seo` §19: `Priority = Impact + Confidence − Effort − Risk` (each 1–5).

| ID | Deliverable | I | C | E | R | Score | Label |
|---|---|---|---|---|---|---|---|
| **D1** | Populate `metaDescription` for all 10 services (150–160 chars, keyword + benefit + soft CTA) | 3 | 5 | 1 | 1 | **6** | Must Fix Now |
| **D2** | Entity layer: `Person` schema × 6 team members + `employee` on Organization + `AboutPage` schema; anchor IDs per member | 4 | 4 | 2 | 1 | **5** | Must Fix Now |
| **D3** | `/learn` hub infrastructure: route, article data layer, `Article` schema, breadcrumbs, sitemap integration, hub page listing | 5 | 4 | 3 | 1 | **5** | High Impact Next |
| **D4** | First spoke batch — 6 articles (§7), each 1,200–2,000 words, answer-first, internally linked to its money page | 5 | 4 | 5 | 2 | **2** | Strategic Build |
| **D5** | `/portfolio/[slug]` project pages × 9 (honest build write-ups, `CreativeWork` schema, link to the service demonstrated) | 3 | 4 | 3 | 1 | **3** | High Impact Next |
| **D6** | Internal-linking pass: money pages ↔ spokes ↔ project pages; `/learn` surfaced in header/footer nav | 4 | 4 | 2 | 1 | **5** | Must Fix Now (after D4) |
| — | ~~pSEO industry pages~~ ("AI agents for real estate" × N) | 4 | 3 | 4 | 3 | **0** | **Deferred** — thin-content risk until D3/D4 prove the template |

**Build order:** D1 → D2 → D3 → D5 → D4 → D6.
Rationale: D1/D2 are same-day wins that directly address two reported symptoms; D3 unlocks D4; D5 is quick volume from data that already exists; D4 is the long build; D6 wires everything together once targets exist.

---

## 7. Keyword → page map (⚠️ Directional — no verified volumes)

Selected on `business value × ranking feasibility × intent strength × AEO citation potential`, per `/beyond-seo` §9. Labels: **AEO Opportunity** = definition/comparison query likely to be quoted by answer engines; **Missing Money Page** support = feeds a commercial page.

| # | Working title | Primary intent | Feeds money page | Label |
|---|---|---|---|---|
| A1 | What Is an AI Agent? Definition, Types, and Real Business Use Cases | Definition / informational | `/services/ai-agents` | AEO Opportunity |
| A2 | AI Agent vs AI Chatbot vs Automation: What's Actually Different? | Comparison | `/services/ai-agents` + `/services/ai-chatbots` | AEO Opportunity |
| A3 | What Are AEO and GEO? How to Get Your Brand Cited by ChatGPT, Claude, and Perplexity | Definition / emerging | `/services/seo-optimization` | AEO Opportunity + differentiator |
| A4 | How Much Does a Custom Web Application Cost? A Realistic 2026 Breakdown | Cost / commercial-investigation | `/services/web-development` + `/services/custom-saas-enterprise` | High commercial value |
| A5 | Hire Dedicated Developers vs Freelancers vs In-House: Cost and Risk Breakdown | Comparison / commercial | `/services/dedicated-teams` | High commercial value |
| A6 | Next.js vs WordPress for Business Websites: Performance, SEO, and Cost | Comparison | `/services/web-development` | Topical authority builder |

> 📚 **SEO lesson — why definition and comparison articles first:** AI answer engines and Google's AI Overviews prefer sources that answer a question **directly, in the first paragraph, with structure**. "What is X?" and "X vs Y" pages are the most-cited content shapes on the web. They also rank faster than commercial keywords because competition is lower — and they hand their visitors straight to the matching service page.

**Required article shape (every spoke):**
answer-first opening paragraph (≤60 words, directly answers the title question) → definition/table → detail sections → honest limitations/when-not-to → FAQ block → CTA to the money page → author + last-reviewed date.

---

## 8. Schema additions

| Schema | Where | Purpose |
|---|---|---|
| `Person` × 6 (`name`, `jobTitle`, `worksFor` → Organization, `sameAs` → LinkedIn, `image`) | `/about` | Makes team members machine-readable entities — fixes F3 |
| `employee: [Person…]` added to `organizationSchema()` | site-wide | Binds people to the company both ways |
| `AboutPage` | `/about` | Declares page type |
| `Article` (+ `author` → Person, `datePublished`, `dateModified`, `mainEntityOfPage`) | each `/learn/[slug]` | Article eligibility + E-E-A-T authorship |
| `BreadcrumbList` | `/learn`, `/learn/[slug]`, `/portfolio/[slug]` | Reuse existing builder pattern |
| `CollectionPage` | `/learn`, `/portfolio` | Declares hub pages |
| `CreativeWork` | each `/portfolio/[slug]` | Describes the project as a work, linked to the service it demonstrates |
| `FAQPage` | each `/learn/[slug]` with a FAQ block | Reuse existing `faqPageSchema()` |

All builders extend `src/lib/schema.ts`, all URLs via `absoluteUrl()` — **no hardcoded domains** (Locked decision #1).

---

## 9. Non-goals (explicitly out of scope this cycle)

- Case studies with client names or performance metrics — **no data exists** (F7). Revisit when the owner supplies real results.
- pSEO industry pages — deferred (score 0) until the `/learn` template is proven.
- USD pricing UI, `offers` schema, GA4/analytics — Phase 3.
- Backlinks, directories, GBP verification, professional email — Phase 4 / off-page track, running separately.
- Any change to theme, colors, animations, or layout aesthetics — **hard constraint** from `../CLAUDE.md`. New pages must reuse existing components and the "Cyber Chrome & Neural Azure" system.

---

## 10. Acceptance criteria

1. `npm run build` green; page count rises from 27 to **≥ 27 + 1 (`/learn`) + 6 (spokes) + 9 (projects) = 43** static routes.
2. `sitemap.xml` auto-includes every new URL — **no manual list** (extends the existing `servicesData`-driven pattern).
3. All 10 service pages emit a unique 150–160-char `metaDescription`.
4. `/about` emits 6 valid `Person` objects, each with `worksFor` and `sameAs`.
5. Every spoke article emits `Article` + `BreadcrumbList` (+ `FAQPage` where a FAQ block exists) and links to exactly one money page.
6. Zero `cortexagents.com` anywhere in `src/` or `public/`.
7. Zero invented metrics, client names, rankings, or search volumes in shipped copy.
8. No theme/color/animation changes; visual diff limited to genuinely new pages.

---

## 11. Data gaps / next checks

| Gap | How to close |
|---|---|
| Real query data for keyword validation | GSC → Performance → export queries after ~4 weeks (property verified 2026-08-23) |
| Competitor content depth | Apify SERP actor once `APIFY_API_TOKEN` is available in the runtime, or manual SERP review |
| Client results for case studies | Owner to supply 2–3 real engagements with permission + numbers |
| Rich-result validity of new schema | Google Rich Results Test on one `/learn/[slug]` and `/about` post-deploy |

---
**End of spec**

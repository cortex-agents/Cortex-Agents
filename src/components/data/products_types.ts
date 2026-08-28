export interface Product {
    id: number;
    /** URL segment for the detail page: /portfolio/<slug>. Stable — changing it breaks the canonical. */
    slug: string;
    title: string;
    description: string;
    image: string;
    /** Live deployment. Rendered as an external CTA and as schema `sameAs` — never as the canonical. */
    link: string;
    tags: string[];
    gradient: string;

    // ── Detail-page + SEO fields ─────────────────────────────────────────────
    /** <title> for the detail page. The root layout appends " | Cortex Agents". */
    seoTitle: string;
    /** SERP ad copy, 150–160 chars. */
    metaDescription: string;
    /** Service slugs from services-data that this build demonstrates. Drives the
     *  "Services applied" links and schema `about`, so a project page always
     *  points back at the money pages it is evidence for. */
    servicesUsed: string[];
    /** The problem the build had to solve, in prose. */
    challenge: string;
    /** What we actually did, as ordered steps. */
    approach: string[];
    /** Qualitative results only — no invented metrics, client names, or timelines. */
    outcome: string[];
    /** Technologies used. Superset of `tags`, which stay short for the grid. */
    stack: string[];
}

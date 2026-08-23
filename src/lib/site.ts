// src/lib/site.ts
// Single source of truth for the site's canonical domain and identity.
// Every canonical URL, sitemap entry, robots host, OpenGraph URL, and JSON-LD
// URL MUST derive from here — never hardcode the domain again.

export const SITE_URL = "https://cortexagents.org";

export const SITE_NAME = "Cortex Agents";

export const SITE_DESCRIPTION =
  "Cortex Agents engineers intelligent software systems. From autonomous AI agents to high-performance Next.js web applications, we automate workflows and drive business growth.";

export const DEFAULT_OG_IMAGE = "/logo_dark.png";

// Contact / NAP — kept from the existing Organization block (Hybrid positioning).
export const CONTACT = {
  telephone: "+92-321-232-2687",
  addressLocality: "Karachi",
  addressCountry: "PK",
  availableLanguage: ["English", "Urdu"],
} as const;

// Social / entity profiles used for schema `sameAs`.
export const SOCIAL_LINKS = [
  "https://www.facebook.com/profile.php?id=61582835397946",
  "https://www.instagram.com/cortex_agents",
];

// Global keyword set (Hybrid: keep local identity + add worldwide intent).
export const SITE_KEYWORDS = [
  "AI Agents",
  "AI Automation Agency",
  "Next.js Development",
  "Web Development Services",
  "AI Chatbots",
  "Custom Software Development",
  "SaaS Development",
  "Hire Dedicated Developers",
  "Software Engineering Agency",
  "Karachi Web Agency",
];

// Build an absolute URL from a root-relative path (e.g. "/services/ai-agents").
export function absoluteUrl(path = ""): string {
  return `${SITE_URL}${path}`;
}

// Shared OpenGraph base spread into per-page `openGraph` objects. The page's
// own title/description/url are spread AFTER this so they win. Relative image
// URL resolves against the root `metadataBase` (https://cortexagents.org).
export const OG_BASE = {
  type: "website" as const,
  siteName: SITE_NAME,
  images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
};

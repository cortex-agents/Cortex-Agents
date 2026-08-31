/**
 * GA4 wiring.
 *
 * Every helper here is a no-op until `NEXT_PUBLIC_GA_ID` is present in the
 * environment. That keeps local dev and Vercel preview builds out of the
 * production property, and lets the site ship analytics-ready so switching it
 * on later is an env var + redeploy rather than a code change.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const analyticsEnabled = GA_ID.length > 0;

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

/**
 * Guarded so a missing env var, a server render, or a viewer whose blocker ate
 * gtag.js all fail silently instead of throwing inside a form submit handler.
 */
function gtag(...args: GtagArgs) {
  if (!analyticsEnabled || typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  gtag("event", name, params);
}

/**
 * Only for client-side route changes. The initial load is reported by gtag.js
 * itself, which reads the real URL (query string included, so UTM attribution
 * survives) — see the first-render skip in `Analytics.tsx`.
 */
export function trackPageview(path: string) {
  gtag("event", "page_view", {
    page_path: path,
    page_location: typeof window === "undefined" ? undefined : window.location.href,
    page_title: typeof document === "undefined" ? undefined : document.title,
  });
}

/** Which form produced a lead — all three report the same GA4 conversion. */
export type LeadSource = "audit_form" | "contact_form" | "collaborate_form";

/**
 * `generate_lead` is a GA4 recommended event name, so it maps onto the built-in
 * reports and can be flipped into a key event in the GA4 UI without extra
 * config. `form` and `service` are custom params — register them as custom
 * dimensions in GA4 to break leads down by source and by service interest.
 */
export function trackLead(source: LeadSource, service?: string) {
  trackEvent("generate_lead", {
    form: source,
    ...(service ? { service } : {}),
  });
}

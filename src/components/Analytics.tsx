"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { GA_ID, analyticsEnabled, trackPageview } from "@/lib/analytics";

/**
 * GA4 loader + client-side pageview reporting.
 *
 * `lazyOnload` is deliberate: gtag.js is the single heaviest third-party script
 * on the site and this project is held to a 100% Lighthouse performance score.
 * Loading it during browser idle time after `window.load` keeps it out of the
 * LCP/TBT measurement window. The cost is that a visitor who leaves within the
 * first second may go uncounted — an acceptable trade at current traffic.
 */
export default function Analytics() {
  if (!analyticsEnabled) return null;

  return (
    <>
      <Script
        id="ga-loader"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <PageviewTracker />
    </>
  );
}

function PageviewTracker() {
  const pathname = usePathname();
  // gtag.js reports the entry page itself on load, so reporting it again here
  // would double-count it.
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    // Read the live URL instead of useSearchParams() — that hook forces a
    // Suspense boundary and de-opts static rendering for every page in the app.
    trackPageview(window.location.pathname + window.location.search);
  }, [pathname]);

  return null;
}

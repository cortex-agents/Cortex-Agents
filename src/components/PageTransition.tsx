"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Wraps page content with a smooth fade transition on route changes.
 * Uses a ref to apply styles directly to the element — no wrapper div.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Animate out
    el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";

    // Animate in after next paint
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

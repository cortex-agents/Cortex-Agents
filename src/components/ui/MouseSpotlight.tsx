"use client";

import { useEffect } from "react";

export default function MouseSpotlight() {
  useEffect(() => {
    let ticking = false;

    // Throttling for better performance
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          document.documentElement.style.setProperty('--mouse-x', `${x}%`);
          document.documentElement.style.setProperty('--mouse-y', `${y}%`);
          ticking = false;
        });
      }
    };

    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface UseScrollRevealOptions {
  /** Threshold for intersection (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for triggering. Default: '0px 0px -60px 0px' */
  rootMargin?: string;
  /** Whether to unobserve after reveal. Default: true */
  triggerOnce?: boolean;
}

/**
 * Lightweight scroll reveal hook using IntersectionObserver.
 * No external libraries — pure browser API.
 */
export function useScrollReveal(
  options: UseScrollRevealOptions = {}
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px 0px -60px 0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observe = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      if (isVisible && triggerOnce) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) observer.disconnect();
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(node);
      return () => observer.disconnect();
    },
    [threshold, rootMargin, triggerOnce, isVisible]
  );

  useEffect(() => {
    return observe(ref.current);
  }, [observe]);

  return [ref, isVisible];
}

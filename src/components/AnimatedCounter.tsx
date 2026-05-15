'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    const startAnimation = () => {
      hasAnimated.current = true;
      const startTime = Date.now();

      let frameId: number;
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * target);

        setCount(currentCount);

        if (progress < 1) {
          frameId = requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      frameId = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(frameId);
    };

    // Use requestIdleCallback if available, otherwise fallback to setTimeout
    let cleanup: (() => void) | undefined;
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => {
        cleanup = startAnimation();
      });
      return () => {
        if (handle) window.cancelIdleCallback(handle);
        if (cleanup) cleanup();
      };
    } else {
      const timer = setTimeout(() => {
        cleanup = startAnimation();
      }, 200);
      return () => {
        clearTimeout(timer);
        if (cleanup) cleanup();
      };
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className} aria-live="polite" aria-atomic="true">
      {count}{suffix}
    </span>
  );
}

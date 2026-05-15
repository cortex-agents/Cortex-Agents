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
  const [count, setCount] = useState(target); // start at target to avoid SSR mismatch
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const startTime = performance.now();
        let frameId: number;

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };

        setCount(0);
        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${target}${suffix}`}>
      {count}{suffix}
    </span>
  );
}

"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export interface TextRevealProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  /** Delay between each character reveal in ms. Default: 30ms */
  charDelay?: number;
  /** Delay before the whole text starts revealing. Default: 0 */
  delay?: number;
}

/**
 * Staggered character-by-character reveal for headings.
 * GPU-accelerated, no layout thrashing.
 */
export default function TextReveal({
  children,
  as: As = "h2",
  className = "",
  charDelay = 30,
  delay = 0,
}: TextRevealProps) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  const chars = children.split("");

  return (
    <As ref={ref} className={className}>
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: `opacity 0.4s ease ${delay + i * charDelay}ms, transform 0.4s ease ${delay + i * charDelay}ms`,
          }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </As>
  );
}

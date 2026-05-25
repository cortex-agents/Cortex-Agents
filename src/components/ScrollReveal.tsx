"use client";

import { useScrollReveal, UseScrollRevealOptions } from "@/hooks/useScrollReveal";

export interface ScrollRevealProps extends UseScrollRevealOptions {
  children: React.ReactNode;
  className?: string;
  /** Animation type. Default: "fade-up" */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";
  /** Stagger delay in ms. Default: 0 */
  delay?: number;
  /** Duration of the reveal animation. Default: 600ms */
  duration?: number;
}

const VARIANT_STYLES: Record<string, string> = {
  "fade-up": "translateY(30px)",
  "fade-in": "translateY(0)",
  "fade-left": "translateX(30px)",
  "fade-right": "translateX(-30px)",
  "scale-in": "scale(0.95)",
};

/**
 * Wraps children with a scroll-triggered reveal animation.
 * GPU-accelerated (opacity + transform only).
 */
export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 600,
  ...options
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal(options);
  const initialTransform = VARIANT_STYLES[variant] || VARIANT_STYLES["fade-up"];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : initialTransform,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

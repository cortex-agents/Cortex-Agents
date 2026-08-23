"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

// ─── Shared Variants ──────────────────────────────────────────────────────────

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0, 0, 1] as [number, number, number, number],
    },
  },
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const accentBarVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.35,
      delay: 0.15,
      ease: [0.25, 0, 0, 1] as [number, number, number, number],
    },
  },
};

// ─── FadeInUp ─────────────────────────────────────────────────────────────────
// Wraps any element with a once-only fade-in + slide-up on scroll

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInUp({ children, className, delay = 0 }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.25, 0, 0, 1] as [number, number, number, number],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerGroup ─────────────────────────────────────────────────────────────
// Container that staggers its StaggerItem children at 80ms intervals

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  // `amount: "some"` fires as soon as any part of the container scrolls into
  // view. A fixed fraction (e.g. 0.1) never triggers on mobile where a
  // single-column grid can be far taller than the viewport, leaving children
  // stuck at opacity:0.
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: "some" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ──────────────────────────────────────────────────────────────
// Direct child of StaggerGroup — inherits stagger timing automatically

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={fadeInUpVariants}>
      {children}
    </motion.div>
  );
}

// ─── AccentBar ────────────────────────────────────────────────────────────────
// The w-16 h-1 bg-accent bars — animates scaleX 0→1 from left on scroll

interface AccentBarProps {
  className?: string;
}

export function AccentBar({ className = "w-16 h-1 bg-accent" }: AccentBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ originX: 0 }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={accentBarVariants}
    />
  );
}

// ─── CounterStat ──────────────────────────────────────────────────────────────
// Animated number counter — counts from 0 to target value when scrolled into view

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CounterStat({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 1.2,
}: CounterStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

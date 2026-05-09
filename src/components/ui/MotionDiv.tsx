"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

// A thin client wrapper around motion.div so Server Components can use animations
// without needing "use client" on the entire page
export function MotionDiv(props: HTMLMotionProps<"div"> & { children?: React.ReactNode }) {
  return <motion.div {...props} />;
}

export function MotionH1(props: HTMLMotionProps<"h1"> & { children?: React.ReactNode }) {
  return <motion.h1 {...props} />;
}

export function MotionH2(props: HTMLMotionProps<"h2"> & { children?: React.ReactNode }) {
  return <motion.h2 {...props} />;
}

export function MotionP(props: HTMLMotionProps<"p"> & { children?: React.ReactNode }) {
  return <motion.p {...props} />;
}

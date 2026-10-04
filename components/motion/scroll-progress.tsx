"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

/** Thin brand-gradient bar along the top edge that tracks page scroll. */
export function ScrollProgress() {
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-brand-gradient"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  );
}

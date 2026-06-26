"use client";

import * as React from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

export interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Renders the final value immediately under reduced motion.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const reduce = usePrefersReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 70,
    damping: 22,
    mass: 1,
  });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView && !reduce) {
      motionValue.set(value);
    }
  }, [inView, reduce, value, motionValue]);

  React.useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const unsub = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return () => unsub();
  }, [spring, reduce, value]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}

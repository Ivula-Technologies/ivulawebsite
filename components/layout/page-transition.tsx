"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

/**
 * Smooth fade/slide between routes. Keyed on pathname so each page
 * animates in. Skipped entirely under reduced motion.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = usePrefersReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

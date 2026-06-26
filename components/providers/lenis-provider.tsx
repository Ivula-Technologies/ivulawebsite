"use client";

import * as React from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

/**
 * Smooth scrolling via Lenis. Disabled under reduced motion so we never
 * override the user's accessibility preference or hurt usability.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduce = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Smooth-scroll same-page anchor links.
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -90 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [reduce]);

  return <>{children}</>;
}

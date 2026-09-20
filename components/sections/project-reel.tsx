"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

export function ProjectReel() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) {
      video?.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <Link
      href="/contact"
      className="group relative flex min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-950 text-white shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.025]"
        muted
        loop
        playsInline
        preload="none"
        poster="/media/ivula-work-reel-poster.svg"
        aria-hidden="true"
      >
        <source src="/media/ivula-work-reel.mp4" type="video/mp4" />
        <source src="/media/ivula-work-reel.webm" type="video/webm" />
        Your browser does not support background video.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

      <div className="relative z-10 mt-auto flex w-full items-end justify-between gap-6 p-7 sm:p-9">
        <div>
          <span className="mb-4 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
            <Clapperboard className="size-4" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Project reel
          </p>
          <h3 className="mt-2 max-w-md font-display text-2xl font-bold sm:text-3xl">
            Have an idea that belongs in this reel?
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            Bring us the operational challenge. We will help shape, design,
            build, and launch the software around it.
          </p>
        </div>
        <span className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-white text-navy-950 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:flex">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </Link>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Looping tech clips made for this site (see scripts/hero-video). Each has a
 * desktop webm + mp4, a small mp4 for phones and a poster frame.
 */
export type HeroClip = "home" | "code" | "servers" | "network";

type Sources = { webm?: string; mp4: string };

/**
 * Muted, looping video behind a hero, with a dark overlay so text stays
 * readable. The poster shows first; the video is only fetched after the page
 * loads, never when the visitor asks for reduced motion or data saving, and
 * pauses while scrolled out of view.
 */
export function VideoBackground({
  clip,
  overlay = "center",
}: {
  clip: HeroClip;
  /** "left" keeps the left side darkest, for left-aligned hero text. */
  overlay?: "center" | "left";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [sources, setSources] = useState<Sources | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return;
    const small = window.matchMedia("(max-width: 767px)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only choice, made once after hydration
    setSources(
      small
        ? { mp4: `/video/${clip}-sm.mp4` }
        : { webm: `/video/${clip}.webm`, mp4: `/video/${clip}.mp4` }
    );
  }, [clip]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [sources]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-navy-950" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/video/${clip}-poster.webp)` }}
      />
      {sources && (
        <video
          ref={ref}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0"
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
        >
          {sources.webm && <source src={sources.webm} type="video/webm" />}
          <source src={sources.mp4} type="video/mp4" />
        </video>
      )}
      <div
        className={cn(
          "absolute inset-0",
          overlay === "left"
            ? "bg-gradient-to-r from-navy-950/90 via-navy-950/65 to-navy-950/35"
            : "bg-[radial-gradient(ellipse_at_center,rgba(7,12,29,0.88)_0%,rgba(7,12,29,0.7)_45%,rgba(7,12,29,0.35)_100%)]"
        )}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/90 to-transparent" />
    </div>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Brand mark. Swap the SVG path / wordmark here to rebrand everywhere.
 */
export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight",
        className
      )}
      aria-label={`${site.name} home`}
    >
      <span className="relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-brand-gradient shadow-glow">
        {/* Stylized "i" / canopy mark — replace with your real logo SVG */}
        <svg
          viewBox="0 0 32 32"
          className="size-5 text-white"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M16 4C9 9 6 14 6 19a10 10 0 0 0 20 0c0-5-3-10-10-15Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          <circle cx="16" cy="20" r="3" fill="#0e1733" />
        </svg>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </span>
      {showWord && (
        <span className="leading-none">
          Ivula<span className="text-cyan-500">.</span>
        </span>
      )}
    </Link>
  );
}

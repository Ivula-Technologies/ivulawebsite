import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Tasteful browser/device chrome around a product screenshot.
 *
 * Swap the screenshot by replacing the file at `src`
 * (placeholders live in /public/screenshots — clearly marked).
 */
export function BrowserFrame({
  src,
  alt,
  className,
  url = "app.ivulatechnologies.com",
}: {
  src: string;
  alt: string;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft-lg ring-divider",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-amber-400/80" />
        <span className="size-3 rounded-full bg-emerald-400/80" />
        <div className="ml-3 hidden flex-1 sm:block">
          <div className="mx-auto w-fit rounded-md bg-background/70 px-3 py-1 text-xs text-muted-foreground">
            {url}
          </div>
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-top"
          priority={false}
        />
      </div>
    </div>
  );
}

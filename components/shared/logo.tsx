import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

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
      <span className="relative inline-flex size-9 items-center justify-center">
        <Image
          src="/ivula-mark.svg"
          alt=""
          width={36}
          height={36}
          className="size-9"
          priority
        />
      </span>
      {showWord && (
        <span className="leading-none text-navy-900 dark:text-white">
          Ivula<span className="ml-1 text-[0.62em] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Tech</span>
        </span>
      )}
    </Link>
  );
}

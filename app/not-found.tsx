import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/shared/aurora-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <AuroraBackground />
      <div className="container-wide relative">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="font-display text-7xl font-bold text-gradient sm:text-8xl">
            404
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-3 text-muted-foreground">
            The page may have moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <Link href="/">
                <Home className="size-4" /> Back home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                Explore products <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

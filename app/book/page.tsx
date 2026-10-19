import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { BookCall, BookCallFromQuery } from "@/components/booking/book-call";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a free one-on-one Google Meet call with Bius, founder of Ivula Technologies, about any Ivula product, a custom build, hosting or a partnership.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a call"
        title={
          <>
            Talk to Bius, <span className="text-gradient">one on one.</span>
          </>
        }
        description="Pick a time that suits you for a free 30-minute Google Meet call. Bring your questions about any Ivula product, a project you want built, hosting, or a partnership."
      />
      <section className="pb-20">
        <div className="container-wide max-w-5xl">
          {/* useSearchParams needs a Suspense boundary in a static export. */}
          <Suspense fallback={<BookCall topic="" />}>
            <BookCallFromQuery />
          </Suspense>
        </div>
      </section>
    </>
  );
}

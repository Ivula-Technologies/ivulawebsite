"use client";

import { useSearchParams } from "next/navigation";
import { CalendarClock, Check, ExternalLink, Mail, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

/**
 * Every Ivula app links here as /book?about=<app>, so the visitor sees what
 * the call is about and the email fallback carries it in the subject.
 */
const topics: Record<string, string> = {
  canopy: "Ivula Canopy",
  leadfast: "LeadFast AI",
  proposalkit: "ProposalKit",
  shelfkeeper: "ShelfKeeper",
  wakilinivo: "WakiliNivo",
  hosting: "Ivula Hosting",
  "care-plans": "Care Plans",
  studio: "a custom software project",
};

const expectations = [
  "30 minutes on Google Meet, free",
  "The Meet link arrives in your calendar invite",
  "Reschedule or cancel from the invite at any time",
];

/** Google appointment schedules can be embedded with ?gv=true. */
function embedUrl(url: string) {
  if (!url.includes("calendar.google.com/calendar/appointments")) return "";
  return url + (url.includes("?") ? "&" : "?") + "gv=true";
}

export function BookCallFromQuery() {
  const params = useSearchParams();
  return <BookCall topic={params.get("about") ?? ""} />;
}

export function BookCall({ topic }: { topic: string }) {
  const about = topics[topic];
  const bookingUrl = site.bookingUrl;
  const embed = embedUrl(bookingUrl);

  const subject = about ? `Call request: ${about}` : "Call request";
  const body = [
    "Hi Bius,",
    "",
    `I'd like to book a Google Meet call${about ? ` about ${about}` : ""}.`,
    "",
    "Times that work for me (with my time zone):",
    "1.",
    "2.",
    "",
    "What I'd like to talk about:",
    "",
  ].join("\n");
  const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal direction="up">
        <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
            <Video className="size-6" />
          </span>
          <h2 className="font-display text-2xl font-bold">
            {about ? `A call about ${about}` : "A call with the founder"}
          </h2>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            {expectations.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Can&apos;t find a time that works? Email{" "}
            <a href={mailto} className="font-medium text-foreground underline-offset-4 hover:underline">
              {site.contact.email}
            </a>{" "}
            and we&apos;ll fit you in.
          </p>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.05}>
        {embed ? (
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft-lg">
            <iframe
              src={embed}
              title="Book a Google Meet call with Bius"
              className="h-[720px] w-full border-0"
              loading="lazy"
            />
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-t border-border bg-card px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Open the booking page in a new tab <ExternalLink className="size-4" />
            </a>
          </div>
        ) : (
          <div className="flex h-full flex-col items-start justify-center gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft-lg">
            <CalendarClock className="size-10 text-cyan-600 dark:text-cyan-400" />
            <h2 className="font-display text-2xl font-bold">
              {bookingUrl ? "Choose a time" : "Request a time"}
            </h2>
            <p className="text-muted-foreground">
              {bookingUrl
                ? "Open the booking page, pick a slot and you'll get a calendar invite with the Google Meet link."
                : "Send two or three times that suit you and we'll reply with a calendar invite and a Google Meet link, usually within one business day."}
            </p>
            {bookingUrl ? (
              <Button asChild variant="gradient" size="xl">
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  Open the booking page <ExternalLink className="size-4" />
                </a>
              </Button>
            ) : (
              <Button asChild variant="gradient" size="xl">
                <a href={mailto}>
                  <Mail className="size-4" /> Email your preferred times
                </a>
              </Button>
            )}
          </div>
        )}
      </Reveal>
    </div>
  );
}

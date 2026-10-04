"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { engagements } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const projectTypes = [
  ...engagements.map((e) => ({ value: e.slug, label: e.name })),
  { value: "existing", label: "Improve an existing product" },
  { value: "other", label: "Something else" },
] as const;

const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
] as const;

const timelines = [
  "As soon as possible",
  "Within 1–3 months",
  "3+ months out",
  "Just exploring",
] as const;

type Status = "idle" | "submitting" | "sent" | "mailto" | "error";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 hover:border-cyan-500/40 focus:-translate-y-px focus:border-cyan-500 focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan-500/30";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
      {children}
      {optional && (
        <span className="ml-1 font-normal text-muted-foreground">(optional)</span>
      )}
    </label>
  );
}

/**
 * Project brief form. Posts to `site.leadFormEndpoint` when configured and
 * otherwise opens the visitor's email app with the brief pre-filled, so no
 * enquiry is lost on the static cPanel build.
 */
export function ProjectBriefForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const typeRef = React.useRef<HTMLSelectElement>(null);

  // Engagement CTAs link here with ?type=<slug> to preselect the project type.
  React.useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("type");
    if (typeRef.current && projectTypes.some((t) => t.value === requested)) {
      typeRef.current.value = requested as string;
    }
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (data.get("website")) {
      setStatus("sent");
      return;
    }

    const typeLabel =
      projectTypes.find((t) => t.value === data.get("projectType"))?.label ??
      "Project";
    const fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      projectType: typeLabel,
      budget: String(data.get("budget") ?? ""),
      timeline: String(data.get("timeline") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    if (!site.leadFormEndpoint) {
      const body = [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        fields.company && `Company: ${fields.company}`,
        `Project type: ${fields.projectType}`,
        `Budget: ${fields.budget}`,
        `Timeline: ${fields.timeline}`,
        "",
        fields.message,
      ]
        .filter((line) => line !== "")
        .join("\n");
      const subject = `${fields.projectType} enquiry from ${fields.name}`;
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.leadFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...fields,
          _subject: `${fields.projectType} enquiry from ${fields.name}`,
          source: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-soft-lg",
          className
        )}
        role="status"
      >
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
        >
          <CheckCircle2 className="size-12 text-emerald-500" />
        </motion.span>
        <h3 className="font-display text-2xl font-bold">
          {status === "sent" ? "Thanks, your brief is in." : "Almost there."}
        </h3>
        <p className="max-w-md text-muted-foreground">
          {status === "sent"
            ? "A member of our team will reply within one business day with next steps and a few questions to sharpen the estimate."
            : `Your email app should have opened with your brief filled in. Just press send. If nothing opened, email us at ${site.contact.email}.`}
        </p>
        {site.bookingUrl && (
          <Button asChild variant="gradient" size="lg">
            <a href={site.bookingUrl} target="_blank" rel="noreferrer">
              Skip the wait and book a call <ArrowRight className="size-4" />
            </a>
          </Button>
        )}
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative grid gap-5 rounded-3xl border border-border bg-card p-6 text-left shadow-soft-lg sm:grid-cols-2 sm:p-8",
        className
      )}
    >
      <div>
        <Label htmlFor="brief-name">Name</Label>
        <input
          id="brief-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          className={fieldClass}
        />
      </div>
      <div>
        <Label htmlFor="brief-email">Work email</Label>
        <input
          id="brief-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className={fieldClass}
        />
      </div>
      <div>
        <Label htmlFor="brief-company" optional>
          Company
        </Label>
        <input
          id="brief-company"
          name="company"
          autoComplete="organization"
          placeholder="Company or project name"
          className={fieldClass}
        />
      </div>
      <div>
        <Label htmlFor="brief-type">What do you need?</Label>
        <select
          id="brief-type"
          name="projectType"
          ref={typeRef}
          defaultValue="mvp"
          className={fieldClass}
        >
          {projectTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="brief-budget">Budget range</Label>
        <select
          id="brief-budget"
          name="budget"
          defaultValue="Not sure yet"
          className={fieldClass}
        >
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="brief-timeline">Timeline</Label>
        <select
          id="brief-timeline"
          name="timeline"
          defaultValue="Within 1–3 months"
          className={fieldClass}
        >
          {timelines.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="brief-message">What are you trying to achieve?</Label>
        <textarea
          id="brief-message"
          name="message"
          required
          rows={5}
          placeholder="The problem, who has it, and what a great outcome looks like. Links to docs or designs help."
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      {/* Honeypot field for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="brief-website">Website</label>
        <input id="brief-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="size-3.5" />
          No spam, no obligation. Happy to sign an NDA first.
        </p>
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Get my free estimate <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive sm:col-span-2" role="alert">
          Something went wrong sending your brief. Please email{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
            {site.contact.email}
          </a>{" "}
          and we&apos;ll pick it up from there.
        </p>
      )}
    </form>
  );
}

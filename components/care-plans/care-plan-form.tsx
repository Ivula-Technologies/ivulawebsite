"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carePlans } from "@/lib/care-plans";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const planOptions = [
  ...carePlans.map((p) => ({ value: p.slug, label: `${p.name} · $${p.monthly}/mo` })),
  { value: "partner", label: "Agency partner (white-label)" },
  { value: "unsure", label: "Not sure yet" },
] as const;

const platforms = [
  "WordPress",
  "WooCommerce",
  "Static or custom site",
  "Web app built by Ivula",
  "Something else",
] as const;

type Status = "idle" | "submitting" | "sent" | "mailto" | "error";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 hover:border-cyan-500/40 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30";

/**
 * Care plan sign-up. Posts to `site.leadFormEndpoint` when configured and
 * otherwise opens a pre-filled email, matching the project brief form.
 */
export function CarePlanForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const planRef = React.useRef<HTMLSelectElement>(null);

  // Plan buttons link here with ?plan=<slug> to preselect the plan.
  React.useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("plan");
    if (planRef.current && planOptions.some((p) => p.value === requested)) {
      planRef.current.value = requested as string;
    }
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company_site")) {
      setStatus("sent");
      return;
    }

    const plan =
      planOptions.find((p) => p.value === data.get("plan"))?.label ?? "Care plan";
    const fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      website: String(data.get("website") ?? ""),
      plan,
      platform: String(data.get("platform") ?? ""),
      sites: String(data.get("sites") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const subject = `Care plan sign-up: ${fields.plan} for ${fields.website || fields.name}`;

    if (!site.leadFormEndpoint) {
      const body = [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Website: ${fields.website}`,
        `Plan: ${fields.plan}`,
        `Platform: ${fields.platform}`,
        `Number of sites: ${fields.sites}`,
        "",
        fields.message,
      ].join("\n");
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
        body: JSON.stringify({ ...fields, _subject: subject, source: window.location.pathname }),
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
      <div
        role="status"
        className={cn(
          "flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-soft-lg",
          className
        )}
      >
        <CheckCircle2 className="size-12 text-emerald-500" />
        <h3 className="font-display text-2xl font-bold">
          {status === "sent" ? "Thanks, we have your details." : "Almost there."}
        </h3>
        <p className="max-w-md text-muted-foreground">
          {status === "sent"
            ? "We will check your site and reply within one business day with your migration date and a secure payment link."
            : `Your email app should have opened with your details filled in. Just press send. If nothing opened, email us at ${site.contact.email}.`}
        </p>
      </div>
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
        <label htmlFor="care-name" className="mb-2 block text-sm font-semibold">
          Name
        </label>
        <input id="care-name" name="name" required autoComplete="name" placeholder="Jane Smith" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="care-email" className="mb-2 block text-sm font-semibold">
          Email
        </label>
        <input
          id="care-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@business.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="care-website" className="mb-2 block text-sm font-semibold">
          Website address
        </label>
        <input
          id="care-website"
          name="website"
          required
          inputMode="url"
          placeholder="yourbusiness.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="care-plan" className="mb-2 block text-sm font-semibold">
          Plan
        </label>
        <select id="care-plan" name="plan" ref={planRef} defaultValue="growth" className={fieldClass}>
          {planOptions.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="care-platform" className="mb-2 block text-sm font-semibold">
          Your site runs on
        </label>
        <select id="care-platform" name="platform" defaultValue="WordPress" className={fieldClass}>
          {platforms.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="care-sites" className="mb-2 block text-sm font-semibold">
          Number of sites
        </label>
        <input
          id="care-sites"
          name="sites"
          type="number"
          min={1}
          defaultValue={1}
          className={fieldClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="care-message" className="mb-2 block text-sm font-semibold">
          Anything we should know?{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="care-message"
          name="message"
          rows={4}
          placeholder="Current host, recent problems, changes you want made."
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      {/* Honeypot field for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="care-company-site">Company site</label>
        <input id="care-company-site" name="company_site" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="size-3.5" />
          Nothing is charged until we confirm your site is a fit.
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
              Start my care plan <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive sm:col-span-2" role="alert">
          Something went wrong. Please email{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
            {site.contact.email}
          </a>{" "}
          and we&apos;ll set you up from there.
        </p>
      )}
    </form>
  );
}

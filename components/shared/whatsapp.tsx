import { site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The WhatsApp logo, drawn inline so no extra request is needed. */
export function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98 1-3.63-.24-.37a9.82 9.82 0 0 1 15.2-12.16 9.75 9.75 0 0 1 2.88 6.95c0 5.42-4.41 9.81-9.75 9.81zm8.36-18.16A11.76 11.76 0 0 0 12.05.2C5.5.2.18 5.52.17 12.07c0 2.1.55 4.14 1.59 5.94L.07 24l6.13-1.61a11.85 11.85 0 0 0 5.85 1.49h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.48-8.4z" />
    </svg>
  );
}

/** Floating WhatsApp button, bottom right on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with Ivula on WhatsApp, ${site.contact.whatsappLabel}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] print:hidden"
    >
      <WhatsAppLogo className="size-6" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

/** Inline text link to WhatsApp, for the footer and contact page. */
export function WhatsAppLink({ className }: { className?: string }) {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-[#1da851]",
        className
      )}
    >
      <WhatsAppLogo className="size-4 text-[#25D366]" />
      WhatsApp {site.contact.whatsappLabel}
    </a>
  );
}

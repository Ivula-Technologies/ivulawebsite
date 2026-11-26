/**
 * Content for the short homepage. Each entry has a real screenshot taken
 * from the app or site itself (sample data, never invented customers).
 */

export interface HomeApp {
  name: string;
  kind: string;
  description: string;
  price?: string;
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
  external?: boolean;
  /** Optional recorded demo (e.g. a Loom link). */
  demo?: string;
}

/** Apps we have built, newest first. */
export const homeApps: HomeApp[] = [
  {
    name: "Kisumu Mental Health Linkage",
    kind: "Health, Kisumu County",
    description:
      "Community health promoters screen people at home, and the app refers each person to the right clinic, tracks them until they are seen, and sends emergencies straight to a clinician. AI drafts the referral notes for review.",
    image: "/apps/kisumu-health.webp",
    imageAlt: "Kisumu Mental Health Linkage dashboard with referrals, follow-ups and where people drop out of care (synthetic data)",
    href: "/work",
    linkLabel: "Read about it",
    demo: "https://www.loom.com/share/36fb3b152d874cfc9159dbb9b590ed02",
  },
  {
    name: "Vemi Logistics",
    kind: "Truck booking, East Africa",
    description:
      "Businesses post a load, verified truck owners bid, and the trip is paid by M-Pesa and followed on a map. Web and Android.",
    image: "/apps/vemi.webp",
    imageAlt: "Vemi Logistics home screen: Book a verified truck in minutes, not days",
    href: "https://vemi-logistics.vercel.app/",
    linkLabel: "Open Vemi",
    external: true,
  },
  {
    name: "WakiliNivo",
    kind: "Law firms in Kenya",
    description:
      "Clients, matters, the court diary, fee notes, client accounts and staff in one system built for Kenyan practice.",
    price: "Early access",
    image: "/apps/wakilinivo.webp",
    imageAlt: "WakiliNivo dashboard with today's diary, bring-ups and tasks (sample data)",
    href: "/products/wakilinivo",
    linkLabel: "See WakiliNivo",
  },
  {
    name: "ProposalKit",
    kind: "Freelancers and consultants",
    description:
      "Send one link with your proposal, contract and e-signature, and take the deposit when the client signs.",
    price: "From $29/mo",
    image: "/apps/proposalkit.webp",
    imageAlt: "ProposalKit editor with a sample proposal for a coffee shop",
    href: "/products/proposalkit",
    linkLabel: "See ProposalKit",
  },
  {
    name: "ShelfKeeper",
    kind: "Homeschooling families",
    description:
      "Families nearby lend, borrow, buy and sell the books their children need, so nobody pays full price for one term.",
    price: "Free to join",
    image: "/apps/shelfkeeper.webp",
    imageAlt: "ShelfKeeper home page: The right books for your kids, from families nearby",
    href: "/products/shelfkeeper",
    linkLabel: "See ShelfKeeper",
  },
  {
    name: "Ivula Canopy",
    kind: "Churches and nonprofits",
    description:
      "Members, volunteers, events, check-in and reports in one calm place, so the team stops living in spreadsheets.",
    price: "From $29/mo",
    image: "/apps/canopy.webp",
    imageAlt: "Canopy dashboard for a sample church with members, events and announcements",
    href: "/products/canopy",
    linkLabel: "See Canopy",
  },
];

export interface HomeService {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const homeServices: HomeService[] = [
  {
    name: "We build your app",
    description: "Ivula Studio designs and builds web apps, mobile apps and online systems, at a fixed price agreed up front.",
    price: "From $7,500",
    image: "/video/code-poster.webp",
    imageAlt: "Lines of code on a dark screen",
    href: "/services",
  },
  {
    name: "We look after your website",
    description: "Ivula Care Plans keep your site fast, backed up, secure and up to date, with a team on call for changes.",
    price: "From $49/mo",
    image: "/projects/ack-aqua-hub.webp",
    imageAlt: "A client website we look after",
    href: "/care-plans",
  },
  {
    name: "We host your website",
    description: "Ivula Hosting gives you cPanel hosting with free SSL and email. Pay by card, or by M-Pesa in Kenya.",
    price: "From KES 2,999/yr",
    image: "/video/servers-poster.webp",
    imageAlt: "Server racks with blinking lights",
    href: "/hosting",
  },
];

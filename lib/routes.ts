export const routes = {
  home: "/",
  homes: "/homes",
  location: "/location",
  pricing: "/pricing",
  floorPlans: "/floor-plans",
  faqs: "/faqs",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
} as const;

export type SitePath = (typeof routes)[keyof typeof routes];

export const navLinks = [
  { href: routes.home, label: "Overview" },
  { href: routes.homes, label: "Homes" },
  { href: routes.location, label: "Location" },
  { href: routes.pricing, label: "Pricing" },
  { href: routes.floorPlans, label: "Plans" },
  { href: routes.faqs, label: "FAQs" },
] as const;

export const footerSpokeLinks = [
  { href: routes.home, label: "Five Oaks Oakville overview" },
  { href: routes.homes, label: "Townhomes and detached homes" },
  { href: routes.location, label: "Where is Five Oaks" },
  { href: routes.pricing, label: "Prices and cost" },
  { href: routes.floorPlans, label: "Floor plans" },
  { href: routes.faqs, label: "FAQs" },
] as const;

export const sitemapPaths: readonly SitePath[] = [
  routes.home,
  routes.homes,
  routes.location,
  routes.pricing,
  routes.floorPlans,
  routes.faqs,
  routes.privacy,
  routes.disclaimer,
];

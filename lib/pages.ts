import { faqs, seo } from "@/lib/project-data";
import { routes } from "@/lib/routes";

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  ogTitle?: string;
}

export const homePage: PageSeo = {
  path: routes.home,
  title: seo.title,
  description: seo.description,
  ogTitle: seo.ogTitle,
  h1: "Five Oaks Oakville by Caivan Communities",
  answer:
    "Five Oaks is a coming-soon Caivan Communities new-home community in Oakville, Ontario, Canada, planned with single-detached homes and townhomes. This independent informational site is not the official Caivan or Five Oaks website. Official prices, floor plans and the exact address were unpublished as of August 24, 2026. Register with Get Project Updates to receive verified details as they are released.",
};

export const locationPage: PageSeo = {
  path: routes.location,
  title: "Where Is Five Oaks | Address TBA as of Aug 24, 2026",
  description:
    "Five Oaks is confirmed for Oakville, Ontario. The exact address is unpublished as of August 24, 2026. Register for verified location updates.",
  h1: "Where is Five Oaks in Oakville?",
  answer:
    "Five Oaks by Caivan Communities is confirmed for Oakville, Ontario, Canada. The exact project address, intersection and site pin had not been published in official Five Oaks materials reviewed on August 24, 2026. Until Caivan releases that location, commute times and “minutes to” claims should not be treated as project-specific facts. Register for verified updates when the site is announced.",
};

export const homesPage: PageSeo = {
  path: routes.homes,
  title: "Five Oaks Townhomes and Detached | Caivan Oakville",
  description:
    "Five Oaks by Caivan in Oakville is planned with single-detached homes and townhomes. Models and sizes are unpublished as of August 24, 2026. Register for verified updates.",
  h1: "Five Oaks townhomes and detached homes",
  answer:
    "Caivan Communities has identified single-detached homes and townhomes for Five Oaks, a coming-soon community in Oakville, Ontario, Canada. Caivan’s Oakville overview indicates freehold townhomes. Official models, lot widths, home sizes, bedroom counts, floor plans and prices were not published in reviewed Five Oaks materials as of August 24, 2026. Register for verified product updates.",
};

export const pricingPage: PageSeo = {
  path: routes.pricing,
  title: "Five Oaks Prices Oakville | Official List Not Published Yet",
  description:
    "Official Five Oaks prices have not been published as of August 24, 2026. No starting price is confirmed. Register for verified updates when Caivan releases pricing.",
  h1: "Five Oaks prices in Oakville",
  answer:
    "Official Five Oaks pricing has not been published in reviewed materials as of August 24, 2026. There is no confirmed starting price, price list, deposit schedule or Five Oaks-specific incentive on this independent site. Undated third-party cost figures should not be treated as official. Register to get notified when official pricing is published.",
};

export const floorPlansPage: PageSeo = {
  path: routes.floorPlans,
  title: "Five Oaks Floor Plans | Not Published as of Aug 2026",
  description:
    "Official Five Oaks floor plans have not been published as of August 24, 2026. Layouts, sizes and elevations remain TBA. Register for verified plan updates.",
  h1: "Five Oaks floor plans",
  answer:
    "Official Five Oaks floor plans have not been published in reviewed Caivan project material as of August 24, 2026. Model names, square footage, bedroom and bathroom configurations and elevations remain to be announced. This independent site does not reproduce unofficial layouts. Register to be notified when official plans are released.",
};

export const faqsPage: PageSeo = {
  path: routes.faqs,
  title: "Five Oaks Oakville FAQs | Prices, Plans and Location",
  description:
    "Five Oaks Oakville FAQs: location, townhomes, detached homes, prices, floor plans and launch timing as of August 24, 2026. Register for verified updates.",
  h1: "Five Oaks Oakville frequently asked questions",
  answer:
    "Five Oaks is a coming-soon Caivan Communities community of single-detached homes and townhomes in Oakville, Ontario, Canada. As of August 24, 2026, official prices, floor plans, deposits, incentives, exact address, launch date and occupancy had not been published. The questions below match common search phrasing. Register for verified updates.",
};

export const privacyPage: PageSeo = {
  path: routes.privacy,
  title: "Privacy Policy | Five Oaks by Caivan Oakville",
  description:
    "Privacy information for this independent Five Oaks Oakville project-information website, including what is collected when you request updates.",
  h1: "Privacy Policy",
  answer:
    "This privacy page explains how the independent operator of this Five Oaks Oakville informational website handles personal information submitted through the Get Project Updates form. It is not a Caivan Communities policy.",
};

export const disclaimerPage: PageSeo = {
  path: routes.disclaimer,
  title: "Disclaimer | Five Oaks by Caivan Oakville",
  description:
    "Independent-site disclaimer for Five Oaks Oakville: not official Caivan, not an offering for sale, facts checked August 24, 2026.",
  h1: "Terms / Disclaimer",
  answer:
    "This is an independent informational website about Five Oaks by Caivan Communities in Oakville, Ontario. It is not the official developer site and is not an offering for sale.",
};

export const allPageSeo = [
  homePage,
  locationPage,
  homesPage,
  pricingPage,
  floorPlansPage,
  faqsPage,
  privacyPage,
  disclaimerPage,
] as const;

export function relatedFaqs(...ids: string[]) {
  return faqs.filter((faq) => ids.includes(faq.id));
}

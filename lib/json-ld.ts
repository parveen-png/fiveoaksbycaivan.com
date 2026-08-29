import {
  faqs,
  images,
  INFORMATION_CHECKED_ISO,
  project,
  type FaqItem,
} from "@/lib/project-data";
import { identityIsPlaceholder, siteConfig, sitePageUrl } from "@/lib/site-config";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface JsonLdPageInput {
  path: string;
  title: string;
  description: string;
  headline: string;
  faqs?: readonly FaqItem[];
  breadcrumbs: readonly BreadcrumbItem[];
  speakableSelectors?: readonly string[];
}

export function buildJsonLd(page: JsonLdPageInput) {
  const origin = siteConfig.siteUrl;
  const pageUrl = sitePageUrl(page.path);
  const homeUrl = sitePageUrl("/");
  const imageUrl = images.hero.src.startsWith("http")
    ? images.hero.src
    : `${origin}${images.hero.src}`;
  const speakable = page.speakableSelectors ?? ["#page-title", "#answer"];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: homeUrl,
      name: "Five Oaks Oakville project information",
      alternateName: [
        "Five Oaks by Caivan Oakville",
        "Five Oaks Oakville",
        "Caivan Five Oaks",
      ],
      description:
        "Independent informational website about Five Oaks by Caivan Communities in Oakville, Ontario, Canada.",
      publisher: { "@id": `${origin}/#publisher` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Organization",
      "@id": `${origin}/#publisher`,
      name: "Five Oaks Oakville project information",
      url: homeUrl,
      ...(!identityIsPlaceholder(siteConfig.publisherEmail)
        ? { email: siteConfig.publisherEmail }
        : {}),
      ...(!identityIsPlaceholder(siteConfig.publisherPhone)
        ? { telephone: siteConfig.publisherPhone }
        : {}),
      ...(!identityIsPlaceholder(siteConfig.publisherAddress)
        ? { address: siteConfig.publisherAddress }
        : {}),
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      headline: page.headline,
      description: page.description,
      datePublished: INFORMATION_CHECKED_ISO,
      dateModified: INFORMATION_CHECKED_ISO,
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        {
          "@type": "Thing",
          name: project.name,
          description: `${project.name} is a coming-soon new-home community by ${project.developer} in ${project.municipality}, ${project.country}, planned to include ${project.homeTypes.toLowerCase()}.`,
        },
        {
          "@type": "City",
          name: "Oakville",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Ontario",
            containedInPlace: {
              "@type": "Country",
              name: "Canada",
            },
          },
        },
      ],
      mentions: [
        { "@type": "Organization", name: project.developer },
        { "@type": "Place", name: "Oakville, Ontario" },
      ],
      primaryImageOfPage: { "@id": `${origin}/#primaryimage` },
      inLanguage: "en-CA",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [...speakable],
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: page.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: sitePageUrl(crumb.path),
      })),
    },
    {
      "@type": "ImageObject",
      "@id": `${origin}/#primaryimage`,
      url: imageUrl,
      contentUrl: imageUrl,
      caption:
        "Neighbourhood imagery for illustration only. This photograph does not depict the Five Oaks project.",
      width: images.hero.width,
      height: images.hero.height,
    },
  ];

  const faqItems = page.faqs ?? (page.path === "/" ? faqs : undefined);
  if (faqItems && faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: page.path === "/faqs" ? pageUrl : `${pageUrl}#faqs`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

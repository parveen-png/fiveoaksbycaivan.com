import type { Metadata } from "next";
import { ArticleHeader } from "@/components/ArticleHeader";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { copy, project } from "@/lib/project-data";
import { disclaimerPage } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(disclaimerPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "Disclaimer", path: routes.disclaimer },
];

export default function DisclaimerPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: disclaimerPage.path,
        title: disclaimerPage.title,
        description: disclaimerPage.description,
        headline: disclaimerPage.h1,
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
    >
      <ArticleHeader page={disclaimerPage} breadcrumbs={breadcrumbs} />
      <Section>
        <Container className="max-w-3xl space-y-6 text-base leading-7 text-ink">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Requires legal and brokerage review before launch
          </p>
          <p>{copy.legalFooterDisclosure}</p>
          <p>
            This is an independent informational website. It is not the official
            website of {project.developer} or {project.name}. This site does not
            claim to represent Caivan, to be Caivan&apos;s exclusive sales
            representative, or to offer homes for sale through these pages.
          </p>
          <p>
            Information on this site is based on official materials reviewed on
            August 24, 2026. Unconfirmed details are marked to be announced.
            Project information can change. Confirm current details against
            official developer documents before making a purchase decision.
          </p>
          <p>
            Neighbourhood photographs are generic supporting imagery and do not
            depict {project.name}. This website does not provide legal, financial
            or real-estate advice. Have a lawyer review any Agreement of Purchase
            and Sale and related schedules.
          </p>
          <p>{copy.legalReviewFlag}</p>
        </Container>
      </Section>
    </SiteChrome>
  );
}

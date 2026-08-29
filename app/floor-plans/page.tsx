import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/ArticleHeader";
import { FactTable } from "@/components/FactTable";
import { ImageFrame } from "@/components/ImageFrame";
import { LeadForm } from "@/components/LeadForm";
import { RelatedQuestions } from "@/components/RelatedQuestions";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { copy, images, tbaProjectItems } from "@/lib/project-data";
import { floorPlansPage, relatedFaqs } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(floorPlansPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "Floor plans", path: routes.floorPlans },
];

export default function FloorPlansPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: floorPlansPage.path,
        title: floorPlansPage.title,
        description: floorPlansPage.description,
        headline: floorPlansPage.h1,
        faqs: relatedFaqs("floor-plans", "home-types"),
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
    >
      <ArticleHeader page={floorPlansPage} breadcrumbs={breadcrumbs} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-start">
          <div>
            <FactTable ids={["floor-plans", "home-types", "pricing"]} />
            <p className="mt-6 text-sm leading-6 text-ink-muted">
              Unofficial plan galleries are not a substitute for developer
              drawings. This page will not host traced or reconstructed layouts.
            </p>
          </div>
          <LeadForm
            idPrefix="page"
            heading="Get notified when official floor plans are released"
            support="Official Five Oaks floor plans have not been published. Register for verified plan updates instead of relying on unofficial drawings."
          />
        </Container>
      </Section>

      <Section className="bg-paper-muted">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-7 text-ink">
            <h2 className="font-display text-3xl tracking-tight">
              What “no floor plans yet” means for Five Oaks shoppers
            </h2>
            <p>
              Five Oaks floor plans searches want a packet of layouts. As of
              August 24, 2026, Caivan had not published that packet for this
              Oakville community in the official material reviewed for this site.
              There is therefore no honest way to display bedroom counts, bathroom
              counts, interior square footage or elevation names as Five Oaks
              facts.
            </p>
            <p>
              Buyers can still prepare. Typical new-home plan sets, when they
              exist, describe how rooms are arranged, which dimensions are
              approximate, and which finishes are standard versus optional. None
              of those Five Oaks pages are public yet. Treat any PDF circulating
              without a current official source as unverified.
            </p>
            <p>
              Caivan has confirmed the community will include{" "}
              <Link className="underline underline-offset-2" href={routes.homes}>
                single-detached homes and townhomes
              </Link>
              . That is a product-type fact, not a plan catalogue. Lot widths,
              parking and site-plan relationships are also on the TBA list until
              official documents appear.
            </p>
          </div>
          <ImageFrame
            src={images.canopy.src}
            alt={images.canopy.alt}
            width={images.canopy.width}
            height={images.canopy.height}
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl space-y-5 text-base leading-7 text-ink">
          <h2 className="font-display text-3xl tracking-tight">
            Details that remain unpublished with the plans
          </h2>
          <p>
            Floor plans usually arrive with a cluster of other sales documents.
            For Five Oaks, the following items were still unpublished in reviewed
            official material as of August 24, 2026:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {tbaProjectItems
              .filter((item) =>
                /plan|lot|size|bedroom|elevation|feature|floor/i.test(item),
              )
              .map((item) => (
                <li key={item} className="border border-rule bg-paper-elevated px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
          </ul>
          <p>
            Official{" "}
            <Link className="underline underline-offset-2" href={routes.pricing}>
              Five Oaks prices
            </Link>{" "}
            are unpublished on the same date. Registering once covers both plan
            and cost alerts. The{" "}
            <Link className="underline underline-offset-2" href={routes.location}>
              project address
            </Link>{" "}
            is also TBA, so plan packets should not be assumed to include a public
            site map until Caivan says they do.
          </p>
          <p>
            {copy.developerCaution} This independent site is not an offering for
            sale.
          </p>
          <RelatedQuestions
            items={relatedFaqs("floor-plans", "home-types", "prices")}
          />
        </Container>
      </Section>
    </SiteChrome>
  );
}

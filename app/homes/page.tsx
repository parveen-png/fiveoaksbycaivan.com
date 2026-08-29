import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ExternalLink } from "@/components/ExternalLink";
import { FactTable } from "@/components/FactTable";
import { ImageFrame } from "@/components/ImageFrame";
import { LeadForm } from "@/components/LeadForm";
import { RelatedQuestions } from "@/components/RelatedQuestions";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { copy, homeCollection, images, project } from "@/lib/project-data";
import { homesPage, relatedFaqs } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(homesPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "Homes", path: routes.homes },
];

export default function HomesPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: homesPage.path,
        title: homesPage.title,
        description: homesPage.description,
        headline: homesPage.h1,
        faqs: relatedFaqs("home-types", "freehold-townhomes"),
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
    >
      <ArticleHeader page={homesPage} breadcrumbs={breadcrumbs} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-start">
          <div>
            <FactTable ids={["home-types", "townhome-tenure", "status", "floor-plans"]} />
            <p className="mt-6 text-sm text-ink-muted">
              Product types are taken from{" "}
              <ExternalLink href={project.officialProjectUrl}>
                Caivan&apos;s official Five Oaks page
              </ExternalLink>{" "}
              and the{" "}
              <ExternalLink href={project.officialOakvilleCommunitiesUrl}>
                Oakville communities overview
              </ExternalLink>
              .
            </p>
          </div>
          <LeadForm
            idPrefix="page"
            heading="Get updates on Five Oaks home types"
            support="Tell us whether you are watching detached homes, townhomes, or both. We will send verified product updates when official model details exist."
          />
        </Container>
      </Section>

      <Section className="bg-paper-muted" id="detached" ariaLabelledby="detached-heading">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-7 text-ink">
            <h2 id="detached-heading" className="font-display text-3xl tracking-tight">
              Five Oaks detached homes
            </h2>
            <p>{homeCollection[0].copy}</p>
            <p>
              Searches for Five Oaks detached homes and Caivan Oakville detached
              product should stop at that confirmation. This page does not list
              elevations, lot widths, square footage or bedroom counts because
              those Five Oaks specifications were not in the official material
              reviewed on August 24, 2026.
            </p>
            <p>
              Features shown at other Caivan communities are not Five Oaks
              detached-home specs until official Five Oaks documents say so.{" "}
              {copy.developerCaution}
            </p>
            <p>
              When official{" "}
              <Link className="underline underline-offset-2" href={routes.floorPlans}>
                floor plans
              </Link>{" "}
              and{" "}
              <Link className="underline underline-offset-2" href={routes.pricing}>
                prices
              </Link>{" "}
              are published, detached-home shoppers should compare those documents
              rather than third-party model tables.
            </p>
          </div>
          <ImageFrame
            src={images.garden.src}
            alt={images.garden.alt}
            width={images.garden.width}
            height={images.garden.height}
          />
        </Container>
      </Section>

      <Section id="townhomes" ariaLabelledby="townhomes-heading">
        <Container className="grid gap-10 lg:grid-cols-2">
          <ImageFrame
            src={images.park.src}
            alt={images.park.alt}
            width={images.park.width}
            height={images.park.height}
            className="order-2 lg:order-1"
          />
          <div className="order-1 space-y-5 text-base leading-7 text-ink lg:order-2">
            <h2 id="townhomes-heading" className="font-display text-3xl tracking-tight">
              Five Oaks townhomes and freehold tenure
            </h2>
            <p>{homeCollection[1].copy}</p>
            <p>
              The question “is Five Oaks freehold?” has a qualified answer:
              Caivan’s Oakville community overview identifies Five Oaks as
              including freehold townhomes. Buyers should still confirm tenure for
              the specific release and home they are considering. Condominium
              tenure should not be assumed or ruled out beyond what official Five
              Oaks documents later state.
            </p>
            <p>
              Five Oaks townhomes, Five Oaks freehold townhomes and Caivan
              Oakville townhomes queries all map to the same verified product
              note plus the same TBA list: models, dimensions, parking,{" "}
              <Link className="underline underline-offset-2" href={routes.floorPlans}>
                floor plans
              </Link>{" "}
              and{" "}
              <Link className="underline underline-offset-2" href={routes.pricing}>
                pricing
              </Link>{" "}
              remain unpublished.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-muted">
        <Container className="max-w-3xl space-y-5 text-base leading-7 text-ink">
          <h2 className="font-display text-3xl tracking-tight">
            Five Oaks versus other Caivan Oakville communities
          </h2>
          <p>{copy.otherOakvilleCommunities}</p>
          <p>
            That list is useful for discovery—Oakville new townhomes and Oakville
            new detached homes searches will surface more than one Caivan
            name—but it is not a substitution chart. Do not import prices,
            incentives, lot premiums or finish packages from Bronte Trails,
            Lakeview Village or Aura into a Five Oaks worksheet.
          </p>
          <p>
            Five Oaks remains coming soon.{" "}
            <Link className="underline underline-offset-2" href={routes.location}>
              The exact Oakville site is TBA
            </Link>
            . Register on this page if you want verified product news rather than
            speculative model boards.
          </p>
          <RelatedQuestions
            items={relatedFaqs("home-types", "freehold-townhomes", "floor-plans")}
          />
          <p className="text-sm text-ink-muted">
            {copy.independentDisclosure} This is not an offering for sale.
          </p>
        </Container>
      </Section>
    </SiteChrome>
  );
}

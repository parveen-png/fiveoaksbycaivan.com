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
import { copy, images, project } from "@/lib/project-data";
import { locationPage, relatedFaqs } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(locationPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "Location", path: routes.location },
];

export default function LocationPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: locationPage.path,
        title: locationPage.title,
        description: locationPage.description,
        headline: locationPage.h1,
        faqs: relatedFaqs("where-is-five-oaks", "what-is-five-oaks"),
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
    >
      <ArticleHeader page={locationPage} breadcrumbs={breadcrumbs} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-start">
          <div>
            <FactTable ids={["location", "status", "information-checked"]} />
            <p className="mt-6 text-sm text-ink-muted">
              Source:{" "}
              <ExternalLink href={project.officialProjectUrl}>
                official Five Oaks page
              </ExternalLink>
              . A map pin is not shown because verified coordinates have not been
              supplied.
            </p>
          </div>
          <LeadForm
            idPrefix="page"
            heading="Get notified when the Five Oaks site is confirmed"
            support="Register for verified location updates. This form does not place a reservation and is not an offering for sale."
          />
        </Container>
      </Section>

      <Section className="bg-paper-muted">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-7 text-ink">
            <h2 className="font-display text-3xl tracking-tight">
              What is confirmed about the Five Oaks location
            </h2>
            <p>
              Five Oaks by Caivan Communities is a coming-soon new-home community
              in Oakville, Ontario, Canada. That municipal placement is the only
              location fact supported by official Five Oaks material reviewed on
              August 24, 2026. The exact project site, street address and
              intersection remain to be announced.
            </p>
            <p>
              {copy.locationLead} This independent informational site will not
              invent a pin to satisfy “where is Five Oaks” searches. An honest
              dated answer is more useful to buyers—and more citable by search
              and answer engines—than a fabricated map.
            </p>
            <p>
              Caivan publishes a general Oakville Sales Centre contact at{" "}
              {project.generalSalesCentre.address}. {project.generalSalesCentre.note}{" "}
              Do not treat that address as the Five Oaks community.
            </p>
            <p>
              When an official site plan or intersection is published, this page
              should be updated from that source, not from listing aggregators.
              Until then,{" "}
              <Link className="underline underline-offset-2" href="#register">
                Get Project Updates
              </Link>{" "}
              is the conversion path for location-intent searches.
            </p>
          </div>
          <ImageFrame
            src={images.lakeshore.src}
            alt={images.lakeshore.alt}
            width={images.lakeshore.width}
            height={images.lakeshore.height}
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl space-y-5 text-base leading-7 text-ink">
          <h2 className="font-display text-3xl tracking-tight">
            Oakville context that is not a Five Oaks commute claim
          </h2>
          <p>{copy.oakvilleContext}</p>
          <ul className="list-disc space-y-2 pl-5">
            {copy.oakvilleSafeFacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Those points describe the Town of Oakville. They are not evidence
            that Five Oaks sits beside a particular park, GO station, school or
            highway interchange. Without an official project pin, this page does
            not state travel times, school catchments or “near downtown Oakville”
            as Five Oaks facts.
          </p>
          <p>
            Buyers comparing Oakville new homes coming soon should still treat
            Five Oaks as a Caivan Oakville community of{" "}
            <Link className="underline underline-offset-2" href={routes.homes}>
              single-detached homes and townhomes
            </Link>
            , not as a priced inventory list.{" "}
            <Link className="underline underline-offset-2" href={routes.pricing}>
              Official pricing
            </Link>{" "}
            and{" "}
            <Link className="underline underline-offset-2" href={routes.floorPlans}>
              floor plans
            </Link>{" "}
            are unpublished as of the same review date.
          </p>
          <RelatedQuestions
            items={relatedFaqs("where-is-five-oaks", "what-is-five-oaks", "launch")}
          />
          <p className="text-sm text-ink-muted">
            {copy.independentDisclosure} This is not an offering for sale.
          </p>
        </Container>
      </Section>
    </SiteChrome>
  );
}

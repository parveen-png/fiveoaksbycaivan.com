import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/ArticleHeader";
import { FactTable } from "@/components/FactTable";
import { LeadForm } from "@/components/LeadForm";
import { RelatedQuestions } from "@/components/RelatedQuestions";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { copy, displayFactValue, getFact, pricingStatusItems } from "@/lib/project-data";
import { pricingPage, relatedFaqs } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(pricingPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "Pricing", path: routes.pricing },
];

export default function PricingPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: pricingPage.path,
        title: pricingPage.title,
        description: pricingPage.description,
        headline: pricingPage.h1,
        faqs: relatedFaqs("prices", "deposit", "incentives"),
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
      stickyLabel="Get notified when official pricing is published"
    >
      <ArticleHeader page={pricingPage} breadcrumbs={breadcrumbs} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-start">
          <div className="space-y-6">
            <FactTable ids={["pricing", "deposit", "incentives", "launch-date", "occupancy"]} />
            <div className="border border-rule bg-paper-elevated p-5">
              <h2 className="font-display text-xl text-ink">Shopping questions still unanswered</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-ink">
                {pricingStatusItems.map((item) => (
                  <li key={item.label} className="flex justify-between gap-4 border-b border-rule py-2 last:border-0">
                    <span>{item.label}</span>
                    <span className="text-ink-muted">
                      {displayFactValue(getFact(item.factId))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <LeadForm
            idPrefix="page"
            heading="Get notified when official pricing is published"
            support="Official Five Oaks pricing has not been published in reviewed materials as of August 24, 2026. Register here for verified cost updates—not unofficial price lists."
          />
        </Container>
      </Section>

      <Section className="bg-paper-muted">
        <Container className="max-w-3xl space-y-5 text-base leading-7 text-ink">
          <h2 className="font-display text-3xl tracking-tight">
            Why Five Oaks cost searches still deserve a clear answer
          </h2>
          <p>
            {copy.pricingLead} That sentence is the featured-snippet job for Five
            Oaks prices, Five Oaks cost and Caivan Five Oaks pricing queries. It
            is also the honest answer for AI Overviews: there is no official
            starting price to quote.
          </p>
          <p>
            {copy.pricingCaution} Pre-construction directories sometimes fill the
            vacuum with round numbers that are not tied to a dated official
            release. This independent site will not compete with those lists by
            guessing. Rankings that last are the ones that stay correct when
            Caivan later publishes a real price list.
          </p>
          <p>
            Deposit structure, incentives, launch date and occupancy are grouped
            here because shoppers who ask about cost almost always ask those
            follow-ups next. None of those Five Oaks items were confirmed in the
            official sources reviewed on August 24, 2026. Incentives in particular
            should be requested as a verified update rather than advertised from
            memory of another Caivan community.
          </p>
          <p>
            When official pricing appears, buyers should still read it against{" "}
            <Link className="underline underline-offset-2" href={routes.floorPlans}>
              floor plans
            </Link>
            , lot premiums, development charges and the Agreement of Purchase and
            Sale. {copy.lawyerReview} Specs from other Caivan Oakville communities
            are not Five Oaks specs until official Five Oaks documents say so.
          </p>
          <p>
            Five Oaks remains a coming-soon community of{" "}
            <Link className="underline underline-offset-2" href={routes.homes}>
              townhomes and detached homes
            </Link>{" "}
            in{" "}
            <Link className="underline underline-offset-2" href={routes.location}>
              Oakville, Ontario
            </Link>
            . Register if the reason you searched was to know the number: we will
            tell you when a number actually exists.
          </p>
          <RelatedQuestions
            items={relatedFaqs("prices", "deposit", "incentives", "launch")}
          />
          <p className="text-sm text-ink-muted">
            {copy.independentDisclosure} This is not an offering for sale.
          </p>
        </Container>
      </Section>
    </SiteChrome>
  );
}

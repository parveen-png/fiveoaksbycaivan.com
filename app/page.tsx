import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { FactTable } from "@/components/FactTable";
import { Hero } from "@/components/Hero";
import { ImageFrame } from "@/components/ImageFrame";
import { LeadForm } from "@/components/LeadForm";
import { RelatedQuestions } from "@/components/RelatedQuestions";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Eyebrow, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { copy, faqs, images, project, registrationBenefits } from "@/lib/project-data";
import { homePage, relatedFaqs } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(homePage);

const breadcrumbs = [{ name: "Five Oaks Oakville", path: routes.home }];

export default function Home() {
  return (
    <SiteChrome
      jsonLd={{
        path: homePage.path,
        title: homePage.title,
        description: homePage.description,
        headline: homePage.h1,
        faqs,
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
    >
      <Hero />

      <Section id="overview" ariaLabelledby="overview-heading">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Project definition</Eyebrow>
            <h2
              id="overview-heading"
              className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
            >
              What Five Oaks Oakville is — and is not
            </h2>
            <p id="answer" className="mt-5 text-lg leading-8 text-ink">
              {homePage.answer}
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Search results for Five Oaks Oakville, Five Oaks by Caivan, Five Oaks
              Caivan and Caivan Five Oaks often mix official pages with undated
              directories. This hub states only what official Caivan materials
              supported on August 24, 2026, then points to dedicated pages for{" "}
              <Link className="underline underline-offset-2" href={routes.location}>
                location
              </Link>
              ,{" "}
              <Link className="underline underline-offset-2" href={routes.homes}>
                homes
              </Link>
              ,{" "}
              <Link className="underline underline-offset-2" href={routes.pricing}>
                prices
              </Link>{" "}
              and{" "}
              <Link className="underline underline-offset-2" href={routes.floorPlans}>
                floor plans
              </Link>
              .
            </p>
            <p className="mt-4 text-base leading-7 text-ink">
              Primary source:{" "}
              <ExternalLink href={project.officialProjectUrl}>
                Caivan&apos;s official Five Oaks page
              </ExternalLink>
              . This site does not impersonate that page.
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

      <Section className="bg-paper-muted" ariaLabelledby="facts-heading">
        <Container>
          <Eyebrow>Dated fact ledger</Eyebrow>
          <h2
            id="facts-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            Five Oaks facts checked August 24, 2026
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
            {copy.factsExplanation}
          </p>
          <div className="mt-8">
            <FactTable />
          </div>
        </Container>
      </Section>

      <Section ariaLabelledby="explore-heading">
        <Container>
          <Eyebrow>Query map</Eyebrow>
          <h2
            id="explore-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            Explore Five Oaks by question
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                href: routes.homes,
                title: "Townhomes and detached homes",
                body: "Confirmed product types, freehold townhome note, and what is still TBA.",
              },
              {
                href: routes.location,
                title: "Where is Five Oaks?",
                body: "Oakville, Ontario is confirmed. The exact address is not published.",
              },
              {
                href: routes.pricing,
                title: "Prices, deposits and launch",
                body: "Official Five Oaks pricing has not been published as of August 24, 2026.",
              },
              {
                href: routes.floorPlans,
                title: "Floor plans",
                body: "Official layouts are not public. Register rather than using unofficial drawings.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="border border-rule bg-paper-elevated p-6 transition-colors hover:border-brass"
              >
                <h3 className="font-display text-2xl text-ink">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-muted">{card.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-muted" ariaLabelledby="why-register-heading">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)]">
          <div>
            <Eyebrow>Why register</Eyebrow>
            <h2
              id="why-register-heading"
              className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
            >
              Get Project Updates before unofficial lists fill the gap
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-ink">
              {registrationBenefits.map((item) => (
                <li key={item} className="border-l-2 border-brass pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              This site does not publish registrant counts or other social proof
              that has not been verified.
            </p>
          </div>
          <LeadForm idPrefix="mid" />
        </Container>
      </Section>

      <Section id="faqs" ariaLabelledby="home-faq-heading">
        <Container>
          <Eyebrow>People also ask</Eyebrow>
          <h2
            id="home-faq-heading"
            className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            Five Oaks questions with dated answers
          </h2>
          <div className="mt-8 divide-y divide-rule border-y border-rule">
            {faqs.slice(0, 4).map((faq) => (
              <article key={faq.id} className="py-6">
                <h3 className="font-display text-xl text-ink">
                  <Link href={`${routes.faqs}#${faq.id}`} className="underline-offset-4 hover:underline">
                    {faq.question}
                  </Link>
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-ink">{faq.answer}</p>
              </article>
            ))}
          </div>
          <RelatedQuestions items={relatedFaqs("prices", "floor-plans", "where-is-five-oaks", "updates")} />
          <p className="mt-8">
            <Link className="btn-primary" href={routes.faqs}>
              Read all Five Oaks FAQs
            </Link>
          </p>
        </Container>
      </Section>
    </SiteChrome>
  );
}

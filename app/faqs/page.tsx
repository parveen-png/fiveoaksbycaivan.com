import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/ArticleHeader";
import { LeadForm } from "@/components/LeadForm";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { copy, faqs } from "@/lib/project-data";
import { faqsPage } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(faqsPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "FAQs", path: routes.faqs },
];

export default function FaqsPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: faqsPage.path,
        title: faqsPage.title,
        description: faqsPage.description,
        headline: faqsPage.h1,
        faqs,
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer", "#what-is-five-oaks"],
      }}
    >
      <ArticleHeader page={faqsPage} breadcrumbs={breadcrumbs} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] lg:items-start">
          <div>
            <div className="divide-y divide-rule border-y border-rule">
              {faqs.map((faq) => (
                <article key={faq.id} id={faq.id} className="scroll-mt-28 py-6">
                  <h2 className="font-display text-2xl text-ink">{faq.question}</h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-ink">{faq.answer}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-base leading-7 text-ink">
              Longer explainers live on{" "}
              <Link className="underline underline-offset-2" href={routes.location}>
                location
              </Link>
              ,{" "}
              <Link className="underline underline-offset-2" href={routes.homes}>
                homes
              </Link>
              ,{" "}
              <Link className="underline underline-offset-2" href={routes.pricing}>
                pricing
              </Link>{" "}
              and{" "}
              <Link className="underline underline-offset-2" href={routes.floorPlans}>
                floor plans
              </Link>
              . {copy.independentDisclosure}
            </p>
          </div>
          <div className="lg:sticky lg:top-28">
            <LeadForm
              idPrefix="page"
              heading="Get Project Updates"
              support="Use this form if an FAQ still ends in “to be announced.” We send verified Five Oaks Oakville updates when official details are published."
            />
          </div>
        </Container>
      </Section>
    </SiteChrome>
  );
}

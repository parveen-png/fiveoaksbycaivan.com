import type { Metadata } from "next";
import { ArticleHeader } from "@/components/ArticleHeader";
import { SiteChrome } from "@/components/SiteChrome";
import { Container, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { privacyPage } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(privacyPage);

const breadcrumbs = [
  { name: "Five Oaks Oakville", path: routes.home },
  { name: "Privacy Policy", path: routes.privacy },
];

export default function PrivacyPage() {
  return (
    <SiteChrome
      jsonLd={{
        path: privacyPage.path,
        title: privacyPage.title,
        description: privacyPage.description,
        headline: privacyPage.h1,
        breadcrumbs,
        speakableSelectors: ["#page-title", "#answer"],
      }}
    >
      <ArticleHeader page={privacyPage} breadcrumbs={breadcrumbs} />
      <Section>
        <Container className="max-w-3xl space-y-6 text-base leading-7 text-ink">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Requires legal review before launch
          </p>
          <section>
            <h2 className="font-display text-2xl">Organization responsible</h2>
            <p className="mt-3">
              Personal information submitted through this website is collected by
              the independent operator of this informational site, not by Caivan
              Communities.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">What we collect</h2>
            <p className="mt-3">
              We collect first name, last name, email address, optional phone
              number, product interest, optional buyer timing, marketing-consent
              status, and non-sensitive attribution data such as landing-page URL,
              referrer and UTM parameters. We do not collect government
              identifiers, payment details or other unnecessary sensitive
              information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Why we collect it</h2>
            <p className="mt-3">
              We use this information to respond to your request for Five Oaks
              project updates. If you provide express consent, we may also send
              commercial electronic messages about the project. We do not send
              those messages unless a consent checkbox is selected. The current
              form defaults marketing consent to off.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Lead processors</h2>
            <p className="mt-3">
              Lead information is processed only to respond to your update
              request, including writing to the operator&apos;s lead spreadsheet
              when that destination is configured. Acknowledgement messages may be
              sent by email when that delivery channel is configured.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Retention</h2>
            <p className="mt-3">
              The operator should retain lead records only as long as needed to
              respond to update requests, meet legal obligations, and resolve
              disputes. A documented retention schedule belongs in the operator
              privacy program before launch.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Access and deletion</h2>
            <p className="mt-3">
              Privacy inquiries, access requests and deletion requests may be sent
              through the contact details used to respond to your original
              request. The operator should verify identity, locate the relevant
              records, and respond according to applicable Canadian privacy law.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Analytics</h2>
            <p className="mt-3">
              If analytics are enabled, events do not include names, email
              addresses, phone numbers or other form field values. Analytics
              identifiers, if used, should be configured only after privacy
              review.
            </p>
          </section>
        </Container>
      </Section>
    </SiteChrome>
  );
}

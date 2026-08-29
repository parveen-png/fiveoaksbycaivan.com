import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui";
import { copy, INFORMATION_CHECKED_DISPLAY } from "@/lib/project-data";
import type { BreadcrumbItem } from "@/lib/json-ld";
import type { PageSeo } from "@/lib/pages";

export function ArticleHeader({
  page,
  breadcrumbs,
}: {
  page: PageSeo;
  breadcrumbs: readonly BreadcrumbItem[];
}) {
  return (
    <header className="border-b border-rule bg-paper-elevated">
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={breadcrumbs} />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
          Independent site · Information checked {INFORMATION_CHECKED_DISPLAY}
        </p>
        <h1
          id="page-title"
          className="mt-3 max-w-4xl font-display text-4xl tracking-tight text-ink md:text-5xl"
        >
          {page.h1}
        </h1>
        <p id="answer" className="mt-5 max-w-3xl text-lg leading-8 text-ink">
          {page.answer}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-ink-muted">
          {copy.independentDisclosure} This is not an offering for sale.
        </p>
      </Container>
    </header>
  );
}

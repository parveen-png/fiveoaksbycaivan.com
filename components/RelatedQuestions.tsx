import Link from "next/link";
import type { FaqItem } from "@/lib/project-data";
import { routes } from "@/lib/routes";

export function RelatedQuestions({ items }: { items: readonly FaqItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="font-display text-2xl text-ink">Related questions</h2>
      <ul className="mt-4 space-y-3">
        {items.map((faq) => (
          <li key={faq.id}>
            <Link
              href={`${routes.faqs}#${faq.id}`}
              className="text-base text-ink underline decoration-rule underline-offset-4 hover:decoration-brass"
            >
              {faq.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

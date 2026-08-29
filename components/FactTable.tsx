import Link from "next/link";
import {
  displayFactValue,
  facts,
  INFORMATION_CHECKED_DISPLAY,
  type ProjectFact,
} from "@/lib/project-data";
import { routes } from "@/lib/routes";

const TBA_LINKS: Record<string, string> = {
  pricing: routes.pricing,
  "floor-plans": routes.floorPlans,
  deposit: routes.pricing,
  incentives: routes.pricing,
  "launch-date": routes.pricing,
  occupancy: routes.pricing,
  location: routes.location,
};

export function FactTable({
  ids,
  caption = `Information checked ${INFORMATION_CHECKED_DISPLAY}`,
}: {
  ids?: readonly string[];
  caption?: string;
}) {
  const rows: ProjectFact[] = ids
    ? ids.map((id) => {
        const fact = facts.find((entry) => entry.id === id);
        if (!fact) {
          throw new Error(`Unknown project fact: ${id}`);
        }
        return fact;
      })
    : [...facts];

  return (
    <div className="overflow-x-auto border border-rule">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-paper-muted text-xs uppercase tracking-[0.14em] text-ink-muted">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">
              Item
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Status
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Source
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((fact) => {
            const href = TBA_LINKS[fact.id];
            const displayed = displayFactValue(fact);
            return (
              <tr key={fact.id} className="border-t border-rule align-top">
                <th scope="row" className="px-4 py-3 font-medium text-ink">
                  {fact.item}
                </th>
                <td className="px-4 py-3 text-ink">
                  {href && fact.status === "TBA" ? (
                    <Link className="underline underline-offset-2" href={href}>
                      {displayed}
                    </Link>
                  ) : (
                    displayed
                  )}
                </td>
                <td className="px-4 py-3 text-ink-muted">
                  {fact.sourceUrl ? (
                    <a
                      href={fact.sourceUrl}
                      className="underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {fact.sourceLabel}
                    </a>
                  ) : (
                    fact.sourceLabel
                  )}
                  <span className="block text-xs">Checked {fact.checked}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

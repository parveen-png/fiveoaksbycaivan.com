"use client";

import { track } from "@/components/analytics-client";
import { CtaLink } from "@/components/ui";
import { project } from "@/lib/project-data";

export function HeroCta({ href = "#register" }: { href?: string }) {
  return (
    <CtaLink
      href={href}
      className="w-full sm:w-auto"
      onClick={() => track("hero_cta_click", { placement: "hero" })}
    >
      {project.primaryCta}
    </CtaLink>
  );
}

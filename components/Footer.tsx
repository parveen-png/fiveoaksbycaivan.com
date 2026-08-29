import Link from "next/link";
import { copy, project } from "@/lib/project-data";
import { footerSpokeLinks, routes } from "@/lib/routes";
import { identityIsPlaceholder, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">
              {project.name} Oakville
            </p>
            <p className="mt-3 text-sm leading-6 text-paper/80">
              Independent project information for {project.name} by{" "}
              {project.developer} in {project.municipality}, {project.country}.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
              Project pages
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              {footerSpokeLinks.map((link) => (
                <li key={link.href}>
                  <Link className="underline underline-offset-2 hover:text-paper" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
              Trust
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              <li>
                <Link className="underline underline-offset-2" href={routes.privacy}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-2" href={routes.disclaimer}>
                  Terms / Disclaimer
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-2" href="#register">
                  Get Project Updates
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-5 text-paper/70">
              {identityIsPlaceholder(siteConfig.publisherLegalName)
                ? siteConfig.publisherLegalName
                : siteConfig.publisherLegalName}
              {identityIsPlaceholder(siteConfig.publisherEmail)
                ? null
                : ` · ${siteConfig.publisherEmail}`}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-paper/20 pt-8">
          <p className="max-w-4xl text-sm leading-6 text-paper/85">
            {copy.legalFooterDisclosure}
          </p>
          <p className="mt-6 text-sm text-paper/70">
            © {year} Five Oaks informational site. This website is not operated
            by {project.developer}.
          </p>
        </div>
      </div>
    </footer>
  );
}

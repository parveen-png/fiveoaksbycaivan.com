import type { Metadata } from "next";
import type { PageSeo } from "@/lib/pages";
import { siteConfig, sitePageUrl } from "@/lib/site-config";

export function pageMetadata(page: PageSeo): Metadata {
  const url = sitePageUrl(page.path);
  const title = page.title;
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: page.ogTitle ?? title,
      description: page.description,
    },
    twitter: {
      title: page.ogTitle ?? title,
      description: page.description,
    },
    robots: siteConfig.noindex ? { index: false, follow: false } : undefined,
  };
}

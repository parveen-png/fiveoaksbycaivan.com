import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import type { JsonLdPageInput } from "@/lib/json-ld";

export function SiteChrome({
  children,
  jsonLd,
  stickyLabel,
}: {
  children: ReactNode;
  jsonLd: JsonLdPageInput;
  stickyLabel?: string;
}) {
  return (
    <>
      <JsonLd {...jsonLd} />
      <Header />
      <main id="main" className="pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileStickyCta label={stickyLabel} />
    </>
  );
}

import { buildJsonLd, type JsonLdPageInput } from "@/lib/json-ld";

export function JsonLd(page: JsonLdPageInput) {
  const data = buildJsonLd(page);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { describe, expect, it } from "vitest";
import {
  displayFactValue,
  faqs,
  facts,
  getFact,
  seo,
  userMessages,
} from "./project-data";
import { flattenLeadErrors, leadInputSchema } from "./validation";
import { buildJsonLd } from "./json-ld";
import { redactRecord } from "./logger";
import { sanitizeAnalyticsParams } from "./analytics";
import { siteConfig, sitePageUrl } from "./site-config";
import {
  FIVE_OAKS_SHEET_HEADERS,
  FIVE_OAKS_SHEET_PROJECT,
} from "./google/sheets";
import {
  floorPlansPage,
  homePage,
  homesPage,
  locationPage,
  pricingPage,
} from "./pages";
import { sitemapPaths } from "./routes";

describe("project facts", () => {
  it("keeps exactly ten FAQs", () => {
    expect(faqs).toHaveLength(10);
  });

  it("renders TBA facts as honest placeholders", () => {
    expect(displayFactValue(getFact("pricing"))).toBe("To be announced");
    expect(displayFactValue(getFact("floor-plans"))).toBe("To be announced");
    expect(displayFactValue(getFact("deposit"))).toBe("To be announced");
    expect(displayFactValue(getFact("incentives"))).toBe(
      "Request the latest verified update",
    );
    expect(displayFactValue(getFact("launch-date"))).toBe("To be announced");
    expect(displayFactValue(getFact("occupancy"))).toBe("To be announced");
  });

  it("does not invent a project address", () => {
    const location = facts.find((fact) => fact.id === "location");
    expect(location?.value).toBe("Oakville, Ontario");
    expect(location?.status).toBe("VERIFIED");
  });
});

describe("lead validation", () => {
  const valid = {
    firstName: "Alex",
    lastName: "Lee",
    email: "alex@example.com",
    phone: "",
    productInterest: "townhome",
    marketingConsent: false,
  };

  it("accepts a complete request without phone or marketing consent", () => {
    const parsed = leadInputSchema.safeParse(valid);
    expect(parsed.success).toBe(true);
  });

  it("uses the specified field messages", () => {
    const parsed = leadInputSchema.safeParse({
      firstName: "",
      lastName: "",
      email: "not-an-email",
      phone: "abc",
      productInterest: "condo",
      marketingConsent: false,
    });
    expect(parsed.success).toBe(false);
    if (parsed.success) {
      return;
    }
    const errors = flattenLeadErrors(parsed.error);
    const byField = Object.fromEntries(
      errors.map((error) => [error.field, error.message]),
    );
    expect(byField.firstName).toBe(userMessages.firstName);
    expect(byField.lastName).toBe(userMessages.lastName);
    expect(byField.email).toBe(userMessages.email);
    expect(byField.phone).toBe(userMessages.phone);
  });

  it("accepts an optional formatted phone number", () => {
    const parsed = leadInputSchema.safeParse({
      ...valid,
      phone: "(416) 555-1234",
    });
    expect(parsed.success).toBe(true);
  });
});

describe("privacy-conscious logging and analytics", () => {
  it("redacts email and phone from logs", () => {
    const redacted = redactRecord({
      email: "person@example.com",
      phone: "4165551234",
      destination: "webhook",
    });
    expect(redacted.email).toBe("[redacted]");
    expect(redacted.phone).toBe("[redacted]");
    expect(redacted.destination).toBe("webhook");
  });

  it("strips personal form values from analytics params", () => {
    const clean = sanitizeAnalyticsParams({
      firstName: "Alex",
      email: "alex@example.com",
      phone: "4165551234",
      placement: "hero",
    });
    expect(clean.firstName).toBeUndefined();
    expect(clean.email).toBeUndefined();
    expect(clean.phone).toBeUndefined();
    expect(clean.placement).toBe("hero");
  });
});

describe("json-ld", () => {
  it("does not emit Offer, review or fabricated listing entities on the homepage", () => {
    const json = JSON.stringify(
      buildJsonLd({
        path: "/",
        title: homePage.title,
        description: homePage.description,
        headline: homePage.h1,
        faqs,
        breadcrumbs: [{ name: "Five Oaks Oakville", path: "/" }],
      }),
    );
    expect(json).not.toContain('"Offer"');
    expect(json).not.toContain("RealEstateListing");
    expect(json).not.toContain("AggregateRating");
    expect(json).not.toContain("SingleFamilyResidence");
    expect(json).not.toContain("geo");
    expect(json).toContain("FAQPage");
    expect(json).toContain("WebSite");
    expect(json).toContain("WebPage");
    expect(json).toContain("BreadcrumbList");
  });

  it("does not emit Offer schema on the pricing spoke", () => {
    const json = JSON.stringify(
      buildJsonLd({
        path: "/pricing",
        title: pricingPage.title,
        description: pricingPage.description,
        headline: pricingPage.h1,
        breadcrumbs: [
          { name: "Five Oaks Oakville", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ],
      }),
    );
    expect(json).not.toContain('"Offer"');
    expect(json).not.toContain("RealEstateListing");
    expect(json).toContain("/pricing#webpage");
  });
});

describe("site page URLs", () => {
  it("uses a trailing slash only on the homepage", () => {
    expect(sitePageUrl("/")).toBe(`${siteConfig.siteUrl}/`);
    expect(sitePageUrl("/privacy")).toBe(`${siteConfig.siteUrl}/privacy`);
    expect(sitePageUrl("/disclaimer")).toBe(`${siteConfig.siteUrl}/disclaimer`);
    expect(sitePageUrl("/pricing")).toBe(`${siteConfig.siteUrl}/pricing`);
    expect(sitePageUrl("/location")).toBe(`${siteConfig.siteUrl}/location`);
    expect(sitePageUrl("/homes")).toBe(`${siteConfig.siteUrl}/homes`);
    expect(sitePageUrl("/floor-plans")).toBe(`${siteConfig.siteUrl}/floor-plans`);
    expect(sitePageUrl("/faqs")).toBe(`${siteConfig.siteUrl}/faqs`);
  });
});

describe("sheet contract", () => {
  it("keeps the Five Oaks Sheet column headers and project cell", () => {
    expect([...FIVE_OAKS_SHEET_HEADERS]).toEqual([
      "Date",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Product Interest",
      "Buyer Timing",
      "Marketing Consent",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
      "Landing Page",
      "Referrer",
      "Submission ID",
      "Project",
    ]);
    expect(FIVE_OAKS_SHEET_PROJECT).toBe("Five Oaks Oakville");
  });
});

describe("SEO titles", () => {
  it("keeps money-page titles distinct from the .ca homepage title", () => {
    const caTitle = "Five Oaks Oakville | Caivan Townhomes & Detached Homes";
    expect(seo.title).not.toBe(caTitle);
    expect(homePage.title).not.toBe(caTitle);
  });

  it("keeps money-page titles in a 50–60 character window", () => {
    for (const page of [
      homePage,
      locationPage,
      homesPage,
      pricingPage,
      floorPlansPage,
    ]) {
      expect(page.title.length).toBeGreaterThanOrEqual(50);
      expect(page.title.length).toBeLessThanOrEqual(60);
    }
  });
});

describe("sitemap coverage", () => {
  it("includes every money and trust URL", () => {
    expect(sitemapPaths).toEqual([
      "/",
      "/homes",
      "/location",
      "/pricing",
      "/floor-plans",
      "/faqs",
      "/privacy",
      "/disclaimer",
    ]);
  });
});

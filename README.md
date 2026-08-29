# Five Oaks by Caivan — Oakville informational site (`.com`)

Independent informational website for **Five Oaks**, a coming-soon Caivan Communities community of single-detached homes and townhomes in Oakville, Ontario, Canada.

Canonical production URL: **https://www.fiveoaksbycaivan.com**

This is **not** the official Five Oaks or Caivan website. Official Five Oaks details were incomplete as of **August 24, 2026**. Pricing, floor plans, deposits, incentives, exact project location, launch date and occupancy remain to be announced.

This implementation is a functioning ranking-and-leads site. It is **not** legally approved. Final legal, brokerage, privacy and compliance review remains the publisher's responsibility.

## Domain cannibalization — `.ca` must not stay indexed

`.com` is the **only indexable primary**. After this site launches, **https://www.fiveoaksbycaivan.ca** should **301 (or 308)** to the matching `.com` URLs, or set canonical tags to those `.com` URLs.

Suggested mapping:

| `.ca` URL | `.com` target |
| --- | --- |
| `https://www.fiveoaksbycaivan.ca/` | `https://www.fiveoaksbycaivan.com/` |
| `https://www.fiveoaksbycaivan.ca/privacy` | `https://www.fiveoaksbycaivan.com/privacy` |
| `https://www.fiveoaksbycaivan.ca/disclaimer` | `https://www.fiveoaksbycaivan.com/disclaimer` |

If the `.ca` homepage is the only indexed URL, a site-wide 301 to `https://www.fiveoaksbycaivan.com/` is acceptable until spoke-for-spoke redirects exist. Do **not** leave both hosts in Google’s index: two copies will split rankings and Sheet leads.

Apex `https://fiveoaksbycaivan.com` should 308 to `https://www.fiveoaksbycaivan.com`.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- Zod 4 for server-side lead validation
- Vitest for unit tests

## Local setup

1. Copy the environment template, or reuse the existing Five Oaks `.env.local` from the `.ca` campaign and set:

```bash
NEXT_PUBLIC_SITE_URL=https://www.fiveoaksbycaivan.com
NEXT_PUBLIC_SITE_DOMAIN=www.fiveoaksbycaivan.com
NEXT_PUBLIC_LANDING_PAGE_VARIANT=com-seo-leads-2026-08
```

2. Keep placeholder publisher identity values until legal details are supplied. Do not put real secrets in `.env.example`.

3. Install dependencies:

```bash
npm install
```

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `npm install` |
| Development server | `npm run dev` |
| Production build | `npm run build` |
| Start production server | `npm start` |
| Lint | `npm run lint` |
| Type-check | `npm run typecheck` |
| Unit tests | `npm test` |

Open [http://localhost:3000](http://localhost:3000) after `npm run dev`.

## Information architecture

Indexable routes (all in `sitemap.xml`):

| URL | Primary query |
| --- | --- |
| `/` | Five Oaks Oakville / Five Oaks by Caivan |
| `/location` | Where is Five Oaks |
| `/homes` | Townhomes and detached homes |
| `/pricing` | Five Oaks prices / cost |
| `/floor-plans` | Five Oaks floor plans |
| `/faqs` | Mixed People Also Ask |
| `/privacy` `/disclaimer` | Trust pages (self-canonical) |

Every money page has a snippet-ready answer, dated fact excerpt, and **Get Project Updates** form that writes to the existing Five Oaks Google Sheet. `landingPageUrl` records the spoke URL.

## Environment variables

See `.env.example`. Important groups:

### Public identity and canonical URL

- `NEXT_PUBLIC_SITE_URL` — production origin `https://www.fiveoaksbycaivan.com`. Must be HTTPS and not localhost before the site is indexed.
- `NEXT_PUBLIC_SITE_DOMAIN` — `www.fiveoaksbycaivan.com`
- `NEXT_PUBLIC_PUBLISHER_LEGAL_NAME`
- `NEXT_PUBLIC_BROKERAGE_LEGAL_NAME`
- `NEXT_PUBLIC_RECO_REGISTERED_AGENT_NAME`
- `NEXT_PUBLIC_AGENT_DESIGNATION`
- `NEXT_PUBLIC_PUBLISHER_ADDRESS`
- `NEXT_PUBLIC_PUBLISHER_PHONE`
- `NEXT_PUBLIC_PUBLISHER_EMAIL`
- `NEXT_PUBLIC_PRIVACY_POLICY_URL`
- `NEXT_PUBLIC_NOINDEX` — keep `true` on staging. Set `false` only after the canonical domain is verified.
- `NEXT_PUBLIC_LANDING_PAGE_VARIANT` — use `com-seo-leads-2026-08` so Sheet rows can be attributed to this site.

The site stays `noindex` until a public HTTPS canonical URL is configured **and** `NEXT_PUBLIC_NOINDEX` is not `true`.

### Lead integration

Reuse the **same** Google OAuth credentials and `GOOGLE_SHEETS_SPREADSHEET_ID` as the live `.ca` campaign. Sheet columns must stay:

Date, First Name, Last Name, Email, Phone, Product Interest, Buyer Timing, Marketing Consent, UTM Source, UTM Medium, UTM Campaign, Landing Page, Referrer, Submission ID, Project

Project cell: `Five Oaks Oakville`.

Lead-delivery order:

1. If Google Sheets OAuth and a spreadsheet ID are set, the server appends the validated lead to that sheet.
2. If `LEAD_WEBHOOK_URL` is also set, the server posts the lead there after a successful Sheets write.
3. Otherwise, if internal email and an email API key are set, the server sends the internal new-lead email.
4. In non-production, if neither destination is configured, leads are appended to `.data/leads.jsonl`.
5. Set `ALLOW_LOCAL_LEAD_CAPTURE=true` only for staging or local production-server tests when no CRM is configured.
6. In production, if no destination is configured and local capture is not explicitly enabled, the form returns a recoverable failure.

Acknowledgement email is best-effort after a successful capture.

### Analytics

- `NEXT_PUBLIC_ANALYTICS_MEASUREMENT_ID` — optional GA4 measurement ID.
- `NEXT_PUBLIC_ALLOW_FBCLID` — set `true` only if the privacy configuration allows capturing `fbclid`.

`generate_lead` fires only after the server confirms capture. Names, emails, phone numbers and other form values are never sent to analytics.

### Search verification

- `GOOGLE_SEARCH_CONSOLE_VERIFICATION`
- `BING_WEBMASTER_VERIFICATION`

After deploy: submit `https://www.fiveoaksbycaivan.com/sitemap.xml` and request indexing on `/` and each spoke.

## Crawler configuration

Once indexing is enabled:

- Allow Googlebot, Bingbot and OAI-SearchBot.
- `/api/` is disallowed.
- `public/llms.txt` lists entities, TBA items and canonical URLs. It is not a substitute for crawlable HTML.

## How to update project facts

All time-sensitive project copy is centralized in `lib/project-data.ts`.

1. Verify the new fact against official Five Oaks/Caivan material.
2. Update the fact ledger: `value`, `sourceLabel`, `sourceUrl`, `checked`, `status`, and `displayBehavior`.
3. Use `VERIFIED`, `PROVISIONAL`, `CONFLICTING` or `TBA`.
4. TBA values must render as **To be announced** or **Request the latest verified update**. Do not invent a fallback.
5. Update `INFORMATION_CHECKED_ISO` / `INFORMATION_CHECKED_DISPLAY`.
6. Update visible FAQ answers if they depend on the fact.
7. Update JSON-LD only when the visible page actually supports the new entity or property.

Never invent prices, starting prices, floor plans, deposits, incentives, launch dates, occupancy, lot counts, commute times, school ratings, or treat 209 Oak Park Blvd as the Five Oaks site.

## Known TBA project information

As of August 24, 2026, official reviewed material had not published:

- Exact project site/address/intersection
- Official site plan
- Number of lots/homes
- Lot widths, home sizes, bedroom/bathroom configurations and elevations
- Detailed features and finishes
- Price list and starting prices
- Deposit schedule
- Incentives
- Release dates and sales launch date
- Occupancy/closing dates
- Assignment rules
- Development charges
- Parking details
- Official floor plans

## Pre-launch checklist

- [ ] Confirm `NEXT_PUBLIC_SITE_URL=https://www.fiveoaksbycaivan.com`
- [ ] Replace publisher legal name, address, phone and email placeholders
- [ ] Confirm brokerage and RECO identity if an Ontario registrant operates the site
- [ ] Replace the privacy-policy template with a reviewed policy URL
- [ ] Configure the existing Five Oaks Sheet credentials in this Vercel project
- [ ] 301 or canonical the `.ca` host to matching `.com` URLs
- [ ] Submit sitemap; request index on `/` and each spoke
- [ ] Do not advertise prices, floor plans, deposits, incentives, launch dates or a project address until official sources confirm them

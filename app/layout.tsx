import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { serverEnv } from "@/lib/env";
import { seo } from "@/lib/project-data";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: seo.title,
    template: "%s | Five Oaks by Caivan Oakville",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "Five Oaks Oakville project information",
  category: "real estate",
  robots: siteConfig.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: seo.ogTitle,
    description: seo.description,
    siteName: "Five Oaks Oakville project information",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.description,
  },
  verification: {
    google: serverEnv.googleSearchConsoleVerification,
    other: serverEnv.bingWebmasterVerification
      ? { "msvalidate.01": serverEnv.bingWebmasterVerification }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-CA"
      className={`${newsreader.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper-elevated focus:px-4 focus:py-3 focus:shadow-sm"
        >
          Skip to main content
        </a>
        <Analytics />
        {children}
      </body>
    </html>
  );
}

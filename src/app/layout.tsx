import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FormationReveals } from "@/components/motion/formation-reveals";
import { RouteCurtain } from "@/components/motion/route-curtain";
import { Spotlight } from "@/components/motion/spotlight";
import { isIndexable, site, siteUrl } from "@/content/site";
import { homeDescription, keywords, ogImage, seoTitle } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

/** Chapter numerals and stage counters only; one weight keeps it cheap. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: seoTitle,
    template: `%s — ${site.name}`,
  },
  description: homeDescription,
  keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl() }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  // Paste the codes from Google Search Console and Bing Webmaster Tools into
  // these environment variables; the tags render only once they are set.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  // No canonical here: a root canonical is inherited by every page that does not
  // set its own, which marks them all as duplicates of the home page.
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: seoTitle,
    description: homeDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: homeDescription,
    images: [ogImage.url],
  },
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, nocache: true },
};

/**
 * Sets the theme and the `js` flag before first paint: no dark-mode flash, and
 * no reveal animation applied to a page whose JavaScript never arrives.
 */
const bootScript = `document.documentElement.classList.add('js');try{if(localStorage.getItem('sl-theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={site.locale}
      className={`${outfit.variable} ${jakarta.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="focus:bg-accent-core focus:text-accent-contrast sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[var(--radius-control)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FormationReveals />
        <Spotlight />
        <RouteCurtain />
      </body>
    </html>
  );
}

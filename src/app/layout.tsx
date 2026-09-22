import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isIndexable, site, siteUrl } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl(),
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [ogImage.url],
  },
  robots: isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

/**
 * Sets the theme and the `js` flag before first paint: no light-mode flash, and
 * no reveal animation applied to a page whose JavaScript never arrives.
 */
const bootScript = `document.documentElement.classList.add('js');try{if(localStorage.getItem('sl-theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={site.locale}
      className={`${archivo.variable} ${instrumentSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[var(--radius-control)] focus:bg-accent-core focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-contrast"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

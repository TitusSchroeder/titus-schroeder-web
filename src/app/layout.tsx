import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Titus Schröder — Webdesign & Entwicklung | Moderne Websites für Münchner Unternehmen",
  description:
    "Schnelle, backend-freie Webseiten für lokale Unternehmen in Haar & München. Maximale Google-Sichtbarkeit, Ladezeiten unter 0,5s und einfache Direkt-Bearbeitung.",
  keywords: [
    "Titus Schröder",
    "Webdesign Haar",
    "Webdesign München",
    "Website erstellen München",
    "Schnelle Websites",
    "SEO München",
  ],
  authors: [{ name: "Titus Schröder" }],
  icons: {
    icon: [
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon-48x48.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Titus Schröder — Webdesign & Entwicklung",
    description:
      "Entwicklung von maßgeschneiderten, schnellen und modernen Webauftritten für mittelständische Unternehmen in Haar und der Region München.",
    url: "https://titus-schroeder.de",
    email: "titus@schroeder-muc.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Peter-Wolfram-Str. 19",
      postalCode: "85540",
      addressLocality: "Haar",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.1102",
      longitude: "11.7303",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "München",
      },
      {
        "@type": "AdministrativeArea",
        name: "Haar",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bayern",
      },
    ],
    priceRange: "€€",
    knowsAbout: [
      "Webdesign",
      "Web-Entwicklung",
      "Suchmaschinenoptimierung (SEO)",
      "Performance Optimierung",
    ],
  };

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-brand-bg text-brand-navy antialiased selection:bg-brand-blue selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteConfig } from "@/config/site";

const siteUrl = new URL(siteConfig.siteUrl);
const ogImageUrl = new URL(siteConfig.ogImagePath, siteUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.siteName,
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  keywords: [
    "electricista matriculado",
    "electricista buenos aires",
    "electricista caba",
    "electricista gba",
    "urgencias electricas 24 horas"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.siteName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: ogImageUrl.toString(),
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} - vista previa`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImageUrl.toString()]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  formatDetection: {
    telephone: false
  },
  robots: {
    index: siteConfig.isIndexable,
    follow: siteConfig.isIndexable
  },
  category: "business"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = siteConfig.isDemoSite
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.siteName,
        url: siteUrl.toString(),
        description: `${siteConfig.description} Sitio de demostración.`,
        inLanguage: "es-AR"
      }
    : {
        "@context": "https://schema.org",
        "@type": "Electrician",
        name: siteConfig.brand,
        url: siteUrl.toString(),
        description: siteConfig.description,
        areaServed: [
          {
            "@type": "City",
            name: "Buenos Aires"
          },
          {
            "@type": "AdministrativeArea",
            name: "Gran Buenos Aires"
          }
        ],
        telephone: siteConfig.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.locality,
          addressCountry: siteConfig.country
        }
      };

  return (
    <html lang="es">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

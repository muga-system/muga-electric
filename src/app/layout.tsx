import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: siteConfig.brand,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

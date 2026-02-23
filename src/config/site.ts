const DEFAULT_SITE_URL = "https://muga-electric-demo.example.com";

type SiteMode = "demo" | "preview" | "production";

function getSiteMode(): SiteMode {
  const rawValue = process.env.NEXT_PUBLIC_SITE_MODE?.trim().toLowerCase();

  if (rawValue === "production" || rawValue === "preview" || rawValue === "demo") {
    return rawValue;
  }

  return "demo";
}

const siteMode = getSiteMode();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

export const siteConfig = {
  siteMode,
  isDemoSite: siteMode === "demo",
  brand: "EVF",
  siteName: "MUGA Electric Demo",
  role: "Electricista matriculado",
  title: "EVF | Electricista matriculado",
  description:
    "Instalaciones eléctricas seguras en Buenos Aires. Atención rápida para hogares, comercios y consorcios.",
  siteUrl,
  ogImagePath: "/og-image.svg",
  serviceArea: "CABA y GBA",
  locality: "Buenos Aires",
  country: "AR",
  phoneDisplay: "+54 11 5555-1234",
  phoneHref: "tel:+541155551234",
  whatsappHref: "https://wa.me/541155551234?text=Hola%2C%20necesito%20un%20servicio%20el%C3%A9ctrico",
  ctaPrimary: "Llamar ahora",
  ctaSecondary: "Ver servicios",
  footerVersion: "v1.0.0",
  mugaWebsiteUrl: "https://muga.dev",
  mugaGithubUrl: "https://github.com/muga-system",
  socialInstagramUrl: "https://instagram.com/muga.dev",
  socialFacebookUrl: "https://facebook.com/muga.dev"
} as const;

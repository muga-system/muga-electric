import { ArrowUp, Facebook, Instagram } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/content/business-content";

export function SiteFooter() {
  return (
    <footer className="py-12">
      <Container>
        <div className="block-panel p-6 sm:p-8">
          <div className="space-y-8">
            <div>
              <p className="text-[clamp(2.5rem,9vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-foreground">
                {siteConfig.brand}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
                Servicio profesional eléctrico en CABA y GBA. Atención técnica, segura y clara.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.socialInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de MUGA"
                className="inline-flex h-14 w-14 items-center justify-center border border-foreground bg-card text-foreground transition hover:bg-accent"
              >
                <Instagram className="h-6 w-6" aria-hidden />
              </a>
              <a
                href={siteConfig.socialFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de MUGA"
                className="inline-flex h-14 w-14 items-center justify-center border border-foreground bg-card text-foreground transition hover:bg-accent"
              >
                <Facebook className="h-6 w-6" aria-hidden />
              </a>
              <a
                href="#top"
                aria-label="Volver arriba"
                className="inline-flex h-14 w-14 items-center justify-center border border-foreground bg-card text-foreground transition hover:bg-accent"
              >
                <ArrowUp className="h-6 w-6" aria-hidden />
              </a>
            </div>

            <nav className="flex flex-wrap gap-2.5 sm:gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border border-foreground bg-card px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-foreground transition hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 border-t border-foreground/20 pt-5">
            <div className="grid gap-3 text-sm text-foreground sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <p className="flex flex-wrap items-center gap-2 text-sm">
                <a
                  href={siteConfig.mugaWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/85 transition hover:text-foreground"
                >
                  muga.dev
                </a>
                <span aria-hidden className="text-foreground/55">
                  ·
                </span>
                <a
                  href={siteConfig.mugaGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/85 underline-offset-4 transition hover:text-foreground hover:underline"
                >
                  {siteConfig.footerVersion}
                </a>
              </p>

              <p className="text-sm text-foreground/90 sm:text-center">Trabajo técnico. Coordinación clara.</p>

              <p className="text-sm text-foreground/85 sm:justify-self-end">{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

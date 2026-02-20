import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/content/business-content";

export function SiteFooter() {
  return (
    <footer className="py-12">
      <Container>
        <div className="block-panel p-6 sm:p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <span className="inline-flex border-2 border-foreground bg-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.08em] text-foreground">
                Servicio eléctrico
              </span>
              <div className="space-y-1">
                <p className="text-base font-extrabold uppercase tracking-[0.05em] text-foreground">
                  {siteConfig.brand}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{siteConfig.role}</p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2.5 sm:max-w-[22rem] sm:justify-end">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-2 border-foreground bg-card px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-muted transition hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-6 border-t-2 border-foreground pt-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a href={siteConfig.phoneHref} className="text-sm font-black uppercase tracking-[0.06em] text-foreground">
                {siteConfig.phoneDisplay}
              </a>
              <p className="text-xs text-muted">© {new Date().getFullYear()} {siteConfig.brand}. Todos los derechos reservados.</p>
            </div>
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.08em] text-muted">
              Servicio eléctrico profesional en CABA y GBA
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

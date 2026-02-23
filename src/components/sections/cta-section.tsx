import { siteConfig } from "@/config/site";
import { ContactActionTrigger } from "@/components/contact/contact-action-trigger";
import { Container } from "@/components/ui/container";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function CtaSection() {
  const quickItems = [
    { label: "Instalaciones seguras", icon: "target" as const },
    { label: "Emergencias 24/7", icon: "bolt" as const },
    { label: "Presupuesto claro", icon: "automation" as const }
  ] as const;

  return (
    <section id="contacto" className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="Contacto directo" subtitle="Atención inmediata" />

        <div className="mt-10 block-panel p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="max-w-2xl text-3xl font-extrabold uppercase leading-[1.02] text-foreground sm:text-5xl">
                ¿Necesitas resolver una instalación eléctrica hoy?
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium text-muted">
                Atención rápida, trabajo seguro y presupuesto claro.
              </p>

              <div className="mt-8">
                <ContactActionTrigger
                  channel="call"
                  href={siteConfig.phoneHref}
                  className="btn-primary w-full text-base sm:w-auto sm:px-10 sm:py-4"
                >
                  {siteConfig.ctaPrimary}
                </ContactActionTrigger>
              </div>

              <p className="mt-5 border-l-4 border-accent pl-3 text-sm font-black uppercase tracking-[0.06em] text-foreground">
                Teléfono directo: {siteConfig.phoneDisplay}
              </p>
            </div>

            <div className="border-2 border-foreground bg-surface p-5 sm:p-6">
              <span className="inline-flex border-2 border-foreground bg-accent px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-foreground">
                Respuesta rápida
              </span>

              <div className="mt-4 space-y-3">
                {quickItems.map((item) => (
                  <article key={item.label} className="flex items-center gap-3 border-2 border-foreground bg-card p-3">
                    <IconBadge name={item.icon} className="h-9 w-9 border-2 border-foreground bg-accent text-foreground" />
                    <p className="text-sm font-semibold uppercase tracking-[0.05em] text-foreground">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";

export function HeroSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="block-panel [--hatch-offset:12px] p-6 sm:p-8">
          <Pill>Servicio eléctrico</Pill>

          <h1 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.98] text-foreground sm:text-5xl md:text-6xl">
            Electricista matriculado. Respuesta rápida.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Instalaciones eléctricas seguras en CABA y GBA para hogares, comercios y consorcios.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.phoneHref} className="btn-primary text-base">
              {siteConfig.ctaPrimary}
            </a>
            <a href="#propuesta" className="btn-secondary">
              Ver servicios
            </a>
          </div>

          <p className="mt-5 border-l-4 border-accent pl-3 text-sm font-bold uppercase tracking-[0.06em] text-foreground">
            Teléfono directo: {siteConfig.phoneDisplay}
          </p>
        </div>
      </Container>
    </section>
  );
}

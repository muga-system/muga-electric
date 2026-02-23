import { benefits } from "@/content/business-content";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section id="propuesta" className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="Servicios principales" subtitle="Trabajo técnico" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <GlassPanel key={benefit.title} className="relative p-6">
              <span className="absolute -right-2 -top-2 border-2 border-foreground bg-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.08em] text-foreground">
                0{index + 1}
              </span>
              <IconBadge name={benefit.icon} />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.08em] text-muted">
                {benefit.kicker}
              </p>
              <h3 className="mt-2 text-xl font-extrabold uppercase leading-tight text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 border-l-4 border-accent pl-3 text-sm font-medium text-muted">
                {benefit.description}
              </p>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { mugaStages } from "@/content/business-content";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { IconBadge } from "@/components/ui/icon-badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function MugaSystemSection() {
  return (
    <section id="muga" className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="Por qué elegir este servicio" subtitle="Garantías" />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {mugaStages.map((stage) => (
            <GlassPanel key={stage.id} className="p-6">
              <div className="flex items-center justify-between gap-3">
                <IconBadge name={stage.icon} />
                <span className="border-2 border-foreground bg-accent px-2 py-1 text-sm font-black uppercase tracking-[0.08em] text-foreground">
                  {stage.id}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-extrabold uppercase leading-tight text-foreground">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted">{stage.objective}</p>
              <p className="mt-4 border-l-4 border-accent pl-3 text-sm font-semibold text-foreground">
                {stage.actions[0]}
              </p>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}

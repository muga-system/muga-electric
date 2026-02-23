import type {
  Benefit,
  MugaStage,
  NavLink
} from "@/types/business";

export const navLinks: NavLink[] = [
  { href: "#propuesta", label: "Servicios" },
  { href: "#muga", label: "Garantías" },
  { href: "#contacto", label: "Contacto" }
];

export const benefits: Benefit[] = [
  {
    kicker: "Instalación",
    title: "Instalaciones eléctricas seguras",
    description: "Viviendas, locales y oficinas.",
    icon: "market"
  },
  {
    kicker: "Urgencias",
    title: "Emergencias 24/7",
    description: "Respuesta rápida en el día.",
    icon: "bolt"
  },
  {
    kicker: "Mantenimiento",
    title: "Tableros y térmicas",
    description: "Diagnóstico y reparación.",
    icon: "trend"
  }
];

export const mugaStages: MugaStage[] = [
  {
    id: "01",
    title: "Matrícula habilitante",
    objective: "Trabajo técnico certificado",
    actions: ["Normativa vigente"],
    icon: "target"
  },
  {
    id: "02",
    title: "Seguridad en obra",
    objective: "Protocolos y materiales adecuados",
    actions: ["Riesgo controlado"],
    icon: "user"
  },
  {
    id: "03",
    title: "Presupuesto claro",
    objective: "Detalle antes de iniciar",
    actions: ["Sin sorpresas"],
    icon: "bolt"
  },
  {
    id: "04",
    title: "Respuesta rápida",
    objective: "Contacto y coordinación directa",
    actions: ["Atención inmediata"],
    icon: "automation"
  }
];

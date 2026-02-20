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
    description: "Viviendas, locales y oficinas."
  },
  {
    kicker: "Urgencias",
    title: "Emergencias 24/7",
    description: "Respuesta rápida en el día."
  },
  {
    kicker: "Mantenimiento",
    title: "Tableros y térmicas",
    description: "Diagnóstico y reparación."
  }
];

export const mugaStages: MugaStage[] = [
  {
    id: "01",
    title: "Matrícula habilitante",
    objective: "Trabajo técnico certificado",
    actions: ["Normativa vigente"]
  },
  {
    id: "02",
    title: "Seguridad en obra",
    objective: "Protocolos y materiales adecuados",
    actions: ["Riesgo controlado"]
  },
  {
    id: "03",
    title: "Presupuesto claro",
    objective: "Detalle antes de iniciar",
    actions: ["Sin sorpresas"]
  },
  {
    id: "04",
    title: "Respuesta rápida",
    objective: "Contacto y coordinación directa",
    actions: ["Atención inmediata"]
  }
];

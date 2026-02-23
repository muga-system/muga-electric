export type BusinessIconName =
  | "target"
  | "bolt"
  | "trend"
  | "market"
  | "user"
  | "automation";

export type NavLink = {
  href: string;
  label: string;
};

export type Benefit = {
  title: string;
  description: string;
  kicker: string;
  icon: BusinessIconName;
};

export type MugaStage = {
  id: string;
  title: string;
  objective: string;
  actions: string[];
  icon: BusinessIconName;
};

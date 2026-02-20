import type { PropsWithChildren } from "react";

type PillProps = PropsWithChildren;

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex border-2 border-foreground bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-foreground">
      {children}
    </span>
  );
}

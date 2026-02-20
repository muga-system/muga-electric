import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type GlassPanelProps = ComponentPropsWithoutRef<"div">;

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return (
    <div
      {...props}
      className={cn(
        "block-panel",
        className
      )}
    >
      {children}
    </div>
  );
}

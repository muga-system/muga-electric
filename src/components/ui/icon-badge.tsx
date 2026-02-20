import type { LucideIcon } from "lucide-react";
import { Settings, ShoppingBag, Target, TrendingUp, User, Zap } from "lucide-react";

import { cn } from "@/lib/cn";

type IconName = "target" | "bolt" | "trend" | "market" | "user" | "automation";

type IconBadgeProps = {
  name: IconName;
  className?: string;
};

export function IconBadge({ name, className }: IconBadgeProps) {
  const icons: Record<IconName, LucideIcon> = {
    target: Target,
    bolt: Zap,
    trend: TrendingUp,
    market: ShoppingBag,
    user: User,
    automation: Settings
  };
  const Icon = icons[name];

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center border-2 border-foreground bg-accent text-foreground",
        className
      )}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={1.9} />
    </span>
  );
}

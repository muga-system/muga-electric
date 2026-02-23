import type { LucideIcon } from "lucide-react";
import { Settings, ShoppingBag, Target, TrendingUp, User, Zap } from "lucide-react";

import { cn } from "@/lib/cn";
import type { BusinessIconName } from "@/types/business";

type IconBadgeProps = {
  name: BusinessIconName;
  className?: string;
};

export function IconBadge({ name, className }: IconBadgeProps) {
  const icons: Record<BusinessIconName, LucideIcon> = {
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

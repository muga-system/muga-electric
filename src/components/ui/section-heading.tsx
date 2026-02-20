import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("max-w-2xl", isCenter && "mx-auto text-center")}>
      <p className="inline-flex border border-foreground bg-accent px-2 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground">
        {subtitle}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1.02] text-foreground sm:text-4xl md:text-[2.7rem]">
        {title}
      </h2>
    </div>
  );
}

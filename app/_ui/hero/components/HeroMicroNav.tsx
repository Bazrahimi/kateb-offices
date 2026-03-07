import { cn } from "@/app/_lib/utils/cn";
import { P } from "../../typography/paragraph";
import HeroLink from "./HeroLink";

type Props = {
  items: Array<{
    href: string;
    label: string;
  }>;
  className?: string;
};

export default function HeroMicroNav({ items, className }: Props) {
  return (
    <div
      className={cn(
        "mx-3 rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md",
        "shadow-[0_20px_80px_rgba(0,0,0,0.20)]",
        "sm:px-6",
        className,
      )}
    >
      <P className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/90">
        {items.map(({ href, label }) => (
          <HeroLink key={href} href={href} label={label} />
        ))}
      </P>
    </div>
  );
}

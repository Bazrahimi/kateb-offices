import { cn } from "@/app/_lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

export default function Section({
  children,
  className,
  id,
  labelledBy,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "rounded-b-3xl border border-slate-200 shadow-sm p-2 sm:p-4 bg-org-primary-dark",
        className,
      )}
    >
      {children}
    </section>
  );
}

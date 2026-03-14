import { bodyFont } from "@/app/_lib/org/font";
import { cn } from "@/app/_lib/utils/cn";
import * as React from "react";

export type PSize = "sm" | "md" | "lg" | "xl";

const SIZE: Record<PSize, string> = {
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-xl sm:text-2xl md:text-3xl", // 🚀 Extra-large responsive text
};

const LEADING: Record<PSize, string> = {
  sm: "leading-6 sm:leading-7",
  md: "leading-7 sm:leading-8",
  lg: "leading-8 sm:leading-9",
  xl: "leading-9 sm:leading-10 md:leading-tight", // nice and balanced
};

type PProps = React.ComponentPropsWithoutRef<"p"> & {
  size?: PSize;
};

export function P({ size = "md", className, children, ...rest }: PProps) {
  return (
    <p
      className={cn(
        bodyFont.className,
        SIZE[size],
        LEADING[size],
        "antialiased",
        "text-slate-800",
        "break-words",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

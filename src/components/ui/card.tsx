import type { ComponentPropsWithoutRef } from "react";

export function Card({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background-elevated p-6 ${className}`}
      {...props}
    />
  );
}

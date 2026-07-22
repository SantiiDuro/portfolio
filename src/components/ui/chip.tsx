export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background-elevated px-3 py-1 text-xs text-foreground-muted">
      {children}
    </span>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">{children}</h2>
  );
}

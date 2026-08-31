export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-acid py-3">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm uppercase text-primary-foreground sm:text-base"
          >
            {item} <span className="px-4 opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

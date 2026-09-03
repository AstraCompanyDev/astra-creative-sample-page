import { useEffect, useRef, useState } from "react";

export type BrandCard = {
  brand: string;
  kind: string;
  result: string;
  image?: string;
  logo?: string;
};

function Card({ card }: { card: BrandCard }) {
  return (
    <div className="group w-[300px] shrink-0 rounded-lg border border-border bg-background p-7 transition-colors hover:border-primary sm:w-[340px]">
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded bg-card">
        {card.image ? (
          <img
            src={card.image}
            alt={`${card.brand} brand visual`}
            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
        ) : card.logo ? (
          <img
            src={card.logo}
            alt={`${card.brand} logo`}
            className="max-h-24 max-w-[80%] object-contain opacity-90 transition-opacity group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded bg-acid opacity-80 transition-opacity group-hover:opacity-100">
            <span className="font-display text-2xl text-acid-foreground">
              {card.brand}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-6 text-2xl">{card.brand}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{card.kind}</p>
      <p className="mt-4 font-display text-sm uppercase text-primary">{card.result}</p>
    </div>
  );
}

export function WorkCarousel({ cards }: { cards: BrandCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Pause on hover handled via state so we can also pause on focus for a11y.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handle = () => setPaused(true);
    const release = () => setPaused(false);
    track.addEventListener("mouseenter", handle);
    track.addEventListener("mouseleave", release);
    track.addEventListener("focusin", handle);
    track.addEventListener("focusout", release);
    return () => {
      track.removeEventListener("mouseenter", handle);
      track.removeEventListener("mouseleave", release);
      track.removeEventListener("focusin", handle);
      track.removeEventListener("focusout", release);
    };
  }, []);

  // Duplicate the set so the marquee loops seamlessly.
  const loop = [...cards, ...cards];

  return (
    <div className="relative overflow-hidden">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-card to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-card to-transparent sm:w-32" />

      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{
          animation: "work-marquee 40s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {loop.map((card, i) => (
          <Card key={`${card.brand}-${i}`} card={card} />
        ))}
      </div>

      <style>{`
        @keyframes work-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.75rem)); }
        }
      `}</style>
    </div>
  );
}

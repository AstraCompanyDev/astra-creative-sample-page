import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import creator4 from "@/assets/creator-4.jpg";

const talent = [
  { img: creator1, name: "Naomi A.", niche: "Beauty & Lifestyle", reach: "1.4M" },
  { img: creator2, name: "Kenji R.", niche: "Streetwear & Culture", reach: "860K" },
  { img: creator3, name: "Camila V.", niche: "Fitness & Wellness", reach: "2.1M" },
  { img: creator4, name: "Marcus D.", niche: "Tech & Founders", reach: "540K" },
];

export function TalentSection() {
  return (
    <section className="border-t border-border bg-card py-24" id="talent">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-widest text-primary">
              UGC & creator network
            </p>
            <h2 className="mt-4 text-4xl sm:text-7xl">
              Real people.
              <br />
              <span className="text-acid">Real reach.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A vetted roster of 400+ creators across 26 markets — cast, briefed, and produced
            in-house. You get scroll-stopping native content, not another polished ad nobody
            watches.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {talent.map((person) => (
            <figure
              key={person.name}
              className="group relative overflow-hidden rounded-lg border border-border bg-background"
            >
              <img
                src={person.img}
                alt={`${person.name}, ${person.niche} creator`}
                loading="lazy"
                width={768}
                height={960}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-background via-background/70 to-transparent p-4">
                <div>
                  <p className="font-display text-base uppercase">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.niche}</p>
                </div>
                <span className="rounded-full bg-primary px-2.5 py-1 font-display text-[10px] uppercase text-primary-foreground">
                  {person.reach}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {[
            ["400+", "Creators on roster"],
            ["26", "Markets covered"],
            ["12K+", "Assets shipped / yr"],
            ["72h", "Brief to first cut"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-3xl text-primary sm:text-5xl">{stat}</p>
              <p className="mt-2 text-xs text-muted-foreground uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

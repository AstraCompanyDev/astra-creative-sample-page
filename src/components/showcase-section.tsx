import showcase1 from "@/assets/showcase-1.mp4.asset.json";
import showcase2 from "@/assets/showcase-2.mp4.asset.json";
import showcase3 from "@/assets/showcase-3.mp4.asset.json";
import showcase4 from "@/assets/showcase-4.mp4.asset.json";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import creator4 from "@/assets/creator-4.jpg";

const showcase = [
  {
    video: showcase1.url,
    poster: creator1,
    title: "Glow Ritual",
    client: "Beauty / DTC",
    blurb: "Creator-led hook test, 12 variants shipped in a week.",
    stat: "4.1M views",
  },
  {
    video: showcase2.url,
    poster: creator2,
    title: "Drop Season",
    client: "Streetwear",
    blurb: "Launch teaser cut for TikTok, Reels and Shorts.",
    stat: "+212% CTR",
  },
  {
    video: showcase3.url,
    poster: creator3,
    title: "Daily Reset",
    client: "Wellness App",
    blurb: "UGC testimonial series driving trial signups.",
    stat: "2.8x ROAS",
  },
  {
    video: showcase4.url,
    poster: creator4,
    title: "Founder Mode",
    client: "B2B SaaS",
    blurb: "Talking-head ad framework built for paid social.",
    stat: "-38% CPA",
  },
];

export function ShowcaseSection() {
  return (
    <section className="border-t border-border bg-card py-24" id="showcase">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-widest text-primary">
              Showcase of work
            </p>
            <h2 className="mt-4 text-4xl sm:text-7xl">
              Content that
              <br />
              <span className="text-acid">performs.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A snapshot of recent creator-led work — cast, briefed, shot and edited in-house,
            then tested until the numbers move.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcase.map((item) => (
            <article key={item.title} className="group">
              <div className="relative overflow-hidden rounded-lg border border-border bg-background">
                <video
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${item.title} for ${item.client}`}
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 font-display text-[10px] uppercase text-primary-foreground">
                  {item.stat}
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-base uppercase">{item.title}</p>
                <p className="text-xs uppercase tracking-widest text-primary">{item.client}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
              </div>
            </article>
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

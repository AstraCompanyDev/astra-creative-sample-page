import showcaseCreative from "@/assets/showcase-creative.mp4.asset.json";
import showcase1 from "@/assets/showcase-1.mp4.asset.json";
import showcase2 from "@/assets/showcase-2.mp4.asset.json";
import showcaseStrategy from "@/assets/showcase-strategy.mp4.asset.json";
import showcase4 from "@/assets/showcase-4.mp4.asset.json";
import showcase5 from "@/assets/showcase-5.mp4.asset.json";
import showcase6 from "@/assets/showcase-6.mp4.asset.json";
import showcase7 from "@/assets/showcase-7.mp4.asset.json";
import showcase8 from "@/assets/showcase-8.mp4.asset.json";
import showcaseTalent from "@/assets/showcase-talent.mp4.asset.json";
import showcaseCommerce from "@/assets/showcase-commerce.mp4.asset.json";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import creator4 from "@/assets/creator-4.jpg";

const showcase = [
  {
    video: showcaseCreative.url,
    poster: creator1,
    title: "Creative",
    blurb: "Scroll-stopping concepts, design systems and ad creative built to travel across every feed.",
  },
  {
    video: showcase5.url,
    poster: creator2,
    title: "Media",
    blurb: "Creative-first media buying across Meta, TikTok, YouTube and beyond — scaled weekly on winners.",
  },
  {
    video: showcaseStrategy.url,
    poster: creator3,
    title: "Strategy",
    blurb: "Positioning, narrative and go-to-market thinking that gives every asset a reason to exist.",
  },
  {
    video: showcase4.url,
    poster: creator4,
    title: "Integrated",
    blurb: "One team across brand, social, paid and production — no handoffs, no diluted ideas.",
  },
  {
    video: showcase2.url,
    poster: creator1,
    title: "Consulting",
    blurb: "Senior counsel for in-house teams: audits, playbooks and operating models that stick.",
  },
  {
    video: showcaseCommerce.url,
    poster: creator2,
    title: "Commerce",
    blurb: "Shoppable content and storefront creative engineered to convert attention into revenue.",
  },
  {
    video: showcaseTalent.url,
    poster: creator3,
    title: "Influencer & Talent",
    blurb: "Casting, deals and whitelisting from a 400-creator roster — partnerships that actually perform.",
  },
  {
    video: showcase6.url,
    poster: creator4,
    title: "Analytics",
    blurb: "Incrementality reporting and creative testing frameworks that prove what moved the number.",
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
              Every discipline.
              <br />
              <span className="text-acid">One team.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Eight capabilities, one studio — cast, briefed, shot and edited in-house, then
            tested until the numbers move.
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
                  aria-label={`${item.title} showcase video`}
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="font-display text-base uppercase">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

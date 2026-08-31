import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UGC, Paid Social & Brand Strategy | Hyperloop" },
      {
        name: "description",
        content:
          "Brand strategy, UGC production at scale, social management, paid social, content production and influencer partnerships from Hyperloop.",
      },
      { property: "og:title", content: "Services — UGC, Paid Social & Brand Strategy" },
      {
        property: "og:description",
        content:
          "Six core capabilities, one team: strategy, UGC, social, paid, production and creator partnerships.",
      },
    ],
  }),
  component: ServicesPage,
});

const capabilities = [
  {
    title: "Brand Strategy",
    deliverables: ["Positioning & narrative", "Visual identity system", "Messaging architecture", "Category audit"],
    copy: "We start where most agencies skip: a defensible point of view. Then we build the identity and language to carry it across every surface.",
  },
  {
    title: "UGC at Scale",
    deliverables: ["Creator casting", "Brief writing", "Volume production", "Usage & licensing"],
    copy: "Our 400-creator roster becomes your always-on content engine. Hundreds of native assets a month, versioned for every placement.",
  },
  {
    title: "Social Management",
    deliverables: ["Channel strategy", "Content calendars", "Community management", "Trend response"],
    copy: "We run the accounts like an in-house team that never sleeps — with a reactive layer that ships culture-timed posts in hours.",
  },
  {
    title: "Paid Social",
    deliverables: ["Creative testing", "Media buying", "Whitelisting", "Incrementality reporting"],
    copy: "Creative-first buying across Meta, TikTok, YouTube and Reddit. We scale winners weekly and kill fatigue before it hits your CAC.",
  },
  {
    title: "Content Production",
    deliverables: ["Vertical video", "Studio photography", "Campaign films", "Motion & edit"],
    copy: "A full in-house studio, built for creator-speed output without losing brand-grade craft.",
  },
  {
    title: "Influencer Partnerships",
    deliverables: ["Talent sourcing", "Deal negotiation", "Ambassador programs", "Performance tracking"],
    copy: "Long-term partnerships instead of one-off posts, with contracts and measurement that hold up.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Services
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,8vw,6.5rem)]">
              Everything you need to <span className="text-acid">win the feed</span>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Engage us for one capability or the whole stack. Most partners start with a
              90-day UGC sprint and expand from there.
            </p>
          </div>
        </section>

        <Marquee items={["Strategy", "UGC", "Social", "Paid", "Production", "Partnerships"]} />

        <section className="py-20">
          <div className="mx-auto max-w-7xl space-y-px overflow-hidden rounded-lg border border-border bg-border px-0 sm:px-8">
            {capabilities.map((cap, i) => (
              <article key={cap.title} className="grid gap-6 bg-background p-8 lg:grid-cols-12">
                <span className="font-mono text-xs text-muted-foreground lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl lg:col-span-4">{cap.title}</h2>
                <p className="text-sm text-muted-foreground lg:col-span-4">{cap.copy}</p>
                <ul className="space-y-2 lg:col-span-3">
                  {cap.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-3">
            {[
              ["Sprint", "$18k / mo", "One capability, 90-day commitment, single squad."],
              ["Engine", "$42k / mo", "UGC + paid + social run as one always-on system."],
              ["Partner", "Custom", "Embedded team, quarterly planning, full brand ownership."],
            ].map(([tier, price, copy]) => (
              <div key={tier} className="rounded-lg border border-border bg-background p-8">
                <h3 className="text-2xl">{tier}</h3>
                <p className="mt-3 font-display text-3xl text-primary">{price}</p>
                <p className="mt-4 text-sm text-muted-foreground">{copy}</p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex rounded-full border border-border px-5 py-2.5 font-display text-xs uppercase hover:border-primary hover:text-primary"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

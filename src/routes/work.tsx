import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ClientsSection } from "@/components/clients-section";
import utopiaLogoAsset from "@/assets/utopia-logo-white.png.asset.json";
import mooomentCardAsset from "@/assets/moooment-card.jpg.asset.json";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Creator Campaigns & Brand Launches | Hyperloop" },
      {
        name: "description",
        content:
          "Case studies from Hyperloop: creator-led launches, B2B social systems and healthcare brand builds with measurable revenue impact.",
      },
      { property: "og:title", content: "Work — Creator Campaigns & Brand Launches" },
      {
        property: "og:description",
        content:
          "Selected case studies with the numbers attached: launches, pipeline growth and brand builds.",
      },
    ],
  }),
  component: WorkPage,
});

const cases = [
  {
    brand: "Vymune",
    kind: "Wellness CPG · Creator-led launch",
    summary:
      "Built a 60-creator launch cohort and a paid layer on top of the winning cuts. Launch week sold through three months of inventory.",
    stats: [["$2.4M", "Creator-led revenue"], ["1,180", "Assets shipped"], ["3.6x", "Blended ROAS"]],
  },
  {
    brand: "U-Topia",
    kind: "Hospitality · Brand build",
    summary:
      "Identity, tone and a pre-opening content engine that turned a construction site into the most-anticipated opening in the city.",
    stats: [["Sold out", "Opening week"], ["+340%", "Follower growth"], ["9.2M", "Local reach"]],
    logo: utopiaLogoAsset.url,
  },
  {
    brand: "Moooment",
    kind: "Mental health · Brand launch",
    summary:
      "Brand identity, creator-led therapist stories and a matched-in-24-hours promise that made therapy feel like part of life, not a hurdle.",
    stats: [["3,100+", "Licensed clinicians"], ["24 hrs", "Avg. match time"], ["4.8/5", "Member rating"]],
    image: mooomentCardAsset.url,
  },
  {
    brand: "Miracle Regenerative Center",
    kind: "Healthcare · Patient acquisition",
    summary:
      "Patient-story UGC plus compliant paid social took consult bookings from a referral trickle to a predictable weekly volume.",
    stats: [["+220%", "Consult bookings"], ["-44%", "Cost per lead"], ["4.8★", "Review lift"]],
  },
  {
    brand: "Astra Healthcare",
    kind: "Health systems · Brand awareness",
    summary:
      "A single platform idea carried by clinician creators, distributed across six regional markets.",
    stats: [["+96%", "Brand recall"], ["6", "Markets launched"], ["11M", "Impressions"]],
  },
  {
    brand: "CoFoundersLab",
    kind: "Startup network · Growth",
    summary:
      "Founder-story content series and community-led rituals restarted signup growth after two flat years.",
    stats: [["+312%", "Signups"], ["24%", "Activation lift"], ["2.9M", "Views / mo"]],
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Work</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,8vw,6.5rem)]">
              Receipts, <span className="text-acid">not reels</span> of fluff
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Every engagement gets a scoreboard. Here's what happened when brands let us run
              the attention engine.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-2">
            {cases.map((c, i) => (
              <article
                key={c.brand}
                className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden rounded bg-card">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.brand} brand visual`}
                      className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  ) : c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.brand} logo`}
                      className="max-h-24 max-w-[80%] object-contain opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  ) : (
                    <div
                      className={`h-full w-full rounded ${i % 2 === 0 ? "bg-acid" : "bg-electric"} opacity-75 transition-opacity group-hover:opacity-100`}
                    />
                  )}
                </div>
                <h2 className="mt-7 text-3xl">{c.brand}</h2>
                <p className="mt-2 text-xs uppercase tracking-wider text-primary">{c.kind}</p>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{c.summary}</p>
                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {c.stats.map(([value, label]) => (
                    <div key={label}>
                      <dt className="font-display text-xl text-primary sm:text-2xl">{value}</dt>
                      <dd className="mt-1 text-[11px] uppercase text-muted-foreground">
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <ClientsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

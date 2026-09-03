import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";
import { ShowcaseSection } from "@/components/showcase-section";

import heroTexture from "@/assets/hero-texture.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import utopiaLogoAsset from "@/assets/utopia-logo-white.png.asset.json";
import mooomentCardAsset from "@/assets/moooment-card.jpg.asset.json";
import zeeworkCardAsset from "@/assets/zeework-card.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astra Creative — Creator-Led Social & Brand Agency" },
      {
        name: "description",
        content:
          "Astra Creative is a creator-led social agency building attention engines: UGC at scale, brand strategy, paid social and content production for ambitious brands.",
      },
      { property: "og:title", content: "Astra Creative — Creator-Led Social & Brand Agency" },
      {
        property: "og:description",
        content:
          "UGC at scale, brand strategy, paid social and content production for brands that refuse to blend in.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Brand Strategy",
    copy: "Positioning, narrative and visual systems built to travel across every feed.",
  },
  {
    title: "UGC at Scale",
    copy: "Casting, briefing and production of native creator content — hundreds of assets a month.",
  },
  {
    title: "Social Management",
    copy: "Always-on channel ownership: calendars, community, trend response in hours not weeks.",
  },
  {
    title: "Paid Social",
    copy: "Creative-first media buying across Meta, TikTok, YouTube and Reddit.",
  },
  {
    title: "Content Production",
    copy: "In-house studio for vertical video, photo, and campaign films at creator speed.",
  },
  {
    title: "Influencer Partnerships",
    copy: "Talent deals, licensing and whitelisting with contracts that actually protect you.",
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="grain relative overflow-hidden">
          <video
            src={heroVideoAsset.url}
            poster={heroTexture}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/40 to-background" />
          <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
            <p className="rise font-display text-xs uppercase tracking-[0.3em] text-primary">
              Creator-led social agency · Est. 2026
            </p>
            <h1 className="rise mt-6 text-[clamp(2.75rem,11vw,9rem)]">
              We make brands
              <br />
              <span className="text-acid">impossible</span>
              <br />
              to scroll past.
            </h1>
            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Astra Creative is a full-stack social and content studio. We pair sharp brand
                strategy with a 400-creator UGC network to build attention engines that
                actually sell — not campaigns that just look nice in a deck.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm uppercase text-primary-foreground transition-transform hover:scale-105"
                >
                  Start a project <ArrowUpRight className="size-4" />
                </Link>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-sm uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  See the work
                </a>
              </div>
            </div>
          </div>
        </section>

        <Marquee
          items={[
            "UGC at scale",
            "Paid social",
            "Brand strategy",
            "Creator casting",
            "Vertical video",
            "Community",
          ]}
        />

        <ShowcaseSection />

        {/* Work teaser */}
        <section id="work" className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-4xl sm:text-6xl">
              Building <span className="text-acid">Global Brands</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { brand: "ZeeWork", kind: "Creator-led brand launch", result: "4.2M views in 60 days", image: zeeworkCardAsset.url },
                { brand: "U-Topia", kind: "Hospitality brand build", result: "Sold out opening week", logo: utopiaLogoAsset.url },
                { brand: "Moooment", kind: "Mental-health brand launch", result: "3,100+ matched clinicians", image: mooomentCardAsset.url },
              ].map(({ brand, kind, result, logo, image }) => (
                <div
                  key={brand}
                  className="group rounded-lg border border-border bg-background p-7 transition-colors hover:border-primary"
                >
                  <div className="relative flex h-40 items-center justify-center overflow-hidden rounded bg-card">
                    {image ? (
                      <img
                        src={image}
                        alt={`${brand} brand visual`}
                        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                      />
                    ) : logo ? (
                      <img
                        src={logo}
                        alt={`${brand} logo`}
                        className="max-h-24 max-w-[80%] object-contain opacity-90 transition-opacity group-hover:opacity-100"
                      />
                    ) : (
                      <div className="h-full w-full rounded bg-acid opacity-80 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <h3 className="mt-6 text-2xl">{brand}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{kind}</p>
                  <p className="mt-4 font-display text-sm uppercase text-primary">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-border py-24" id="services">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-primary">
                  What we do
                </p>
                <h2 className="mt-4 text-4xl sm:text-6xl">
                  Six ways we
                  <br />
                  <span className="text-acid">buy attention back</span>
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-display text-sm uppercase text-primary hover:underline"
              >
                Talk to us <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="group bg-background p-8 transition-colors hover:bg-card"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-2xl transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{service.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <SiteFooter />
    </div>
  );
}

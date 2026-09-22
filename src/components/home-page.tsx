// Original Astra Creative homepage — preserved for later reuse.
// Currently muted: the Launch page is the main page of the site.
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";
import { ShowcaseSection } from "@/components/showcase-section";
import { WorkCarousel, type BrandCard } from "@/components/work-carousel";

import heroTexture from "@/assets/hero-texture.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import utopiaLogoAsset from "@/assets/utopia-logo-white.png.asset.json";
import mooomentCardAsset from "@/assets/moooment-card.jpg.asset.json";
import zeeworkCardAsset from "@/assets/zeework-card.jpg.asset.json";
import cflBoxAsset from "@/assets/cfl-box.jpg.asset.json";

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

export function HomePage() {
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
                <a
                  href="mailto:info@astraagency.co"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm uppercase text-primary-foreground transition-transform hover:scale-105"
                >
                  Start a project <ArrowUpRight className="size-4" />
                </a>
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

        {/* Work carousel */}
        <section id="work" className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-4xl sm:text-6xl">
              Building <span className="text-acid">Global Brands</span>
            </h2>
          </div>
          <div className="mt-12">
            <WorkCarousel
              cards={[
                { brand: "ZeeWork", kind: "Marketplace launch", result: "Building a global marketplace for freelancers that reached $10,000 in revenue in the first 30 days", image: zeeworkCardAsset.url },
                { brand: "U-Topia", kind: "Fintech brand build", result: "Building a leading global fintech that reached 5,000 pre-launch users", logo: utopiaLogoAsset.url },
                { brand: "Moooment", kind: "Application suite", result: "Building their whole application suite to help provide therapy to those in need", image: mooomentCardAsset.url },
                { brand: "CoFoundersLab", kind: "Platform growth", result: "Helping the site reach over 800,000 users on platform", image: cflBoxAsset.url },
              ] as BrandCard[]}

            />
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
              <a
                href="mailto:info@astraagency.co"
                className="inline-flex items-center gap-2 font-display text-sm uppercase text-primary hover:underline"
              >
                Talk to us <ArrowUpRight className="size-4" />
              </a>
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

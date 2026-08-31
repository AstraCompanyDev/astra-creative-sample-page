import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TalentSection } from "@/components/talent-section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Creator-Led Studio | Hyperloop" },
      {
        name: "description",
        content:
          "Hyperloop is a 60-person creator-led studio in Brooklyn building attention engines for ambitious brands. Meet the team and the beliefs behind the work.",
      },
      { property: "og:title", content: "About — The Creator-Led Studio" },
      {
        property: "og:description",
        content:
          "60 people, one belief: attention is earned by people, not by ads that look like ads.",
      },
    ],
  }),
  component: AboutPage,
});

const beliefs = [
  ["People beat polish.", "A phone-shot clip from someone trusted outperforms a six-figure spot. We build for trust, then add craft."],
  ["Speed is a strategy.", "The window between a cultural moment and irrelevance is about 48 hours. Our whole org chart is built around that."],
  ["Volume with a point of view.", "Testing 200 assets is worthless without one sharp idea underneath them all."],
  ["Numbers or nothing.", "Every engagement has a scoreboard the client picks. If we can't move it, we say so early."],
];

const team = [
  ["Dara Whitfield", "Founder & CEO"],
  ["Ike Osei", "Chief Creative Officer"],
  ["Priya Raman", "Head of Creator Network"],
  ["Tom Halvorsen", "Head of Paid Social"],
  ["Nadia Cruz", "Executive Producer"],
  ["Sam Beaulieu", "Strategy Director"],
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">About</p>
            <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)]">
              60 people who <span className="text-acid">grew up on the feed</span>
            </h1>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <p className="text-muted-foreground">
                Hyperloop started in 2016 in a Brooklyn walk-up with two people, a ring light
                and a spreadsheet of creators. We now run always-on content engines for brands
                across CPG, healthcare, hospitality and B2B software — with an in-house studio,
                a 400-creator roster and a media team that treats creative as the variable that
                matters most.
              </p>
              <p className="text-muted-foreground">
                We're not a holding-company shop with a social department bolted on. Social is
                the whole practice, and everyone here — strategists, producers, buyers — makes
                content themselves. That's why our briefs land and our timelines hold.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-4xl sm:text-6xl">
              What we <span className="text-acid">believe</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {beliefs.map(([title, copy]) => (
                <div key={title} className="bg-background p-8">
                  <h3 className="text-2xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TalentSection />

        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-4xl sm:text-6xl">
              The <span className="text-acid">leadership</span>
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {team.map(([name, role]) => (
                <div key={name} className="rounded-lg border border-border bg-card p-6">
                  <div className="h-24 w-24 rounded-full bg-acid opacity-80" />
                  <p className="mt-5 font-display text-lg uppercase">{name}</p>
                  <p className="mt-1 text-xs text-muted-foreground uppercase">{role}</p>
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

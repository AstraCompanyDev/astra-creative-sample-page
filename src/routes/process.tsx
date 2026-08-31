import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — From Brief to First Cut in 72 Hours | Hyperloop" },
      {
        name: "description",
        content:
          "How Hyperloop works: immerse, frame, produce, amplify and compound — a four-phase creator-led process built for speed and measurable results.",
      },
      { property: "og:title", content: "Process — From Brief to First Cut in 72 Hours" },
      {
        property: "og:description",
        content:
          "A five-phase operating system for creator-led marketing, from immersion to compounding results.",
      },
    ],
  }),
  component: ProcessPage,
});

const phases = [
  {
    step: "01",
    title: "Immerse",
    duration: "Weeks 1–2",
    copy: "We live inside your data, category and community. Ad account teardown, customer interviews, comment mining, competitor audit.",
    outputs: ["Insight deck", "Audience map", "Baseline metrics"],
  },
  {
    step: "02",
    title: "Frame",
    duration: "Week 3",
    copy: "One sharp platform idea — not five safe ones — plus the creator archetypes and content pillars that carry it.",
    outputs: ["Platform idea", "Creator archetypes", "Content pillars"],
  },
  {
    step: "03",
    title: "Produce",
    duration: "Weeks 4–6",
    copy: "Concurrent creator shoots and studio days. Briefs go out Monday, first cuts land within 72 hours of shoot wrap.",
    outputs: ["Hero assets", "UGC volume library", "Cutdown matrix"],
  },
  {
    step: "04",
    title: "Amplify",
    duration: "Ongoing",
    copy: "Paid layered onto organic winners. Weekly creative refresh, whitelisting through creator handles, fatigue monitoring.",
    outputs: ["Media plan", "Weekly refresh", "Performance dashboard"],
  },
  {
    step: "05",
    title: "Compound",
    duration: "Quarterly",
    copy: "Every quarter we retire what plateaued, double the winners, and rewrite the brief with what the data taught us.",
    outputs: ["Quarterly review", "Roadmap reset", "Creator roster refresh"],
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Process
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,8vw,6.5rem)]">
              Brief Monday. <span className="text-acid">Cuts Thursday.</span>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Culture doesn't wait for your approval chain. We built a five-phase operating
              system that moves at the speed of the feed without sacrificing craft.
            </p>
          </div>
        </section>

        <Marquee items={["Immerse", "Frame", "Produce", "Amplify", "Compound"]} />

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ol className="space-y-6">
              {phases.map((phase) => (
                <li
                  key={phase.step}
                  className="grid gap-6 rounded-lg border border-border bg-card p-8 lg:grid-cols-12"
                >
                  <span className="font-display text-4xl text-primary lg:col-span-1">
                    {phase.step}
                  </span>
                  <div className="lg:col-span-4">
                    <h2 className="text-3xl">{phase.title}</h2>
                    <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {phase.duration}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground lg:col-span-4">{phase.copy}</p>
                  <ul className="space-y-2 lg:col-span-3">
                    {phase.outputs.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Clock, Flame, ShieldCheck, Zap } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/discovery-call")({
  head: () => ({
    meta: [
      { title: "Book Your FREE Discovery Call — Astra Creative" },
      {
        name: "description",
        content:
          "Claim a free 30-minute discovery call with Astra Creative. We'll map your fastest path to attention: UGC, paid social and brand strategy — no pitch, no cost.",
      },
      { property: "og:title", content: "Book Your FREE Discovery Call — Astra Creative" },
      {
        property: "og:description",
        content:
          "A free 30-minute strategy call. Walk away with a 90-day attention plan whether we work together or not.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiscoveryCall,
});

const takeaways = [
  "A 90-day attention plan built around your brand",
  "The 3 fastest wins in your paid social & UGC creative",
  "Which of our 400+ creators fit your audience",
  "Honest advice — even if that means we're not the right fit",
];

const steps = [
  {
    num: "01",
    title: "Book your call",
    copy: "Pick a time that suits you. 30 minutes, zero obligation.",
  },
  {
    num: "02",
    title: "We do the homework",
    copy: "Before we meet, we audit your feeds, ads and competitors.",
  },
  {
    num: "03",
    title: "Leave with a plan",
    copy: "Walk away with a clear 90-day roadmap — yours to keep.",
  },
];

const faqs = [
  {
    q: "Is the call really free?",
    a: "Yes. It's a genuine strategy session, not a disguised sales pitch. If we're a fit, we'll tell you. If not, the plan is still yours.",
  },
  {
    q: "Who will I speak with?",
    a: "A senior strategist from our team — never a sales rep. You'll talk to someone who runs campaigns, not someone who reads a script.",
  },
  {
    q: "What if I'm not ready to hire an agency?",
    a: "Perfect. The call is built to give you clarity on what to do next, whether that's with us, in-house, or later.",
  },
];

function DiscoveryCall() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Request received — we'll confirm your call shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal funnel header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-acid" />
            <span className="font-display text-lg uppercase tracking-tight">
              Astra Creative
            </span>
          </span>
          <span className="hidden font-display text-xs uppercase tracking-widest text-muted-foreground sm:block">
            Free discovery call
          </span>
        </div>
      </header>

      <main>
        {/* Hero + form */}
        <section className="grain relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-card/60 to-background" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-24">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                Limited spots each month
              </p>
              <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
                Book your <span className="text-acid">free</span>
                <br />
                discovery call.
              </h1>
              <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
                30 minutes with a senior strategist. We'll map your fastest path to
                attention — UGC, paid social and brand strategy — and hand you a
                90-day plan you keep either way.
              </p>

              <ul className="mt-8 space-y-3">
                {takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="size-3.5 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> 30 minutes
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> No obligation
                </span>
                <span className="flex items-center gap-2">
                  <Flame className="size-4 text-primary" /> Senior strategists only
                </span>
              </div>
            </div>

            {/* Booking form card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="h-1.5 w-full bg-linear-to-r from-primary to-accent" />
              <div className="p-7 sm:p-9">
                {sent ? (
                  <div className="py-10 text-center">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/15">
                      <Check className="size-7 text-primary" />
                    </span>
                    <h2 className="mt-6 text-3xl">You're in the queue.</h2>
                    <p className="mt-3 text-sm text-muted-foreground">
                      We'll email you within one business day with call times.
                      Talk soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl sm:text-3xl">Claim your slot</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Tell us where to send your confirmation.
                    </p>
                    <form onSubmit={submit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          required
                          name="name"
                          placeholder="Full name"
                          aria-label="Full name"
                          className="h-12"
                        />
                        <Input
                          required
                          name="company"
                          placeholder="Company / brand"
                          aria-label="Company or brand"
                          className="h-12"
                        />
                      </div>
                      <Input
                        required
                        type="email"
                        name="email"
                        placeholder="Work email"
                        aria-label="Work email"
                        className="h-12"
                      />
                      <Input
                        name="website"
                        placeholder="Website or Instagram (optional)"
                        aria-label="Website or Instagram"
                        className="h-12"
                      />
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger className="h-12 w-full" aria-label="Monthly marketing budget">
                          <SelectValue placeholder="Monthly marketing budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5k / month</SelectItem>
                          <SelectItem value="5-15k">$5k – $15k / month</SelectItem>
                          <SelectItem value="15-50k">$15k – $50k / month</SelectItem>
                          <SelectItem value="50k-plus">$50k+ / month</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="submit" size="lg" className="h-13 w-full text-sm">
                        Book my free call <ArrowRight className="size-4" />
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        No spam. No pitch decks. One useful call.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-display text-xs uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Three steps to <span className="text-acid">clarity</span>
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.num} className="bg-background p-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    {step.num}
                  </span>
                  <h3 className="mt-6 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-t border-border bg-card py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
            <Zap className="size-8 text-primary" />
            <blockquote className="max-w-3xl text-2xl leading-snug sm:text-3xl">
              "The call alone reshaped our launch. We hit{" "}
              <span className="text-acid">$10k revenue in 30 days</span> with the
              plan they handed us."
            </blockquote>
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
              ZeeWork — Global freelancer marketplace
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-center text-4xl sm:text-5xl">
              Quick <span className="text-acid">answers</span>
            </h2>
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-lg border border-border bg-card p-6"
                >
                  <summary className="cursor-pointer list-none font-display text-lg uppercase tracking-tight marker:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm uppercase text-primary-foreground transition-transform hover:scale-105"
              >
                Book my free call <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal funnel footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Astra Creative Co. All rights reserved.</p>
          <a href="mailto:info@astraagency.co" className="hover:text-primary">
            info@astraagency.co
          </a>
        </div>
      </footer>
    </div>
  );
}

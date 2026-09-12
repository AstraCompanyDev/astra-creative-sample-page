import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Play, Star } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqs, systemTracks, team, testimonials, values } from "@/components/launch-page-data";

import launchLogoAsset from "@/assets/launch/launch-logo.png.asset.json";
import zeeworkCardAsset from "@/assets/zeework-card.jpg.asset.json";
import utopiaLogoAsset from "@/assets/utopia-logo-white.png.asset.json";
import mooomentCardAsset from "@/assets/moooment-card.jpg.asset.json";
import cflBoxAsset from "@/assets/cfl-box.jpg.asset.json";
import reneAsset from "@/assets/launch/rene.jpg.asset.json";
import ramseyAsset from "@/assets/launch/ramsey.jpg.asset.json";
import jerridAsset from "@/assets/launch/jerrid.jpeg.asset.json";
import nicoAsset from "@/assets/launch/nico.jpg.asset.json";
import treyAsset from "@/assets/launch/trey.jpg.asset.json";
import danteAsset from "@/assets/launch/dante.jpg.asset.json";
import alecAsset from "@/assets/launch/alec.jpg.asset.json";
import spencerAsset from "@/assets/launch/spencer.jpg.asset.json";
import connorAsset from "@/assets/launch/connor.png.asset.json";

const images = {
  rene: reneAsset.url,
  ramsey: ramseyAsset.url,
  jerrid: jerridAsset.url,
  nico: nicoAsset.url,
  trey: treyAsset.url,
  dante: danteAsset.url,
  alec: alecAsset.url,
  spencer: spencerAsset.url,
  connor: connorAsset.url,
};

const partnerLogos = [
  { src: strSearchLogoAsset.url, alt: "STR Search" },
  { src: pissMissileLogoAsset.url, alt: "Piss Missile" },
  { src: aerrackLogoAsset.url, alt: "Aerrack" },
  { src: alphaleteLogoAsset.url, alt: "Alphalete" },
  { src: dontDieLogoAsset.url, alt: "Don't Die by Bryan Johnson" },
  { src: blueprintLogoAsset.url, alt: "Blueprint by Bryan Johnson" },
];

function ApplyButton({ children = "Book A Call" }: { children?: string }) {
  return (
    <Button asChild className="h-13 rounded-full bg-launch-gold px-8 font-bold uppercase text-launch-ink shadow-launch-gold hover:bg-launch-gold-soft">
      <a href="#apply">{children}<ArrowRight /></a>
    </Button>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-launch-gold">{eyebrow}</p>
      <h2 className="mt-4 font-launch text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">{children}</h2>
    </div>
  );
}

export function LaunchPage() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Application received. The Launch OS team will be in touch.");
  };

  return (
    <div className="launch-page min-h-screen bg-launch-ink text-launch-paper">
      <header className="absolute inset-x-0 top-0 z-20 py-7">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5">
          <img src={launchLogoAsset.url} alt="Launch OS Marketing" className="h-14 w-auto object-contain" />
        </div>
      </header>

      <main>
        <section className="launch-hero relative overflow-hidden px-5 pb-20 pt-32 text-center sm:pt-36">
          <div className="relative z-10 mx-auto max-w-6xl">
            <h1 className="mx-auto mt-5 max-w-5xl font-launch text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Is Marketing The Biggest <span className="text-launch-red">Bottleneck</span> In Your Business?
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-sm leading-6 text-launch-paper/75 sm:text-base">
              Discover The Proven Client Acquisition System Used By Top-Performing Companies To Turn Broken Funnels, Underperforming Ads, And Leaking Leads Into A Predictable Pipeline Of Qualified, Ready-To-Buy Clients.
            </p>

            <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-md border border-launch-red/50 bg-launch-panel shadow-launch-red">
              <div className="flex h-8 items-center justify-center gap-2 bg-launch-red text-[10px] font-bold">
                <Play className="size-3 fill-current" /> Click Play to Learn More
              </div>
              <div className="aspect-video bg-launch-panel">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/jjd95u0eal?seo=false&videoFoam=true&playerColor=f63028"
                  title="Launch OS client acquisition system"
                  allow="autoplay; fullscreen"
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="mt-8"><ApplyButton>Scale My Business</ApplyButton></div>

            <p className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-launch-paper/60">Businesses We Work With</p>
            <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 items-center gap-7 sm:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} className="mx-auto max-h-10 max-w-36 object-contain opacity-80" />)}
            </div>
          </div>
        </section>

        <section id="apply" className="border-y border-launch-gold/15 bg-launch-panel px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-launch-paper/10 bg-launch-paper/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-launch-gold">Apply to work with us</span>
              <h2 className="mt-5 font-launch text-5xl sm:text-7xl">Let's Talk <span className="text-launch-red">Scale.</span></h2>
              <p className="mt-5 max-w-lg text-launch-paper/65">Tell us where your business is today and where you want it to go. If the fit is right, we’ll map the next move together.</p>
              <ul className="mt-8 space-y-3 text-sm text-launch-paper/80">
                {["A focused growth diagnosis", "A strategy call with the team", "Clear next steps for your acquisition system"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 text-launch-gold" />{item}</li>)}
              </ul>
            </div>
            <div className="rounded-md bg-launch-paper p-6 text-launch-ink sm:p-8">
              {submitted ? (
                <div className="py-16 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-launch-gold"><Check className="size-7" /></span>
                  <h3 className="mt-5 font-launch text-3xl">Application received.</h3>
                  <p className="mt-2 text-sm text-launch-ink/60">We’ll review your answers and be in touch with the next step.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input required name="name" aria-label="Full name" placeholder="Full name" className="h-12 border-launch-ink/15" />
                    <Input required name="company" aria-label="Company name" placeholder="Company name" className="h-12 border-launch-ink/15" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input required type="email" name="email" aria-label="Work email" placeholder="Work email" className="h-12 border-launch-ink/15" />
                    <Input name="revenue" aria-label="Monthly revenue" placeholder="Monthly revenue" className="h-12 border-launch-ink/15" />
                  </div>
                  <Input name="website" aria-label="Website" placeholder="Website" className="h-12 border-launch-ink/15" />
                  <Textarea required name="bottleneck" aria-label="Biggest marketing bottleneck" placeholder="What's your biggest marketing bottleneck?" className="min-h-28 border-launch-ink/15" />
                  <Button type="submit" className="h-12 w-full rounded-full bg-launch-red font-bold uppercase text-launch-paper hover:bg-launch-red-bright">Scale My Business <ArrowRight /></Button>
                  <p className="text-center text-xs text-launch-ink/50">Your details stay private. No spam.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Real Results"><span className="text-launch-red">Scale.</span> Real Results.<br />Real People.</SectionHeading>
            <p className="mx-auto mt-5 max-w-2xl text-center text-launch-paper/60">Just a peek into how our partners scaled and crushed goals they once thought were impossible.</p>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-md border border-launch-paper/10 bg-launch-panel p-6">
                  <div className="flex gap-1 text-launch-gold" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div>
                  <h3 className="mt-5 font-launch text-2xl leading-tight">“{item.headline}”</h3>
                  <p className="mt-4 text-sm leading-6 text-launch-paper/65">“{item.quote}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-launch-paper/10 pt-5">
                    <img src={images[item.image as keyof typeof images]} alt={item.name} className="size-11 rounded-full object-cover" loading="lazy" />
                    <div><p className="text-sm font-bold">{item.name}</p><p className="text-xs text-launch-paper/50">{item.role}</p></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center"><ApplyButton /></div>
          </div>
        </section>

        <section className="border-y border-launch-gold/15 bg-launch-gold py-16 text-launch-ink">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center font-launch text-4xl sm:text-6xl">Our Numbers Speak For Themselves</h2>
            <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
              {[["$45 Million+", "Revenue Generated for Clients"], ["30 Million+", "Emails Sent"], ["10 Years+", "Experience"]].map(([num, label]) => <div key={label}><p className="font-launch text-4xl sm:text-5xl">{num}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.16em]">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="How We Work">Our System to <span className="text-launch-red">Scale Your Brand</span></SectionHeading>
            <p className="mx-auto mt-5 max-w-2xl text-center text-launch-paper/60">A proven 3-phase approach tailored to your goals, whether you need a dedicated ads engine or a full-stack growth operating system.</p>
            <Tabs defaultValue="ads" className="mt-12">
              <TabsList className="mx-auto grid h-12 max-w-md grid-cols-2 bg-launch-panel p-1">
                <TabsTrigger value="ads" className="data-[state=active]:bg-launch-red data-[state=active]:text-launch-paper">Ads Engine</TabsTrigger>
                <TabsTrigger value="growth" className="data-[state=active]:bg-launch-red data-[state=active]:text-launch-paper">Growth OS</TabsTrigger>
              </TabsList>
              {Object.entries(systemTracks).map(([key, phases]) => (
                <TabsContent key={key} value={key} className="mt-10 grid gap-px overflow-hidden rounded-md border border-launch-paper/10 bg-launch-paper/10 lg:grid-cols-3">
                  {phases.map((phase, index) => <article key={phase.title} className="bg-launch-panel p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-launch-gold">{phase.period}</p><span className="mt-7 block font-launch text-5xl text-launch-paper/10">0{index + 1}</span><h3 className="mt-2 font-launch text-2xl">{phase.title}</h3><p className="mt-4 text-sm leading-6 text-launch-paper/60">{phase.copy}</p><ul className="mt-6 space-y-3">{phase.bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-sm text-launch-paper/80"><Check className="mt-0.5 size-4 shrink-0 text-launch-red" />{bullet}</li>)}</ul></article>)}
                </TabsContent>
              ))}
            </Tabs>
            <div className="mt-10 text-center"><ApplyButton /></div>
          </div>
        </section>

        <section className="border-y border-launch-paper/10 bg-launch-panel px-5 py-20">
          <SectionHeading eyebrow="Our Network">Trusted <span className="text-launch-gold">Partners</span></SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-center text-launch-paper/60">We are partnered with leaders in every industry who trust us to scale their vision.</p>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">{partnerLogos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} className="mx-auto max-h-11 max-w-36 object-contain opacity-75" loading="lazy" />)}</div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="The Team">Meet the <span className="text-launch-red">Executive Crew</span></SectionHeading>
            <p className="mx-auto mt-5 max-w-xl text-center text-launch-paper/60">The team behind our partners. Real humans. Building real results.</p>
            <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">{team.map((person) => <article key={person.name}><div className="aspect-[4/5] overflow-hidden rounded-md bg-launch-panel"><img src={images[person.image as keyof typeof images]} alt={person.name} className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0" loading="lazy" /></div><h3 className="mt-4 font-launch text-xl">{person.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-launch-gold">{person.role}</p></article>)}</div>
          </div>
        </section>

        <section className="border-y border-launch-paper/10 bg-launch-panel px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Proof">They Said Yes.<br /><span className="text-launch-red">Look What Happened.</span></SectionHeading>
            <p className="mx-auto mt-5 max-w-xl text-center text-launch-paper/60">Here's what happens when you stop guessing and start following the Launch OS playbook.</p>
            <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-6">{[["+340%", "MRR Growth"], ["$847K", "Revenue"], ["4.2x", "ROAS"], ["2,847", "Leads"], ["34%", "Close Rate"], ["+127", "New Clients"]].map(([number, label]) => <div key={label} className="rounded-md border border-launch-paper/10 bg-launch-ink p-5 text-center"><p className="font-launch text-3xl text-launch-gold">{number}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-launch-paper/50">{label}</p></div>)}</div>
            <div className="mt-10 text-center"><ApplyButton>Get Results Like These</ApplyButton></div>
          </div>
        </section>

        <section className="overflow-hidden px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-launch-gold">Who We Are</p>
            <h2 className="mt-5 max-w-5xl font-launch text-6xl leading-[0.88] sm:text-8xl lg:text-9xl">We Don't<br /><span className="text-launch-red">Play Small.</span></h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20"><p className="text-2xl font-semibold leading-snug sm:text-3xl">We saw a gap in the market screaming <span className="text-launch-red">“F*** boring marketing”</span> — so we ran straight at it.</p><div className="text-lg text-launch-paper/60"><p>No shortcuts. No safe plays.</p><p className="mt-3 text-launch-paper">Just bold strategy that converts.</p><p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-launch-gold">Our Mission</p><p className="mt-2 font-launch text-3xl text-launch-paper">Bring the good guys back.</p></div></div>
          </div>
        </section>

        <section className="border-y border-launch-paper/10 bg-launch-paper px-5 py-24 text-launch-ink">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-launch-red">What Drives Us</p>
            <h2 className="mt-4 font-launch text-5xl sm:text-7xl">Core Values</h2>
            <div className="mt-12 grid border-l border-t border-launch-ink/15 sm:grid-cols-2 lg:grid-cols-3">{values.map(([num, title, copy]) => <article key={num} className="border-b border-r border-launch-ink/15 p-7"><span className="text-xs font-bold text-launch-red">{num}</span><h3 className="mt-8 font-launch text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-launch-ink/60">{copy}</p></article>)}</div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Got Questions?">Frequently Asked <span className="text-launch-red">Questions</span></SectionHeading>
            <div className="mt-12 divide-y divide-launch-paper/10 border-y border-launch-paper/10">{faqs.map((faq) => <details key={faq.q} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-launch text-xl marker:hidden sm:text-2xl">{faq.q}<ChevronDown className="size-5 shrink-0 text-launch-gold transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-launch-paper/60">{faq.a}</p></details>)}</div>
          </div>
        </section>

        <section className="launch-final-cta border-t border-launch-gold/20 px-5 py-24 text-center">
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-launch text-6xl sm:text-8xl">Ready to <span className="text-launch-red">Scale?</span></h2>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">{["A proven offer", "Ready for a real partner", "Looking to scale fast"].map((item) => <span key={item} className="flex items-center gap-2 rounded-full border border-launch-paper/15 bg-launch-paper/5 px-4 py-2 text-xs"><Check className="size-4 text-launch-gold" />{item}</span>)}</div>
            <div className="mt-10"><ApplyButton>Book Your Strategy Call</ApplyButton></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-launch-paper/10 px-5 py-10 text-center text-xs text-launch-paper/40">
        <div className="mx-auto max-w-5xl">
          <p>Results are not typical or guaranteed. Every business and market is different, and your results depend on many factors including your offer, execution and investment.</p>
          <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-launch-paper/10 pt-7 sm:flex-row"><p>© 2026 Launch OS Marketing — All Rights Reserved</p><p>Questions? <a href="mailto:info@astraagency.co" className="text-launch-paper/70 hover:text-launch-gold">info@astraagency.co</a></p></div>
        </div>
      </footer>
    </div>
  );
}
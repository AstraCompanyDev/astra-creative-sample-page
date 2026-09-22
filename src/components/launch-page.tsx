import { useEffect, useRef } from "react";
import { ArrowRight, Check, ChevronDown, Play, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqs, systemTracks, team, testimonials, values } from "@/components/launch-page-data";


import astraHealthcareAsset from "@/assets/launch/astra-healthcare-white.png.asset.json";
import gooodMailAsset from "@/assets/launch/goood-mail.png.asset.json";
import utopiaAsset from "@/assets/launch/u-topia-white.png.asset.json";
import upfounderAsset from "@/assets/launch/upfounder.png.asset.json";
import reneAsset from "@/assets/launch/rene.jpg.asset.json";
import ramseyAsset from "@/assets/launch/ramsey.jpg.asset.json";
import jerridAsset from "@/assets/launch/jerrid.jpeg.asset.json";
import nicoAsset from "@/assets/launch/nico.jpg.asset.json";
import treyAsset from "@/assets/launch/trey.jpg.asset.json";
import danteAsset from "@/assets/launch/dante.jpg.asset.json";
import alecAsset from "@/assets/launch/alec.jpg.asset.json";
import spencerAsset from "@/assets/launch/spencer.jpg.asset.json";
import connorAsset from "@/assets/launch/connor.png.asset.json";
import launchLogoAsset from "@/assets/launch/launch-creative-logo.png.asset.json";
import emmanuelAsset from "@/assets/launch/emmanuel-quezada.png.asset.json";
import cofounderslabLogoAsset from "@/assets/cofounderslab-logo.png.asset.json";
import cofounderslabMarkAsset from "@/assets/launch/cofounderslab-mark.png.asset.json";

const images = {
  rene: reneAsset.url,
  ramsey: ramseyAsset.url,
  jerrid: jerridAsset.url,
  emmanuel: emmanuelAsset.url,
  cofounderslab: cofounderslabMarkAsset.url,
  nico: nicoAsset.url,
  trey: treyAsset.url,
  dante: danteAsset.url,
  alec: alecAsset.url,
  spencer: spencerAsset.url,
  connor: connorAsset.url,
};

const partnerLogos = [
  { src: astraHealthcareAsset.url, alt: "Astra Healthcare" },
  { src: gooodMailAsset.url, alt: "Goood Mail" },
  { src: utopiaAsset.url, alt: "U-Topia" },
  { src: upfounderAsset.url, alt: "Upfounder" },
];

function ApplyButton({ children = "Book A Call" }: { children?: string }) {
  return (
    <Button asChild className="h-13 rounded-full bg-launch-gold px-8 font-bold uppercase text-launch-ink shadow-launch-gold hover:bg-launch-gold-soft">
      <a href="#apply">{children}<ArrowRight /></a>
    </Button>
  );
}

function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = "calendly-widget-js";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url="https://calendly.com/launch-creative/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=f63028"
      style={{ minWidth: "320px", height: "760px", backgroundColor: "#ffffff" }}
    />
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
  return (
    <div className="launch-page min-h-screen bg-launch-ink text-launch-paper">
      <header className="absolute inset-x-0 top-0 z-20 py-7">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5">
          <img
            src={launchLogoAsset.url}
            alt="Launch Creative"
            className="h-10 w-auto sm:h-12"
          />
        </div>
      </header>

      <main>
        <section className="launch-hero relative overflow-hidden px-5 pb-20 pt-32 text-center sm:pt-36">
          <div className="relative z-10 mx-auto max-w-6xl">
            <h1 className="mx-auto mt-5 max-w-5xl font-launch text-3xl leading-[1.05] sm:text-5xl lg:text-6xl">
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
                  src="https://www.youtube.com/embed/pMOWREkQ5BI?rel=0&modestbranding=1"
                  title="Launch client acquisition system"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="mt-8"><ApplyButton>Scale My Business</ApplyButton></div>

            <p className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-launch-paper/60 sm:text-base">Businesses We Work With</p>
            <div className="relative left-1/2 mt-7 w-screen -translate-x-1/2 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-launch-ink to-transparent sm:w-28" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-launch-ink to-transparent sm:w-28" />
              <div className="launch-logo-track flex w-max items-center gap-2 px-2">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="flex h-56 w-96 shrink-0 items-center justify-center rounded-md border border-launch-paper/10 bg-launch-panel px-8 sm:w-[30rem]"
                  >
                    <img src={logo.src} alt={index < partnerLogos.length ? logo.alt : ""} className="max-h-36 w-full object-contain" />
                  </div>
                ))}
              </div>
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
            <div className="overflow-hidden rounded-md border border-launch-paper/10 bg-launch-panel">
              <div className="flex h-10 items-center justify-center bg-launch-red text-[10px] font-bold uppercase tracking-[0.18em] text-launch-paper">
                Book your strategy call
              </div>
              <CalendlyEmbed />
            </div>
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
            <SectionHeading eyebrow="Real Results"><span className="text-launch-red">Scale.</span> Real Results.</SectionHeading>
            <p className="mx-auto mt-5 max-w-2xl text-center text-launch-paper/60">Just a peek into how our partners scaled and crushed goals they once thought were impossible.</p>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((item) => (
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

        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="How We Work">Our System to <span className="text-launch-red">Scale Your Brand</span></SectionHeading>
            <p className="mx-auto mt-5 max-w-2xl text-center text-launch-paper/60">A proven 3-phase approach tailored to your goals, whether you need a dedicated ads engine or a full-stack growth operating system.</p>
            <Tabs defaultValue="ads" className="mt-12">
              <TabsList className="mx-auto grid h-12 max-w-md grid-cols-2 bg-launch-panel p-1">
                <TabsTrigger value="ads" className="data-[state=active]:bg-launch-red data-[state=active]:text-launch-paper">Ads Engine</TabsTrigger>
                <TabsTrigger value="growth" className="data-[state=active]:bg-launch-red data-[state=active]:text-launch-paper">Growth</TabsTrigger>
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
          <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-launch-paper/10 pt-7 sm:flex-row"><p>© 2026 Launch Marketing — All Rights Reserved</p><p>Questions? <a href="mailto:info@astraagency.co" className="text-launch-paper/70 hover:text-launch-gold">info@astraagency.co</a></p></div>
        </div>
      </footer>
    </div>
  );
}
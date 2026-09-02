import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Project | Astra Creative" },
      {
        name: "description",
        content:
          "Tell Astra Creative about your brand and goals. New business enquiries answered within one business day from our Brooklyn studio.",
      },
      { property: "og:title", content: "Contact — Start a Project" },
      {
        property: "og:description",
        content: "New business enquiries answered within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const budgets = ["Under $15k / mo", "$15k–$40k / mo", "$40k–$100k / mo", "$100k+ / mo"];
const interests = ["Brand strategy", "UGC at scale", "Social management", "Paid social", "Production", "Influencer"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Contact
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,8vw,6.5rem)]">
              Let's build something <span className="text-acid">loud</span>
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-lg border border-border bg-card p-8">
              {sent ? (
                <div className="py-16 text-center">
                  <h2 className="text-3xl text-primary">Brief received</h2>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Thanks — we'll come back within one business day with next steps.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Your name" name="name" placeholder="Alex Rivera" />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="alex@brand.com"
                    />
                    <Field label="Company" name="company" placeholder="Brand Co." />
                    <Field label="Website" name="website" placeholder="brand.com" required={false} />
                  </div>

                  <div>
                    <span className="font-display text-xs uppercase text-muted-foreground">
                      What do you need?
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {interests.map((item) => (
                        <label
                          key={item}
                          className="cursor-pointer rounded-full border border-border px-4 py-2 text-xs transition-colors has-checked:border-primary has-checked:bg-primary has-checked:text-primary-foreground"
                        >
                          <input type="checkbox" name="interest" value={item} className="sr-only" />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="font-display text-xs uppercase text-muted-foreground"
                    >
                      Monthly budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="mt-2 w-full rounded border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    >
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-display text-xs uppercase text-muted-foreground"
                    >
                      Tell us about the brand
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Where you are, where you want to be, and what's in the way."
                      className="mt-2 w-full rounded border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-primary px-8 py-3.5 font-display text-sm uppercase text-primary-foreground transition-transform hover:scale-105"
                  >
                    Send the brief
                  </button>
                </form>
              )}
            </div>

            <aside className="space-y-10">
              <div>
                <h2 className="text-2xl">Get in touch</h2>
                <a
                  href="mailto:info@astraagency.co"
                  className="mt-3 block text-primary hover:underline"
                >
                  info@astraagency.co
                </a>
              </div>
              <div>
                <h2 className="text-2xl">New York</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  1216 Broadway, New York,
                  <br />
                  NY 10001, United States
                </p>
              </div>
              <div>
                <h2 className="text-2xl">Gibraltar</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  The West Wing Montarik House,
                  <br />
                  Suite 4, Second Floor, 3 Bedlam Ct,
                  <br />
                  GX11 1AA, Gibraltar
                </p>
              </div>
              <div className="rounded-lg bg-acid p-6">
                <p className="font-display text-lg uppercase text-primary-foreground">
                  Enquiries answered within one business day.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-display text-xs uppercase text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav: ReadonlyArray<{ to: "/contact"; label: string }> = [];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="h-3 w-3 rounded-full bg-acid" />
          <span className="font-display text-lg tracking-tight uppercase">Astra Creative</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground uppercase transition-transform hover:scale-105"
          >
            Let's talk
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-3 md:hidden">
          {[...nav, { to: "/contact", label: "Contact" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-2xl uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

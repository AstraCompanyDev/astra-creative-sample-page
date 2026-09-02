import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-xl text-4xl sm:text-6xl">
              Ready to be <span className="text-acid">unignorable?</span>
            </h2>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-primary px-7 py-3 font-display text-sm uppercase text-primary-foreground transition-transform hover:scale-105"
            >
              Start a project
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
            <div className="space-y-3">
              <p className="font-display text-xs uppercase text-muted-foreground">New York</p>
              <span className="block text-muted-foreground">
                1216 Broadway, New York,
                <br />
                NY 10001, United States
              </span>
            </div>
            <div className="space-y-3">
              <p className="font-display text-xs uppercase text-muted-foreground">Gibraltar</p>
              <span className="block text-muted-foreground">
                The West Wing Montarik House,
                <br />
                Suite 4, Second Floor, 3 Bedlam Ct,
                <br />
                GX11 1AA, Gibraltar
              </span>
            </div>
          </div>
          <div className="mt-2 text-sm">
            <a href="mailto:info@astraagency.co" className="hover:text-primary">
              info@astraagency.co
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Astra Creative Co. All rights reserved.</p>
          <p>Built for brands that refuse to blend in.</p>
        </div>
      </div>
    </footer>
  );
}

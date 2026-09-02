import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "astra-exit-offer-seen";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 4000);

    const trigger = () => {
      if (!armed) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
      cleanup();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") return;
    };

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("keydown", onKeyDown);

    function cleanup() {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("keydown", onKeyDown);
    }

    return cleanup;
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    toast.success("Your free content audit is on the way.");
    setTimeout(() => setOpen(false), 1800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-lg overflow-hidden border-border bg-card p-0"
      >
        <div className="h-1.5 w-full bg-linear-to-r from-primary to-accent" />
        <div className="p-7 sm:p-9">
          <p className="font-display text-xs uppercase tracking-widest text-primary">
            Wait — one thing
          </p>
          <h2 className="mt-3 text-3xl leading-[0.95] sm:text-4xl">
            Free creator
            <br />
            <span className="text-acid">content audit.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Leave your email and we'll send a 15-minute teardown of your paid social and UGC —
            hooks, creative angles and the three fastest wins. No pitch deck, no cost.
          </p>

          {sent ? (
            <p className="mt-6 font-display text-sm uppercase text-primary">
              Locked in. Check your inbox.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-12"
              />
              <Button type="submit" size="lg" className="h-12 shrink-0">
                Get my audit
              </Button>
            </form>
          )}

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            No thanks, I'll keep scrolling
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

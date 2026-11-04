import { createFileRoute, redirect } from "@tanstack/react-router";

// The agency homepage now lives at "/" — keep the old URL working.
export const Route = createFileRoute("/agency")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});

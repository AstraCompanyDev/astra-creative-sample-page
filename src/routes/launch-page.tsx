import { createFileRoute, redirect } from "@tanstack/react-router";

// The Launch page is now the site's homepage — keep the old URL working.
export const Route = createFileRoute("/launch-page")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});

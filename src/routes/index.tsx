import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/home-page";

// The agency homepage is now the main homepage — /agency redirects here.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StartNow Creative — Creator-Led Social & Brand Agency" },
      {
        name: "description",
        content:
          "StartNow Creative is a creator-led social agency building attention engines for ambitious brands.",
      },
      { property: "og:title", content: "StartNow Creative — Creator-Led Social & Brand Agency" },
      {
        property: "og:description",
        content: "Creator-led strategy, content and campaigns for ambitious brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

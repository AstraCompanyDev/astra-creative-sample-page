import { createFileRoute } from "@tanstack/react-router";

import { LaunchPage } from "@/components/launch-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Launch: Scale My Business" },
      {
        name: "description",
        content: "Discover the Launch client acquisition system for turning underperforming marketing into a predictable pipeline of qualified clients.",
      },
      { property: "og:title", content: "Launch: Scale My Business" },
      {
        property: "og:description",
        content: "A proven growth operating system for established business owners ready to scale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://astra-creative-sample-page.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://astra-creative-sample-page.lovable.app/" },
    ],
  }),
  component: LaunchPage,
});

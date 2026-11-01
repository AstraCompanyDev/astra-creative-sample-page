import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/agency")({
  head: () => ({
    meta: [
      { title: "Astra Creative — Agency Homepage" },
      { name: "description", content: "Explore Astra Creative's creator-led brand strategy, content production, services and client work." },
      { property: "og:title", content: "Astra Creative — Agency Homepage" },
      { property: "og:description", content: "Creator-led strategy, content and campaigns for ambitious brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // AI / LLM crawlers explicitly allowed (Coalition & Prism both do this)
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-User",
          "Google-Extended",
          "CCBot",
          "Bytespider",
          "Applebot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/en/thank-you",
          "/fr/merci",
          "/ar/شكرا",
          "/*?s=",
          "/*replytocom",
        ],
      },
    ],
    sitemap: "https://seonid.agency/sitemap.xml",
  };
}

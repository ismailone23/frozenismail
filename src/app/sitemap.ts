import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ismailh.dev/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

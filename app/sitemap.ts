import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sud-dev.vercel.app",
      lastModified: new Date(),
    },
  ];
}

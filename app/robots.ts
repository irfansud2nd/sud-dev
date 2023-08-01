import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://sud-dev.vercel.app/sitemap.xml",
    host: "https://sud-dev.vercel.app",
  };
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Add any disallowed paths if needed
      // disallow: ['/private/', '/admin/'],
    },
    sitemap: "https://biofloor.pl/sitemap.xml",
  };
}

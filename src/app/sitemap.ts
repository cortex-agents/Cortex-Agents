import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cortexagents.com";
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = [
    "web-development",
    "ui-ux-design",
    "ai-chatbots",
    "ai-agents",
    "seo-optimization",
    "cloud-solutions",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}

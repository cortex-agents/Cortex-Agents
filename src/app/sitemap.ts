import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { servicesData } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}

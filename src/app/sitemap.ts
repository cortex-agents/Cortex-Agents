import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { servicesData } from "@/lib/services-data";
import { articles } from "@/lib/learn-data";
import products from "@/components/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/learn`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    // Legal boilerplate: indexable so it can be found and cited, but ranked
    // last of our own pages — it should never outrank a service page.
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  // Derived from the articles array — a new article is listed automatically, so
  // the sitemap can never desync from what the site actually publishes.
  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/learn/${article.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Same rule as the articles above: derived from the products array, so a new
  // case study is listed the moment it exists in the data.
  const projectRoutes = products.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...articleRoutes,
    ...projectRoutes,
  ].map((route) => ({
    ...route,
    lastModified: now,
  }));
}

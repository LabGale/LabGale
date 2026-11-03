import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { FEATURES } from "@/data/features.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    "",
    "/software",
    "/funzionalita",
    "/scarica",
    "/perche-gratuito",
    "/assistenza",
    "/assistenza/guide",
    "/assistenza/video",
    "/assistenza/faq",
    "/risorse",
    "/blog",
    "/chi-siamo",
    "/contatti",
    "/privacy",
    "/termini",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/scarica" ? 0.9 : 0.8,
  }));

  const featureRoutes = FEATURES.map((feature) => ({
    url: `${baseUrl}/funzionalita/${feature.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...featureRoutes];
}

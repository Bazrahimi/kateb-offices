// app/sitemap.ts
import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { absoluteUrl } from "@/app/_lib/org/layoutAndSeo";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import type { MetadataRoute } from "next";
import { privateOfficeAds } from "./(pages)/workspaces/_lib/workspaces/signup/privateOffices";
import {
  workspaceSlugByKey,
  workspacesRoutes,
} from "./_lib/routes/workspacesRoutes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(PublicRoutes.home()),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(PublicRoutes.about()),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(PublicRoutes.contact()),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/workspaces"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = Object.values(SERVICES_PAGE).map(
    (service) => ({
      url: absoluteUrl(PublicRoutes.service(service.slug)),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const workspacePages: MetadataRoute.Sitemap = Object.keys(
    workspaceSlugByKey,
  ).map((key) => ({
    url: absoluteUrl(
      workspacesRoutes.offering(key as keyof typeof workspaceSlugByKey),
    ),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const privateOfficeRentalPages: MetadataRoute.Sitemap = privateOfficeAds.map(
    (office) => ({
      url: absoluteUrl(workspacesRoutes.officeDetails(office.slug)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    }),
  );

  return [
    ...pages,
    ...servicePages,
    ...workspacePages,
    ...privateOfficeRentalPages,
  ];
}

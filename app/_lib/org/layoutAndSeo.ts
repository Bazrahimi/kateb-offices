// app/_lib/org/layoutAndSeo.ts
import type { Metadata, Viewport } from "next";
import type { PageSeo, RootSeoConfig } from "../definitions";
import { PublicRoutes } from "../routes/publicRoutes";
import { workspacesRoutes } from "../routes/workspacesRoutes";
import { servicesCldImgs as imgs } from "./assets";
import { getHomeServiceKeywords } from "./category/serviceLookup";
import { WorkspaceKey } from "./definitions";
import { getBaseUrl, ORG_PROFILE as op } from "./profile";
import { publicAssets } from "./publicAssets";
import { SERVICE_AREA } from "./serviceArea";

export const workspacesOgImages = {
  privateOffices: imgs.privateOffices.services.url,
  coworkingMembership: imgs.coworkingMembership.services.url,
  meetingRooms: imgs.meetingRooms.services.url,
  memberMeetingRooms: imgs.meetingRooms.services.url,
  dedicatedDesk: imgs.virtualOffices.idealFor.url,
  virtualOffices: imgs.virtualOffices.overview.url,
} satisfies Record<WorkspaceKey, string>;

export const ROOT_SEO: RootSeoConfig = {
  siteName: op.orgName,
  manifestPath: "/manifest.webmanifest",
  icons: {
    icon: publicAssets.icons.icon,
    apple: publicAssets.icons.apple,
  },
  defaultOgImagePath: publicAssets.images.ogImage,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export function absoluteUrl(path: string): string {
  // If already a full URL, return it unchanged
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Otherwise build absolute URL from your site base URL
  return new URL(path, getBaseUrl()).toString();
}

/**
 * ✅ Central viewport export.
 * Put this in app/layout.tsx: `export { viewport } from ...`
 */
export const viewport: Viewport = {
  themeColor: op.primaryColor,
};

/**
 * Build consistent metadata for any page.
 * Use this inside:
 * - app/layout.tsx  (global defaults)
 * - app/page.tsx, app/about-us/page.tsx, app/contact-us/page.tsx (page overrides)
 */
export function buildMetadata(page: PageSeo): Metadata {
  const canonical = absoluteUrl(page.canonicalPathname);
  const ogImage = absoluteUrl(page.ogImagePath ?? ROOT_SEO.defaultOgImagePath);

  return {
    metadataBase: new URL(getBaseUrl()),

    title: page.title,

    // Page-level title/description
    // (In App Router: this merges nicely with template)
    description: page.description,

    alternates: { canonical },

    manifest: ROOT_SEO.manifestPath,
    icons: ROOT_SEO.icons,

    // Robots:
    // - Keep defaults index/follow
    // - allow page.noindex to override
    robots: page.noindex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : ROOT_SEO.robots,

    keywords: page.keywords,

    openGraph: {
      type: "website",
      siteName: ROOT_SEO.siteName,
      url: canonical,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${ROOT_SEO.siteName} preview`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },

    // Optional niceties for small biz:
    other: {
      // prevents iOS auto-detecting phone numbers into blue links
      "format-detection": "telephone=no",
    },
  };
}

/**
 * A tiny helper to create per-page SEO objects quickly.
 * (Just avoids repeating op/orgName everywhere.)
 */
export function seoPage(
  input: Omit<PageSeo, "title" | "description"> &
    Partial<Pick<PageSeo, "title" | "description">>,
): PageSeo {
  return {
    title: input.title ?? op.orgName,
    description: input.description ?? op.description,
    canonicalPathname: input.canonicalPathname,
    ogImagePath: input.ogImagePath,
    keywords: input.keywords,
    noindex: input.noindex,
  };
}

const locationKeywords = [
  SERVICE_AREA.primaryRegion,
  SERVICE_AREA.state,
  SERVICE_AREA.country,
];

// Central, reusable SEO configs
export const SEO_PAGES = {
  home: (): PageSeo => ({
    canonicalPathname: PublicRoutes.home(),
    title: op.orgName,
    description: op.description,
    keywords: [
      op.orgName,
      "Private Offices Dandenong",
      "Coworking Spaces Dandenong",
      "Meeting Rooms Dandenong",
      "Conference Rooms Dandenong",
      "Virtual Offices Dandenong",
      "Administrative Support Dandenong",
      ...locationKeywords,
      ...getHomeServiceKeywords(op.otherLangKeys),
    ],
  }),

  about: (): PageSeo => ({
    canonicalPathname: PublicRoutes.about(),
    title: `About ${op.orgName}`,
    description: `Learn about ${op.orgName}, our values, and how we provide flexible workspaces, private offices, coworking, meeting rooms, and business support in Dandenong.`,
    keywords: [
      op.orgName,
      `About ${op.orgName}`,
      "Flexible Workspaces",
      "Private Offices",
      "Coworking Spaces",
      "Meeting Rooms",
      "Conference Rooms",
      "Virtual Offices",
      "Administrative Support",
      ...locationKeywords,
    ],
  }),

  contact: (): PageSeo => ({
    canonicalPathname: PublicRoutes.contact(),
    title: `Contact ${op.orgName}`,
    description: `Book a tour, enquire about private offices, coworking spaces, meeting rooms, conference rooms, or contact ${op.orgName} for workspace solutions in Dandenong.`,
    keywords: [
      op.orgName,
      `Contact ${op.orgName}`,
      "Book a Tour",
      "Office Enquiry",
      "Meeting Room Booking",
      "Conference Room Booking",
      "Coworking Enquiry",
      SERVICE_AREA.primaryRegion,
      ...(SERVICE_AREA.featuredSuburbs ?? []),
    ],
  }),

  service: (input: {
    slug: string;
    label: string;
    description: string;
    keywords?: string[];
    ogImagePath?: string;
  }): PageSeo => ({
    canonicalPathname: PublicRoutes.service(input.slug),
    title: `${input.label} | ${op.orgName}`,
    description: input.description,
    keywords: [
      op.orgName,
      input.label,
      SERVICE_AREA.primaryRegion,
      ...(SERVICE_AREA.featuredSuburbs ?? []),
      ...(input.keywords ?? []),
    ],
    ogImagePath: input.ogImagePath,
  }),

  workspace: (input: {
    workspaceKey: WorkspaceKey;
    label: string;
    description: string;
    keywords?: string[];
    ogImagePath?: string;
  }): PageSeo => ({
    canonicalPathname: workspacesRoutes.offering(input.workspaceKey),
    title: `${input.label} | ${op.orgName}`,
    description: input.description,
    keywords: [op.orgName, input.label, ...(input.keywords ?? [])],
    ogImagePath: input.ogImagePath,
  }),

  privateOfficeDetails: (input: {
    slug: string;
    label: string;
    description: string;
    keywords?: string[];
    ogImagePath?: string;
  }): PageSeo => ({
    canonicalPathname: workspacesRoutes.officeDetails(input.slug),
    title: `${input.label} | ${op.orgName}`,
    description: input.description,
    keywords: [
      op.orgName,
      input.label,
      SERVICE_AREA.primaryRegion,
      ...(SERVICE_AREA.featuredSuburbs ?? []),
      ...(input.keywords ?? []),
    ],
    ogImagePath: input.ogImagePath,
  }),

  workspaces: (): PageSeo => ({
    canonicalPathname: "/workspaces",
    title: `Workspaces | ${op.orgName}`,
    description:
      "Explore flexible workspace solutions including coworking, private offices, meeting rooms, dedicated desks, and virtual office services.",
    keywords: [
      op.orgName,
      "workspaces",
      "coworking",
      "private offices",
      "dedicated desk",
      "meeting rooms",
      "virtual offices",
      SERVICE_AREA.primaryRegion,
      ...(SERVICE_AREA.featuredSuburbs ?? []),
    ],
    ogImagePath: ROOT_SEO.defaultOgImagePath,
  }),
};

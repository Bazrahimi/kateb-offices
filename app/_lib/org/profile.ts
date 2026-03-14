//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "kateboffices.com.au" as const;
const orgName = "Kateb Offices";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "دفاتر کاتب",
  hero: {
    tagline:
      "Flexible workspaces for modern businesses in the heart of Dandenong.",
    highlights: [
      // "Private offices and coworking spaces designed for productivity and growth",
      // "Fully equipped meeting and conference rooms for teams and client presentations",
      // "Virtual office solutions and administrative support to run your business smoothly",
    ],
  },
  industry: ORG_INDUSTRY_SECTORS.WORKSPACE.industry,
  subSector: ORG_INDUSTRY_SECTORS.WORKSPACE.sectors.privateOffices,
  description:
    "Flexible private offices, coworking spaces, meeting rooms, conference rooms, virtual offices, and administrative support services in Dandenong.",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  // email: "reception@kateboffices.com",
  email: "bazrahimi@hotmail.com",
  phone: "+61 401 922 760",
  address: "Level 2/311 Lonsdale St, Dandenong VIC 3175",
  abn: "40 663 656 095",
  cta: "freeTour" as CtaKey,
  primaryColor: "#030501",
  secondaryColor: "#1ba174",
} as const;

//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { LeafImage } from "./definitions";
import { images } from "./assets";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "kateboffices.com.au" as const;
const orgName = "Kateb Offices";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "",
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.rendering,
  description:
    "Residential and commercial rendering and cladding in the south eastern suburbs of Melbourne",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "info@canconstruction.com.au",
  baseUrl: getBaseUrl(),
  phone: "+61 420 910 786",
  address: "Level 2/311 Lonsdale St, Dandenong VIC 3175",
  abn: "40 663 656 095",
  logo: "/images/logo-transparent-hd.png",
  logoUrl: {
    kind: "url",
    src: "business-f/building/brothers-rendering/brother-render-hero-image_klfiqy.png",
  } as LeafImage,
  logoFullUrl: `${getBaseUrl()}${images.icon.apple}`,
  heroImgUrl: "/images/brother-hero.jpg",
  cta: "freeQuote" as CtaKey,
} as const;

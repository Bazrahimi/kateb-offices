import { ServiceSubCategory } from "../../definitions";
export const coworkingMembership = {
  overview: {
    label: "Coworking  Overview",
    labelFarsi: "معرفی فضای کار اشتراکی",
    image: [{ url: "hardesk_srxh6j.png", alt: "Coworking Overview" }],
    description: [
      "Kateb Offices provides shared work environments that support productivity, flexibility, and professional networking.",
    ],
    items: [
      "Shared professional workspace",
      "Flexible access options",
      "Central Dandenong location",
      "Designed for focus and collaboration",
    ] as const,
  },

  idealFor: {
    label: "Who Coworking Suits",
    labelFarsi: "مناسب برای چه کسانی",
    image: [{ url: "hard-desk-3_h827mg.png", alt: "Who Coworking Suits" }],
    description: [
      "Coworking is ideal for individuals and small teams that want flexibility without the cost of a dedicated office.",
    ],
    items: [
      "Freelancers",
      "Remote workers",
      "Startups",
      "Small project teams",
      "Professionals needing occasional office access",
    ] as const,
  },

  benefits: {
    label: "Coworking Benefits",
    labelFarsi: "مزایای فضای کار اشتراکی",
    image: [{ url: "open-area_q4cdaa.png", alt: "Coworking Benefits" }],
    description: [
      "Coworking gives businesses access to professional facilities while keeping costs and commitments lower.",
    ],
    items: [
      "Lower overhead than a private office",
      "Professional atmosphere",
      "Networking opportunities",
      "Access to shared amenities",
      "Flexible workspace solution",
    ] as const,
  },

  amenities: {
    label: "Shared Amenities",
    labelFarsi: "امکانات مشترک",
    image: [{ url: "kitechn_duvydk.png", alt: "Shared Amenities" }],
    description: [
      "Members benefit from practical day-to-day amenities that support a productive work routine.",
    ],
    items: [
     
      "Shared kitchen",
      "Breakout areas",
      "Meeting room access",
      "Reception presence",
      "Office cleaning",
       "triple redundant High Speed internet",
       "Sound Proof Privacy Room"
    ] as const,
  },
} as const satisfies ServiceSubCategory;

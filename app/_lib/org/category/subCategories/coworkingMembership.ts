import { servicesCldImgs } from "../../assets";
import { ServiceSubCategory } from "../../definitions";
const imgs = servicesCldImgs.coworkingMembership;
export const coworkingMembership = {
  overview: {
    label: "Coworking  Overview",
    labelFarsi: "معرفی فضای کار اشتراکی",
    image: [imgs.overview],
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
    image: [imgs.idealFor],
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
    image: [imgs.benefits],
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
    image: [imgs.amenities],
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
      "Sound Proof Privacy Room",
    ] as const,
  },
} as const satisfies ServiceSubCategory;

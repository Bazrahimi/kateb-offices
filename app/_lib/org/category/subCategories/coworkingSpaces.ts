import { ServiceSubCategory } from "../../definitions";
export const coworkingSpaces = {
  overview: {
    label: "Coworking Space Overview",
    labelFarsi: "معرفی فضای کار اشتراکی",
    image: { kind: "svg", text: "Coworking Space Overview" },
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
    image: { kind: "svg", text: "Who Coworking Suits" },
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
    image: { kind: "svg", text: "Coworking Benefits" },
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
    image: { kind: "svg", text: "Shared Amenities" },
    description: [
      "Members benefit from practical day-to-day amenities that support a productive work routine.",
    ],
    items: [
      "High-speed internet",
      "Shared kitchen",
      "Breakout areas",
      "Meeting room access",
      "Reception presence",
      "Office cleaning",
    ] as const,
  },
} as const satisfies ServiceSubCategory;
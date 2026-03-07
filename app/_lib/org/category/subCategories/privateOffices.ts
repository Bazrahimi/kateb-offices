import { ServiceSubCategory } from "../../definitions";
export const privateOffices = {
  overview: {
    label: "Private Offices Overview",
    labelFarsi: "معرفی دفاتر خصوصی",
    image: { kind: "url", src: "private-office_u17uat.png" },
    description: [
      "Kateb Offices offers fully furnished private office spaces in the heart of Dandenong for professionals, startups, and growing teams.",
    ],
    items: [
      "Central Dandenong location",
      "Fully furnished office suites",
      "Flexible rental terms",
      "Suitable for teams from 1 to 23 desks",
    ] as const,
  },

  idealFor: {
    label: "Who Private Offices Suit",
    labelFarsi: "مناسب برای چه کسانی",
    image: { kind: "url", src: "professional_acvgbm.png" },
    description: [
      "Private offices are ideal for businesses that need privacy, professionalism, and a ready-to-use workspace.",
    ],
    items: [
      "Small businesses",
      "Consultants and advisors",
      "Growing teams",
      "Client-facing service providers",
      "Remote teams needing a base",
    ] as const,
  },

  includedFeatures: {
    label: "What's Included",
    labelFarsi: "امکانات شامل",
    image: { kind: "url", src: "kitchen_nn6ttg.png" },
    description: [
      "Our offices are designed to reduce setup hassle and provide a complete business-ready environment.",
    ],
    items: [
      "24/7 access",
      "Free cable and Wi-Fi internet",
      "Office cleaning included",
      "Shared kitchen access",
      "Meeting room access",
      "Reception support",
      "Mail handling",
      "Printing facilities",
    ] as const,
  },

  locationBenefits: {
    label: "Location Benefits",
    labelFarsi: "مزایای موقعیت مکانی",
    image: { kind: "svg", text: "Location Benefits" },
    description: [
      "The workspace is positioned for convenience, with strong transport access and nearby retail and dining options.",
    ],
    items: [
      "311 Lonsdale Street, Dandenong",
      "About 8 to 9 minutes walk to Dandenong Station",
      "About 1 minute walk to Walker St / Lonsdale St bus stop",
      "Close to banks, eateries, and shopping",
      "Convenient access to major roads",
    ] as const,
  },

  whyChooseUs: {
    label: "Why Choose Kateb Offices",
    labelFarsi: "چرا کاتب آفس",
    image: { kind: "url", src: "administration_cydnvn.png" },
    description: [
      "Kateb Offices combines convenience, presentation, and flexibility for businesses looking for a practical and polished workspace.",
    ],
    items: [
      "Natural light throughout the workspace",
      "Professional image for clients and visitors",
      "Flexible lease options",
      "Modern and welcoming environment",
      "Cost-effective workspace solution",
    ] as const,
  },
} as const satisfies ServiceSubCategory;

import { ServiceSubCategory } from "../../definitions";

export const administrativeSupport = {
  overview: {
    label: "Administrative Support Overview",
    labelFarsi: "معرفی پشتیبانی اداری",
    image: { kind: "url", src: "reception_yl183o.png" },
    description: [
      "Kateb Offices offers practical office support services that help businesses operate professionally and efficiently.",
    ],
    items: [
      "Reception support",
      "Mail handling",
      "Telephone answering",
      "General office assistance",
    ] as const,
  },

  servicesIncluded: {
    label: "Support Services Included",
    labelFarsi: "خدمات پشتیبانی شامل",
    image: { kind: "url", src: "professional_acvgbm.png" },
    description: [
      "Administrative support is designed to reduce the everyday burden of office management.",
    ],
    items: [
      "Receptionist available",
      "Mail and package handling",
      "Telephone answering",
      "Printing facilities",
      "Office cleaning",
      "Day-to-day workspace support",
    ] as const,
  },

  businessBenefits: {
    label: "Business Benefits",
    labelFarsi: "مزایای تجاری",
    image: { kind: "url", src: "flower_mwqo1d.png" },
    description: [
      "Support services help businesses focus on clients and growth rather than office administration.",
    ],
    items: [
      "More professional client experience",
      "Less time spent on admin tasks",
      "Better day-to-day efficiency",
      "Support for small and growing teams",
    ] as const,
  },

  whyItMatters: {
    label: "Why Administrative Support Matters",
    labelFarsi: "چرا پشتیبانی اداری مهم است",
    image: { kind: "url", src: "open-aria_e2bjax.png" },
    description: [
      "Strong support services can make a flexible office feel more like a complete professional headquarters.",
    ],
    items: [
      "Improves business presentation",
      "Supports smoother operations",
      "Helps teams stay focused",
      "Creates a more reliable client-facing environment",
    ] as const,
  },
} as const satisfies ServiceSubCategory;

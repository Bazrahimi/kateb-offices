import { ServiceSubCategory } from "../../definitions";

export const virtualOffices = {
  overview: {
    label: "Virtual Office Overview",
    labelFarsi: "معرفی دفتر مجازی",
        image: { kind: "url", src: "virtual_vi9jum.png" },
  
    description: [
      "Virtual office services give businesses a professional presence in Dandenong without the need for full-time physical office space.",
    ],
    items: [
      "Professional business address",
      "Mail handling services",
      "Credible local presence",
      "Flexible low-overhead solution",
    ] as const,
  },

  idealFor: {
    label: "Who Virtual Offices Suit",
    labelFarsi: "مناسب برای چه کسانی",
      image: { kind: "url", src: "coworking-space_khioi8.png" },
    description: [
      "Virtual offices are a practical option for businesses wanting flexibility and credibility.",
    ],
    items: [
      "Home-based businesses",
      "Consultants",
      "Startups",
      "Interstate businesses needing a local address",
      "Businesses testing a new market",
    ] as const,
  },

  keyBenefits: {
    label: "Key Benefits",
    labelFarsi: "مزایای اصلی",
    image: { kind: "url", src: "private-room_amp7ny.png" },
    description: [
      "A virtual office supports your brand image while keeping operating costs lower than a dedicated office.",
    ],
    items: [
      "Professional address in central Dandenong",
      "Improved business credibility",
      "Reduced overhead",
      "Mail handling convenience",
      "Flexible business presence",
    ] as const,
  },

  whyKateb: {
    label: "Why Choose Kateb Offices for Virtual Office Services",
    labelFarsi: "چرا دفتر مجازی کاتب",
    image: { kind: "url", src: "reception_yl183o.png" },
    description: [
      "Kateb Offices combines a central address, professional support, and practical flexibility for businesses that do not need a permanent physical office.",
    ],
    items: [
      "Central CBD location",
      "Professional business image",
      "Supportive office environment",
      "Simple and flexible solution",
    ] as const,
  },
} as const satisfies ServiceSubCategory;

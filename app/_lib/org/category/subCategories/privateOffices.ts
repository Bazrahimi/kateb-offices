import { ServiceSubCategory } from "../../definitions";
import { servicesCldImgs} from "../../assets";
const imgs = servicesCldImgs.privateOffices
export const privateOffices = {
  overview: {
    label: "External Offices",
    labelFarsi: "معرفی دفاتر خصوصی",
    image: [imgs.overview],
    description: [
      "Our external window offices offer bright, fully equipped workspaces for teams of 4–8 people, professionally furnished and ready for immediate use. Tenants benefit from high-speed triple-redundant internet, phone and mail handling services, and fully configured meeting rooms for teleconferencing and videoconferencing, all within a modern, professional office environment designed for productivity.",
    ],
    items: [
      "Central Dandenong location",
      "Fully furnished office suites",
      "Flexible rental terms",
      "Suitable for teams from 1 to 23 desks",
      "Designated underground car-park"
    ] as const,
  },

  idealFor: {
    label: "Internal Offices",
    labelFarsi: "مناسب برای چه کسانی",
    image: [imgs.idealFor],
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
    image: [imgs.includedFeatures],
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
      "sound proof privacy room",
      "Zen Relaxation Room"
    ] as const,
  },

  locationBenefits: {
    label: "Location Benefits",
    labelFarsi: "مزایای موقعیت مکانی",

    image: [imgs.locationBenefits],
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
    image: [imgs.whyChooseUs],
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

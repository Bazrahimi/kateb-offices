import { servicesCldImgs } from "../../assets";
import { ServiceSubCategory } from "../../definitions";
const imgs = servicesCldImgs.privateOffices;
const amenities = servicesCldImgs.amenities;
export const privateOffices = {
  overview: {
    label: "External Offices, Corner Offices and Internal Offices ",
    labelFarsi: "معرفی دفاتر خصوصی",
    image: [imgs.overview,  imgs.external1, imgs.internal1,imgs.bigOffice],
    description: [
      "Our external window offices offer bright, fully equipped workspaces for teams of 4–8 people, professionally furnished and ready for immediate use. Tenants benefit from high-speed triple-redundant internet, phone and mail handling services, and fully configured meeting rooms for teleconferencing and videoconferencing, all within a modern, professional office environment designed for productivity.",
      "Private offices are ideal for businesses that need privacy, professionalism, and a ready-to-use workspace.",
    ],
    items: [
      "Central Dandenong location",
      "Fully furnished office suites",
      "Flexible rental terms",
      "Reception Service Support",
      "Internal Offices",
      "External Offices",
      "Corner Offices",
    ] as const,
  },



  includedFeatures: {
    label: "What's Included",
    labelFarsi: "امکانات شامل",
    image: [
      amenities.kitchen,
      amenities.meetingRoom1,
      amenities.meetingRoom2,
      amenities.reception,
      amenities.telephone,
      amenities.waitingArea,
    ],
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
      "Zen Relaxation Room",
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

} as const satisfies ServiceSubCategory;

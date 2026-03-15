import { ServiceSubCategory } from "../../definitions";

export const meetingRooms = {
  overview: {
    label: "Meeting Rooms Overview",
    labelFarsi: "معرفی اتاق جلسات",
    image: [{ url: "meeting-room_lxqgem.png", alt: "Meeting Rooms Overview" }],
    description: [
      "Our meeting and conference rooms provide a professional space for presentations, interviews, team sessions, and client meetings.",
    ],
    items: [
      "Professional presentation environment",
      "Suitable for formal and informal meetings",
      "Central Dandenong location",
      "Fully equipped Video Conferencing facility",
      "Client Interviews",
      "Workshops",
      "Training Sessions",
      "Team Meetings",
    ] as const,
  },

  suitableFor: {
    label: "Suitable Uses",
    labelFarsi: "کاربردهای مناسب",
    image: [{ url: "conference-room_iphq8c.png", alt: "Suitable Uses" }],
    description: [
      "Meeting rooms can be used across a range of business activities where a polished setting matters.",
    ],
    items: [
      "Client presentations",
      "Team meetings",
      "Interviews",
      "Workshops",
      "Training sessions",
      "Strategy sessions",
    ] as const,
  },

  supportServices: {
    label: "Meeting Support Services",
    labelFarsi: "خدمات پشتیبانی جلسات",
    image: [{ url: "professional_acvgbm.png", alt: "Meeting Support Services" }],
    description: [
      "Support services help create a smooth meeting experience for both hosts and guests.",
    ],
    items: [
      "Catering options",
      "Projection equipment",
      "Reception support",
      "Professional presentation setting",
    ] as const,
  },

  whyChooseOurRooms: {
    label: "Why Use Our Meeting Rooms",
    labelFarsi: "چرا از اتاق جلسات ما استفاده کنید",
    image: [{ url: "open-area_q4cdaa.png", alt: "Why Use Our Meeting Rooms" }],
    description: [
      "Our rooms are designed to help businesses present well and meet with confidence.",
    ],
    items: [
      "Impressive for clients and visitors",
      "Convenient transport access",
      "Flexible booking use",
      "Comfortable and professional environment",
      "Natural light and modern interiors",
    ] as const,
  },
} as const satisfies ServiceSubCategory;

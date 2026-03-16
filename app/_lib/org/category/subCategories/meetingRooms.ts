import { servicesCldImgs } from "../../assets";
import { ServiceSubCategory } from "../../definitions";

const imgs = servicesCldImgs.meetingRooms;
const amenities = servicesCldImgs.amenities;

export const meetingRooms = {
  overview: {
    label: "Meeting Rooms Overview",
    labelFarsi: "معرفی اتاق جلسات",
    image: [imgs.overview, imgs.suitableFor, imgs.whyChooseOurRooms],
    description: [
      "Our meeting and conference rooms provide a professional space for presentations, interviews, team sessions, client meetings, workshops, and short-term training sessions in a central Dandenong location.",
    ],
    items: [
      "Professional presentation environment",
      "Suitable for formal and informal meetings",
      "Central Dandenong location",
      "Fully equipped video conferencing facility",
      "Private day office option available",
      "Small and large room options",
      "Flexible hourly bookings",
      "Comfortable and business-ready setup",
    ] as const,
  },

  suitableFor: {
    label: "Suitable For",
    labelFarsi: "مناسب برای",
    image: [imgs.suitableFor],
    description: [
      "Our meeting spaces are suitable for a wide range of professional, business, and community uses.",
    ],
    items: [
      "Client meetings",
      "Interviews",
      "Team meetings",
      "Private discussions",
      "Workshops",
      "Training sessions",
      "Presentations",
      "Video conferences",
      "Small boardroom sessions",
      "Larger conference-style gatherings",
    ] as const,
  },

  roomOptions: {
    label: "Available Room Options",
    labelFarsi: "گزینه‌های موجود اتاق",
    image: [amenities.meetingRoom2, amenities.meetingRoom1, imgs.whyChooseOurRooms, imgs.overview],
    description: [
      "We offer different room sizes to suit private work, small meetings, and larger group sessions.",
    ],
    items: [
      "Day Office for up to 4 people",
      "Hydra Meeting Room for up to 8 people",
      "Leo Conference Room for up to 25 people",
      "Professional setup for short or extended sessions",
      "Flexible options for solo, small-team, and group bookings",
    ] as const,
  },

  supportServices: {
    label: "Meeting Support Services",
    labelFarsi: "خدمات پشتیبانی جلسات",
    image: [imgs.supportServices],
    description: [
      "Support services help create a smooth and professional experience for both hosts and guests.",
    ],
    items: [
      "Reception support available",
      "High-speed internet",
      "Projection and presentation support",
      "Video conferencing capability",
      "Professional business setting",
      "Comfortable seating arrangements",
      "Catering options available on request",
    ] as const,
  },

  whyChooseOurRooms: {
    label: "Why Use Our Meeting Rooms",
    labelFarsi: "چرا از اتاق جلسات ما استفاده کنید",
    image: [],
    description: [
      "Our rooms are designed to help businesses, professionals, and teams meet with confidence in a convenient and polished environment.",
    ],
    items: [
      "Impressive for clients and visitors",
      "Convenient Dandenong location",
      "Flexible booking options",
      "Comfortable and professional environment",
      "Suitable for both private and group use",
      "Ready for presentations and collaboration",
      "Practical alternative to meeting in cafés or shared public spaces",
    ] as const,
  },
} as const satisfies ServiceSubCategory;
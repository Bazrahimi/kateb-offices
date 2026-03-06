import type { ServicesPage } from "../definitions";

import { administrativeSupport } from "./subCategories/administrativeSupport";
import { coworkingSpaces } from "./subCategories/coworkingSpaces";
import { meetingRooms } from "./subCategories/meetingRooms";
import { privateOffices } from "./subCategories/privateOffices";
import { virtualOffices } from "./subCategories/virtualOffices";

export const SERVICES_PAGE = {
  privateOffices: {
    slug: "private-offices-dandenong",
    label: "Private Offices",
    image: { kind: "svg", text: "Private Offices" },
    labelFarsi: "دفتر خصوصی",
    description: [
      "Fully furnished private office spaces in central Dandenong with flexible terms, natural light, and professional amenities.",
    ] as const,
    subcategories: privateOffices,
  },

  coworkingSpaces: {
    slug: "coworking-spaces-dandenong",
    label: "Coworking Spaces",
    image: { kind: "svg", text: "Coworking Spaces" },
    labelFarsi: "فضای کار اشتراکی",
    description: [
      "Flexible coworking space designed for freelancers, small teams, and growing businesses who want a central and professional workspace.",
    ] as const,
    subcategories: coworkingSpaces,
  },

  meetingRooms: {
    slug: "meeting-rooms-dandenong",
    label: "Meeting Rooms",
    image: { kind: "svg", text: "Meeting Rooms" },
    labelFarsi: "اتاق جلسات",
    description: [
      "Professional meeting and conference rooms for presentations, client meetings, interviews, and team training sessions.",
    ] as const,
    subcategories: meetingRooms,
  },

  virtualOffices: {
    slug: "virtual-office-dandenong",
    label: "Virtual Offices",
    image: { kind: "svg", text: "Virtual Offices" },
    labelFarsi: "دفتر مجازی",
    description: [
      "Professional business address and mail handling services for businesses needing a credible presence without full-time office space.",
    ] as const,
    subcategories: virtualOffices,
  },

  administrativeSupport: {
    slug: "administrative-support-services",
    label: "Administrative Support",
    image: { kind: "svg", text: "Administrative Support" },
    labelFarsi: "پشتیبانی اداری",
    description: [
      "Reception, mail handling, call support, and day-to-day office assistance to help businesses operate smoothly.",
    ] as const,
    subcategories: administrativeSupport,
  },
} as const satisfies Record<string, ServicesPage>;

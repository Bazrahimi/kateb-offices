import type { ServicesPage } from "../definitions";

import { ORG_PROFILE as op } from "../profile";
import { administrativeSupport } from "./subCategories/administrativeSupport";
import { coworkingSpaces } from "./subCategories/coworkingSpaces";
import { meetingRooms } from "./subCategories/meetingRooms";
import { privateOffices } from "./subCategories/privateOffices";
import { virtualOffices } from "./subCategories/virtualOffices";

export const SERVICES_PAGE = {
  privateOffices: {
    slug: "private-offices-dandenong",
    label: "Private Offices",
    image: { kind: "url", src: "private-office_u17uat.png" },
    labelFarsi: "دفتر خصوصی",
    description: [
      `${op.orgName} offers professional private office spaces in the heart of Dandenong, designed for businesses that want a flexible and cost-effective workspace. Our offices are fully furnished and available in internal, external, and corner layouts with window options, suitable for teams of 3–8 people. Tenants enjoy access to shared amenities, reception support, and a professional environment without the high cost of a traditional commercial lease. `,
      "Enjoy a 365 rated premium office experience, secure encrypted access, seamless accessibility with designated underground carpark",
    ] as const,
    subcategories: privateOffices,
  },

  coworkingSpaces: {
    slug: "coworking-spaces-dandenong",
    label: "Coworking Spaces",
    image: { kind: "url", src: "co-working_uv5zcp.png" },
    labelFarsi: "فضای کار اشتراکی",
    description: [
      "Flexible coworking space designed for freelancers, small teams, and growing businesses who want a central and professional workspace.",
    ] as const,
    subcategories: coworkingSpaces,
  },

  meetingRooms: {
    slug: "meeting-rooms-dandenong",
    label: "Meeting Rooms",
    image: { kind: "url", src: "meeting-room_lxqgem.png" },

    labelFarsi: "اتاق جلسات",
    description: [
      "Professional meeting and conference rooms for presentations, client meetings, interviews, and team training sessions.",
    ] as const,
    subcategories: meetingRooms,
  },

  virtualOffices: {
    slug: "virtual-office-dandenong",
    label: "Virtual Offices",
    image: { kind: "url", src: "waiting_area_cnsymo.png" },
    labelFarsi: "دفتر مجازی",
    description: [
      "Premium serviced offices in central Dandenong featuring high-speed internet, fully furnished private offices, meeting rooms, kitchen facilities, and professional business support. Located just minutes from Dandenong Station and the vibrant Thomas Street dining precinct, Kateb Offices provides the ideal workspace for modern businesses and growing teams.",
    ] as const,
    subcategories: virtualOffices,
  },

  administrativeSupport: {
    slug: "administrative-support-services",
    label: "Administrative Support",
    image: { kind: "url", src: "administration_cydnvn.png" },
    labelFarsi: "پشتیبانی اداری",
    description: [
      "Reception, mail handling, call support, and day-to-day office assistance to help businesses operate smoothly.",
    ] as const,
    subcategories: administrativeSupport,
  },
} as const satisfies Record<string, ServicesPage>;

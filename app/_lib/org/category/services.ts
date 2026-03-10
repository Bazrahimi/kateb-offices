import type { ServicesPage } from "../definitions";

import { ORG_PROFILE as op } from "../profile";
import { coworkingMembership } from "./subCategories/coworkingMembership";
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

  coworkingMembership: {
    slug: "coworking-space-membership-dandenong",
    label: "Coworking Spaces",
    image: { kind: "url", src: "co-working_uv5zcp.png" },
    labelFarsi: "فضای کار اشتراکی",
    description: [
      `${op.orgName} also offers a modern co-working environment designed for flexibility and collaboration. Our space includes a large 84-square-metre open office area ideal for teams working together in one shared workspace, as well as 52 dedicated hard-desk zone for professionals who need a flexible workstation. The area is fully furnished with ergonomic desks and chairs, high-speed internet, and access to shared amenities, creating a comfortable and productive environment for freelancers, startups, and growing teams.`,
    ] as const,
    subcategories: coworkingMembership,
  },

  meetingRooms: {
    slug: "meeting-and-conference-rooms-dandenong",
    label: "Meeting & Conference Rooms",
    image: { kind: "url", src: "meeting-room_lxqgem.png" },

    labelFarsi: "اتاق جلسات",
    description: [
      `${op.orgName} provides two fully equipped meeting spaces designed for professional gatherings and events. Our 8-person meeting room is ideal for small team meetings, client discussions, and private presentations, while the 25-person conference room is perfect for group meetings, workshops, and short-term training courses. Both rooms include modern presentation and video-conferencing facilities and can be booked for short or extended sessions, making it easy to host professional meetings whenever needed.`,
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

  // administrativeSupport: {
  //   slug: "administrative-support-services",
  //   label: "Administrative Support",
  //   image: { kind: "url", src: "administration_cydnvn.png" },
  //   labelFarsi: "پشتیبانی اداری",
  //   description: [
  //     "Reception, mail handling, call support, and day-to-day office assistance to help businesses operate smoothly.",
  //   ] as const,
  //   subcategories: administrativeSupport,
  // },
} as const satisfies Record<string, ServicesPage>;

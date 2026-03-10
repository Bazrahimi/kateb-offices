import type { WorkspaceOfferCollection } from "../definitions";
import { publicAssets } from "../publicAssets";
const svg = publicAssets.offeringSvg;

export const WORKSPACE_OFFERS = {
  coworkingMembership: {
    slug: "coworking-membership",
    label: "Coworking Membership",
    labelFarsi: "عضویت فضای کار اشتراکی",
    image: svg.coworkingMembership,
    capacityLabel: "1+",
    priceLabel: "From $30/month",
    summary:
      "Flexible workspace access with shared amenities, ideal for freelancers, remote workers, and professionals who need a productive environment without a long-term lease.",
    href: "/services/coworking-spaces-dandenong",
  },

  dedicatedDesk: {
    slug: "dedicated-desk",
    label: "Dedicated Desk",
    labelFarsi: "میز اختصاصی",
    image: svg.dedicatedDesk,
    capacityLabel: "1",
    priceLabel: "From $195/month",
    summary:
      "A permanent workstation within our coworking space, giving you a consistent desk, secure environment, and 24/7 access to shared facilities.",
    href: "/services/coworking-spaces-dandenong",
  },

  virtualOffice: {
    slug: "virtual-office",
    label: "Virtual Office",
    labelFarsi: "دفتر مجازی",
    image: svg.virtualOffice,
    priceLabel: "From $30/month",
    summary:
      "Establish a professional business presence with a premium address, mail handling, and optional call answering services without renting a physical office.",
    href: "/services/virtual-office-dandenong",
  },

  meetingRooms: {
    slug: "meeting-rooms",
    label: "Meeting Rooms",
    labelFarsi: "اتاق جلسات",
    image: svg.meetingRooms,
    capacityLabel: "2–25",
    priceLabel: "From $5/hr",
    summary:
      "Professional meeting and conference rooms suitable for client meetings, team discussions, presentations, and workshops.",
    href: "/services/meeting-and-conference-rooms-dandenong",
  },

  privateOffice: {
    slug: "private-office",
    label: "Private Office",
    labelFarsi: "دفتر خصوصی",
    image: svg.privateOffice,
    capacityLabel: "1–12+",
    priceLabel: "From $1120/month",
    summary:
      "Fully furnished private office suites designed for businesses that need privacy, security, and a professional workspace with flexible terms.",
    href: "/services/private-offices-dandenong",
  },
} as const satisfies WorkspaceOfferCollection;
import type { WorkspaceOfferCollection } from "../definitions";

export const WORKSPACE_OFFERS = {
  coworkingMembership: {
    slug: "coworking-membership",
    label: "Coworking Membership",
    labelFarsi: "عضویت فضای کار اشتراکی",
    image: { kind: "url", src: "co-working_uv5zcp.png" },
    capacityLabel: "1+",
    priceLabel: "From $62/mo",
    summary:
      "Workspace on demand with access to shared amenities and flexible coworking options.",
    href: "/services/coworking-spaces-dandenong",
  },

  dedicatedDesk: {
    slug: "dedicated-desk",
    label: "Dedicated Desk",
    labelFarsi: "میز اختصاصی",
    image: { kind: "url", src: "dedicated-desk.png" },
    capacityLabel: "1",
    priceLabel: "From $650/mo",
    summary:
      "Your own permanent workstation in our coworking environment, accessible around the clock.",
    href: "/services/coworking-spaces-dandenong",
  },

  virtualOffice: {
    slug: "virtual-office",
    label: "Virtual Office",
    labelFarsi: "دفتر مجازی",
    image: { kind: "url", src: "waiting_area_cnsymo.png" },
    priceLabel: "From $62/mo",
    summary:
      "Build a professional presence with a business address, call answering, and mail handling.",
    href: "/services/virtual-office-dandenong",
  },

  meetingRooms: {
    slug: "meeting-rooms",
    label: "Meeting Rooms",
    labelFarsi: "اتاق جلسات",
    image: { kind: "url", src: "meeting-room_lxqgem.png" },
    capacityLabel: "2–12",
    priceLabel: "From $10/hr",
    summary:
      "Book professional meeting spaces for client discussions, presentations, and team sessions.",
    href: "/services/meeting-and-conference-rooms-dandenong",
  },

  privateOffice: {
    slug: "private-office",
    label: "Private Office",
    labelFarsi: "دفتر خصوصی",
    image: { kind: "url", src: "private-office_u17uat.png" },
    capacityLabel: "1–50+",
    priceLabel: "From $1500/mo",
    summary:
      "Private office suites for growing businesses needing security, flexibility, and a professional base.",
    href: "/services/private-offices-dandenong",
  },
} as const satisfies WorkspaceOfferCollection;

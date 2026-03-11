import type { WorkspaceFee } from "../definitions";
import { publicAssets } from "../publicAssets";
const svg = publicAssets.offeringSvg;

export const coworkingMembershipFee: WorkspaceFee = {
  image: svg.coworkingMembership,
  capacityLabel: "1+",
  priceLabel: "From $30/month",
  summary:
    "Flexible workspace access with shared amenities, ideal for freelancers, remote workers, and professionals who need a productive environment without a long-term lease.",
  btnContent: "Sign Up",
  href: "/join/coworking-membership",
};

export const dedicatedDeskFee: WorkspaceFee = {
  image: svg.dedicatedDesk,
  capacityLabel: "1",
  priceLabel: "From $195/month",
  summary:
    "A permanent workstation within our coworking space, giving you a consistent desk, secure environment, and 24/7 access to shared facilities.",
  btnContent: "Sign Up",
  href: "/join/dedicated-desk",
};

export const virtualOfficeFee: WorkspaceFee = {
  image: svg.virtualOffice,
  priceLabel: "From $30/month",
  summary:
    "Establish a professional business presence with a premium address, mail handling, and optional call answering services without renting a physical office.",
  btnContent: "Sign Up",
  href: "/join/virtual-offering",
};

export const privateOfficeFee: WorkspaceFee = {
  image: svg.privateOffice,
  capacityLabel: "1–12+",
  priceLabel: "From $1120/month",
  summary:
    "Fully furnished private office suites designed for businesses that need privacy, security, and a professional workspace with flexible terms.",
  btnContent: "See Availability",
  href: "/join/private-office",
};

export const meetingRoomsFee: WorkspaceFee = {
  image: svg.meetingRooms,
  capacityLabel: "2–25",
  priceLabel: "From $5/hr",
  summary:
    "Professional meeting and conference rooms suitable for client meetings, team discussions, presentations, and workshops.",
  btnContent: "Sign Up",
  href: "/join/book-meeting-rooms",
};


import { publicAssets } from "../../../../_lib/org/publicAssets";
import { workspacesRoutes as routes } from "../../../../_lib/routes/joinWorkspacesRoutes";
import type { Offering, WorkspaceSignupInfo } from "../definitions";
import type { WorkspaceKey } from "@/app/_lib/org/definitions";
const svg = publicAssets.offeringSvg;

const coworkingMembershipOffering: WorkspaceSignupInfo = {
  image: svg.coworkingMembership,
  capacityLabel: "1+",
  priceLabel: "From $150/month",
  summary:
    "Flexible workspace access with shared amenities, ideal for freelancers, remote workers, and professionals who need a productive environment without a long-term lease.",
  btnContent: "Sign Up",
  href: routes.coworkingMembership(),
};

const dedicatedDeskFee: WorkspaceSignupInfo = {
  image: svg.dedicatedDesk,
  capacityLabel: "1",
  priceLabel: "From $195/month",
  summary:
    "A permanent workstation within our coworking space, giving you a consistent desk, secure environment, and 24/7 access to shared facilities.",
  btnContent: "Sign Up",
  href: routes.dedicatedDesk(),
};

const virtualOfficeFee: WorkspaceSignupInfo = {
  image: svg.virtualOffice,
  priceLabel: "From $40/month",
  summary:
    "Establish a professional business presence with a premium address, mail handling, and optional call answering services without renting a physical office.",
  btnContent: "Sign Up",
  href: routes.virtualOffice(),
};

const privateOfficeFee: WorkspaceSignupInfo = {
  image: svg.privateOffice,
  capacityLabel: "1–12+",
  priceLabel: "From $1120/month",
  summary:
    "Fully furnished private office suites designed for businesses that need privacy, security, and a professional workspace with flexible terms.",
  btnContent: "See Availability",
  href: routes.privateOffice(),
};

const meetingRoomsFee: WorkspaceSignupInfo = {
  image: svg.meetingRooms,
  capacityLabel: "2–25",
  priceLabel: "From $40/hr",
  summary:
    "Professional meeting and conference rooms suitable for client meetings, team discussions, presentations, and workshops.",
  btnContent: "Book Meeting Rooms",
  href: routes.meetingRooms(),
};

const memberMeetingRoomsFee: WorkspaceSignupInfo = {
  image: svg.meetingRoomsMembers,
  capacityLabel: "2–25",
  priceLabel: "From $20/hr",
  summary:
    "Exclusive meeting and conference room access with member discounts for existing workspace tenants and members.",
  btnContent: "Book Meeting Rooms",
  href: routes.meetingRoomsMembers(),
};

export const workspaceOffering: Record<WorkspaceKey, Offering> = {
  privateOffices: {
    label: "Private Offices",
    offering: privateOfficeFee,
  },

  coworkingMembership: {
    label: "Coworking Spaces",
    offering: coworkingMembershipOffering,
  },

  dedicatedDesk: {
    label: "Dedicated Desk",
    offering: dedicatedDeskFee,
  },

  meetingRooms: {
    label: "Meeting Rooms",
    offering: meetingRoomsFee,
  },
  memberMeetingRooms: {
    label: "workspace members Meeting Rooms",
    offering: memberMeetingRoomsFee,
  },
  virtualOffices: {
    label: "Virtual Offices",
    offering: virtualOfficeFee,
  },
};

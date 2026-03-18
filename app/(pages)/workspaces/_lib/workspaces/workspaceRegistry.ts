import type { WorkspaceKey } from "@/app/_lib/org/definitions";
import { publicAssets } from "../../../../_lib/org/publicAssets";
import { workspacesRoutes as routes } from "../../../../_lib/routes/workspacesRoutes";
import type { WorkspaceRegistryItem } from "../definitions";

import { membershipOfferings } from "./signup/coworkingMembership";
import { dedicatedDeskOfferings } from "./signup/dedicatedDesk";
import { memberMeetingRoom } from "./signup/MeetingRoomMember";
import { meetingRoomPlans } from "./signup/meetingRooms";
import { privateOfficeCards } from "./signup/privateOffices";
import { virtualOfficeOfferings } from "./signup/virtualOffices";

const svg = publicAssets.workspacesSvg;

export const workspaceRegistry: Record<WorkspaceKey, WorkspaceRegistryItem> = {
  privateOffices: {
    label: "Private Offices",
    signupInfo: {
      image: svg.privateOffices,
      capacityLabel: "1–12+",
      priceLabel: "From $1120/month",
      summary:
        "Fully furnished private office suites designed for businesses that need privacy, security, and a professional workspace with flexible terms.",
      btnContent: "See Availability",
      href: routes.offering("privateOffices"),
    },
    page: {
      kind: "privateOfficeGrid",
      title: "Private Offices Currently Available",
      cards: privateOfficeCards,
    },
  },

  coworkingMembership: {
    label: "Coworking Spaces",
    signupInfo: {
      image: svg.coworkingMembership,
      capacityLabel: "1+",
      priceLabel: "From $150/month",
      summary:
        "Flexible workspace access with shared amenities, ideal for freelancers, remote workers, and professionals who need a productive environment without a long-term lease.",
      btnContent: "Sign Up",
      href: routes.offering("coworkingMembership"),
    },
    page: {
      kind: "workspacePlanList",
      plans: membershipOfferings,
    },
  },

  dedicatedDesk: {
    label: "Dedicated Desk",
    signupInfo: {
      image: svg.dedicatedDesk,
      capacityLabel: "1",
      priceLabel: "From $195/month",
      summary:
        "A permanent workstation within our coworking space, giving you a consistent desk, secure environment, and 24/7 access to shared facilities.",
      btnContent: "Sign Up",
      href: routes.offering("dedicatedDesk"),
    },
    page: {
      kind: "workspacePlanList",
      plans: dedicatedDeskOfferings,
    },
  },

  meetingRooms: {
    label: "Meeting Rooms",
    signupInfo: {
      image: svg.meetingRooms,
      capacityLabel: "2–25",
      priceLabel: "From $40/hr",
      summary:
        "Professional meeting and conference rooms suitable for client meetings, team discussions, presentations, and workshops.",
      btnContent: "Book Meeting Rooms",
      href: routes.offering("meetingRooms"),
    },
    page: {
      kind: "meetingRoomsBooking",
      rooms: meetingRoomPlans,
    },
  },

  memberMeetingRooms: {
    label: "Member Meeting Rooms",
    signupInfo: {
      image: svg.memberMeetingRooms,
      capacityLabel: "2–25",
      priceLabel: "From $20/hr",
      summary:
        "Exclusive meeting and conference room access with member discounts for existing workspace tenants and members.",
      btnContent: "Book Meeting Rooms",
      href: routes.offering("memberMeetingRooms"),
    },
    page: {
      kind: "meetingRoomsBooking",
      rooms: memberMeetingRoom,
    },
  },

  virtualOffices: {
    label: "Virtual Offices",
    signupInfo: {
      image: svg.virtualOffices,
      priceLabel: "From $40/month",
      summary:
        "Establish a professional business presence with a premium address, mail handling, and optional call answering services without renting a physical office.",
      btnContent: "Sign Up",
      href: routes.offering("virtualOffices"),
    },
    page: {
      kind: "workspacePlanList",
      plans: virtualOfficeOfferings,
    },
  },
};

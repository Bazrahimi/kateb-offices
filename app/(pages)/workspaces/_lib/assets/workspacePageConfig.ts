import type { WorkspacePageConfigItem } from "../definitions";
import { membershipOfferings } from "./offering/coworkingMembership";
import { dedicatedDeskOfferings } from "./offering/dedicatedDesk";
import { memberMeetingRoom } from "./offering/MeetingRoomMember";
import { meetingRoomPlans } from "./offering/meetingRooms";
import { virtualOfficeOfferings } from "./offering/virtualOffices";

import type { OfferingKey } from "@/app/_lib/org/definitions";
import { workspaceOffering } from "./workspaceOffering";
export const workspacePageConfig: Record<OfferingKey, WorkspacePageConfigItem> =
  {
    privateOffices: {
      kind: "privateOfficeGrid",
      title: "Private Offices Currently Available",
    },

    dedicatedDesk: {
      kind: "workspacePlanList",
      plans: dedicatedDeskOfferings,
      offering: workspaceOffering.dedicatedDesk.offering,
    },

    coworkingMembership: {
      kind: "workspacePlanList",
      plans: membershipOfferings,
      offering: workspaceOffering.coworkingMembership.offering,
    },

    virtualOffices: {
      kind: "workspacePlanList",
      plans: virtualOfficeOfferings,
      offering: workspaceOffering.virtualOffices.offering,
    },

    meetingRooms: {
      kind: "meetingRoomsBooking",
      rooms: meetingRoomPlans,
    },

    memberMeetingRooms: {
      kind: "meetingRoomsBooking",
      rooms: memberMeetingRoom,
    },
  };

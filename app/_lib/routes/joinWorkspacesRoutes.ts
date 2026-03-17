import type { WorkspaceKey } from "@/app/_lib/org/definitions";

export const workspaceRouteSlugByOffering: Record<WorkspaceKey, string> = {
  privateOffices: "private-offices",
  coworkingMembership: "coworking-membership",
  dedicatedDesk: "dedicated-desk",
  meetingRooms: "book-meeting-rooms",
  memberMeetingRooms: "book-meeting-rooms-members",
  virtualOffices: "virtual-offices",
};

export const workspacesRoutes = {
  offering: (key: WorkspaceKey) =>
    `/workspaces/${workspaceRouteSlugByOffering[key]}`,

  coworkingMembership: () => "/workspaces/coworking-membership",
  dedicatedDesk: () => "/workspaces/dedicated-desk",
  virtualOffice: () => "/workspaces/virtual-offices",
  privateOffice: () => "/workspaces/private-offices",
  meetingRooms: () => "/workspaces/book-meeting-rooms",
  meetingRoomsMembers: () => "/workspaces/book-meeting-rooms-members",
  application: () => "/workspaces/application",
};
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

  officeDetails: (slug: string) => `/workspaces/single-office/${slug}`,

  application: () => "/workspaces/application",
};

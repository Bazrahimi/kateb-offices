import type { WorkspaceKey } from "@/app/_lib/org/definitions";

export const workspaceSlugByKey: Record<WorkspaceKey, string> = {
  privateOffices: "private-offices-dandenong",
  coworkingMembership: "coworking-space-dandenong",
  dedicatedDesk: "dedicated-desk0-dandenong",
  meetingRooms: "book-meeting-room-dandenong",
  memberMeetingRooms: "book-meeting-room-members",
  virtualOffices: "virtual-offices-dandenong",
};

export const workspaceKeyBySlug = Object.fromEntries(
  Object.entries(workspaceSlugByKey).map(([key, slug]) => [
    slug,
    key,
  ]),
) as Record<(typeof workspaceSlugByKey)[WorkspaceKey], WorkspaceKey>;

export const workspacesRoutes = {
  offering: (key: WorkspaceKey) =>
    `/workspaces/${workspaceSlugByKey[key]}`,

  officeDetails: (slug: string) => `/workspaces/private-office-rental/${slug}`,

  application: () => "/workspaces/application",
};

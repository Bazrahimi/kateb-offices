import type { WorkspaceKey } from "@/app/_lib/org/definitions";

export const workspaceSlugByKey: Record<WorkspaceKey, string> = {
  privateOffices: "private-offices",
  coworkingMembership: "coworking-membership",
  dedicatedDesk: "dedicated-desk",
  meetingRooms: "book-meeting-rooms",
  memberMeetingRooms: "book-meeting-rooms-members",
  virtualOffices: "virtual-offices",
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

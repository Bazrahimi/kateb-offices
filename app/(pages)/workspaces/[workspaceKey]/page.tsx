import { notFound } from "next/navigation";
import WorkspaceOfferingRenderer from "../_ui/WorkspaceOfferingRenderer";
import type { OfferingKey } from "@/app/_lib/org/definitions";

const offeringByRouteSlug: Record<string, OfferingKey> = {
  "private-offices": "privateOffices",
  "coworking-membership": "coworkingMembership",
  "dedicated-desk": "dedicatedDesk",
  "book-meeting-rooms": "meetingRooms",
  "book-meeting-rooms-members": "memberMeetingRooms",
  "virtual-offices": "virtualOffices",
};

export default async function Page({
  params,
}: {
  params: Promise<{ workspaceKey: string }>;
}) {
  const { workspaceKey } = await params;

  const offeringKey = offeringByRouteSlug[workspaceKey];

  if (!offeringKey) notFound();

  return <WorkspaceOfferingRenderer offeringKey={offeringKey} />;
}
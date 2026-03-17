import type { WorkspaceKey } from "@/app/_lib/org/definitions";
import { offeringByRouteSlug } from "@/app/_lib/routes/workspacesRoutes";
import { notFound } from "next/navigation";
import WorkspaceOfferingRenderer from "../_ui/WorkspaceOfferingRenderer";

export default async function Page({
  params,
}: {
  params: Promise<{ workspaceKey: WorkspaceKey }>;
}) {
  const { workspaceKey } = await params;

  const offeringKey: WorkspaceKey = offeringByRouteSlug[workspaceKey];

  if (!offeringKey) notFound();

  return <WorkspaceOfferingRenderer offeringKey={offeringKey} />;
}

import { workspaceKeyBySlug } from "@/app/_lib/routes/workspacesRoutes";
import { notFound } from "next/navigation";
import WorkspaceOfferingRenderer from "../_ui/WorkspaceOfferingRenderer";

export default async function Page({
  params,
}: {
  params: Promise<{ workspaceKey: string }>;
}) {
  const { workspaceKey } = await params;

  const keyBySlug = workspaceKeyBySlug[workspaceKey];

  if (!keyBySlug) notFound();

  return <WorkspaceOfferingRenderer workspaceKey={keyBySlug} />;
}

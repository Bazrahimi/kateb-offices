//app/(pages)/[workspaceSlug]/page.tsx
import { workspaceKeyBySlug } from "@/app/_lib/routes/workspacesRoutes";
import { notFound } from "next/navigation";
import WorkspaceOfferingRenderer from "../_ui/WorkspaceOfferingRenderer";

export default async function Page({
  params,
}: {
  params: Promise<{ workspaceSlug: string }>;
}) {
  const { workspaceSlug } = await params;

  const keyBySlug = workspaceKeyBySlug[workspaceSlug];

  if (!keyBySlug) notFound();

  return <WorkspaceOfferingRenderer workspaceKey={keyBySlug} />;
}

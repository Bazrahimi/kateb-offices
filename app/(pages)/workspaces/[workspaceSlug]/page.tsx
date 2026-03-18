import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";
import { workspaceKeyBySlug } from "@/app/_lib/routes/workspacesRoutes";
import { workspaceRegistry } from "../_lib/workspaces/workspaceRegistry";

import WorkspaceOfferingRenderer from "../_ui/WorkspaceOfferingRenderer";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ workspaceSlug: string }>;
}): Promise<Metadata> => {
  const { workspaceSlug } = await params;

  const workspaceKey = workspaceKeyBySlug[workspaceSlug];
  if (!workspaceKey) notFound();

  const workspace = workspaceRegistry[workspaceKey];
  if (!workspace) notFound();

  return buildMetadata(
    SEO_PAGES.workspace({
      workspaceKey,
      label: workspace.label,
      description: workspace.signupInfo.summary,
      keywords: [
        workspace.signupInfo.priceLabel,
        workspace.signupInfo.capacityLabel ?? "",
      ].filter(Boolean),
    }),
  );
};

export default async function Page({
  params,
}: {
  params: Promise<{ workspaceSlug: string }>;
}) {
  const { workspaceSlug } = await params;

  const workspaceKey = workspaceKeyBySlug[workspaceSlug];
  if (!workspaceKey) notFound();

  return <WorkspaceOfferingRenderer workspaceKey={workspaceKey} />;
}

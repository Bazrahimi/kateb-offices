// app/(pages)/workspaces/[workspaceSlug]/page.txt
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  buildMetadata,
  SEO_PAGES,
  workspacesOgImages,
} from "@/app/_lib/org/layoutAndSeo";
import { workspaceKeyBySlug } from "@/app/_lib/routes/workspacesRoutes";
import { workspaceRegistry } from "../_lib/workspaces/workspaceRegistry";

import { cldGalleryImage } from "@/app/_lib/cloudinary/cloudinary";
import WorkspaceOfferingRenderer from "../_ui/WorkspaceOfferingRenderer";

type Props = {
  params: Promise<{ workspaceSlug: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
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
      ogImagePath: cldGalleryImage(workspacesOgImages[workspaceKey]),
    }),
  );
};

export default async function Page({ params }: Props) {
  const { workspaceSlug } = await params;

  const workspaceKey = workspaceKeyBySlug[workspaceSlug];
  if (!workspaceKey) notFound();

  return <WorkspaceOfferingRenderer workspaceKey={workspaceKey} />;
}

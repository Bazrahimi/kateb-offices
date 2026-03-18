//app/(pages)/workspaces/page.tsx

import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";
import WorkspaceOffersSection from "@/app/_ui/workspace/WorkspaceOffersSection";
import { Metadata } from "next";

export const generateMetadata = async(): Promise<Metadata> => {
  return buildMetadata(SEO_PAGES.workspaces())
}

const page = () => {
  return <WorkspaceOffersSection />;
};

export default page;

import { WorkspaceOffering } from "@/app/(pages)/join-workspaces/_lib/definitions";
export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  description: string[];
  image: LeafImage;
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type ServicesPage = {
  label: string;
  labelFarsi: string; //
  slug: string;
  description: readonly string[];
  image: LeafImage;
  subcategories: ServiceSubCategory;
  workspaceFee: WorkspaceOffering;
};





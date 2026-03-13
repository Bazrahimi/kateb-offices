import { LeafImage } from "@/app/_lib/org/definitions";

export type WorkspaceJoin = Record<string, unknown>;
export type WorkspaceOffering<TJoin extends WorkspaceJoin = WorkspaceJoin> = {
  image: string;
  capacityLabel?: string;
  priceLabel: string;
  summary: string;
  btnContent: string;
  href: string;
  join: TJoin;
};

export type PrivateOfficeRoom = {
  id: string;
  slug: string;
  label: string;
  images: string[];
  description: string[];
  priceLabel: string;
  availableFrom: string;
  capacity: string;
  status: "available" | "reserved" | "leased";
  officeType?: "internal" | "external" | "corner";
  furnished?: boolean;
  windowOffice?: boolean;
  minimumTerm?: string;
  bondRequired?: string;
  sizeLabel?: string;
  includedFeatures?: readonly string[];
  suitableFor?: readonly string[];
  ctaLabel?: string;
  href?: string;
};

export type CoworkingMembershipJoin = {
  everydayMembership: {
    label: string;
    access: string;
    price: string;
    inclusions?: string[];
  };
};

// TODO: i want improve the type for below nad put the key as well
export type Offering<TJoin extends WorkspaceJoin = WorkspaceJoin> = {
  label: string;
  slug?: string;
  offering: WorkspaceOffering<TJoin>;
};
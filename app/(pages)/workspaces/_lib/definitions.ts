import { ImageMeta } from "@/app/_lib/definitions";
type PrivateOfficeStatus = "available" | "reserved" | "leased";
type OfficeType = "Internal Office" | "External Office" | "Corner Office";

export type WorkspaceJoin = Record<string, unknown>;

export type WorkspaceOffering = {
  image: string;
  capacityLabel?: string;
  priceLabel: string;
  summary: string;
  btnContent: string;
  href: string;
};



export type Offering = {
  label: string;
  offering: WorkspaceOffering;
};

export type PrivateOffice = {
  id: string;
  slug: string;
  label: string;
  images: ImageMeta[];
  description: string[];
  dimension: string;
  priceLabel: string;
  availableFrom: string;
  capacity: string;
  status: PrivateOfficeStatus;
  includedFeatures: string[];
  ctaLabel: string;
  officeType?: OfficeType;
  furnished?: boolean;
  minimumTerm?: string;
  bondRequired?: string;
  sizeLabel?: string;
  eligibilityNotes?: string[];
  durationLabel?: string;
};

export type MeetingRoomOfferings = Pick<
  PrivateOffice,
  | "id"
  | "label"
  | "capacity"
  | "priceLabel"
  | "durationLabel"
  | "images"
  | "description"
  | "includedFeatures"
  | "eligibilityNotes"
>;

export type PrivateOfficeCard = Pick<
  PrivateOffice,
  | "id"
  | "officeType"
  | "slug"
  | "label"
  | "images"
  | "priceLabel"
  | "capacity"
  | "status"
  | "availableFrom"
>;


export type WorkspaceOfferingPlan = {
  id: string;
  label: string;
  access?: string;
  price: string;
  inclusions?: string[];
};
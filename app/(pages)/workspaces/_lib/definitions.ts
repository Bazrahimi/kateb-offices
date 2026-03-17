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

export type PrivateOfficeAds = {
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
  PrivateOfficeAds,
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

export type PrivateOfficeAdsCard = Pick<
  PrivateOfficeAds,
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

export type PrivateOfficeCard = PrivateOfficeAdsCard;


export type WorkspaceOfferingPlan = {
  id: string;
  label: string;
  access?: string;
  price: string;
  inclusions?: string[];
};



export type WorkspaceOfferingMeta = {
  image: string;
  btnContent: string;
};

type PrivateOfficePageConfig = {
  kind: "privateOfficeGrid";
  title: string;
};

type PlanListPageConfig = {
  kind: "workspacePlanList";
  plans: WorkspaceOfferingPlan[];
  offering: WorkspaceOffering;
};

type MeetingRoomsPageConfig = {
  kind: "meetingRoomsBooking";
  rooms: MeetingRoomOfferings[];
};

export type WorkspacePageConfigItem =
  | PrivateOfficePageConfig
  | PlanListPageConfig
  | MeetingRoomsPageConfig;
export type WorkspaceJoin = Record<string, unknown>;
export type WorkspaceOffering = {
  image: string;
  capacityLabel?: string;
  priceLabel: string;
  summary: string;
  btnContent: string;
  href: string;
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

export type OfferingKey =
  | "privateOffices"
  | "coworkingMembership"
  | "dedicatedDesk"
  | "meetingRooms"
  | "virtualOffices";


export type Offering = {
  label: string;
  offering: WorkspaceOffering;
};

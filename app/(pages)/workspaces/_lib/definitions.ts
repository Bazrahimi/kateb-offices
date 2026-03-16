export type WorkspaceJoin = Record<string, unknown>;

export type WorkspaceOffering = {
  image: string;
  capacityLabel?: string;
  priceLabel: string;
  summary: string;
  btnContent: string;
  href: string;
};



export type OfferingKey =
  | "privateOffices"
  | "coworkingMembership"
  | "dedicatedDesk"
  | "meetingRooms"
  | "memberMeetingRooms"
  | "virtualOffices";

export type Offering = {
  label: string;
  offering: WorkspaceOffering;
};

export type MeetingRoomOfferings = {
  id: string;
  label: string;
  capacity: string;
  priceLabel: string;
  durationLabel?: string;
  image: string;
  description: string[];
  includedFeatures: string[];
  eligibilityNotes?: string[];
};

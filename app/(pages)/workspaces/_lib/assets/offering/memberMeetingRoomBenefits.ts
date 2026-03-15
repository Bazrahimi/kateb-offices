import type { OfferingKey } from "../../definitions";

export type MemberMeetingRoomBenefit = {
  offeringKey: OfferingKey;
  label: string;
  freeRoomIds?: string[];
  freeLimitLabel?: string;
  discountPercent?: number;
  discountRoomIds?: string[];
  excludedRoomIds?: string[];
  notes?: string[];
};

export const memberMeetingRoomBenefits: MemberMeetingRoomBenefit[] = [
  {
    offeringKey: "privateOffices",
    label: "Private Office Members",
    freeRoomIds: ["hydra-meeting-room", "leo-conference-room"],
    freeLimitLabel: "Free once a week or up to 4 times per month",
    excludedRoomIds: ["day-office"],
    notes: ["Day Office is not included for free private office bookings."],
  },
  {
    offeringKey: "coworkingMembership",
    label: "Coworking Members",
    freeRoomIds: ["hydra-meeting-room", "leo-conference-room"],
    freeLimitLabel: "Free once a week or up to 4 times per month",
    discountPercent: 50,
    discountRoomIds: [
      "day-office",
      "hydra-meeting-room",
      "leo-conference-room",
    ],
  },
  {
    offeringKey: "dedicatedDesk",
    label: "Dedicated Desk Members",
    discountPercent: 50,
    discountRoomIds: [
      "day-office",
      "hydra-meeting-room",
      "leo-conference-room",
    ],
  },
  {
    offeringKey: "virtualOffices",
    label: "Virtual Office Members",
    discountPercent: 30,
    discountRoomIds: [
      "day-office",
      "hydra-meeting-room",
      "leo-conference-room",
    ],
  },
];

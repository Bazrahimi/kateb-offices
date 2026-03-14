// app/(pages)/workspaces/_lib/assets/offering/meetingRooms.ts

export type MeetingRoomPlan = {
  id: string;
  label: string;
  capacity: string;
  priceLabel: string;
  durationLabel?: string;
  image: string;
  description: string[];
  includedFeatures: string[];
  suitableFor?: string[];
  eligibilityNotes?: string[];
};

export type MeetingRoomDiscountGroup = {
  id: string;
  label: string;
  description: string;
  discountLabel?: string;
};

export const meetingRoomPlans: MeetingRoomPlan[] = [
  {
    id: "small-meeting-room",
    label: "Small Meeting Room",
    capacity: "Up to 4 people",
    priceLabel: "$45",
    durationLabel: "per hour",
    image: "meeting-room_lxqgem.png",
    description: [
      "A practical meeting room for interviews, private discussions, and small client meetings.",
    ],
    includedFeatures: [
      "Professional meeting setup",
      "High-speed internet",
      "Comfortable seating",
      "Reception support available",
    ],
    suitableFor: [
      "Client interviews",
      "Private meetings",
      "Small team catchups",
    ],
  },
  {
    id: "conference-room",
    label: "Conference Room",
    capacity: "Up to 12 people",
    priceLabel: "$85",
    durationLabel: "per hour",
    image: "conference-room_iphq8c.png",
    description: [
      "A larger conference room suited for team meetings, presentations, workshops, and training sessions.",
    ],
    includedFeatures: [
      "Video conferencing facility",
      "Presentation-ready layout",
      "High-speed internet",
      "Professional business environment",
    ],
    suitableFor: [
      "Team meetings",
      "Training sessions",
      "Client presentations",
      "Workshops",
    ],
  },
];

export const meetingRoomEligibility: MeetingRoomDiscountGroup[] = [
  {
    id: "existing-tenants",
    label: "Existing Tenants",
    description:
      "Businesses already leasing space with us may be eligible for discounted meeting room rates.",
    discountLabel: "Eligible for tenant discount",
  },
  {
    id: "coworking-members",
    label: "Coworking Members",
    description:
      "Coworking and dedicated desk members may receive discounted access depending on their membership.",
    discountLabel: "Membership discount may apply",
  },
  {
    id: "external-clients",
    label: "External Businesses and Community Users",
    description:
      "External organisations, consultants, and professionals are welcome to book meeting rooms subject to availability.",
  },
];
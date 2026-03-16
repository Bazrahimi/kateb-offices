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

export const memberMeetingRoom: MeetingRoomOfferings[] = [
  {
    id: "day-office-existing-workspace-tenant",
    label: "Day Office existing tenant ",
    capacity: "Up to 4 people",
    priceLabel: "$20",
    durationLabel: "per hour",
    image: "meeting-room_lxqgem.png",
    description: [
      "Ideal for  Existing Workspace Tenants who need a quiet and professional workspace for a few hours or a full day.",
    ],
    includedFeatures: [
      "Private furnished office",
      "High-speed internet",
      "Reception support available",
    ],
  },

  {
    id: "hydra-meeting-room-members",
    label: "Hydra Meeting Room (Members only)",
    capacity: "Up to 8 people",
    priceLabel: "$25",
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
  },
    {
    id: "leo-conference-room",
    label: "Leo Conference Room",
    capacity: "Up to 25 people",
    priceLabel: "$42.5",
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
  },
];

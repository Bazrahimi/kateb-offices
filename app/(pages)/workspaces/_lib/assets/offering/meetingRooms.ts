// app/(pages)/workspaces/_lib/assets/offering/meetingRooms.ts

import type { MeetingRoomOfferings } from "./MeetingRoomMember";



export const meetingRoomPlans: MeetingRoomOfferings[] = [
  {
    id: "day-office",
    label: "Day Office",
    capacity: "Up to 4 people",
    priceLabel: "$40",
    durationLabel: "per hour",
    image: "meeting-room_lxqgem.png",
    description: [
      "Ideal for professionals who need a quiet and professional workspace for a few hours or a full day.",
      
    ],
    includedFeatures: [
      "Private furnished office",
      "High-speed internet",

      "Reception support available",
    ],
  },
  {
    id: "hydra-meeting-room",
    label: "Hydra Meeting Room",
    capacity: "Up to 8 people",
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
  },
  {
    id: "leo-conference-room",
    label: "Leo Conference Room",
    capacity: "Up to 25 people",
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
  },
];


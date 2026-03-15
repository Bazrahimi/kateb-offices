//app/(pages)/workspaces/book-meeting-rooms/members/page.tsx

import type { MeetingRoomPlan } from "../../_lib/assets/offering/meetingRooms";
import type { MemberMeetingRoomBenefit } from "../../_lib/assets/offering/memberMeetingRoomBenefits";

const parsePrice = (value: string) => Number(value.replace(/[^\d.]/g, ""));
const formatPrice = (value: number) => `$${value}`;

export const buildMemberMeetingRoomPlans = (
  rooms: MeetingRoomPlan[],
  benefit: MemberMeetingRoomBenefit,
): MeetingRoomPlan[] => {
  return rooms.map((room) => {
    const isFree = benefit.freeRoomIds?.includes(room.id);
    const hasDiscount = benefit.discountRoomIds?.includes(room.id);

    if (isFree) {
      return {
        ...room,
        priceLabel: "Free",
        eligibilityNotes: [
          benefit.freeLimitLabel ?? "",
          ...(benefit.notes ?? []),
        ].filter(Boolean),
      };
    }

    if (hasDiscount && benefit.discountPercent) {
      const basePrice = parsePrice(room.priceLabel);
      const discounted = basePrice * (1 - benefit.discountPercent / 100);

      return {
        ...room,
        priceLabel: formatPrice(discounted),
        eligibilityNotes: [
          `${benefit.discountPercent}% member discount applied`,
          ...(benefit.notes ?? []),
        ],
      };
    }

    if (benefit.excludedRoomIds?.includes(room.id)) {
      return {
        ...room,
        eligibilityNotes: [
          "Not included in this membership benefit.",
          ...(benefit.notes ?? []),
        ],
      };
    }

    return room;
  });
};

import { meetingRoomPlans } from "../../_lib/assets/offering/meetingRooms";
import { memberMeetingRoomBenefits } from "../../_lib/assets/offering/memberMeetingRoomBenefits";
import MemberMeetingRoomsPage from "../../application/_ui/MemberMeetingRoomsPage";
const Page = () => {
  return (
    <MemberMeetingRoomsPage
      rooms={meetingRoomPlans}
      benefits={memberMeetingRoomBenefits}
    />
  );
};

export default Page;

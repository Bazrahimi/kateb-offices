// app/(pages)/workspaces/book-meeting-rooms/page.tsx

import MeetingRoomsBookingPage from "../application/_ui/MeetingRoomsBookingPage";
import {
  meetingRoomEligibility,
  meetingRoomPlans,
} from "../_lib/assets/offering/meetingRooms";

const Page = () => {
  return (
    <MeetingRoomsBookingPage
      rooms={meetingRoomPlans}
      eligibility={meetingRoomEligibility}
    />
  );
};

export default Page;
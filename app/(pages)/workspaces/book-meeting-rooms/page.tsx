// app/(pages)/workspaces/book-meeting-rooms/page.tsx

import { meetingRoomPlans } from "../_lib/assets/offering/meetingRooms";
import MeetingRoomsBookingPage from "../application/_ui/MeetingRoomsBookingPage";

const Page = () => {
  return <MeetingRoomsBookingPage rooms={meetingRoomPlans} />;
};

export default Page;

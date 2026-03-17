// app/(pages)/workspaces/book-meeting-rooms/page.tsx

import { meetingRoomPlans } from "../_lib/workspaces/signup/meetingRooms";
import MeetingRoomsBookingPage from "../application/_ui/MeetingRoomsBookingPage";

const Page = () => {
  return <MeetingRoomsBookingPage rooms={meetingRoomPlans} />;
};

export default Page;

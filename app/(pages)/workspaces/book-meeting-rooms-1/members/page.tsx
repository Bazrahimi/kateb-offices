//app/(pages)/workspaces/book-meeting-rooms/members/page.tsx

import { memberMeetingRoom } from "../../_lib/workspaces/signup/MeetingRoomMember";
import MeetingRoomsBookingPage from "../../application/_ui/MeetingRoomsBookingPage";

const Page = () => {
  return <MeetingRoomsBookingPage rooms={memberMeetingRoom} />;
};

export default Page;

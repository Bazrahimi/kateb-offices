import type { WorkspaceKey } from "@/app/_lib/org/definitions";
import { meetingRoomPlans } from "@/app/(pages)/workspaces/_lib/assets/offering/meetingRooms";
import { memberMeetingRoom } from "@/app/(pages)/workspaces/_lib/assets/offering/MeetingRoomMember";
import MeetingRoomsBookingPage from "@/app/(pages)/workspaces/application/_ui/MeetingRoomsBookingPage";
import { Header } from "@/app/_ui/typography/Header";

type Props = {
  offering: WorkspaceKey[];
};

export default function ServiceMeetingRoomBlocks({ offering }: Props) {
  const hasPublicRooms = offering.includes("meetingRooms");
  const hasMemberRooms = offering.includes("memberMeetingRooms");

  if (!hasPublicRooms && !hasMemberRooms) return null;

  return (
    <div className="space-y-10">
      {hasPublicRooms && (
        <section className="space-y-4">
          <Header as="h2" size="md" align="center">
            Meeting & Conference Rooms
          </Header>
          <MeetingRoomsBookingPage rooms={meetingRoomPlans} />
        </section>
      )}

      {hasMemberRooms && (
        <section className="space-y-4">
          <Header as="h2" size="md" align="center">
            Member Meeting Rooms
          </Header>
          <MeetingRoomsBookingPage rooms={memberMeetingRoom} />
        </section>
      )}
    </div>
  );
}
import { notFound } from "next/navigation";

import type { OfferingKey } from "@/app/_lib/org/definitions";
import { offering as workspaceOffering } from "../_lib/assets/workspaceOffering";

import { membershipOfferings } from "../_lib/assets/offering/coworkingMembership";
import { dedicatedDeskOfferings } from "../_lib/assets/offering/dedicatedDesk";
import { memberMeetingRoom } from "../_lib/assets/offering/MeetingRoomMember";
import { meetingRoomPlans } from "../_lib/assets/offering/meetingRooms";
import { privateOfficeCards } from "../_lib/assets/offering/privateOffices";
import { virtualOfficeOfferings } from "../_lib/assets/offering/virtualOffices";

import { Header } from "@/app/_ui/typography/Header";
import MeetingRoomsBookingPage from "../application/_ui/MeetingRoomsBookingPage";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";
import PrivateOfficeAdsCard from "../private-offices/_ui/PrivateOfficeAdsCard";

type Props = {
  offeringKey: OfferingKey;
};

export default function WorkspaceOfferingRenderer({ offeringKey }: Props) {
  switch (offeringKey) {
    case "privateOffices":
      return (
        <main className="min-h-screen bg-slate-100 py-10">
          <div className="mb-10">
            <Header as="h1" size="md" align="center">
              Private Offices Currently Available
            </Header>
          </div>

          <div className="mx-auto max-w-6xl space-y-6 px-4">
            <section className="grid gap-3 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {privateOfficeCards.map((room) => (
                <PrivateOfficeAdsCard key={room.id} room={room} />
              ))}
            </section>
          </div>
        </main>
      );

    case "dedicatedDesk":
      return (
        <WorkspacePlanListPage
          plans={dedicatedDeskOfferings}
          offering={workspaceOffering.dedicatedDesk.offering}
        />
      );

    case "coworkingMembership":
      return (
        <WorkspacePlanListPage
          plans={membershipOfferings}
          offering={workspaceOffering.coworkingMembership.offering}
        />
      );

    case "virtualOffices":
      return (
        <WorkspacePlanListPage
          plans={virtualOfficeOfferings}
          offering={workspaceOffering.virtualOffices.offering}
        />
      );

    case "meetingRooms":
      return <MeetingRoomsBookingPage rooms={meetingRoomPlans} />;

    case "memberMeetingRooms":
      return <MeetingRoomsBookingPage rooms={memberMeetingRoom} />;

    default:
      notFound();
  }
}

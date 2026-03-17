import type { OfferingKey } from "@/app/_lib/org/definitions";
import { Header } from "@/app/_ui/typography/Header";
import { privateOfficeCards } from "../_lib/assets/offering/privateOffices";
import { workspacePageConfig } from "../_lib/assets/workspacePageConfig";
import MeetingRoomsBookingPage from "../application/_ui/MeetingRoomsBookingPage";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";
import PrivateOfficeAdsCard from "../private-offices/_ui/PrivateOfficeAdsCard";

type Props = {
  offeringKey: OfferingKey;
};

export default function WorkspaceOfferingRenderer({ offeringKey }: Props) {
  const config = workspacePageConfig[offeringKey];

  if (config.kind === "privateOfficeGrid") {
    return (
      <main className="min-h-screen bg-slate-100 py-10">
        <div className="mb-10">
          <Header as="h1" size="md" align="center">
            {config.title}
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
  }

  if (config.kind === "workspacePlanList") {
    return (
      <WorkspacePlanListPage plans={config.plans} offering={config.offering} />
    );
  }

  if (config.kind === "meetingRoomsBooking") {
    return <MeetingRoomsBookingPage rooms={config.rooms} />;
  }

  return null;
}

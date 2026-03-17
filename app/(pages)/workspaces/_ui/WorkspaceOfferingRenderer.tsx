import type { WorkspaceKey } from "@/app/_lib/org/definitions";
import { Header } from "@/app/_ui/typography/Header";
import { privateOfficeCards } from "../_lib/workspaces/signup/privateOffices";
import { workspaceRegistry } from "../_lib/workspaces/workspaceRegistry";
import MeetingRoomsBookingPage from "../application/_ui/MeetingRoomsBookingPage";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";
import PrivateOfficeAdsCard from "../single-office/_ui/PrivateOfficeAdsCard";

type Props = {
  offeringKey: WorkspaceKey;
};

export default function WorkspaceOfferingRenderer({ offeringKey }: Props) {
  const config = workspaceRegistry[offeringKey];
  const page = config.page;

  if (page.kind === "privateOfficeGrid") {
    return (
      <main className="min-h-screen bg-slate-100 py-10">
        <div className="mb-10">
          <Header as="h1" size="md" align="center">
            {page.title}
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

  if (page.kind === "workspacePlanList") {
    return (
      <WorkspacePlanListPage plans={page.plans} offering={config.signupInfo} />
    );
  }

  if (page.kind === "meetingRoomsBooking") {
    return <MeetingRoomsBookingPage rooms={page.rooms} />;
  }

  return null;
}

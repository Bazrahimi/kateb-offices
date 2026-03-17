import { workspaceRegistry } from "@/app/(pages)/workspaces/_lib/workspaces/workspaceRegistry";
import MeetingRoomsBookingPage from "@/app/(pages)/workspaces/application/_ui/MeetingRoomsBookingPage";
import WorkspacePlanListPage from "@/app/(pages)/workspaces/application/_ui/WorkspacePlanListPage";
import PrivateOfficeAdsCard from "@/app/(pages)/workspaces/single-office/_ui/PrivateOfficeAdsCard";
import type { WorkspaceKey } from "@/app/_lib/org/definitions";
import { Header } from "@/app/_ui/typography/Header";

type Props = {
  offerings: WorkspaceKey[];
};

export default function ServiceOfferingBlocks({ offerings }: Props) {
  return (
    <div className="space-y-10">
      {offerings.map((workspaceKey) => {
        const item = workspaceRegistry[workspaceKey];
        const page = item.page;

        if (page.kind === "privateOfficeGrid") {
          return (
            <div key={workspaceKey} className="mt-10 bg-gray-600 py-10">
              <Header as="h2" size="md" align="center">
                {page.title}
              </Header>

              <div className="mx-auto my-5 max-w-6xl space-y-6 bg-org-primary-main px-4">
                <section className="grid gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                  {page.cards.map((room) => (
                    <PrivateOfficeAdsCard key={room.id} room={room} />
                  ))}
                </section>
              </div>
            </div>
          );
        }

        if (page.kind === "workspacePlanList") {
          return (
            <WorkspacePlanListPage
              key={workspaceKey}
              plans={page.plans}
              offering={item.signupInfo}
            />
          );
        }

        if (page.kind === "meetingRoomsBooking") {
          return (
            <MeetingRoomsBookingPage key={workspaceKey} rooms={page.rooms} />
          );
        }

        return null;
      })}
    </div>
  );
}

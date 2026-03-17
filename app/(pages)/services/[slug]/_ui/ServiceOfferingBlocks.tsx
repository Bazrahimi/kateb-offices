import { membershipOfferings } from "@/app/(pages)/workspaces/_lib/assets/offering/coworkingMembership";
import { dedicatedDeskOfferings } from "@/app/(pages)/workspaces/_lib/assets/offering/dedicatedDesk";
import { privateOfficeCards } from "@/app/(pages)/workspaces/_lib/assets/offering/privateOffices";
import { virtualOfficeOfferings } from "@/app/(pages)/workspaces/_lib/assets/offering/virtualOffices";
import { workspaceOffering } from "@/app/(pages)/workspaces/_lib/assets/workspaceOffering";
import type { WorkspaceKey } from "@/app/_lib/org/definitions";

import WorkspacePlanListPage from "@/app/(pages)/workspaces/application/_ui/WorkspacePlanListPage";
import { Header } from "@/app/_ui/typography/Header";
import ServiceMeetingRoomBlocks from "./ServiceMeetingRoomBlocks";
import PrivateOfficeAdsCard from "@/app/(pages)/workspaces/private-offices/_ui/PrivateOfficeAdsCard";

type Props = {
  offering: WorkspaceKey[];
};

export default function ServiceOfferingBlocks({ offering }: Props) {
  return (
    <div className="space-y-10 ">
      {offering.includes("privateOffices") && (
        <div className=" mt-10 py-10 bg-gray-600">
          <Header as="h2" size="md" align="center">
            Private Offices Currently Available
          </Header>

          <div className="mx-auto max-w-6xl space-y-6 px-4 bg-org-primary-main my-5">
            <section className="grid gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {privateOfficeCards.map((room) => (
                <PrivateOfficeAdsCard key={room.id} room={room} />
              ))}
            </section>
          </div>
        </div>
      )}

      {offering.includes("dedicatedDesk") && (
        <WorkspacePlanListPage
          plans={dedicatedDeskOfferings}
          offering={workspaceOffering.dedicatedDesk.offering}
        />
      )}

      {offering.includes("coworkingMembership") && (
        <WorkspacePlanListPage
          plans={membershipOfferings}
          offering={workspaceOffering.coworkingMembership.offering}
        />
      )}

      {offering.includes("virtualOffices") && (
        <WorkspacePlanListPage
          plans={virtualOfficeOfferings}
          offering={workspaceOffering.virtualOffices.offering}
        />
      )}

      <ServiceMeetingRoomBlocks offering={offering} />
    </div>
  );
}

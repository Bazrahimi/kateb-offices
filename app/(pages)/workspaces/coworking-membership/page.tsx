// app/(pages)/workspaces/coworking-membership/page.tsx
import { membershipOfferings } from "../_lib/assets/offering/coworkingMembership";
import { offering } from "../_lib/assets/workspaceOffering";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";

export default function Page() {
  return (
    <WorkspacePlanListPage
      plans={membershipOfferings}
      offering={offering.coworkingMembership.offering}
    />
  );
}

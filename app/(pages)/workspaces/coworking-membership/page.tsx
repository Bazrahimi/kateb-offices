// app/(pages)/workspaces/coworking-membership/page.tsx
import { coworkingMemberships } from "../_lib/assets/offering/coworkingMembership";
import { offering } from "../_lib/assets/workspaceOffering";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";

export default function Page() {
  return (
    <WorkspacePlanListPage
      plans={coworkingMemberships}
      offering={offering.coworkingMembership.offering}
    />
  );
}

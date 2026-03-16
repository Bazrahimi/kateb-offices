// app/(pages)/workspaces/dedicated-desk/page.tsx

import { dedicatedDeskOfferings } from "../_lib/assets/offering/dedicatedDesk";
import { offering } from "../_lib/assets/workspaceOffering";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";

const Page = () => {
  return (
    <WorkspacePlanListPage
      plans={dedicatedDeskOfferings}
      offering={offering.dedicatedDesk.offering}
    />
  );
};

export default Page;

// app/(pages)/workspaces/dedicated-desk/page.tsx

import { dedicatedDesk } from "../_lib/assets/offering/dedicatedDesk";
import { offering } from "../_lib/assets/workspaceOffering";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";

const Page = () => {
  return (
    <WorkspacePlanListPage
      plans={dedicatedDesk}
      offering={offering.dedicatedDesk.offering}
    />
  );
};

export default Page;

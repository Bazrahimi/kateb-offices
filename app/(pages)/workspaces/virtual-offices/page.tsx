import { virtualOfficeOfferings } from "../_lib/assets/offering/virtualOffices";
import { offering } from "../_lib/assets/workspaceOffering";
import WorkspacePlanListPage from "../application/_ui/WorkspacePlanListPage";

const page = () => {
  return (
    <WorkspacePlanListPage
      plans={virtualOfficeOfferings}
      offering={offering.virtualOffices.offering}
    />
  );
};

export default page;

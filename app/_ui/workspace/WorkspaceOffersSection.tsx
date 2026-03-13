import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { OFFERINGS } from "@/app/(pages)/join-workspaces/_lib/assets/workspaceOffering";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
import WorkspaceOfferCard from "./WorkspaceOfferCard";

export default function WorkspaceOffersSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <Header as="h2">Workspace Options</Header>
        <P className="mx-auto max-w-3xl text-slate-600">
          Explore flexible workspace solutions designed for modern businesses,
          from coworking and private offices to meeting rooms and virtual office
          services.
        </P>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Object.entries(OFFERINGS).map(([key, offer]) => (
          <WorkspaceOfferCard
            key={key}
  
            offer={offer.offering}
            serviceLabel={offer.label}
          />
        ))}
      </div>
    </section>
  );
}

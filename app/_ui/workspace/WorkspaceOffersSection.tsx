import { workspaceOffering } from "@/app/(pages)/workspaces/_lib/assets/workspaceOffering";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
import WorkspaceOfferCard from "./WorkspaceOfferCard";

export default function WorkspaceOffersSection() {
  return (
    <section className="space-y-6 bg-org-primary-dark p-5">
      <div className="space-y-3 text-center">
        <Header as="h2" className="text-gray-50">Sign-up for Workspace</Header>
        <P className="mx-auto max-w-3xl text-gray-100">
          Explore flexible workspace solutions designed for modern businesses,
          from coworking and private offices to meeting rooms and virtual office
          services.
        </P>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {Object.entries(workspaceOffering).map(([key, offer]) => (
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

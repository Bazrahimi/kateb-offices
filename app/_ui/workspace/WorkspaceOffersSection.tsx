import { SERVICES_PAGE } from "@/app/_lib/org/category/services";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
import WorkspaceOfferCard from "./WorkspaceOfferCard";

export default function WorkspaceOffersSection() {
  const offers = Object.values(SERVICES_PAGE).map((service) => service.workspaceFee);

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
        {offers.map((offer) => (
          <WorkspaceOfferCard key={offer.href} offer={offer} />
        ))}
      </div>
    </section>
  );
}

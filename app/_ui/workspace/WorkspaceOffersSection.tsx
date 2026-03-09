import {WORKSPACE_OFFERS} from "@/app/_lib/org/category/workspaceOffer"
import WorkspaceOfferCard from "./WorkspaceOfferCard";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";
import Button from "../button/Button";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";

export default function WorkspaceOffersSection() {
  const offers = Object.values(WORKSPACE_OFFERS);

  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <Header as="h2">Workspace Options</Header>
        <P className="mx-auto max-w-3xl text-slate-600">
          Explore flexible workspace solutions designed for modern businesses,
          from coworking and private offices to meeting rooms and virtual office services.
        </P>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {offers.map((offer) => (
          <WorkspaceOfferCard key={offer.label} offer={offer} />
        ))}

        <div className="flex min-h-[220px] items-end rounded-3xl bg-org-primary-main p-6 text-white shadow-sm">
          <div className="space-y-4">
            <Header as="h3" size="sm" className="text-white">
              See all workspaces
            </Header>

            <Button
              as="link"
              href={""}
              variant="secondary"
            >
              View all services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
//app/(pages)/services/[slug]/_ui/servicesDetails.tsx
import { privateOfficeCards } from "@/app/(pages)/workspaces/_lib/assets/offering/privateOffices";
import PrivateOfficeCard from "@/app/(pages)/workspaces/private-office/_ui/PrivateOfficeCard";
import type { ServiceSubCategory } from "@/app/_lib/org/definitions";
import { Header } from "@/app/_ui/typography/Header";
import { Suspense } from "react";
import ServiceLeafCard from "./ServiceLeafCard";
import ServiceLeafCardSkeleton from "./ServiceLeafCardSkeleton";

export default function ServiceDetails({
  subcategories,
}: {
  subcategories: ServiceSubCategory;
}) {
  return (
    <>
      <div className="space-y-1">
        {Object.entries(subcategories).map(([key, leaf], index) => (
          <Suspense key={key} fallback={<ServiceLeafCardSkeleton />}>
            <ServiceLeafCard leaf={leaf} index={index} leafId={key} />
          </Suspense>
        ))}
      </div>

      <div className="bg-slate-100 my-5 mt-10 py-10">
        <Header as="h1" size="md" align="center">
          Private Offices Currently Available
        </Header>
        <div className="mx-auto max-w-6xl space-y-6 px-4">
          <section className="grid gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {privateOfficeCards.map((room) => (
              <PrivateOfficeCard key={room.id} room={room} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

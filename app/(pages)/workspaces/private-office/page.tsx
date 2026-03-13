// app/join-workspaces/private-offices/page.tsx
import Image from "next/image";
import { offering } from "../_lib/assets/workspaceOffering";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { privateOfficeCards } from "../_lib/assets/offering/privateOffices";
import PrivateOfficeCard from "./_ui/PrivateOfficeCard";

const Page = () => {
  const offeringData = offering.privateOffices.offering;

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <Header as="h1" size="sm" className="text-slate-900">
            {offering.privateOffices.label}
          </Header>

          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
            <Image
              src={offeringData.image}
              alt={offering.privateOffices.label}
              fill
              className="object-contain p-6"
            />
          </div>

          <div className="mt-6 space-y-3">
            {offeringData.capacityLabel ? (
              <P className="text-slate-600">
                Capacity: {offeringData.capacityLabel}
              </P>
            ) : null}

            <div>
              <P className="uppercase tracking-wide text-slate-500">From</P>
              <P className="text-4xl font-bold text-org-primary-main">
                {offeringData.priceLabel}
              </P>
            </div>

            <P className="text-slate-700">{offeringData.summary}</P>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {privateOfficeCards.map((room) => (
            <PrivateOfficeCard key={room.id} room={room} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Page;
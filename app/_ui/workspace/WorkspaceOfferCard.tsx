import { HiOutlineUserGroup } from "react-icons/hi2";

import type { WorkspaceFee } from "@/app/(pages)/join-workspaces/_lib/definitions";
import Image from "next/image";
import Button from "../button/Button";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

type Props = {
  offer: WorkspaceFee;
  serviceLabel: string;
};

export default function WorkspaceOfferCard({ offer, serviceLabel }: Props) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <Header as="h3" className="text-base font-semibold text-slate-900">
        {serviceLabel}
      </Header>

      <div className="mb-5 overflow-hidden rounded-2xl aspect-[16/10] relative">
        <Image
          src={offer.image}
          alt={offer.summary}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mt-3 flex flex-wrap gap-2">
          {offer.capacityLabel ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700">
              <HiOutlineUserGroup className="h-4 w-4" />
              {offer.capacityLabel}
            </span>
          ) : null}

          <span className="inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
            {offer.priceLabel}
          </span>
        </div>

        <P className="mt-4 flex-1 text-slate-600">{offer.summary}</P>

        <Button as="link" href={offer.href}>
          {offer.btnContent}
        </Button>
      </div>
    </div>
  );
}

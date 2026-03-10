import Link from "next/link";
import { HiArrowRight, HiOutlineUserGroup } from "react-icons/hi2";

import type { WorkspaceOffer } from "@/app/_lib/org/definitions";
import Image from "next/image";
import { Header } from "../typography/Header";
import { P } from "../typography/paragraph";

type Props = {
  offer: WorkspaceOffer;
};

export default function WorkspaceOfferCard({ offer }: Props) {
  return (
    <Link
      href={offer.href}
      className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 overflow-hidden rounded-2xl aspect-[16/10] relative">
        <Image
          src={offer.image}
          alt={offer.label}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <Header as="h3" size="sm" className="text-slate-800">
          {offer.label}
        </Header>

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

        <div className="mt-6 flex justify-end">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-org-primary-main">
            Learn more
            <HiArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

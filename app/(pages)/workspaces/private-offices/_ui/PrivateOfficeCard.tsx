// app/join-workspaces/private-offices/_ui/PrivateOfficeCard.tsx
import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import { workspacesRoutes } from "@/app/_lib/routes/joinWorkspacesRoutes";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";
import Link from "next/link";

import type { PrivateOfficeCard as PrivateOfficeCardType } from "../../_lib/definitions";

type Props = {
  room: PrivateOfficeCardType;
};

export default function PrivateOfficeCard({ room }: Props) {
  const href = `${workspacesRoutes.privateOffice()}/${room.slug}`;
  const firstImage = room.images[0];
  return (
    <Link href={href} className="block">
      <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
        <div className="p-6">
          <Header as="h2" >{room.label}</Header>
          <P className="text-center font-bold">{room.officeType}</P>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
          <Image
            src={cldLeafAuto(firstImage?.url ?? "")}
            alt={firstImage?.alt ?? room.label}
            fill
            className="object-contain object-center"
            placeholder="blur"
            blurDataURL={IMAGE_DEFAULT_BLUR}
          />
        </div>

        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <P className="text-3xl font-bold text-org-primary-main">
              {room.priceLabel}
            </P>
            <P className="text-slate-700">{room.capacity}</P>
            <P
              className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                room.status === "available"
                  ? "bg-green-100 text-green-700"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {room.status}
            </P>
          </div>

          <span className="inline-flex w-full justify-center rounded-lg bg-org-secondary-main px-6 py-3 text-base font-semibold text-org-primary-main shadow-md transition-transform duration-200">
            View office
          </span>
        </div>
      </article>
    </Link>
  );
}

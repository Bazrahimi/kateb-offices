// app/join-workspaces/private-offices/_ui/PrivateOfficeCard.tsx
import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import { workspacesRoutes } from "@/app/_lib/routes/joinWorkspacesRoutes";
import Button from "@/app/_ui/button/Button";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";
import type { PrivateOfficeCard as PrivateOfficeCardType } from "../../_lib/assets/offering/privateOffices";

type Props = {
  room: PrivateOfficeCardType;
};

export default function PrivateOfficeCard({ room }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
        <Image
          src={cldLeafAuto(room.images[0])}
          alt={room.label}
          fill
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={IMAGE_DEFAULT_BLUR}
        />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <Header as="h2" size="xs" className="text-slate-900">
            {room.label}
          </Header>
          <P className="mt-2 text-slate-600">{room.availableFrom}</P>
        </div>

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

        <Button
          as="link"
          href={`${workspacesRoutes.privateOffice()}/${room.slug}`}
          fullWidth
        >
          View office
        </Button>
      </div>
    </article>
  );
}

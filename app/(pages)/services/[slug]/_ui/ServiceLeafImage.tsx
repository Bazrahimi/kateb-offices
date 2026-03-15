import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { ImagesArray } from "@/app/_lib/org/definitions";

import { cn } from "@/app/_lib/utils/cn";
import { IMAGE_DEFAULT_BLUR } from "@/app/_ui/image/ImageShimer";
import Image from "next/image";

export default function ServiceLeafImage({
  image,
  alt,
  aspect = "aspect-[2/1]", // default ratio
}: {
  image: ImagesArray;
  alt: string;
  aspect?: string;
}) {
  const primaryImage = image[0];
  if (!primaryImage) return null;

  const src = cldLeafAuto(primaryImage.url);
  const resolvedAlt = primaryImage.alt || alt;

  const isDataUrl = src.startsWith("data:image/");

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", aspect)}>
      <Image
        src={src}
        alt={resolvedAlt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
        loading="lazy"
        unoptimized={isDataUrl}
        placeholder="blur"
        blurDataURL={IMAGE_DEFAULT_BLUR}
      />
    </div>
  );
}

import { images } from "@/app/_lib/org/assets";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";

type Props = {
  orgName: string;
  ctaLabel: string;
};

export default function HeroLogoVisualCard({ orgName, ctaLabel }: Props) {
  return (
    <div className="lg:col-span-5 flex flex-col items-center justify-center">
      <div className="rounded-3xl bg-white/10  px-8 py-8 text-center ">
        <div className="flex w-full items-center justify-center">
          <Image
            src={images.icon.apple}
            alt={`${orgName} Logo`}
            width={220}
            height={220}
            className="block h-auto w-[140px] sm:w-[170px] lg:w-[210px]"
            priority
          />
        </div>

        <P className="mt-6 text-center text-gray-50">
          Fast {ctaLabel} • Clear communication
        </P>
      </div>
    </div>
  );
}

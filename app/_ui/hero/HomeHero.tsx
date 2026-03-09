// app/(home)/_ui/HomeHero.tsx
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { getServiceCategoryLinks } from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import HeroBackground from "./components/HeroBackground";
import { HeroHeadAndDesc } from "./components/HeroHeadAndDesc";
import HeroMicroNav from "./components/HeroMicroNav";
import HeroCTA from "./HeroSectionCta";

type Props = {
  className?: string;
};

// ✅ Safe on server (pure function call)
const HERO_SERVICE_CATEGORY_LINKS = getServiceCategoryLinks();

export default function HomeHero({ className }: Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-slate-200 shadow-xl min-h-[520px] lg:min-h-[640px]",
        className,
      )}
      aria-label={`${op.orgName} hero`}
    >
      <HeroBackground orgName={op.orgName} />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[520px] lg:min-h-[640px] flex-col justify-between">
        
        {/* TOP */}
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 rounded-3xl border border-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-7">
              <HeroHeadAndDesc />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 text-center lg:text-right mt-25">
            <HeroCTA />
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10">
          <HeroMicroNav items={HERO_SERVICE_CATEGORY_LINKS} />
        </div>

      </div>
    </section>
  );
}
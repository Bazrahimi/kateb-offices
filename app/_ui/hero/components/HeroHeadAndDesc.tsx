import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { Header } from "../../typography/Header";
import { P } from "../../typography/paragraph";

export const HeroHeadAndDesc = () => {
  const showFarsiName =
    op.otherLangKeys?.includes("HZ") || op.otherLangKeys?.includes("FA");

  return (
    <>
      <div className="relative isolate overflow-hidden rounded-b-3xl bg-gradient-to-r from-gray-100 via-white to-gray-200 px-6 py-5 shadow-sm">
        <span className="pointer-events-none absolute inset-x-4 top-3 h-px bg-gradient-to-r from-transparent via-org-primary-main/35 to-transparent" />
        <span className="pointer-events-none absolute inset-x-10 bottom-3 h-px bg-gradient-to-r from-transparent via-org-primary-main/35 to-transparent" />
        <Header
          as="h1"
          size="lg"
          className="mb-1 text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-[0.08em] text-org-primary-main"
        >
          {op.orgName}
        </Header>

        {showFarsiName && op.orgNameFarsi && (
          <Header
            as="h2"
            size="sm"
            className="mb-0 text-lg text-org-primary-main/85"
          >
            {op.orgNameFarsi}
          </Header>
        )}
      </div>

      <P className="mt-4 text-gray-50 font-semibold text-center">
        {op.hero.tagline}
      </P>

      <div className="mt-4 space-y-1 text-center">
        {op.hero.highlights.map((line) => (
          <P key={line} className=" text-gray-100 font-semibold">
            {line}
          </P>
        ))}
      </div>
    </>
  );
};

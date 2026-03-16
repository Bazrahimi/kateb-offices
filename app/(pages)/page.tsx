import { SERVICES_PAGE } from "@/app/_lib/org/category/services";

import dynamic from "next/dynamic";
import ServiceSection from "../_ui/services/ServicesSection";

import { Suspense } from "react";

import { buildMetadata, SEO_PAGES } from "../_lib/org/layoutAndSeo";
import HomeHero from "../_ui/hero/HomeHero";
import HomeHeroSkeleton from "../_ui/hero/HomeHeroSkeleton";
import ServiceSectionSkeleton from "../_ui/services/ServiceSectionSkeleton";
import WorkspaceOffersSection from "../_ui/workspace/WorkspaceOffersSection";

const ServiceCtaLazy = dynamic(() => import("../_ui/content/ServiceCTA"), {
  // ssr: false,
  loading: () => <div className="max-w-lg mx-auto h-[500px]" />,
});

export const metadata = buildMetadata(SEO_PAGES.home());

export default function HomePage() {
  return (
    <main className="space-y-10">
      <Suspense fallback={<HomeHeroSkeleton />}>
        <HomeHero className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]" />
      </Suspense>

      {Object.entries(SERVICES_PAGE).map(([key, service]) => (
        <Suspense key={key} fallback={<ServiceSectionSkeleton />}>
          <ServiceSection service={service} />
        </Suspense>
      ))}
      <WorkspaceOffersSection />

      {/* <ContactFormLazy /> */}
      <ServiceCtaLazy ctaKey="generalContact" serviceLabel="Services" />
    </main>
  );
}

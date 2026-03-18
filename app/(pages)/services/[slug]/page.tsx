//app/(pages)/services/[slug]/page.tsx
import {
  getServiceLabelBySlug,
  getServiceSubcategoryKeywordsBySlug,
} from "@/app/_lib/org/category/serviceLookup";
import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import PageHeading from "@/app/_ui/layout/PageIntro";
import Section from "@/app/_ui/layout/Section";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ServiceDetails from "./_ui/ServiceDetails";
import ServiceOfferingBlocks from "./_ui/ServiceOfferingBlocks";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const found = getServiceLabelBySlug(slug);
  if (!found) notFound();
  const { service } = found;

  return buildMetadata(
    SEO_PAGES.service({
      slug: service.slug,
      label: service.label,
      description: service.description.join(" "),
      keywords: getServiceSubcategoryKeywordsBySlug(slug, op.otherLangKeys),
    }),
  );
};

const page = async ({ params }: ServicePageProps) => {
  const { slug } = await params;

  const found = getServiceLabelBySlug(slug);

  if (!found) {
    notFound();
  }
  const { service } = found;

  return (
    <main className=" my-5 ">
      <Section id={slug}>
        <PageHeading heading={service.label} subHeading={service.description} />
      </Section>

      {/* Subcategories (nested object) */}
      {service.subcategories && (
        <Section>
          <ServiceDetails subcategories={service.subcategories} />
        </Section>
      )}
      <Section>
        <ServiceOfferingBlocks offerings={service.offering} />
      </Section>

      <Section>
        <Suspense fallback={null}>
          <ServiceCTA ctaKey="freeTour" serviceLabel={service.label} />
        </Suspense>
      </Section>
    </main>
  );
};

export default page;

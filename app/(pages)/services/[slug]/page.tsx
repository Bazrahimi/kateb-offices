import {
  getServiceLabelBySlug,
  getServiceSubcategoryKeywordsBySlug,
} from "@/app/_lib/org/category/serviceLookup";
import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import ServiceCTA from "@/app/_ui/content/ServiceCTA";
import PageHeading from "@/app/_ui/layout/PageIntro";
import Section from "@/app/_ui/layout/Section";
import { Header } from "@/app/_ui/typography/Header";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { privateOfficeCards } from "../../workspaces/_lib/assets/offering/privateOffices";
import PrivateOfficeCard from "../../workspaces/private-office/_ui/PrivateOfficeCard";
import ServiceDetails from "./_ui/ServiceDetails";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
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

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
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

      <div className="bg-slate-100 my-5 mt-10 py-10">
        <Header as="h1" size="md" align="center">
          Private Offices Currently Available
        </Header>
        <div className="mx-auto max-w-6xl space-y-6 px-4">
          <section className="grid gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {privateOfficeCards.map((room) => (
              <PrivateOfficeCard key={room.id} room={room} />
            ))}
          </section>
        </div>
      </div>

      <Section>
        <Suspense fallback={null}>
          <ServiceCTA ctaKey="freeTour" serviceLabel={service.label} />
        </Suspense>
      </Section>
    </main>
  );
};

export default page;

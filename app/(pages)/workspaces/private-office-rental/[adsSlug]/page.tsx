// app/join-workspaces/private-offices/[adsSlug]/page.tsx
import { cldGalleryImage } from "@/app/_lib/cloudinary/cloudinary";
import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";
import { workspacesRoutes } from "@/app/_lib/routes/workspacesRoutes";
import ImageGallery from "@/app/_ui/image/ImageGallery";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPrivateOfficeBySlug } from "../../_lib/workspaces/signup/privateOffices";
import WorkspaceActionsClient from "./_ui/WorkspaceActionsClient";

type Props = {
  params: Promise<{ adsSlug: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { adsSlug } = await params;
  const office = getPrivateOfficeBySlug(adsSlug);

  if (!office) notFound();

  return buildMetadata(
    SEO_PAGES.privateOfficeDetails({
      slug: office.slug,
      label: office.label,
      description: [
        office.availableFrom,
        office.capacity,
        office.dimension ? `Office size: ${office.dimension}` : "",
        office.description.join(" "),
      ]
        .filter(Boolean)
        .join(" "),
      keywords: [
        office.label,
        office.priceLabel,
        office.capacity,
        office.status,
        office.dimension,
        "private office",
        "office rental",
      ].filter(Boolean),
      ogImagePath: cldGalleryImage(office.images[0].url),
    }),
  );
};

export default async function Page({ params }: Props) {
  const { adsSlug } = await params;
  const office = getPrivateOfficeBySlug(adsSlug);

  if (!office) notFound();

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-5xl space-y-6 px-4">
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
            <ImageGallery images={office.images} priorityFirstImage />

            <div className="space-y-5">
              <div>
                <Header as="h1" size="sm" className="text-slate-900">
                  {office.label}
                </Header>
                <P className="mt-2 text-slate-600">{office.availableFrom}</P>
              </div>

              <div className="space-y-2">
                <P className="text-4xl font-bold text-org-primary-main">
                  {office.priceLabel}
                </P>

                <P
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                    office.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {office.status}
                </P>
              </div>

              <P className="text-slate-700">{office.capacity}</P>
              <P className="text-slate-700">
                <span className="font-semibold">Private office size:</span>{" "}
                {office.dimension} — a professional, tenant-ready workspace with
                all key amenities for seamless business operations.
              </P>

              <div className="space-y-2">
                {office.description.map((item) => (
                  <P key={item} className="text-slate-700">
                    {item}
                  </P>
                ))}
              </div>

              {office.includedFeatures.length ? (
                <div>
                  <P className="mb-3 uppercase tracking-wide text-slate-500">
                    Included Features
                  </P>
                  <ul className="space-y-3">
                    {office.includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700 ring-1 ring-slate-200"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </article>
        <WorkspaceActionsClient
          officeLabel={office.label}
          applicationHref={`${workspacesRoutes.application()}?application=${encodeURIComponent(
            office.label,
          )}`}
        />
      </div>
    </main>
  );
}

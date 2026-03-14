// app/join-workspaces/private-offices/[slug]/page.tsx
import { workspacesRoutes } from "@/app/_lib/routes/joinWorkspacesRoutes";
import Button from "@/app/_ui/button/Button";
import ImageGallery from "@/app/_ui/image/ImageGallery";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { notFound } from "next/navigation";
import { getPrivateOfficeBySlug } from "../../_lib/assets/offering/privateOffices";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const office = getPrivateOfficeBySlug(slug);

  if (!office) notFound();

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-5xl space-y-6 px-4">
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
            <ImageGallery
              images={office.images}
              alt={office.label}
              priorityFirstImage
            />

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
                <P className="text-slate-700">{office.capacity}</P>
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

              <Button
                as="link"
                href={`${workspacesRoutes.application()}?office=${encodeURIComponent(
                  office.label,
                )}`}
                fullWidth
              >
                Enquire about this office
              </Button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

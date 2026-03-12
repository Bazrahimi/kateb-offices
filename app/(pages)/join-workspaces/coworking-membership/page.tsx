import { coworkingMembershipFee } from "@/app/(pages)/join-workspaces/_lib/assets/workspaceOffering";
import { joinWorkspacesRoutes } from "@/app/_lib/routes/joinWorkspacesRoutes";
import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";

export default function Page() {
  const membership = coworkingMembershipFee.join?.everydayMembership;

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <Header as="h1" size="sm" className=" text-slate-900">
            {membership.label}
          </Header>
          <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
            <Image
              src={coworkingMembershipFee.image}
              alt={membership.label}
              fill
              className="object-contain p-6"
            />
          </div>

          <div className="space-y-3">
            <P className=" text-slate-600">{membership.access}</P>

            <div className="pt-2">
              <P className="uppercase tracking-wide text-slate-500">Price</P>
              <P className="text-5xl font-bold text-org-primary-main">
                {membership.price}
                <span className="ml-2 text-sm font-medium text-slate-600">
                  /month
                </span>
              </P>
            </div>
          </div>

          {membership.inclusions?.length ? (
            <div className="mt-8">
              <ul className="mt-4 space-y-3">
                {membership.inclusions.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700 ring-1 ring-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Button
            as="link"
            href={`${joinWorkspacesRoutes.application()}?membership=${encodeURIComponent(
              membership.label,
            )}`}
            fullWidth
          >
            {coworkingMembershipFee.btnContent}
          </Button>
        </div>
      </div>
    </main>
  );
}

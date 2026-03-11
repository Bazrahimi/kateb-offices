import { coworkingMembershipFee } from "@/app/_lib/org/category/workspaceFee";
import Image from "next/image";

export default function Page() {
  const membership = coworkingMembershipFee.join?.everydayMembership as
    | {
        label: string;
        access: string;
        price: string;
        inclusions?: string[];
      }
    | undefined;

  if (!membership) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p>No membership information available.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
            <Image
              src={coworkingMembershipFee.image}
              // TODO: are Property 'label' does not exist on type '{}'.ts(2339) any
              alt={membership.label}
              fill
              className="object-contain p-6"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-slate-900">
              {membership.label}
            </h1>

            <p className="text-xl text-slate-600">{membership.access}</p>

            <div className="pt-2">
              <p className="text-sm uppercase tracking-wide text-slate-500">
                Price
              </p>
              <p className="text-5xl font-bold text-org-primary-main">
                {membership.price}
                <span className="ml-2 text-xl font-medium text-slate-600">
                  /month
                </span>
              </p>
            </div>
          </div>

          {membership.inclusions?.length ? (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Inclusions
              </h2>

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

          <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-org-primary-main px-6 py-4 text-lg font-semibold text-white transition hover:opacity-95"
          >
            {coworkingMembershipFee.btnContent}
          </a>
        </div>
      </div>
    </main>
  );
}

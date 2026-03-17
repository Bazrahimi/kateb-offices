// app/(pages)/workspaces/_ui/WorkspacePlanListPage.tsx
import { workspacesRoutes } from "@/app/_lib/routes/joinWorkspacesRoutes";
import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";
import type {
  WorkspaceOfferingMeta,
  WorkspaceSignupPlan,
} from "../../_lib/definitions";

type Props = {
  plans: WorkspaceSignupPlan[];
  offering: WorkspaceOfferingMeta;
};

const WorkspacePlanListPage = ({ plans, offering }: Props) => {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-lg space-y-6 px-4">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <Header as="h1" size="sm" className="text-slate-900">
              {plan.label}
            </Header>

            <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
              <Image
                src={offering.image}
                alt={plan.label}
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-3">
              {plan.access ? (
                <P className="text-slate-600">{plan.access}</P>
              ) : null}

              <div className="pt-2">
                <P className="uppercase tracking-wide text-slate-500">Price</P>

                <P className="text-5xl font-bold text-org-primary-main">
                  {plan.price}
                  <span className="ml-2 text-sm font-medium text-slate-600">
                    /month
                  </span>
                </P>
              </div>
            </div>

            {plan.inclusions?.length ? (
              <div className="mt-8">
                <ul className="mt-4 space-y-3">
                  {plan.inclusions.map((item) => (
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

            <div className="mt-8">
              <Button
                as="link"
                href={`${workspacesRoutes.application()}?application=${encodeURIComponent(
                  plan.label,
                )}`}
                fullWidth
              >
                {offering.btnContent}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default WorkspacePlanListPage;

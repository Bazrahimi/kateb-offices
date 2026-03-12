// app/join-workspaces/application/page.tsx

import ApplicationForm from "./_ui/ApplicationForm";

type PageProps = {
  searchParams?: Promise<{
    membership?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const membership = params?.membership ?? "";

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <ApplicationForm membership={membership} />
      </div>
    </main>
  );
}
import type { ServiceLeaf } from "@/app/_lib/org/definitions";
import { cn } from "@/app/_lib/utils/cn";
import List from "@/app/_ui/content/List";

import ImageGallery from "@/app/_ui/image/ImageGallery";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

type Props = {
  leaf: ServiceLeaf;
  index: number;
  leafId: string;
};

export default function ServiceLeafCard({ leaf, index, leafId }: Props) {
  const hasItems = leaf.items.length > 0;
  const isEven = index % 2 === 0;

  return (
    <article
      className="scroll-mt-24 rounded-2xl border border-gray-200 bg-org-primary-main p-5 shadow-sm"
      id={leafId}
    >
      <div className="mb-5 grid gap-3 sm:mb-10 sm:grid-cols-12 sm:items-start sm:gap-6">
        <header className="sm:col-span-12 space-y-3">
          <Header as="h2" className="text-gray-50">
            {leaf.label}
          </Header>

          {leaf.description?.map((t, i) => (
            <P key={i} className="text-gray-200">
              {t}
            </P>
          ))}
        </header>

        {hasItems && (
          <section
            className={cn(
              "min-w-0 sm:col-span-6",
              isEven ? "sm:order-1" : "sm:order-2",
            )}
          >
            <div className="mb-4 h-px w-full bg-slate-200/70" />
            <List items={leaf.items} />
          </section>
        )}

        <aside
          className={cn(
            "min-w-0",
            hasItems ? "sm:col-span-6" : "sm:col-span-12",
            isEven ? "sm:order-2" : "sm:order-1",
          )}
        >
          <div className="mx-auto w-full max-w-3xl overflow-hidden">
            <ImageGallery images={leaf.image} priorityFirstImage />
          </div>
        </aside>
      </div>
    </article>
  );
}

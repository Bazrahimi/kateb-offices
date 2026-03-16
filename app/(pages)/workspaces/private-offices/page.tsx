// app/join-workspaces/private-offices/page.tsx
import { Header } from "@/app/_ui/typography/Header";
import { privateOfficeCards } from "../_lib/assets/offering/privateOffices";
import PrivateOfficeCard from "./_ui/PrivateOfficeCard";

const Page = () => {
  return (
    "Page"
    // <main className="min-h-screen bg-slate-100 py-10">
    //   <div className="mb-10">
    //     <Header as="h1" size="md" align="center">
    //       Private Offices Currently Available
    //     </Header>
    //   </div>
    //   <div className="mx-auto max-w-6xl space-y-6 px-4">
    //     <section className="grid gap-3 md:gap-6 sm:grid-cols-2  xl:grid-cols-3">
    //       {privateOfficeCards.map((room) => (
    //         <PrivateOfficeCard key={room.id} room={room} />
    //       ))}
    //     </section>
    //   </div>
    // </main>
  );
};

export default Page;

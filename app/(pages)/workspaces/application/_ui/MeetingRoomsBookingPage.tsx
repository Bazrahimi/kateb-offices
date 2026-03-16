// app/(pages)/workspaces/_ui/MeetingRoomsBookingPage.tsx

"use client";

import { type CtaKey } from "@/app/_lib/content/cta";
import Button from "@/app/_ui/button/Button";
import ContactModal from "@/app/_ui/modals/contactModal/ContactModal";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";
import { useState } from "react";

import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import List from "@/app/_ui/content/List";
import type { MeetingRoomOfferings } from "../../_lib/definitions";

type Props = {
  rooms: MeetingRoomOfferings[];
};

const MeetingRoomsBookingPage = ({ rooms }: Props) => {
  const [open, setOpen] = useState(false);
  const [ctaKey, setCtaKey] = useState<CtaKey>("bookMeetingRoom");

  const openModal = (key: CtaKey) => {
    setCtaKey(key);
    setOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-slate-100 py-10">
        <div className="mx-auto max-w-6xl space-y-8 px-4">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="space-y-4 text-center">
              <Header as="h1" size="md" className="text-slate-900">
                Book Meeting Rooms, Private Day Office & Conference Rooms
              </Header>

              <P className="mx-auto max-w-3xl text-slate-600">
                Our meeting and conference rooms provide a professional space
                for client meetings, interviews, training sessions, workshops,
                and team collaboration in a central Dandenong location.
              </P>
            </div>
          </section>

          <section className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rooms.map((room) => (
                <article
                  key={room.id}
                  className="flex min-h-0 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <Header as="h3" size="xs" className="text-slate-900">
                    {room.label}
                  </Header>

                  <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
                    <Image
                      src={cldLeafAuto(room.images[0].url)}
                      alt={room.images[0].alt}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {room.eligibilityNotes?.length ? (
                    <div className="mt-4">
                      <P className="mb-3 uppercase tracking-wide text-slate-500">
                        Member Notes
                      </P>
                      <List
                        items={room.eligibilityNotes}
                        showIcon={false}
                        className="border-0 bg-transparent px-0 py-0"
                        textClassName="px-0 text-slate-600"
                        itemClassName="items-start"
                        size="sm"
                      />
                    </div>
                  ) : null}

                  <div className="mt-5 space-y-3">
                    <P className="text-slate-700">{room.capacity}</P>

                    <P className="text-4xl font-bold text-org-primary-main">
                      {room.priceLabel}
                      {room.durationLabel ? (
                        <span className="ml-2 text-sm font-medium text-slate-600">
                          {room.durationLabel}
                        </span>
                      ) : null}
                    </P>

                    <div className="space-y-2">
                      {room.description.map((item) => (
                        <P key={item} className="text-slate-600">
                          {item}
                        </P>
                      ))}
                    </div>
                  </div>

                  {room.includedFeatures.length ? (
                    <div className="mt-6">
                      <P className="mb-3 uppercase tracking-wide text-slate-500">
                        Included Features
                      </P>
                      <List items={room.includedFeatures} size="sm" />
                    </div>
                  ) : null}
                  <div className="mt-auto">
                    <Button
                      fullWidth
                      onClick={() => openModal("bookMeetingRoom")}
                    >
                      Book this room
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        ctaKey={ctaKey}
        serviceLabel="meeting and conference rooms"
      />
    </>
  );
};

export default MeetingRoomsBookingPage;

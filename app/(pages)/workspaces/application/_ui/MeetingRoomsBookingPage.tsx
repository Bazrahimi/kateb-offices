// app/(pages)/workspaces/_ui/MeetingRoomsBookingPage.tsx

"use client";

import { useState } from "react";
import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ContactModal from "@/app/_ui/modals/contactModal/ContactModal";
import Image from "next/image";
import { CTA, type CtaKey } from "@/app/_lib/content/cta";


import type { MeetingRoomDiscountGroup, MeetingRoomPlan } from "../../_lib/assets/offering/meetingRooms";
import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";

type Props = {
  rooms: MeetingRoomPlan[];
  eligibility: MeetingRoomDiscountGroup[];
};

const MeetingRoomsBookingPage = ({ rooms, eligibility }: Props) => {
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
                Book Meeting & Conference Rooms
              </Header>

              <P className="mx-auto max-w-3xl text-slate-600">
                Our meeting and conference rooms provide a professional space
                for client meetings, interviews, training sessions, workshops,
                and team collaboration in a central Dandenong location.
              </P>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button onClick={() => openModal("bookMeetingRoom")}>
                  {CTA.bookMeetingRoom.header}
                </Button>

                <Button variant="secondary" onClick={() => openModal("freeTour")}>
                  {CTA.freeTour.header}
                </Button>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <Header as="h2" size="sm" className="text-slate-900">
              Available Rooms
            </Header>

            <div className="grid gap-6 lg:grid-cols-2">
              {rooms.map((room) => (
                <article
                  key={room.id}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <Header as="h3" size="xs" className="text-slate-900">
                    {room.label}
                  </Header>

                  <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
                    <Image
                      src={cldLeafAuto(room.image)}
                      alt={room.label}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

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
                      <ul className="space-y-3">
                        {room.includedFeatures.map((feature) => (
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

                  {room.suitableFor?.length ? (
                    <div className="mt-6">
                      <P className="mb-3 uppercase tracking-wide text-slate-500">
                        Suitable For
                      </P>
                      <ul className="space-y-3">
                        {room.suitableFor.map((item) => (
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

                  <div className="mt-6">
                    <Button fullWidth onClick={() => openModal("bookMeetingRoom")}>
                      Book this room
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <Header as="h2" size="sm" className="text-slate-900">
              Who Can Book Meeting Rooms?
            </Header>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {eligibility.map((group) => (
                <div
                  key={group.id}
                  className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <Header as="h3" size="xs" className="text-slate-900">
                    {group.label}
                  </Header>

                  <P className="mt-2 text-slate-600">{group.description}</P>

                  {group.discountLabel ? (
                    <P className="mt-3 inline-flex rounded-full bg-org-secondary-light px-3 py-1 text-sm font-medium text-org-secondary-dark">
                      {group.discountLabel}
                    </P>
                  ) : null}
                </div>
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
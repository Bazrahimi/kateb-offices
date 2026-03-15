"use client";

import { type CtaKey } from "@/app/_lib/content/cta";
import Button from "@/app/_ui/button/Button";
import List from "@/app/_ui/content/List";
import ContactModal from "@/app/_ui/modals/contactModal/ContactModal";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import Image from "next/image";
import { useState } from "react";

import { cldLeafAuto } from "@/app/_lib/cloudinary/cloudinary";
import type { MeetingRoomPlan } from "../../_lib/assets/offering/meetingRooms";
import type { MemberMeetingRoomBenefit } from "../../_lib/assets/offering/memberMeetingRoomBenefits";
  import { buildMemberMeetingRoomPlans } from "../../book-meeting-rooms/members/page";

type Props = {
  rooms: MeetingRoomPlan[];
  benefits: MemberMeetingRoomBenefit[];
};

const MemberMeetingRoomsPage = ({ rooms, benefits }: Props) => {
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
                Member Meeting Room Benefits
              </Header>

              <P className="mx-auto max-w-3xl text-slate-600">
                Compare meeting room and day office booking benefits across all
                workspace membership categories.
              </P>
            </div>
          </section>

          {benefits.map((benefit) => {
            const memberRooms = buildMemberMeetingRoomPlans(rooms, benefit);

            return (
              <section
                key={benefit.offeringKey}
                className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="space-y-2">
                  <Header as="h2" size="sm" className="text-slate-900">
                    {benefit.label}
                  </Header>

                  {benefit.freeLimitLabel ? (
                    <P className="text-slate-600">{benefit.freeLimitLabel}</P>
                  ) : null}
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {memberRooms.map((room) => (
                    <article
                      key={`${benefit.offeringKey}-${room.id}`}
                      className="flex min-h-0 flex-col rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200"
                    >
                      <Header as="h3" size="xs" className="text-slate-900">
                        {room.label}
                      </Header>

                      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                        <Image
                          src={cldLeafAuto(room.image)}
                          alt={room.label}
                          fill
                          className="object-contain"
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

                        <List
                          items={room.description}
                          showIcon={false}
                          className="border-0 bg-transparent px-0 py-0"
                          itemClassName="items-start"
                          textClassName="px-0 text-slate-600"
                          size="sm"
                        />
                      </div>

                      {room.includedFeatures.length ? (
                        <div className="mt-6">
                          <P className="mb-3 uppercase tracking-wide text-slate-500">
                            Included Features
                          </P>
                          <List items={room.includedFeatures} size="sm" />
                        </div>
                      ) : null}

                      {room.eligibilityNotes?.length ? (
                        <div className="mt-6">
                          <P className="mb-3 uppercase tracking-wide text-slate-500">
                            Member Notes
                          </P>
                          <List
                            items={room.eligibilityNotes}
                            showIcon={false}
                            className="border-0 bg-transparent px-0 py-0"
                            itemClassName="items-start"
                            textClassName="px-0 text-slate-600"
                            size="sm"
                          />
                        </div>
                      ) : null}

                      <div className="mt-auto pt-6">
                        <Button
                          fullWidth
                          onClick={() => openModal("bookMeetingRoom")}
                        >
                          Book as member
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        ctaKey={ctaKey}
        serviceLabel="member meeting room bookings"
      />
    </>
  );
};

export default MemberMeetingRoomsPage;
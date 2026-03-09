"use client";

import { useState } from "react";
import { CTA, type CtaKey } from "@/app/_lib/content/cta";
import Button from "../button/Button";
import ContactModal from "../modals/contactModal/ContactModal";

export default function HeroSectionCta() {
  const [open, setOpen] = useState(false);
  const [ctaKey, setCtaKey] = useState<CtaKey>("freeTour");

  const openModal = (key: CtaKey) => {
    setCtaKey(key);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button onClick={() => openModal("freeTour")}>
          {CTA.freeTour.header}
        </Button>

        <Button variant="secondary" onClick={() => openModal("bookMeetingRoom")}>
          {CTA.bookMeetingRoom.header}
        </Button>
      </div>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        ctaKey={ctaKey}
        serviceLabel={
          ctaKey === "bookMeetingRoom"
            ? "meeting and conference rooms"
            : "services and shared amenities"
        }
      />
    </>
  );
}
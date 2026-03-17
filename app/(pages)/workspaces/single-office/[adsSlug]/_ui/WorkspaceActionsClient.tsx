"use client";

import { useState } from "react";

import ContactModal from "@/app/_ui/modals/contactModal/ContactModal";
import WorkspaceCtaPanel from "./WorkspaceCtaPanel";

type Props = {
  officeLabel: string;
  applicationHref: string;
};

export default function WorkspaceActionsClient({
  officeLabel,
  applicationHref,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <WorkspaceCtaPanel
        officeLabel={officeLabel}
        applicationHref={applicationHref}
        onOpenTour={() => setOpen(true)}
        contacts={[
          { name: "Baz Rahimi", phone: "0412515676" },
          { name: "Alex Danishyar", phone: "0400000000" },
        ]}
      />

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        ctaKey="freeTour"
        serviceLabel={officeLabel}
      />
    </>
  );
}
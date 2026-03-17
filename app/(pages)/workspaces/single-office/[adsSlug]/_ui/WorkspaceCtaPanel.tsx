"use client";

import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

type WorkspaceCtaPanelProps = {
  officeLabel: string;
  applicationHref: string;
  onOpenTour: () => void;
  contacts: {
    name: string;
    phone: string;
  }[];
};

const toTelHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

export default function WorkspaceCtaPanel({
  officeLabel,
  applicationHref,
  onOpenTour,
  contacts,
}: WorkspaceCtaPanelProps) {
  return (
    <div className="space-y-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
      <div className="space-y-1">
        <Header as="h3" size="xs" className="text-slate-900">
          Ready to enquire?
        </Header>
        <P className="text-slate-600">
          Call us directly, submit an application, or book an inspection for{" "}
          <strong>{officeLabel}</strong>.
        </P>
      </div>

      <div className="grid gap-3">
        {contacts.map((contact) => (
          <Button
            key={contact.phone}
            as="link"
            href={toTelHref(contact.phone)}
            variant="outline"
            fullWidth
          >
            Call {contact.name} — {contact.phone}
          </Button>
        ))}

        <Button as="link" href={applicationHref} fullWidth>
          Apply for this office
        </Button>

        <Button variant="secondary" onClick={onOpenTour} fullWidth>
          Book Inspection / Tour
        </Button>
      </div>
    </div>
  );
}
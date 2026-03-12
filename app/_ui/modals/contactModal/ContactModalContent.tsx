import { type CtaKey } from "@/app/_lib/content/cta";
import ContactForm from "@/app/(pages)/contact-us/_ui/ContactForm";

type Props = {
  ctaKey: CtaKey;
  serviceLabel: string;
};

export default function ContactModalContent({
  ctaKey,
  serviceLabel,
}: Props) {
  return (
    <div className="mb-5">
      <ContactForm ctaKey={ctaKey} serviceLabel={serviceLabel} />
    </div>
  );
}
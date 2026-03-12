import type { CtaKey } from "@/app/_lib/content/cta";
import ContactForm from "@/app//(pages)/contact-us/_ui/ContactForm";

type Props = {
  ctaKey: CtaKey;

  // service label can be bilingual so the component can switch easily
  serviceLabel: string;
};

export default function ServiceCTA({
  ctaKey,

  serviceLabel,
}: Props) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-3xl bg-linear-to-br p-5 sm:p-10 shadow-xl from-org-secondary-dark to-org-primary-dark"
      }
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
       />
         <ContactForm ctaKey={ctaKey} serviceLabel={serviceLabel} />
    </div>
  );
}

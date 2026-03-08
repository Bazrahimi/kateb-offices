import ContactForm from "@/app/contact-us/_ui/ContactForm";

type Props = {
  message: string;
  headingLabel: string;
};

export default function ContactModalContent({
  message,

  headingLabel,
}: Props) {
  return (
    <div className="mb-5">
      <ContactForm header={headingLabel} message={message} />
    </div>
  );
}

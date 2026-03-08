import ContactForm from "../contact-us/_ui/ContactForm";
// TODO: I want change this page to modal 

const FreeConsultationPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    message: string;
    serviceLabel: string;
    headingLabel: string;
  }>;
}) => {
  const { message, serviceLabel, headingLabel } = await searchParams;

  const content = (
    <ContactForm
      header={headingLabel}
      subHeader={`Request for a ${headingLabel} for ${serviceLabel} now!`}
      message={`${message} ${serviceLabel}. Please call me or get back to me via email to discuss further.`}
    />
  );

  return content;
};

export default FreeConsultationPage;

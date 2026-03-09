"use client";

import ActionButton from "@/app/_ui/button/ActionButton";
import FormErrorsMessage from "@/app/_ui/form/FormErrorsMessage";
import Input from "@/app/_ui/form/Input";
import Textarea from "@/app/_ui/form/Textarea";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { useActionState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { submitEnquiry } from "../_lib/action";
import { ENQUIRY_FIELDS as F } from "../_lib/constant";
import { CTA, type CtaKey } from "@/app/_lib/content/cta";
import { ContactSuccessMessage } from "./ContactSuccess";

type Props = {
  ctaKey: CtaKey;
  serviceLabel: string;
};

const ContactForm = ({ ctaKey, serviceLabel }: Props) => {
  const [state, formAction, isPending] = useActionState(submitEnquiry, undefined);

  const isSuccess = state?.ok === true;
  const cta = CTA[ctaKey];

  if (isSuccess) {
    return <ContactSuccessMessage />;
  }

  return (
    <div className="mx-auto max-w-lg rounded-2xl bg-gray-100 p-6 shadow-lg">
      <form className="relative space-y-2" action={formAction} noValidate>
        <Header as="h3" size="sm">
          {cta.header}
        </Header>

        <div className="space-y-1">
          <P size="sm">
            <strong>Step 1:</strong> {cta.steps[0]}
          </P>
          <P size="sm">
            <strong>Step 2:</strong> {cta.steps[1]}
          </P>
        </div>

        <Input
          id={F.fullName}
          label="Full Name"
          placeholder="Enter your full name"
          error={state?.errors?.fullName}
          defaultValue={state?.data?.fullName}
          type="text"
          Icon={CiUser}
          required
          className="bg-white"
        />

        <Input
          id={F.email}
          label="Email"
          placeholder="Enter your Email"
          error={state?.errors?.email}
          defaultValue={state?.data?.email}
          type="email"
          Icon={MdEmail}
          required
          className="bg-white"
        />

        <Input
          id={F.contactNumber}
          label="Contact Number"
          placeholder="Enter your contact Number"
          error={state?.errors?.contactNumber}
          defaultValue={state?.data?.contactNumber}
          type="text"
          Icon={IoIosPhonePortrait}
          className="bg-white"
        />

        <Textarea
          id={F.qMessage}
          label="Message | Query"
          placeholder="Tell us a little about your enquiry..."
          error={state?.errors?.qMessage}
          defaultValue={state?.data?.qMessage ||  cta.message(serviceLabel)}
          required
          className="bg-white"
        />

        <FormErrorsMessage message={state?.message} />

        <ActionButton
          type="submit"
          isLoading={isPending}
          loadingText="Sending..."
          overlay
          fullWidth
        >
          Submit
        </ActionButton>
      </form>
    </div>
  );
};

export default ContactForm;
"use client";

import { CTA, type CtaKey } from "@/app/_lib/content/cta";
import ActionButton from "@/app/_ui/button/ActionButton";
import FormErrorsMessage from "@/app/_ui/form/FormErrorsMessage";
import Input from "@/app/_ui/form/Input";
import Textarea from "@/app/_ui/form/Textarea";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { useActionState } from "react";
import { CiUser } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { submitEnquiry } from "../_lib/action";
import { ENQUIRY_FIELDS as F } from "../_lib/constant";
import { ContactSuccessMessage } from "./ContactSuccess";

type Props = {
  ctaKey: CtaKey;
  serviceLabel: string;
  bookMeetingRoom?: boolean;
};

const ContactForm = ({
  ctaKey,
  serviceLabel,
  bookMeetingRoom = false,
}: Props) => {
  const [state, formAction, isPending] = useActionState(
    submitEnquiry,
    undefined,
  );

  const isSuccess = state?.ok === true;
  const cta = CTA[ctaKey];
  const isFreeTour = ctaKey === "freeTour";
  const isRoomBooking = bookMeetingRoom || ctaKey === "bookMeetingRoom";

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

        <input type="hidden" name="ctaKey" value={ctaKey} />
        <input
          type="hidden"
          name={F.bookMeetingRoom}
          value={bookMeetingRoom ? "true" : "false"}
        />

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
          id={F.companyName}
          label="Company Name"
          placeholder="Enter your company name"
          error={state?.errors?.companyName}
          defaultValue={state?.data?.companyName}
          type="text"
          Icon={HiOutlineBuildingOffice2}
          className="bg-white"
        />

        <Input
          id={F.email}
          label="Email"
          placeholder="Enter your email"
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
          placeholder="Enter your contact number"
          error={state?.errors?.contactNumber}
          defaultValue={state?.data?.contactNumber}
          type="text"
          Icon={IoIosPhonePortrait}
          className="bg-white"
        />

        {(isFreeTour || isRoomBooking) && (
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              id={F.preferredDate}
              label="Preferred Date"
              type="date"
              error={state?.errors?.preferredDate}
              defaultValue={state?.data?.preferredDate}
              className="bg-white"
              required
            />

            <Input
              id={F.preferredTime}
              label="Preferred Time"
              type="time"
              error={state?.errors?.preferredTime}
              defaultValue={state?.data?.preferredTime}
              className="bg-white"
              required
            />
          </div>
        )}

        {isRoomBooking && (
          <>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={F.roomType}
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Preferred Room
                </label>

                <select
                  id={F.roomType}
                  name={F.roomType}
                  defaultValue={state?.data?.roomType ?? ""}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
                >
                  <option value="">No preference / not sure yet</option>
                  <option value="Hydra">Hydra — 8 person meeting room</option>
                  <option value="Leo">Leo — 25 person conference room</option>
                </select>

                {state?.errors?.roomType ? (
                  <P size="sm" className="mt-1 text-red-600">
                    {state.errors.roomType}
                  </P>
                ) : null}
              </div>

              <Input
                id={F.attendeeCount}
                label="Number of Attendees"
                placeholder="Enter expected attendees"
                error={state?.errors?.attendeeCount}
                defaultValue={state?.data?.attendeeCount}
                type="number"
                className="bg-white"
              />
            </div>

            <div>
              <label
                htmlFor={F.tenantType}
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Booking Type
              </label>

              <select
                id={F.tenantType}
                name={F.tenantType}
                defaultValue={state?.data?.tenantType ?? ""}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
              >
                <option value="">Select one</option>
                <option value="existingTenant">Existing tenant</option>
                <option value="newCustomer">New / casual booking</option>
              </select>

              {state?.errors?.tenantType ? (
                <P size="sm" className="mt-1 text-red-600">
                  {state.errors.tenantType}
                </P>
              ) : null}
            </div>
          </>
        )}

        <Textarea
          id={F.qMessage}
          label="Message | Query"
          placeholder="Tell us a little about your enquiry..."
          error={state?.errors?.qMessage}
          defaultValue={state?.data?.qMessage || cta.message(serviceLabel)}
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
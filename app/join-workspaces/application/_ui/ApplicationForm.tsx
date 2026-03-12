"use client";

import ActionButton from "@/app/_ui/button/ActionButton";
import FormErrorsMessage from "@/app/_ui/form/FormErrorsMessage";
import Input from "@/app/_ui/form/Input";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { useActionState } from "react";
import { submitApplication } from "../_lib/action";
import { APPLICATION_FIELDS as F } from "../_lib/constant";

import Select from "@/app/_ui/form/Select";

import { AUS_STATES } from "@/app/_lib/utils/assets";

type Props = {
  membership: string;
};

export default function ApplicationForm({ membership }: Props) {
  const [state, formAction, isPending] = useActionState(
    submitApplication,
    undefined,
  );

  const isSuccess = state?.ok === true;

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl bg-gray-100 p-6 shadow-lg">
        <Header as="h3" size="sm">
          Application Submitted
        </Header>

        <P size="sm" className="mt-2">
          {state.message ?? "Thanks! Your application has been submitted."}
        </P>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg rounded-2xl bg-gray-100 p-6 shadow-lg">
      <form className="relative space-y-4" action={formAction} noValidate>
        <Header as="h3" size="sm">
          Workspace Application
        </Header>

        <div className="space-y-1">
          <P size="sm">
            You are applying for:{" "}
            <strong>{membership || "No membership selected"}</strong>
          </P>
        </div>

        <input type="hidden" name={F.membership} value={membership} />

        <div className="space-y-3">
          <Header as="h3" size="xs">
            Organisation / Customer Details
          </Header>

          <Input
            id={F.businessName}
            label="Business Name"
            placeholder="Business Name"
            error={state?.errors?.businessName}
            defaultValue={state?.data?.businessName}
            type="text"
            required
            className="bg-white"
          />

          <Input
            id={F.abn}
            label="ABN (optional)"
            placeholder="ABN"
            error={state?.errors?.abn}
            defaultValue={state?.data?.abn}
            type="text"
            className="bg-white"
          />

          <Input
            id={F.industry}
            label="Your Industry (optional)"
            placeholder="Your Industry"
            error={state?.errors?.industry}
            defaultValue={state?.data?.industry}
            type="text"
            className="bg-white"
          />

          <Input
            id={F.address}
            label="Address"
            placeholder="Address"
            error={state?.errors?.address}
            defaultValue={state?.data?.address}
            type="text"
            required
            className="bg-white"
          />

          <Input
            id={F.city}
            label="City"
            placeholder="City"
            error={state?.errors?.city}
            defaultValue={state?.data?.city}
            type="text"
            required
            className="bg-white"
          />
          <Select
            id={F.state}
            label="State"
            options={AUS_STATES}
            placeholder="Select State"
            defaultValue={state?.data?.state}
            error={state?.errors?.state}
            required
          />

          <Input
            id={F.postcode}
            label="Postcode"
            placeholder="Postcode"
            error={state?.errors?.postcode}
            defaultValue={state?.data?.postcode}
            type="text"
            required
            className="bg-white"
          />
        </div>

        <div className="space-y-3">
          <Header as="h3" size="xs">
            Billing Information
          </Header>

          <Input
            id={F.firstName}
            label="First Name"
            placeholder="First Name"
            error={state?.errors?.firstName}
            defaultValue={state?.data?.firstName}
            type="text"
            required
            className="bg-white"
          />

          <Input
            id={F.lastName}
            label="Last Name"
            placeholder="Last Name"
            error={state?.errors?.lastName}
            defaultValue={state?.data?.lastName}
            type="text"
            required
            className="bg-white"
          />

          <Input
            id={F.email}
            label="Email"
            placeholder="Email"
            error={state?.errors?.email}
            defaultValue={state?.data?.email}
            type="email"
            required
            className="bg-white"
          />

          <Input
            id={F.phoneNumber}
            label="Phone Number"
            placeholder="Phone Number"
            error={state?.errors?.phoneNumber}
            defaultValue={state?.data?.phoneNumber}
            type="text"
            required
            className="bg-white"
          />

          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              name={F.billingSameAsAbove}
              value="true"
              defaultChecked={state?.data?.billingSameAsAbove === "true"}
            />
            Same as above
          </label>

          <Input
            id={F.billingAddress}
            label="Billing Address"
            placeholder="Billing Address"
            error={state?.errors?.billingAddress}
            defaultValue={state?.data?.billingAddress}
            type="text"
            className="bg-white"
          />

          <Input
            id={F.billingCity}
            label="Billing City"
            placeholder="Billing City"
            error={state?.errors?.billingCity}
            defaultValue={state?.data?.billingCity}
            type="text"
            className="bg-white"
          />

          <Select
            id={F.billingState}
            label="Billing State"
            options={AU_STATE}
            placeholder="Select State"
            defaultValue={state?.data?.billingState ?? ""}
            error={state?.errors?.billingState}
          />

          <Input
            id={F.billingPostcode}
            label="Billing Postcode"
            placeholder="Billing Postcode"
            error={state?.errors?.billingPostcode}
            defaultValue={state?.data?.billingPostcode}
            type="text"
            className="bg-white"
          />
        </div>

        <FormErrorsMessage message={state?.message} />

        <ActionButton
          type="submit"
          isLoading={isPending}
          loadingText="Sending..."
          overlay
          fullWidth
        >
          Submit Application
        </ActionButton>
      </form>
    </div>
  );
}

"use client";

import { useActionState, useState } from "react";

import ActionButton from "@/app/_ui/button/ActionButton";
import FormErrorsMessage from "@/app/_ui/form/FormErrorsMessage";
import Input from "@/app/_ui/form/Input";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

import { submitApplication } from "../_lib/action";
import { APPLICATION_FIELDS as F } from "../_lib/constant";
import AddressFields from "./AddressFields";

type Props = {
  membership: string;
};

export default function ApplicationForm({ membership }: Props) {
  const [state, formAction, isPending] = useActionState(
    submitApplication,
    undefined,
  );

  const [useDifferentBillingAddress, setUseDifferentBillingAddress] = useState(
    () => !(state?.data?.billingSameAsAbove ?? true),
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
        <input
          type="hidden"
          name={F.billingSameAsAbove}
          value={useDifferentBillingAddress ? "false" : "true"}
        />

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

          <AddressFields
            addressId={F.address}
            cityId={F.city}
            stateId={F.state}
            postcodeId={F.postcode}
            data={state?.data as Record<string, unknown> | undefined}
            errors={
              state?.errors as Record<string, string[] | undefined> | undefined
            }
            required
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
              checked={useDifferentBillingAddress}
              onChange={(e) => setUseDifferentBillingAddress(e.target.checked)}
            />
            Use a different billing address
          </label>

          {useDifferentBillingAddress && (
            <AddressFields
              addressId={F.billingAddress}
              cityId={F.billingCity}
              stateId={F.billingState}
              postcodeId={F.billingPostcode}
              addressLabel="Billing Address"
              cityLabel="Billing City"
              stateLabel="Billing State"
              postcodeLabel="Billing Postcode"
              data={state?.data as Record<string, unknown> | undefined}
              errors={
                state?.errors as
                  | Record<string, string[] | undefined>
                  | undefined
              }
              required
            />
          )}
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

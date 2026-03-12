// app/join-workspaces/application/ui/AddressFields.tsx
"use client";

import Select from "@/app/_ui/form/Select";
import Input from "@/app/_ui/form/Input";
import { AUS_STATES } from "@/app/_lib/utils/assets";

type FormDataLike = Record<string, unknown> | undefined;
type FormErrorsLike = Record<string, string[] | undefined> | undefined;

type Props = {
  addressId: string;
  cityId: string;
  stateId: string;
  postcodeId: string;
  addressLabel?: string;
  cityLabel?: string;
  stateLabel?: string;
  postcodeLabel?: string;
  data?: FormDataLike;
  errors?: FormErrorsLike;
  required?: boolean;
};

export default function AddressFields({
  addressId,
  cityId,
  stateId,
  postcodeId,
  addressLabel = "Address",
  cityLabel = "City",
  stateLabel = "State",
  postcodeLabel = "Postcode",
  data,
  errors,
  required = false,
}: Props) {
  return (
    <>
      <Input
        id={addressId}
        label={addressLabel}
        placeholder={addressLabel}
        error={errors?.[addressId]}
        defaultValue={typeof data?.[addressId] === "string" ? data[addressId] : undefined}
        type="text"
        required={required}
        className="bg-white"
      />

      <Input
        id={cityId}
        label={cityLabel}
        placeholder={cityLabel}
        error={errors?.[cityId]}
        defaultValue={typeof data?.[cityId] === "string" ? data[cityId] : undefined}
        type="text"
        required={required}
        className="bg-white"
      />

      <Select
        id={stateId}
        label={stateLabel}
        options={AUS_STATES}
        placeholder={`Select ${stateLabel}`}
        defaultValue={typeof data?.[stateId] === "string" ? (data[stateId] as string) : ""}
        error={errors?.[stateId]}
        required={required}
      />

      <Input
        id={postcodeId}
        label={postcodeLabel}
        placeholder={postcodeLabel}
        error={errors?.[postcodeId]}
        defaultValue={typeof data?.[postcodeId] === "string" ? data[postcodeId] : undefined}
        type="text"
        required={required}
        className="bg-white"
      />
    </>
  );
}
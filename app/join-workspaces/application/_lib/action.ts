// app/join-workspaces/application/_lib/action.ts
"use server";

import { APPLICATION_FIELDS as F } from "./constant";
import {
  ApplicationSchema,
  type ApplicationFormData,
  type ApplicationState,
} from "./schema";

export async function submitApplication(
  _prevState: ApplicationState | undefined,
  formData: FormData,
): Promise<ApplicationState> {
  const raw: ApplicationFormData = {
    [F.membership]: String(formData.get(F.membership) ?? ""),
    [F.businessName]: String(formData.get(F.businessName) ?? ""),
    [F.abn]: String(formData.get(F.abn) ?? ""),
    [F.industry]: String(formData.get(F.industry) ?? ""),
    [F.address]: String(formData.get(F.address) ?? ""),
    [F.city]: String(formData.get(F.city) ?? ""),
    [F.state]: String(formData.get(F.state) ?? ""),
    [F.postcode]: String(formData.get(F.postcode) ?? ""),
    [F.firstName]: String(formData.get(F.firstName) ?? ""),
    [F.lastName]: String(formData.get(F.lastName) ?? ""),
    [F.email]: String(formData.get(F.email) ?? ""),
    [F.phoneNumber]: String(formData.get(F.phoneNumber) ?? ""),
    [F.billingSameAsAbove]: String(
      formData.get(F.billingSameAsAbove) ?? "false",
    ) as "true" | "false",
    [F.billingAddress]: String(formData.get(F.billingAddress) ?? ""),
    [F.billingCity]: String(formData.get(F.billingCity) ?? ""),
    [F.billingState]: String(formData.get(F.billingState) ?? ""),
    [F.billingPostcode]: String(formData.get(F.billingPostcode) ?? ""),
  };

  const parsed = ApplicationSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      ok: false,
      message: "Please correct the errors below.",
      data: raw,
      errors: fieldErrors,
    };
  }

  const data = parsed.data;

  console.log("Application submitted:", data);

  // Later:
  // await handleApplicationEmails(data);

  return {
    ok: true,
    message: "Thanks! Your application has been submitted.",
    data,
    errors: {},
  };
}
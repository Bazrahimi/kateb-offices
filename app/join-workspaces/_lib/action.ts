// app/join-workspaces/application/_lib/action.ts
"use server";

import { ApplicationSchema, BooleanFields, Application,  type ApplicationState } from "./schema";
import { toBoolean } from "@/app/_lib/utils/assets";
import { toActionErrors } from "@/app/_lib/utils/actionHelper";
import { handleApplicationEmails } from "./handleApplicationEmails";

export async function submitApplication(
  _prevState: ApplicationState | undefined,
  formData: FormData,
): Promise<ApplicationState> {
  const rawData: Record<string, unknown> = Object.fromEntries(
    [...formData.entries()].map(([key, value]) => [
      key,
      typeof value === "string" ? value : undefined,
    ]),
  );

  for (const key of BooleanFields) {
    rawData[key] = toBoolean(formData.get(key));
  }

  const parsed = ApplicationSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      ...toActionErrors<ApplicationState["errors"]>(parsed.error),
      data: rawData as Partial<Application>,
    };
  }

  const data = parsed.data;

  console.log("Application submitted:", data);

  // Later:
  await handleApplicationEmails(data);

  return {
    ok: true,
    message: "Thanks! Your application has been submitted.",
    data,
    errors: {},
  };
}

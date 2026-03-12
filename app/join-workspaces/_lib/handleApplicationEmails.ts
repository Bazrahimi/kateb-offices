// app/join-workspaces/application/_lib/handleApplicationEmails.ts
"use server";

import type { Application } from "./schema";
import { sendAdminEmail } from "@/app/_lib/email/application/SendToAdmin";
import { sendUserConfirmationEmail } from "@/app/_lib/email/application/sendUserConfirmation";

export const handleApplicationEmails = async (
  data: Application,
): Promise<{ message: string }> => {
  const adminEmailPromise = sendAdminEmail(data);
  const userEmailPromise = sendUserConfirmationEmail(data);

  const [adminRes, userRes] = await Promise.allSettled([
    adminEmailPromise,
    userEmailPromise,
  ]);

  if (adminRes.status === "rejected") {
    console.error("Admin email send failed:", adminRes.reason);
  }

  if (userRes.status === "rejected") {
    console.error("User confirmation email failed:", userRes.reason);
  }

  let message = "Thanks! We have received your application.";
  if (userRes.status === "rejected") {
    message += " (Heads-up: we couldn’t send the confirmation email.)";
  }

  return { message };
};
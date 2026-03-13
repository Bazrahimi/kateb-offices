// app/_lib/email/application/SendToAdmin.tsx
"use server";

import type { Application } from "@/app/(pages)/workspaces/_lib/schema";
import {
  emailClient,
  ORG_EMAIL,
  WEB_ENQUIRY,
} from "@/app/_lib/email/emailClient";
import NewApplication from "@/app/_ui/email/templates/NewApplication";

export const sendAdminEmail = async (data: Application) => {
  try {
    const result = await emailClient.emails.send({
      from: WEB_ENQUIRY,
      to: [ORG_EMAIL],
      replyTo: data.email || undefined,
      subject: `New workspace application - ${data.firstName} ${data.lastName}`,
      react: <NewApplication data={data} />,
    });

    return result;
  } catch (error) {
    console.error("❌ Failed to send admin email:", error);
    throw error;
  }
};

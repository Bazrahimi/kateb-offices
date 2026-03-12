// app/_lib/email/application/sendUserConfirmation.tsx
"use server";

import {
  emailClient,
  FROM_EMAIL,
  ORG_EMAIL,
} from "@/app/_lib/email/emailClient";
import NewApplication from "@/app/_ui/email/templates/NewApplication";
import type { Application } from "@/app/join-workspaces/_lib/schema";

export const sendUserConfirmationEmail = async (data: Application) => {
  return emailClient.emails.send({
    from: FROM_EMAIL,
    to: [data.email],
    replyTo: ORG_EMAIL,
    subject: `We’ve received your application – ${data.firstName} ${data.lastName}`,
    react: <NewApplication data={data} />,
  });
};

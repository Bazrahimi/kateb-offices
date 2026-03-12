import { ActionState } from "@/app/_lib/utils/actionHelper";
import { z } from "zod";
import { ENQUIRY_FIELDS as F } from "./constant";

export const EnquirySchema = z
  .object({
    ctaKey: z.enum(["freeTour", "generalContact", "bookMeetingRoom"]),

    [F.bookMeetingRoom]: z.enum(["true", "false"]).optional(),

    [F.fullName]: z.string().min(3, { message: "Please enter your full name" }),

    [F.companyName]: z.string().trim().optional(),

    [F.email]: z
      .email({ message: "Please enter a valid email address" })
      .trim(),

    [F.contactNumber]: z
      .string()
      .optional()
      .refine((v) => !v || v.trim().length > 0, {
        message: "Invalid phone number",
      }),

    [F.qMessage]: z.string().min(2, { message: "Please enter your message" }),

    [F.preferredDate]: z.string().optional(),
    [F.preferredTime]: z.string().optional(),

    [F.roomType]: z.string().optional(),
    [F.attendeeCount]: z.string().optional(),
    [F.tenantType]: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const isFreeTour = data.ctaKey === "freeTour";
    const isRoomBooking =
      data.ctaKey === "bookMeetingRoom" || data[F.bookMeetingRoom] === "true";

    if (isFreeTour || isRoomBooking) {
      if (!data[F.preferredDate]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.preferredDate],
          message: "Please select a preferred date",
        });
      }

      if (!data[F.preferredTime]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.preferredTime],
          message: "Please select a preferred time",
        });
      }
    }

    if (isRoomBooking) {
      if (!data[F.tenantType]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.tenantType],
          message: "Please select whether you are an existing tenant or a new customer",
        });
      }
    }
  });

export type Enquiry = z.output<typeof EnquirySchema>;
export type EnquiryForm = z.infer<typeof EnquirySchema>;
export type EnquiryState = ActionState<EnquiryForm>;
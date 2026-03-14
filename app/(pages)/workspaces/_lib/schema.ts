// app/join-workspaces/application/_lib/schema.ts

import {
  ActionState,
  BooleanKeys,
  BooleanSchema,
} from "@/app/_lib/utils/actionHelper";
import { z } from "zod";
import { APPLICATION_FIELDS as F } from "./constant";

export const ApplicationSchema = z
  .object({
    [F.application]: z.string().min(1, "Membership is required"),

    [F.businessName]: z.string().min(2, "Please enter your business name"),
    [F.abn]: z.string().optional(),
    [F.industry]: z.string().optional(),

    [F.address]: z.string().min(3, "Please enter your address"),
    [F.city]: z.string().min(2, "Please enter your city"),
    [F.state]: z.string().min(1, "Please select a state"),
    [F.postcode]: z.string().min(3, "Please enter your postcode"),

    [F.firstName]: z.string().min(2, "Please enter your first name"),
    [F.lastName]: z.string().min(2, "Please enter your last name"),
    [F.email]: z.email("Please enter a valid email address").trim(),
    [F.phoneNumber]: z.string().min(6, "Please enter your phone number"),

    [F.billingSameAsAbove]: BooleanSchema,

    [F.billingAddress]: z.string().optional(),
    [F.billingCity]: z.string().optional(),
    [F.billingState]: z.string().optional(),
    [F.billingPostcode]: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const same = data[F.billingSameAsAbove];

    if (!same) {
      if (!data[F.billingAddress]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.billingAddress],
          message: "Please enter billing address",
        });
      }

      if (!data[F.billingCity]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.billingCity],
          message: "Please enter billing city",
        });
      }

      if (!data[F.billingState]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.billingState],
          message: "Please select billing state",
        });
      }

      if (!data[F.billingPostcode]?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: [F.billingPostcode],
          message: "Please enter billing postcode",
        });
      }
    }
  });

export type Application = z.output<typeof ApplicationSchema>;
export type ApplicationFormData = z.infer<typeof ApplicationSchema>;
export type ApplicationState = ActionState<ApplicationFormData>;
export type ApplicationBooleanKeys = BooleanKeys<Application>;

export const BooleanFields = [
  F.billingSameAsAbove,
] as const satisfies readonly ApplicationBooleanKeys[];

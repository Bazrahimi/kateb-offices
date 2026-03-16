//app/(pages)/workspaces/_lib/assets/offering/dedicatedDesk.ts
import type { WorkspaceOfferingPlan } from "../../definitions";

export const dedicatedDeskOfferings: WorkspaceOfferingPlan[] = [
  {
    id: "dedicated-desk",
    label: "Dedicated Desk",
    access: "Every Day",
    price: "$250",
    inclusions: [
      "Access to shared amenities",
      "24/7 access",
      "Lockable storage",
      "High-speed internet",
      "Discount (50%) meetings rooms",
      "Reception Services",
      "Business Address"
    ],
  },
];

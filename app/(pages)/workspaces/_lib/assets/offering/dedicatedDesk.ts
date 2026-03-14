export type DedicatedDesk = {
  id: string;
  label: string;
  access?: string;
  price: string;
  inclusions?: string[];
};

export const dedicatedDesk: DedicatedDesk[] = [
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

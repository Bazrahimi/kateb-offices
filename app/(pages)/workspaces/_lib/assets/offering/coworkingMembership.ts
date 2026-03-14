export type CoworkingMemberships = {
  id: string;
  label: string;
  access?: string;
  price: string;
  inclusions?: string[];
};

export const coworkingMemberships: CoworkingMemberships[] = [
  {
    id: "everyday-membership",
    label: "Everyday Membership",
    access: "Every Day",
    price: "$150",
    inclusions: [
      "Access to shared amenities",
      "24/7 access",
      "High-speed internet",
      "Discount (50%) meetings rooms",
    ],
  },
];

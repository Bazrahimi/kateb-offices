export type CoworkingMemberships = {
  id: string;
  label: string;
  access: string;
  price: string;
  inclusions?: string[];
};

export const coworkingMemberships: CoworkingMemberships[] = [
  {
    id: "everyday-membership",
    label: "Everyday Membership",
    access: "Monday to Friday",
    price: "$150",
    inclusions: [
      "Access to shared amenities",
      "24/7 access",
      "Discount (50%) meetings rooms",
    ],
  },
];

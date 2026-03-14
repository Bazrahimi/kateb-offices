export type VirtualOffices = {
  id: string;
  label: string;
  access?: string;
  price: string;
  inclusions?: string[];
};

export const virtualOffices: VirtualOffices[] = [
  {
    id: "virtual-Offices",
    label: "Virtual Offices",
    price: "$40",
    inclusions: [
      "Mailbox and mail handling",
      "Discount meetings rooms and hot-desk",
      "Reception Services",
      "Business Address",
    ],
  },
];

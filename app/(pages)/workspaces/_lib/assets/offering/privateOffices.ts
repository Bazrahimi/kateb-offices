export type PrivateOfficeStatus = "available" | "reserved" | "leased";

export type PrivateOffice = {
  id: string;
  slug: string;
  label: string;
  images: string[];
  description: string[];
  priceLabel: string;
  availableFrom: string;
  capacity: string;
  status: PrivateOfficeStatus;
  includedFeatures: string[];
  ctaLabel: string;
  officeType?: "internal" | "external" | "corner";
  furnished?: boolean;
  minimumTerm?: string;
  bondRequired?: string;
  sizeLabel?: string;
  href?: string;
};


export type PrivateOfficeCard = Pick<
  PrivateOffice,
  | "id"
  | "slug"
  | "label"
  | "images"
  | "priceLabel"
  | "capacity"
  | "status"
  | "availableFrom"
>;

export const privateOfficeRooms: PrivateOffice[] = [
  {
    id: "private-office-1",
    slug: "private-office-suite-1",
    label: "Private Office Suite 1",
    images: [
      "vacancy/internal-office/internal-office12_yil5dz.png",
      "vacancy/internal-office/private-office_lahust.png",

    ],
    description: [
      "Professional furnished private office suitable for a team of up to 4 people.",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    priceLabel: "From $1,120/month",
    availableFrom: "Available now",
    capacity: "Up to 4 people",
    status: "available",
    includedFeatures: [
      "Furnished office",
      "Shared amenities",
      "Professional business environment",
    ],
    ctaLabel: "View office",
    officeType: "internal",
    href: "/join-workspace/private-office/private-office-suite-1",
  },
];

export const privateOfficeCards: PrivateOfficeCard[] = privateOfficeRooms.map(
  ({ id, slug, label, images, priceLabel, capacity, status, availableFrom }) => ({
    id,
    slug,
    label,
    images,
    priceLabel,
    capacity,
    status,
    availableFrom,
  }),
);

export const getPrivateOfficeBySlug = (slug: string) =>
  privateOfficeRooms.find((room) => room.slug === slug) ?? null;
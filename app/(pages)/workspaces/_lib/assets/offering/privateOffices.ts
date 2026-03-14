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
    slug: "private-internal-office-suite-1",
    label: "Internal Office Suite 1",
    images: [
      "vacancy/internal-office/internal-office12_yil5dz.png",
      "vacancy/internal-office/private-office_lahust.png",
    ],
    description: [
      "Professional furnished private office suitable for a team of up to 4 people.",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    priceLabel: "From $1520/month",
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
  {
    id: "private-office-2",
    slug: "private-internal-office-suite-2",
    label: "Internal Office Suite 2",
    images: [
      "vacancy/internal-office/internal-office-12.png",
      "vacancy/internal-office/private-office_lahust.png",
    ],
    description: [
      "Professional furnished private office suitable for a team of up to 4 people.",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    priceLabel: "From $1520/month",
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
    href: "/join-workspace/private-office/private-office-suite-2",
  },

    {
    id: "private-office-3",
    slug: "private-external-office-suite-3",
    label: "external Office Suite 3",
    images: [
      "vacancy/internal-office/external-office123_qr0thb.png",
         "vacancy/internal-office/external-office1233_aqit9e.png",
    ],
    description: [
      "Professional furnished private office suitable for a team of up to 4 people.",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    priceLabel: "From $1620/month",
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
    href: "/join-workspace/private-office/private-office-suite-3",
  },
];

export const privateOfficeCards: PrivateOfficeCard[] = privateOfficeRooms.map(
  ({
    id,
    slug,
    label,
    images,
    priceLabel,
    capacity,
    status,
    availableFrom,
  }) => ({
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

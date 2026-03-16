import type { ImageMeta } from "@/app/_lib/definitions";

type PrivateOfficeStatus = "available" | "reserved" | "leased";
type OfficeType = "Internal Office" | "External Office" | "Corner Office";



export type PrivateOffice = {
  id: string;
  slug: string;
  label: string;
  images: ImageMeta[];
  description: string[];
  dimension: string;
  priceLabel: string;
  availableFrom: string;
  capacity: string;
  status: PrivateOfficeStatus;
  includedFeatures: string[];
  ctaLabel: string;
  officeType?: OfficeType;
  furnished?: boolean;
  minimumTerm?: string;
  bondRequired?: string;
  sizeLabel?: string;
};

export type PrivateOfficeCard = Pick<
  PrivateOffice,
  | "id"
  | "officeType"
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
      {
        url: "vacancy/internal-office/internal-office12_yil5dz.png",
        alt: "Internal office suite 1 main view",
      },
      {
        url: "vacancy/internal-office/private-office_lahust.png",
        alt: "Private office lounge space",
      },
    ],
    description: [
      "Professional furnished private office suitable for a team",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    dimension: "4.5 x 3.5 meters",
    priceLabel: "$1520/month",
    availableFrom: "Available now",
    capacity: "4 Person Capacity",
    status: "available",
    includedFeatures: [
      "Furnished office",
      "Shared amenities",
      "Professional business environment",
      "High-speed internet",
    ],
    ctaLabel: "View office",
    officeType: "Internal Office",
  },
  {
    id: "private-office-2",
    slug: "private-internal-office-suite-2",
    label: "Internal Office Suite 2",
    images: [
      {
        url: "vacancy/internal-office/internal-office-12.png",
        alt: "Internal office suite 2 interior",
      },
      {
        url: "vacancy/internal-office/private-office_lahust.png",
        alt: "Private office lounge space",
      },
    ],
    description: [
      "Professional furnished private office suitable for a team",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    dimension: "3.5 x 3.5 meters",
    priceLabel: "$1520/month",
    availableFrom: "Available now",
    capacity: "4 Person Capacity",
    status: "available",
    includedFeatures: [
      "Furnished office",
      "Shared amenities",
      "Professional business environment",
      "High-speed internet",
    ],
    ctaLabel: "View office",
    officeType: "Internal Office",
  },

  {
    id: "private-office-3",
    slug: "private-external-office-suite-3",
    label: "External Office Suite 3",
    images: [
      {
        url: "vacancy/internal-office/external-office123_qr0thb.png",
        alt: "External office suite 3 desk area",
      },
      {
        url: "vacancy/internal-office/external-office1233_aqit9e.png",
        alt: "External office suite 3 meeting corner",
      },
    ],
    description: [
      "Professional furnished private office suitable for a team",
      "Includes desks, chairs, storage cabinets, and access to shared amenities.",
    ],
    dimension: "3.5 x 3.5 meters",
    priceLabel: "$1620/month",
    availableFrom: "Available now",
    capacity: "4 Person Capacity",
    status: "available",
    includedFeatures: [
      "Furnished office",
      "Shared amenities",
      "Professional business environment",
      "High-speed internet",
    ],
    ctaLabel: "View office",
    officeType: "External Office",
  },
];

export const privateOfficeCards: PrivateOfficeCard[] = privateOfficeRooms.map(
  ({
    id,
    officeType,
    slug,
    label,
    images,
    priceLabel,
    capacity,
    status,
    availableFrom,
  }) => ({
    id,
    officeType,
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

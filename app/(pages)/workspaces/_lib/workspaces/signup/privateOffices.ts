import type { PrivateOfficeAds, PrivateOfficeAdsCard } from "../../definitions";
export const privateOfficeAds: PrivateOfficeAds[] = [
  {
    id: "private-office-1",
    slug: "private-internal-office-dandenong-1",
    label: "Private Internal Office 1",
    images: [
      {
        url: "vacancy/internal-office/internal-office12_yil5dz.png",
        alt: "Private internal office in Dandenong main view",
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
    slug: "private-internal-office-dandenong-2",
    label: "Private internal Office 2",
    images: [
      {
        url: "vacancy/internal-office/internal-office-12.png",
        alt: "private internal office suite 2 interior",
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
    slug: "private-external-office-dandenong-1",
    label: "Private External Office 1",
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

export const privateOfficeCards: PrivateOfficeAdsCard[] = privateOfficeAds.map(
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
  privateOfficeAds.find((office) => office.slug === slug) ?? null;

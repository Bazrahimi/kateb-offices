import { ORG_PROFILE } from "../profile";
import { publicAssets } from "../publicAssets";

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  image: string; // "/images/team/....png"
  bio?: string;
};

export type TeamSection = {
  id: string;
  title: string;
  intro: string;
  professionalTitles?: readonly string[];
  members: readonly TeamMember[];
};

export const ABOUT_TEAM: TeamSection = {
  id: "team",
  title: "Our Team",
  professionalTitles: [
    "Workspace Management",
    "Client Support",
    "Office Administration",
  ],
  intro: `${ORG_PROFILE.orgName} is supported by a professional team focused on creating a flexible, welcoming, and business-ready workspace in the heart of Dandenong.`,
  members: [
    {
      name: "Alex Danishyar",
      role: "Client Experience Coordinator",
      email: "alex@kateboffices.com.au",
      image: publicAssets.team.placeholder,
      bio: "Supports enquiries, tours, and office setup while helping businesses find the right workspace solution.",
    },
    {
      name: "Baz Rahimi",
      role: "Centre Manager",
      email: "baz@kateboffices.com.au",
      image: publicAssets.team.baz,
      bio: "Oversees day-to-day operations and helps ensure members and guests enjoy a smooth and professional workspace experience.",
    },

    {
      name: "S Ali",
      role: "Facilities Coordinator",
      email: "ali@kateboffices.com.au",
      image: publicAssets.team.placeholder,
      bio: "Helps maintain the office environment, supports day-to-day upkeep, and ensures shared spaces remain clean, functional, and welcoming for members and visitors.",
    },
    {
      name: "Samina Askari",
      role: "Reception and Client Support",
      email: "reception@kateboffices.com.au",
      image: publicAssets.team.placeholder,
      bio: "Welcomes guests, manages front-desk enquiries, and helps ensure a friendly and professional experience for members, visitors, and prospective clients.",
    },
  ],
} as const;

export type TextSection = {
  id: string;
  title: string;
  items: readonly string[];
};

export type ValuesSection = {
  id: string;
  title: string;
  items: readonly string[];
  icon?: "check";
};

export const ABOUT_INTRODUCTION: TextSection = {
  id: "introduction",
  title: `About ${ORG_PROFILE.orgName}`,
  items: [
    `${ORG_PROFILE.orgName} is a modern serviced office and flexible workspace provider located in central Dandenong. We offer fully furnished private offices, coworking options, meeting rooms, and virtual office solutions designed for professionals, startups, and growing businesses.`,
    `Positioned on Lonsdale Street in the heart of Dandenong CBD, our workspace combines convenience, presentation, and flexibility. With high-speed internet, meeting facilities, kitchen amenities, and easy access to public transport, we provide a professional environment where businesses can work, meet, and grow with confidence.`,
  ],
} as const;

export const ABOUT_SECTIONS: readonly TextSection[] = [
  {
    id: "purpose",
    title: "Our Purpose",
    items: [
      "Our purpose is to provide flexible, professional, and well-located workspace solutions that help businesses operate efficiently and present confidently. We aim to remove the hassle of traditional office setup by offering ready-to-use spaces with practical support and essential amenities included.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    items: [
      "We envision Kateb Offices as a trusted workspace destination in Dandenong where professionals, entrepreneurs, and growing teams can work in a modern environment that supports productivity, collaboration, and business growth.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    items: [
      "Kateb Offices provides fully furnished private offices, coworking spaces, meeting rooms, virtual office services, and administrative support. Our goal is to give businesses the flexibility to choose the workspace solution that fits their current needs while maintaining a professional image in a central CBD location.",
    ],
  },
  {
    id: "location",
    title: "Why Dandenong",
    items: [
      "Our location at 311 Lonsdale Street places businesses in the heart of Dandenong CBD, within walking distance of Dandenong Station, local bus stops, Thomas Street dining, banks, cafés, and retail services. This makes Kateb Offices a convenient and practical base for both daily work and client meetings.",
    ],
  },
  {
    id: "governance",
    title: "Governance and Business Structure",
    items: [
      `${ORG_PROFILE.orgName} operates as a business workspace provider. ABN: ${ORG_PROFILE.abn}.`,
    ],
  },
] as const;

export const ABOUT_VALUES: ValuesSection = {
  id: "values",
  title: "Our Values",
  icon: "check",
  items: [
    "Providing a professional and welcoming environment for every business.",
    "Supporting flexibility, convenience, and practical day-to-day operations.",
    "Creating workspaces that help businesses present well and operate with confidence.",
  ],
} as const;

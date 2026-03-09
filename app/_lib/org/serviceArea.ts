export const ORG_INDUSTRY_SECTORS = {
  BUILDING: {
    industry: "Building and Construction",
    defaultScope: "metro",
    sectors: {
      painting: "Painting and Decorating",
      builder: "Registered Builders",
      rendering: "Solid Plastering and Rendering",
    },
  },

  PROFESSIONAL: {
    industry: "Professional Services",
    defaultScope: "national",
    sectors: {
      lawyer: "Principal Lawyers",
      accountant: "Registered Tax Agent",
    },
  },

  ASSOCIATION: {
    industry: "Association",
    defaultScope: "state",
    sectors: {
      ngo: "Non-profit Organisation",
    },
  },

  TECHNOLOGY: {
    industry: "Technology",
    defaultScope: "state",
    sectors: {
      webDevelopment: "Web Applications and Software",
    },
  },

  WORKSPACE: {
    industry: "Commercial Property and Flexible Workspaces",
    defaultScope: "metro",
    sectors: {
      privateOffices: "Private Offices",
      coworking: "Coworking Spaces",
      meetingRooms: "Meeting and Conference Rooms",
      virtualOffices: "Virtual Offices",
      adminSupport: "Administrative Support Services",
    },
  },
} as const;

export type OrgIndustrySectorKey = keyof typeof ORG_INDUSTRY_SECTORS;

export type CoverageScope =
  (typeof ORG_INDUSTRY_SECTORS)[OrgIndustrySectorKey]["defaultScope"];

export type ServiceArea = {
  scope: CoverageScope;
  primaryRegion: string;
  state: string;
  country: string;
  featuredSuburbs?: string[];
  note?: string;
};

export const SERVICE_AREA: ServiceArea = {
  scope: ORG_INDUSTRY_SECTORS.WORKSPACE.defaultScope,
  primaryRegion: "Dandenong and South East Melbourne",
  state: "VIC",
  country: "Australia",
  featuredSuburbs: [
    "Dandenong",
    "Noble Park",
    "Springvale",
    "Keysborough",
    "Endeavour Hills",
    "Hallam",
    "Lynbrook",
    "Cranbourne",
    "Berwick",
    "Officer",
  ],
  note:
    "We provide flexible private offices, coworking spaces, meeting rooms, conference rooms, virtual office solutions, and administrative support in Dandenong and across Melbourne’s south-east.",
};

export const scopeLabel = (scope: string) => {
  switch (scope) {
    case "metro":
      return "Melbourne Metro";
    case "state":
      return "Victoria-Wide";
    case "national":
      return "Australia-Wide";
    default:
      return scope;
  }
};
export type LeafImage =
  | { kind: "url"; src: string }
  | { kind: "svg"; text: string };

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  description: string[];
  image: LeafImage;
  items: readonly string[];
};

export type ServiceSubCategory = {
  [key: string]: ServiceLeaf;
};

export type ServicesPage = {
  label: string;
  labelFarsi: string; //
  slug: string;
  description: readonly string[];
  image: LeafImage;
  subcategories: ServiceSubCategory;
  workspaceFee: WorkspaceFee;
};

export type WorkspaceJoin = Record<string, unknown>;

export type WorkspaceFee<TJoin extends WorkspaceJoin = WorkspaceJoin> = {
  image: string;
  capacityLabel?: string;
  priceLabel: string;
  summary: string;
  btnContent: string;
  href: string;
  join: TJoin;
};

export type CoworkingMembershipJoin = {
  everydayMembership: {
    label: string;
    access: string;
    price: string;
    inclusions?: string[];
  };
};



export type OrgRootSeo = {
  ogImagePath: string;
  themeColor: string;
  manifestPath: string;
  icons: {
    icon: string;
    apple: string;
  };
  locale: {
    default: string; // e.g. "en_AU"
    alternates?: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
};


export type ImagesArray = {
  url: string;
  alt: string;
}[];

export type ServiceLeaf = {
  label: string;
  labelFarsi: string;
  description: string[];
  image: ImagesArray;
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
  image: ImagesArray;
  subcategories: ServiceSubCategory;
};

export const KATEB_LOGO =
  "https://res.cloudinary.com/drvh5xeuw/image/upload/v1772586628/business-f/advanced/kateb-tech/metadata/apple-touch-icon_ch6pwp.png";

export const toBoolean = (raw: unknown): boolean => {
  return (
    raw === true || raw === "true" || raw === 1 || raw === "1" || raw === "on"
  );
};

export const AUS_STATES = [
  "VIC",
  "NSW",
  "QLD",
  "SA",
  "WA",
  "TAS",
  "ACT",
  "NT",
] as const;

export const formatAuDate = (date?: string) => {
  if (!date) return "";

  const d = new Date(date);

  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
};

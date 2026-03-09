export const CTA = {
  freeTour: {
    label: "a Tour",
    labelFarsi: "تور رایگان",
    message: "Hi, I’d like a tour of your office amenities: ",
    messageFarsi:
      "سلام، می‌خواهم یک بازدید رایگان از امکانات دفتر شما داشته باشم: ",
  },
} as const;

export type CtaKey = keyof typeof CTA;
export type Locale = "en" | "fa";

export const getCtaCopy = (key: CtaKey, locale: Locale) => {
  const c = CTA[key];
  return locale === "fa"
    ? { label: c.labelFarsi, message: c.messageFarsi, dir: "rtl" as const }
    : { label: c.label, message: c.message, dir: "ltr" as const };
};

export const ctaCall = (orgName: string, serviceLabel: string) =>
  `Tell ${orgName} what you need for ${serviceLabel}, and we’ll reply with clear next steps.`;

export const ctaCallFarsi = (orgNameLabel: string, serviceLabelFarsi: string) =>
  `به ${orgNameLabel} بگویید برای ${serviceLabelFarsi} به چه چیزی نیاز دارید، و ما با مراحل بعدیِ روشن پاسخ می‌دهیم.`;

export const CTA = {
  freeTour: {
    header: "Book a Tour Now",
    steps: [
      "Simply fill out the form",
      "We will be in touch to book your tour",
    ],
    // TO
    message: (service: string) => `Hi, I’d like a tour of your ${service}: `,
  },
  generalContact: {
    header: "Get in Touch",
    steps: [
      "Fill out the form with your details",
      "Our team will respond with a quick reply",
    ],
    message:(service:string) => `Hi, I’d like to inquire about your ${service}: `,
  },
} as const;

export type CtaKey = keyof typeof CTA;

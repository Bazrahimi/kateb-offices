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
    bookMeetingRoom: {
    header: "Book a Meeting or Conference Room",
    steps: [
      "Choose your preferred date, time, and room type",
      "We will confirm availability and get back to you shortly",
    ],
    message: (service: string) =>
      `Hi, I’d like to book your ${service}. Please let me know availability and pricing: `,
  },
} as const;

export type CtaKey = keyof typeof CTA;

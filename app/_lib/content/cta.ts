export const CTA = {
  freeTour: {
    message: "Hi, I’d like a tour of your office amenities: ",
    header: "Book a Tour Now",
    steps: ["Simply fill out the form", "We will be in touch to book your tour" ],
  },
  generalContact: {
    message: "Hi, I’d like to inquire about your services: ",
    header: "Get in Touch",
    steps: ["Fill out the form with your details", "Our team will respond with a quick reply"],
  }
} as const;



export type CtaKey = keyof typeof CTA;

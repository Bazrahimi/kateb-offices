export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type DayHours =
  | { closed: true }
  | { closed: false; open: string; close: string }; // "09:00", "17:30"

export type OpeningHours = Record<DayKey, DayHours>;

export const OPENING_HOURS: OpeningHours = {
  mon: { closed: false, open: "00:00", close: "23:59" },
  tue: { closed: false, open: "00:00", close: "23:59" },
  wed: { closed: false, open: "00:00", close: "23:59" },
  thu: { closed: false, open: "00:00", close: "23:59" },
  fri: { closed: false, open: "00:00", close: "23:59" },
  sat: { closed: false, open: "00:00", close: "23:59" },
  sun: { closed: false, open: "00:00", close: "23:59" },
};

export type FAQItem = {
  q: string;
  a: string;
};

export const CONTACT_FAQS: readonly FAQItem[] = [
  {
    q: "What workspace options do you offer?",
    a: "We offer fully furnished private offices, coworking spaces, meeting rooms, virtual office services, and administrative support for professionals, startups, and growing teams.",
  },
  {
    q: "Can I book a tour of Kateb Offices?",
    a: "Yes. You can contact us to arrange a tour of the workspace and discuss which office or service best suits your business needs.",
  },
  {
    q: "Do you offer flexible lease terms?",
    a: "Yes. We provide flexible workspace options designed to suit different business sizes and requirements, from shorter-term arrangements to longer-term office solutions.",
  },
  {
    q: "Is the office accessible outside normal business hours?",
    a: "Yes. Kateb Offices offers 24/7 access, including weekends and public holidays, for businesses that need flexible working hours.",
  },
  {
    q: "What amenities are included?",
    a: "Our workspace includes high-speed internet, furnished offices, meeting room access, kitchen facilities, reception support, mail handling, cleaning, and other professional amenities depending on the service selected.",
  },
  {
    q: "Is Kateb Offices close to public transport?",
    a: "Yes. We are located at 311 Lonsdale Street in central Dandenong, within walking distance of Dandenong Station and very close to local bus stops, cafés, and other amenities.",
  },
] as const;


export const SOCIAL_MEDIA = {
  facebook: "https://www.facebook.com/profile.php?id=100088555071597",
 
  tiktok: "", // leave empty or undefined if not used
} as const;

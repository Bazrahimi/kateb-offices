import { WorkspaceKey } from "./definitions";

export const publicAssets = {
  images: {
    hero: "/images/hero.png",
    ogImage: "/images/og_image.png",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  workspacesSvg: {
    coworkingMembership: "/images/svg/Coworking-Membership-Icon.svg",
    dedicatedDesk: "/images/svg/Dedicated-Desk-Icon.svg",
    meetingRooms: "/images/svg/Meeting-Rooms-Icon.svg",
    memberMeetingRooms: "/images/svg/Meeting-Rooms-members-Icon.svg",
    privateOffices: "/images/svg/Private-Office-Icon.svg",
    virtualOffices: "/images/svg/Virtual-Office-Icon.svg",
  } satisfies Record<WorkspaceKey, string>,

  team: {
    placeholder: "images/team/avatar.svg",
  },
} as const;



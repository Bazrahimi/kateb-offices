import { publicAssets } from "../../../../_lib/org/publicAssets";
import { workspacesRoutes as routes } from "../../../../_lib/routes/joinWorkspacesRoutes";
import type {
  CoworkingMembershipJoin,
  WorkspaceOffering,
} from "../definitions";
const svg = publicAssets.offeringSvg;
import type { Offering } from "../definitions";

const coworkingMembershipOffering: WorkspaceOffering<CoworkingMembershipJoin> =
  {
    image: svg.coworkingMembership,
    capacityLabel: "1+",
    priceLabel: "From $150/month",
    summary:
      "Flexible workspace access with shared amenities, ideal for freelancers, remote workers, and professionals who need a productive environment without a long-term lease.",
    btnContent: "Sign Up",
    href: routes.coworkingMembership(),
    join: {
      everydayMembership: {
        label: "Everyday Membership",
        access: "Monday to Friday",
        price: "$150",
        inclusions: [
          "Access to shared amenities",
          "24/7 access",
          "Discount (50%) meetings rooms",
        ],
      },
    },
  };

const dedicatedDeskFee: WorkspaceOffering = {
  image: svg.dedicatedDesk,
  capacityLabel: "1",
  priceLabel: "From $195/month",
  summary:
    "A permanent workstation within our coworking space, giving you a consistent desk, secure environment, and 24/7 access to shared facilities.",
  btnContent: "Sign Up",
  href: routes.dedicatedDesk(),
  join: {},
};

const virtualOfficeFee: WorkspaceOffering = {
  image: svg.virtualOffice,
  priceLabel: "From $30/month",
  summary:
    "Establish a professional business presence with a premium address, mail handling, and optional call answering services without renting a physical office.",
  btnContent: "Sign Up",
  href: routes.virtualOffice(),
  join: {},
};

const privateOfficeFee: WorkspaceOffering = {
  image: svg.privateOffice,
  capacityLabel: "1–12+",
  priceLabel: "From $1120/month",
  summary:
    "Fully furnished private office suites designed for businesses that need privacy, security, and a professional workspace with flexible terms.",
  btnContent: "See Availability",
  href: routes.privateOffice(),
  join: {},
};

const meetingRoomsFee: WorkspaceOffering = {
  image: svg.meetingRooms,
  capacityLabel: "2–25",
  priceLabel: "From $5/hr",
  summary:
    "Professional meeting and conference rooms suitable for client meetings, team discussions, presentations, and workshops.",
  btnContent: "Sign Up",
  href: routes.meetingRooms(),
  join: {},
};

export const OFFERINGS: Record<string, Offering> = {
  privateOffices: {
    label: "Private Offices",
    offering: privateOfficeFee,
  },

  coworkingMembership: {
    label: "Coworking Spaces",
    offering: coworkingMembershipOffering,
  },

  dedicatedDesk: {
    label: "Dedicated Desk",
    offering: dedicatedDeskFee,
  },

  meetingRooms: {
    label: "Meeting & Conference Rooms",
    offering: meetingRoomsFee,
  },
  virtualOffices: {
    label: "Virtual Offices",
    offering: virtualOfficeFee,
  },
};

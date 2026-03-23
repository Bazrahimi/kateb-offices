import Image from "next/image";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import type { TeamSection, TeamMember } from "@/app/_lib/org/orgPages/aboutUs";

function Avatar({ member }: { member: TeamMember }) {
  return (
    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 ring-2 ring-gray-200 ring-offset-2">
      <Image
        src={member.image}
        alt={`${member.name} profile`}
        fill
        className="object-cover"
        sizes="96px"
      />
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="mx-auto w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
      <Avatar member={member} />

      <Header className="text-gray-900" as="h3" size="xs">
        {member.name}
      </Header>

      <Header className="text-gray-600" as="h4" size="xs">
        {member.role}
      </Header>

      <a
        href={`mailto:${member.email}`}
        className="mt-1 block text-sm text-blue-700 hover:underline"
      >
        {member.email}
      </a>

      {member.bio ? (
        <P className="mt-3 text-left leading-relaxed text-gray-700" size="sm">
          {member.bio}
        </P>
      ) : null}
    </article>
  );
}

export function TeamGrid({ team }: { team: TeamSection }) {
  if (!team.members.length) return null;

  return (
    <section aria-labelledby={`${team.id}-heading`}>
      <Header
        as="h2"
        size="sm"
        id={`${team.id}-heading`}
        align="left"
        className="text-gray-50"
      >
        {team.title}
      </Header>

      <P className="mt-2 max-w-2xl text-sm text-gray-100">
        {team.intro}{" "}
        {team.professionalTitles?.length ? (
          <>
            <span className="font-medium">Expertise: </span>
            {team.professionalTitles.join(", ")}.
          </>
        ) : null}
      </P>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {team.members.map((member) => (
          <TeamCard key={`${member.name}-${member.role}`} member={member} />
        ))}
      </div>
    </section>
  );
}
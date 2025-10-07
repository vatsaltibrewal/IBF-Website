import Image from "next/image";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Highlighter } from "@/components/magicui/highlighter";
import {
  boardMembers,
  advisorsAndMentors,
  seniorCore,
  juniorCore,
  type TeamMember,
} from "@/lib/team-data";

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <NeonGradientCard
    className="h-96 w-full max-w-sm"
    neonColors={{ firstColor: "#ff2975", secondColor: "#00FFF1" }}
  >
    <div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={128}
        height={128}
        className="h-32 w-32 rounded-full border-2 border-gray-700 object-cover"
      />
      <div>
        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-gray-400">{member.post}</p>
      </div>
      <div className="flex items-center gap-4">
        {member.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </NeonGradientCard>
);

const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
  <section className="mb-16 w-full">
    <h2 className="mb-12 text-center text-4xl font-bold text-white">{title}</h2>
    {members.length > 0 ? (
      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    ) : (
      <p className="text-center text-lg text-gray-500 italic">
        Revealing Soon...
      </p>
    )}
  </section>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full px-4 pt-28 pb-16 md:px-8">
      <div className="container mx-auto">
        <h1 className="mb-20 text-center text-5xl font-bold text-white md:text-6xl">
          <Highlighter
            action="underline"
            color="#007CF0"
            strokeWidth={4}
            animationDuration={1000}
          >
            Meet the IBF Team
          </Highlighter>
        </h1>
        <TeamSection title="Board Members" members={boardMembers} />
        <TeamSection title="Advisors & Mentors" members={advisorsAndMentors} />
        <TeamSection title="Senior Core Members" members={seniorCore} />
        <TeamSection title="Junior Core Members" members={juniorCore} />
      </div>
    </div>
  );
}
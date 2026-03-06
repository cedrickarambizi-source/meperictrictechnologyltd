import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
  category?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const isCEO = member.role === "Founder & CEO";

  return (
    <div
      className={`
        bg-card rounded-[18px] overflow-hidden transition-all duration-300 ease-out group
        shadow-[0_10px_26px_rgba(0,0,0,0.14)]
        hover:-translate-y-2 hover:shadow-[0_16px_34px_rgba(0,0,0,0.2)]
        ${isCEO ? "border-2 border-primary" : ""}
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-[320px] sm:h-[280px] lg:h-[300px] w-full block">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: "center 25%", imageRendering: "auto", backfaceVisibility: "hidden" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/5" />
      </div>

      {/* Content */}
      <div className="p-[22px] text-center">
        {isCEO && (
          <span className="inline-block mb-1.5 px-3 py-[5px] text-[11px] font-semibold text-primary-foreground bg-primary rounded-full tracking-wide">
            Founder & CEO
          </span>
        )}
        <h3 className="font-bold text-lg text-foreground mt-2 mb-1 tracking-tight">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-primary mb-1.5">
          {member.role}
        </p>
        <p className="text-[13px] text-muted-foreground leading-relaxed mb-3.5 line-clamp-2">
          {member.description}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-2.5 mt-3.5">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-[hsl(var(--accent-blue)/0.08)] flex items-center justify-center transition-all duration-300 ease-out hover:bg-primary hover:scale-105 group/icon"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="h-4 w-4 text-primary group-hover/icon:text-primary-foreground transition-colors duration-300 ease-out" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-[hsl(var(--accent-blue)/0.08)] flex items-center justify-center transition-all duration-300 ease-out hover:bg-primary hover:scale-105 group/icon"
            aria-label={`${member.name} Email`}
          >
            <Mail className="h-4 w-4 text-primary group-hover/icon:text-primary-foreground transition-colors duration-300 ease-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;


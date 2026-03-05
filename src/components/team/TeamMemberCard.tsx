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
        bg-white rounded-2xl p-[22px] transition-all duration-300 group
        shadow-[0_12px_30px_rgba(15,47,107,0.12)]
        hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(15,47,107,0.20)]
        ${isCEO ? "border-2 border-[#0F2F6B]" : "border border-[rgba(15,47,107,0.08)]"}
      `}
    >
      {/* Image */}
      <div className="relative rounded-xl overflow-hidden mb-5 bg-[#F7F9FC]" style={{ height: 260 }}>
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="text-center">
        {isCEO && (
          <span className="inline-block mb-2 px-3 py-1 text-[11px] font-semibold text-white bg-[#0F2F6B] rounded-full tracking-wide">
            Founder & CEO
          </span>
        )}
        <h3 className="font-bold text-lg text-[#0B1320] mb-1 tracking-tight">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-[#0F2F6B] mb-2">
          {member.role}
        </p>
        <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
          {member.description}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-2">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center transition-all duration-300 hover:bg-[#0F2F6B] group/icon"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="h-4 w-4 text-[#0F2F6B] group-hover/icon:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center transition-all duration-300 hover:bg-[#0F2F6B] group/icon"
            aria-label={`${member.name} Email`}
          >
            <Mail className="h-4 w-4 text-[#0F2F6B] group-hover/icon:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

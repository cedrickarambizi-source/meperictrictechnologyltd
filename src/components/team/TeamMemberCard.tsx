import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isVisible: boolean;
}

const TeamMemberCard = ({ member, index, isVisible }: TeamMemberCardProps) => {
  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/70">
        {/* 1:1 Aspect Ratio Image Container */}
        <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-slate-900">
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top brightness-105 contrast-105"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="font-semibold text-lg text-white mb-1 tracking-tight">
            {member.name}
          </h3>
          <p className="text-slate-400 text-sm font-medium mb-3">
            {member.role}
          </p>
          <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
            {member.description}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-2">
            <a
              href="#"
              className="p-2 bg-slate-700/50 rounded-lg hover:bg-primary transition-colors duration-300"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="h-4 w-4 text-slate-300" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-700/50 rounded-lg hover:bg-primary transition-colors duration-300"
              aria-label={`${member.name} Email`}
            >
              <Mail className="h-4 w-4 text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

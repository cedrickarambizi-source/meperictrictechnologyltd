import { CheckCircle } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Project Image - Original Colors */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-bold text-xl lg:text-2xl text-white drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 lg:p-8 space-y-6">
        {/* Project Details (if available) */}
        {project.details && project.details.length > 0 && (
          <div className="space-y-3">
            {project.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-start gap-3 text-sm">
                <span className="font-medium text-foreground min-w-[140px]">
                  {detail.label}:
                </span>
                <span className="text-muted-foreground">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* What We Have Done Section */}
        <div className={project.details && project.details.length > 0 ? "border-t pt-6" : ""}>
          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2 text-lg">
            <span className="w-8 h-0.5 bg-mep-orange"></span>
            What We Have Done
          </h4>
          <ul className="space-y-2.5">
            {project.activities.map((activity, actIndex) => (
              <li key={actIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

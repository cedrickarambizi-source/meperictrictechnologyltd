import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const toSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/case-study/${toSlug(project.title)}`}
      className="block bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
            project.status === "completed"
              ? "bg-primary/90 text-primary-foreground"
              : "bg-mep-orange text-white"
          }`}>
            {project.status === "completed" ? "Completed" : "Ongoing"}
          </span>
        </div>

        {/* Categories */}
        <div className="absolute bottom-12 left-4 right-4 flex flex-wrap gap-1.5">
          {project.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
              {cat}
            </span>
          ))}
          {project.categories.length > 3 && (
            <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
              +{project.categories.length - 3}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-bold text-lg lg:text-xl text-white drop-shadow-lg leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Activities preview */}
      <div className="p-5">
        <ul className="space-y-2">
          {project.activities.slice(0, 3).map((activity, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{activity}</span>
            </li>
          ))}
          {project.activities.length > 3 && (
            <li className="text-xs text-primary font-medium pl-6">
              +{project.activities.length - 3} more activities →
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;

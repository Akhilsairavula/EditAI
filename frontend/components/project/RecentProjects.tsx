import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

type RecentProjectsProps = {
  projects: Project[];
};

export default function RecentProjects({
  projects,
}: RecentProjectsProps) {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recent Projects
        </h2>

        <span className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-300">
          {projects.length} Project{projects.length !== 1 ? "s" : ""}
        </span>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">
          <h3 className="text-lg font-semibold text-white">
            No projects yet
          </h3>

          <p className="mt-2 text-slate-400">
            Upload your first video to create a project.
          </p>
        </div>
      ) : (
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              size={project.size}
              updated={project.updated}
            />
          ))}
        </div>
      )}
    </section>
  );
}
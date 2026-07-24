import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Travel_Vlog.mp4",
    size: "245 MB",
    updated: "2 min ago",
  },
  {
    title: "Podcast_Episode.mp4",
    size: "1.2 GB",
    updated: "Yesterday",
  },
  {
    title: "Instagram_Reel.mp4",
    size: "68 MB",
    updated: "Today",
  },
];

export default function RecentProjects() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Projects
      </h2>

      <div className="grid gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            size={project.size}
            updated={project.updated}
          />
        ))}
      </div>
    </section>
  );
}
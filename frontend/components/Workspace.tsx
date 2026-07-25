"use client";

import UploadCard from "./UploadCard";
import RecentProjects from "./project/RecentProjects";
import { useProjectStore } from "@/store/projectStore";

export default function Workspace() {
  const projects = useProjectStore((state) => state.projects);
  const addProject = useProjectStore((state) => state.addProject);

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-white">
          Welcome to EditAI 👋
        </h1>

        <p className="mb-8 text-slate-400">
          Upload a video to create a new project.
        </p>

        <UploadCard onUpload={addProject} />

        <RecentProjects projects={projects} />
      </div>
    </main>
  );
}
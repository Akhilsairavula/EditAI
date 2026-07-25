"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useProjectStore } from "@/store/projectStore";

export default function EditorPage() {
  const params = useParams();
  const projects = useProjectStore((state) => state.projects);

  const project = useMemo(
    () => projects.find((p) => p.id === params.id),
    [projects, params.id]
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b1120] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="mt-2 text-slate-400">
            Go back to the dashboard and upload or select a project.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      <div className="mx-auto max-w-7xl p-8">
        <h1 className="text-3xl font-bold">🎬 {project.title}</h1>

        <p className="mt-2 text-slate-400">
          {project.size} • {project.updated}
        </p>

        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Media Panel */}
          <div className="col-span-2 rounded-2xl bg-slate-900 p-4">
            <h2 className="mb-4 font-semibold">Media</h2>

            <div className="rounded-lg bg-slate-800 p-3 text-sm">
              {project.title}
            </div>
          </div>

          {/* Preview */}
          <div className="col-span-8 rounded-2xl bg-slate-900 p-4">
            <h2 className="mb-4 font-semibold">Video Preview</h2>

            <video
              src={project.videoUrl}
              controls
              className="h-[450px] w-full rounded-xl bg-black"
            />
          </div>

          {/* AI */}
          <div className="col-span-2 rounded-2xl bg-slate-900 p-4">
            <h2 className="mb-4 font-semibold">AI Assistant</h2>

            <button className="w-full rounded-lg bg-blue-600 px-4 py-3 transition hover:bg-blue-700">
              ✨ Remove Silence
            </button>

            <button className="mt-3 w-full rounded-lg bg-slate-800 px-4 py-3 transition hover:bg-slate-700">
              🎬 Auto Captions
            </button>

            <button className="mt-3 w-full rounded-lg bg-slate-800 px-4 py-3 transition hover:bg-slate-700">
              📱 Create Shorts
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6 rounded-2xl bg-slate-900 p-6">
          <h2 className="mb-4 font-semibold">Timeline</h2>

          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-slate-700 text-slate-400">
            Timeline Coming Soon...
          </div>
        </div>
      </div>
    </main>
  );
}
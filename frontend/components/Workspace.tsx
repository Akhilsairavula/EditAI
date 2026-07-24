import UploadCard from "@/components/UploadCard";
import RecentProjects from "@/components/project/RecentProjects";

export default function Workspace() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <h1 className="text-4xl font-bold text-white">
        Welcome back, Creator 👋
      </h1>

      <p className="mt-3 text-slate-400">
        Upload your next video and let AI do the hard work.
      </p>

      <UploadCard />

      <RecentProjects />
    </main>
  );
}
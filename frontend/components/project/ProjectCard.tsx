import { Play, Clock, HardDrive } from "lucide-react";

type ProjectCardProps = {
  title: string;
  size: string;
  updated: string;
};

export default function ProjectCard({
  title,
  size,
  updated,
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20">
            <Play className="h-7 w-7 text-blue-400" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>

            <div className="mt-2 flex gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <HardDrive size={15} />
                {size}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={15} />
                {updated}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
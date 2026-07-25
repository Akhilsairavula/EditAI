"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Project } from "@/types/project";

type ProjectStore = {
  projects: Project[];
  addProject: (file: File) => void;
};

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      projects: [],

      addProject: (file: File) => {
        const project: Project = {
          id: crypto.randomUUID(),
          title: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          updated: "Just now",
          videoUrl: URL.createObjectURL(file),
        };

        set((state) => ({
          projects: [project, ...state.projects],
        }));
      },
    }),
    {
      name: "editai-projects",
    }
  )
);
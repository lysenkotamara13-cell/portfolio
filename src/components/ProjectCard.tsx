"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";

const categoryColors: Record<string, string> = {
  Automation:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "Data Engineering":
    "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Analytics:
    "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  "FP&A":
    "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Reporting:
    "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
};

export default function ProjectCard({ project }: { project: Project }) {
  const colorClass =
    categoryColors[project.category] ??
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";

  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colorClass}`}
        >
          {project.category}
        </span>
        {(project.demoUrl || project.githubUrl) && (
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-4 flex-1">
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.slice(0, 4).map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tool}
          </span>
        ))}
        {project.tools.length > 4 && (
          <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
            +{project.tools.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import type { Project } from "@/content/projects";

const categoryColors: Record<string, string> = {
  Automation:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "Data Engineering":
    "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Analytics:
    "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
};

export default function ProjectCard({ project }: { project: Project }) {
  const colorClass =
    categoryColors[project.category] ??
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colorClass}`}
        >
          {project.category}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
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
    </Link>
  );
}

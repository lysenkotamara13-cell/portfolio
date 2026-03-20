import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { projects } from "@/content/projects";

const skills = [
  "Anaplan",
  "SQL",
  "Hive",
  "Python",
  "REST APIs",
  "SAP BusinessObjects",
  "SmartView",
  "Excel",
  "Financial Modeling",
  "Data Visualization",
  "Data Lake",
  "CSV/ETL Pipelines",
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Selected work from my experience in financial analytics and data
            engineering.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-zinc-200 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills &amp; Tools
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Technologies and platforms I work with regularly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-zinc-200 py-20 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
            I&apos;m currently exploring new opportunities in financial
            analytics and data engineering. Feel free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tamara@example.com"
              className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

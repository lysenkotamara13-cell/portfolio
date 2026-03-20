import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import SkillBadge from "@/components/SkillBadge";

export const metadata: Metadata = {
  title: "Resume",
};

const education = [
  {
    degree: "Bachelor of Science in Finance",
    school: "University",
    year: "2021",
  },
];

const certifications = [
  "Anaplan Model Builder",
  "SQL Advanced",
  "Financial Modeling & Valuation",
];

const coreSkills = [
  "Anaplan",
  "SQL / Hive",
  "Python",
  "REST API Integration",
  "SAP BusinessObjects",
  "SmartView",
  "Excel / Financial Modeling",
  "Data Visualization",
  "ETL / Data Pipelines",
  "Budgeting & Forecasting",
  "Variance Analysis",
  "P&L Reporting",
];

export default function ResumePage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Resume
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              My professional experience, education, and skills.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Download PDF
          </a>
        </div>

        {/* Experience */}
        <div className="mt-14">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <div className="mt-6">
            <Timeline />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {coreSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <div className="mt-6 space-y-4">
            {education.map((edu, i) => (
              <div key={i}>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {edu.school} &middot; {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Certifications
          </h2>
          <ul className="mt-6 space-y-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

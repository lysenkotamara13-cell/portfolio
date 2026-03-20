interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  description: string;
}

const experience: TimelineEntry[] = [
  {
    period: "2024 — Present",
    title: "Senior Financial Analyst",
    company: "Pure Storage",
    description:
      "Automated Anaplan reporting via Bulk API. Built monthly AOP analytics pipeline covering P&L, headcount, and revenue across business units. Designed saved exports and orchestration scripts for 8+ report views.",
  },
  {
    period: "2023 — 2024",
    title: "Financial Analyst",
    company: "Zion Bank",
    description:
      "Built debit card expense forecasting model integrating SmartView, Hive data lake, and SAP BusinessObjects data. Created SQL query pipelines, trained team on data lake access, and delivered monthly dashboards for executive review.",
  },
  {
    period: "2021 — 2023",
    title: "FP&A Analyst",
    company: "Previous Role",
    description:
      "Developed financial models for budgeting and forecasting. Managed plan-vs-actuals reporting and variance analysis. Partnered with business unit leaders on quarterly planning cycles.",
  },
];

export default function Timeline() {
  return (
    <div className="relative space-y-0">
      {experience.map((entry, i) => (
        <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
          <div className="flex flex-col items-center">
            <div className="flex h-3 w-3 items-center justify-center rounded-full border-2 border-blue-600 bg-white dark:border-blue-400 dark:bg-zinc-950" />
            {i < experience.length - 1 && (
              <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
            )}
          </div>
          <div className="-mt-0.5 flex-1 pb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {entry.period}
            </p>
            <h3 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {entry.title}
            </h3>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {entry.company}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {entry.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

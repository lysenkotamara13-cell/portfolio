interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
}

const experience: TimelineEntry[] = [
  {
    period: "Aug 2025 — Present",
    title: "Senior Financial Analyst",
    company: "EverPure (Pure Storage)",
    location: "Santa Clara, CA",
    bullets: [
      "Subject-matter expert for consolidated P&L and headcount reporting, delivering weekly, monthly, and quarterly forecast and variance analysis packages to finance leadership.",
      "Manage large, complex financial data sets across NetSuite, planning tools, and HR systems; build advanced Excel models and QA checks for income statement and headcount reporting.",
      "Cross-functional liaison between Corporate FP&A, accounting, HR, and functional finance, resolving data discrepancies and aligning forecasts ahead of close.",
    ],
  },
  {
    period: "May 2024 — Aug 2025",
    title: "Finance Manager",
    company: "AVbuilder (AI Solutions for AV Industry)",
    location: "Sunnyvale, CA",
    bullets: [
      "Built FP&A from scratch for an AI-powered SaaS platform: designed integrated models for budgeting, forecasting, KPI tracking, and weekly exec reviews.",
      "Created board-level financial models and investor decks integrating ARR, CAC, LTV, cohorts, and cash runway — shaping capital allocation and funding strategy.",
      "Partnered with CEO/CFO on investor Q&A and earnings scripts; reduced preparation time by 25% through reusable analysis templates.",
    ],
  },
  {
    period: "Dec 2023 — May 2024",
    title: "Senior Financial Analyst",
    company: "Adobe",
    location: "San Jose, CA",
    bullets: [
      "Directed Opex and headcount forecasting across digital media R&D portfolios.",
      "Built scenario models for pricing/packaging — informing $50M incremental ARR guidance and supporting investor communications.",
      "Automated Tableau variance dashboards used across the earnings preparation cycle.",
    ],
  },
  {
    period: "Jul 2023 — Dec 2023",
    title: "Senior Financial Analyst",
    company: "Stanford University — School of Medicine",
    location: "Palo Alto, CA",
    bullets: [
      "Produced quarterly financial health and risk reports for Board of Trustees, driving $5M resource reallocation to high-impact programs.",
      "Re-engineered budgeting processes with performance dashboards and KPIs.",
    ],
  },
  {
    period: "Jan 2019 — Jul 2023",
    title: "Senior Financial Analyst / Accountant",
    company: "Palo Alto University",
    location: "Palo Alto, CA",
    bullets: [
      "Identified cost-saving opportunities delivering ~15% expense reduction while maintaining service quality.",
      "Partnered with product and R&D teams to forecast engineering spend against roadmap deliverables.",
    ],
  },
  {
    period: "Jan 2016 — May 2018",
    title: "Business Manager",
    company: "University of California, Irvine",
    location: "Irvine, CA",
    bullets: [
      "Managed a $25M housing budget serving 18,000 employees; delivered board-level reporting and variance analyses.",
    ],
  },
  {
    period: "Jul 2013 — Sep 2015",
    title: "Business Analyst — Markets & IB Operations",
    company: "Royal Bank of Scotland (Division)",
    location: "Warsaw, Poland",
    bullets: [],
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
              {entry.company} &middot; {entry.location}
            </p>
            {entry.bullets.length > 0 && (
              <ul className="mt-2 space-y-1">
                {entry.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

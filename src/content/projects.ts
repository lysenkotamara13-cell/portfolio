export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  problem: string;
  approach: string;
  outcome: string;
  tools: string[];
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "fpa-from-scratch-ai-saas",
    title: "Built FP&A from Scratch for AI SaaS Startup",
    summary:
      "Designed the entire FP&A function for an AI-powered SaaS platform — integrated models for budgeting, forecasting, KPI tracking, and board-level reporting.",
    description: [
      "Stood up the full FP&A function at AVbuilder, an AI startup, with no prior finance infrastructure in place.",
      "Created integrated financial models covering budgeting, monthly/quarterly forecasting, KPI dashboards, and weekly executive review packages.",
      "Built board-level investor decks incorporating ARR, CAC, LTV, cohort analysis, and cash runway modeling to support fundraising and capital allocation decisions.",
    ],
    problem:
      "AVbuilder had no FP&A function, no standardized financial models, and no recurring reporting cadence. Leadership needed a scalable finance infrastructure to support fundraising, operational planning, and investor communications.",
    approach:
      "Designed integrated models from the ground up: budgeting, forecasting, and KPI tracking frameworks tied to the SaaS business model. Built reusable analysis templates and established a centralized source-of-truth for financial data. Partnered directly with the CEO/CFO on investor Q&A preparation and earnings scripts.",
    outcome:
      "Delivered a fully operational FP&A function enabling data-driven decision making. Reduced investor preparation time by 25%. Provided clear capital allocation and cash runway visibility that shaped funding strategy.",
    tools: ["Financial Modeling", "SaaS KPIs", "Excel", "Scenario Planning", "Board Reporting"],
    category: "FP&A",
    featured: true,
  },
  {
    slug: "consolidated-pl-headcount-reporting",
    title: "Consolidated P&L & Headcount Reporting at Scale",
    summary:
      "Subject-matter expert for consolidated P&L and headcount reporting at EverPure (Pure Storage), delivering weekly, monthly, and quarterly forecast packages.",
    description: [
      "Managed large, complex financial data sets across NetSuite, planning tools, and HR systems to produce accurate income statement and headcount reporting.",
      "Built advanced Excel models with QA checks to ensure data accuracy, integrity, and timeliness across all reporting cycles.",
      "Served as cross-functional liaison between Corporate FP&A, accounting, HR, and functional finance teams to resolve discrepancies and align forecasts ahead of close.",
    ],
    problem:
      "Finance leadership needed reliable, timely P&L and headcount reporting across multiple systems and business units, with data flowing from NetSuite, Anaplan, and HR platforms that often had discrepancies.",
    approach:
      "Built centralized reporting models that pulled from multiple source systems with built-in QA checks. Established a recurring reconciliation process across departments and contributed to the design and enhancement of planning tools including NetSuite, Adaptive, Anaplan, and Tableau.",
    outcome:
      "Delivered consistent, accurate reporting packages used by finance leadership for decision making. Improved forecast alignment across departments and reduced close-cycle friction.",
    tools: ["NetSuite", "Anaplan", "Adaptive", "Tableau", "Excel", "PowerPoint"],
    category: "Reporting",
    featured: true,
  },
  {
    slug: "scenario-models-pricing-arr",
    title: "Scenario Models for Pricing & $50M ARR Guidance",
    summary:
      "Built pricing and packaging scenario models at Adobe that informed $50M incremental ARR guidance and supported investor communications.",
    description: [
      "Directed Opex and headcount forecasting across digital media R&D portfolios at Adobe, ensuring alignment of systems inputs and Talent Acquisition reconciliations.",
      "Developed scenario models analyzing pricing and packaging strategies to quantify revenue impact and inform executive decision making.",
      "Automated Tableau variance dashboards used throughout the earnings preparation cycle, improving speed and accuracy of narrative alignment with Corporate IR.",
    ],
    problem:
      "Adobe needed rigorous scenario analysis for pricing and packaging decisions across its digital media portfolio, with tight integration to investor reporting and earnings preparation.",
    approach:
      "Built flexible scenario models that could evaluate multiple pricing strategies and their ARR impact. Automated variance reporting via Tableau dashboards to streamline the earnings prep cycle and ensure narrative consistency with IR.",
    outcome:
      "Informed $50M incremental ARR guidance with scenario-backed analysis. Improved earnings preparation speed and accuracy. Reduced forecast error through tighter accrual and month-end close processes.",
    tools: ["Tableau", "Excel", "Financial Modeling", "Scenario Planning"],
    category: "Analytics",
    featured: true,
  },
  {
    slug: "board-reporting-resource-allocation",
    title: "Board Reporting & $5M Resource Reallocation",
    summary:
      "Produced quarterly financial health reports for Stanford School of Medicine Board of Trustees, driving $5M reallocation to high-impact programs.",
    description: [
      "Created comprehensive quarterly financial health and risk reports for the Board of Trustees at Stanford University School of Medicine.",
      "Re-engineered budgeting processes with performance dashboards and KPIs, increasing transparency across academic and research units.",
      "Analysis directly informed resource allocation decisions, shifting $5M toward high-impact programs.",
    ],
    problem:
      "The School of Medicine needed clear, actionable financial reporting for the Board of Trustees to make strategic resource allocation decisions across academic and research programs.",
    approach:
      "Redesigned the reporting framework with performance dashboards and KPIs tailored for board-level consumption. Built risk analysis into quarterly packages to surface underperforming areas and high-impact investment opportunities.",
    outcome:
      "Drove $5M resource reallocation to high-impact programs. Increased financial transparency across units and established a repeatable reporting cadence for the Board.",
    tools: ["Financial Reporting", "KPI Dashboards", "Excel", "Data Visualization"],
    category: "FP&A",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

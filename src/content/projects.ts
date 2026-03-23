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
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "saas-metrics-dashboard",
    title: "SaaS Metrics Dashboard",
    summary:
      "Interactive dashboard tracking ARR/MRR, churn, CAC/LTV, cohort retention, and cash runway — built with Python and Streamlit using synthetic SaaS data.",
    description: [
      "Built a fully interactive financial dashboard that visualizes key SaaS metrics including Monthly and Annual Recurring Revenue, customer churn rates, unit economics (CAC vs LTV), and cash runway projections.",
      "Includes a cohort retention heatmap showing customer retention patterns by signup month, with scenario controls to model different growth and churn assumptions in real time.",
      "Uses synthetic data that mirrors real SaaS business patterns, demonstrating the kind of KPI tracking and board-level reporting I built at AVbuilder.",
    ],
    problem:
      "SaaS companies need real-time visibility into their key financial metrics — revenue growth, unit economics, retention, and cash position — to make informed decisions about capital allocation and growth strategy.",
    approach:
      "Designed a dashboard architecture with synthetic data generation that mirrors real SaaS patterns. Built interactive Plotly visualizations for each metric category with scenario planning controls that let users adjust growth and churn assumptions to model outcomes.",
    outcome:
      "A production-quality dashboard demonstrating end-to-end SaaS financial analytics — from data modeling through interactive visualization and scenario planning.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
    category: "Analytics",
    featured: true,
    githubUrl: "https://github.com/lysenkotamara13-cell/saas-metrics-dashboard",
    demoUrl: "https://huggingface.co/spaces/lysenkotamara13/saas-metrics-dashboard",
  },
  {
    slug: "budget-variance-analyzer",
    title: "Budget vs Actuals Variance Analyzer",
    summary:
      "Upload budget data and instantly generate variance analysis with materiality flags, department drill-down, waterfall charts, and exportable reports.",
    description: [
      "Built a variance analysis tool that takes budget and actuals data (via CSV upload or built-in sample) and automatically computes dollar and percentage variances for every line item.",
      "Features configurable materiality thresholds that flag significant variances, department-level drill-down filtering, and a waterfall chart showing the bridge from budget to actuals.",
      "Includes a downloadable CSV export of the full variance report with all computed fields.",
    ],
    problem:
      "FP&A teams spend hours manually computing variances in Excel, formatting reports, and identifying material items. This process is repeated monthly and is prone to formula errors.",
    approach:
      "Built an automated pipeline that ingests structured budget data, computes all variance metrics, applies configurable materiality thresholds, and generates visual reports including grouped bar charts, variance percentage views, and a budget-to-actuals waterfall — all in seconds.",
    outcome:
      "Demonstrates the ability to automate core FP&A workflows — turning a multi-hour manual Excel process into an instant, interactive, and error-free analysis.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "FP&A",
    featured: true,
    githubUrl: "https://github.com/lysenkotamara13-cell/budget-variance-analyzer",
    demoUrl: "https://huggingface.co/spaces/lysenkotamara13/budget-variance-analyzer",
  },
  {
    slug: "financial-forecasting-engine",
    title: "Financial Forecasting Engine",
    summary:
      "Generate forecasts using multiple statistical methods with best/base/worst scenario overlays, confidence intervals, and exportable projections.",
    description: [
      "Built a forecasting tool that applies multiple statistical methods (exponential smoothing, linear trend, moving average) to historical financial data and projects future values with confidence intervals.",
      "Includes scenario planning controls that overlay best-case and worst-case growth/decline assumptions on top of the base statistical forecast.",
      "Features cumulative forecast comparison across scenarios and month-over-month growth rate analysis.",
    ],
    problem:
      "Financial forecasting typically requires manual model building in Excel with limited ability to quickly compare methods or run scenario analysis. Teams need faster iteration on assumptions.",
    approach:
      "Implemented three statistical forecasting methods with automatic parameter optimization. Added a scenario planning layer that applies growth/decline adjustments, and built visualizations showing base forecast with 95% confidence intervals alongside best/worst case projections.",
    outcome:
      "A tool that demonstrates forecasting methodology, scenario planning, and statistical rigor — core competencies for any FP&A role requiring budget and revenue projection.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "statsmodels"],
    category: "Analytics",
    featured: true,
    githubUrl: "https://github.com/lysenkotamara13-cell/financial-forecasting-engine",
    demoUrl: "https://huggingface.co/spaces/lysenkotamara13/financial-forecasting-engine",
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
    tools: ["NetSuite", "Anaplan", "Adaptive", "Tableau", "Python", "Excel"],
    category: "Reporting",
    featured: false,
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
    featured: false,
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
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

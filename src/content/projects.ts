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
    slug: "anaplan-api-automation",
    title: "Anaplan Bulk API Automation",
    summary:
      "Automated monthly financial reporting by building a pipeline that pulls data from Anaplan via the Bulk API, replacing a manual export process.",
    description: [
      "Designed and implemented an automated data pipeline that extracts financial planning data from Anaplan models using the Bulk Export API.",
      "Created 8 saved export definitions covering P&L reports, OPEX/COGS breakdowns, headcount plans, and revenue forecasts across multiple fiscal year versions.",
      "The pipeline runs monthly, pulling CSV data for downstream analytics and variance analysis, eliminating hours of manual export work each cycle.",
    ],
    problem:
      "The FP&A team was manually exporting 8 separate views from Anaplan each month for the AOP analytics report. This was time-consuming, error-prone, and created delays in the monthly close process.",
    approach:
      "Defined saved exports in the Anaplan model mirroring each manual view, configured to output flat CSV with all versions included. Built a script layer to orchestrate the Bulk API calls — authenticate, trigger exports, poll for completion, and download results for automated ingestion.",
    outcome:
      "Reduced monthly reporting preparation from several hours to minutes. Enabled consistent, repeatable data extraction with full version comparison (current vs. prior forecasts). Freed the team to focus on analysis rather than data gathering.",
    tools: ["Anaplan", "Bulk API", "Python", "CSV", "REST APIs"],
    category: "Automation",
    featured: true,
  },
  {
    slug: "debit-card-forecasting",
    title: "Debit Card Expense Forecasting Model",
    summary:
      "Built an end-to-end forecasting system for banking card expenses, integrating data from multiple sources into a structured prediction model.",
    description: [
      "Developed a comprehensive forecasting model for debit card program expenses at a major regional bank.",
      "Integrated historical transaction data from SmartView, Hive data lake queries, and SAP BusinessObjects reports into a unified analytical framework.",
      "Created structured CSV templates for inputs, drivers, forecasts, scenarios, and validation — enabling repeatable monthly forecasting with scenario analysis capabilities.",
    ],
    problem:
      "The bank lacked a systematic approach to forecasting debit card program expenses. Data was scattered across multiple systems (SmartView, data lake, BOBJ) with no unified model for prediction or scenario planning.",
    approach:
      "Mapped all data sources and created a template-driven architecture with 13 structured CSV layers — from raw inputs and historical data through drivers, forecasts, and validation. Built Hive queries for data lake extraction and integrated SmartView pulls for actuals. Designed the model to support multiple scenarios and plan-vs-forecast comparisons.",
    outcome:
      "Delivered a repeatable forecasting framework adopted by the FP&A team. Enabled quarterly plan-vs-actuals tracking and scenario analysis for budget planning. Trained team members on data lake access and SQL querying.",
    tools: [
      "SQL",
      "Hive",
      "SmartView",
      "SAP BusinessObjects",
      "Excel",
      "Data Modeling",
    ],
    category: "Data Engineering",
    featured: true,
  },
  {
    slug: "financial-dashboard-reporting",
    title: "Financial Dashboard & P&L Reporting",
    summary:
      "Designed and delivered monthly financial dashboards and P&L reports for executive review, tracking performance across business units.",
    description: [
      "Created comprehensive monthly dashboards consolidating P&L performance, OPEX tracking, and variance analysis across multiple business units and cost centers.",
      "Standardized reporting formats for executive review, covering quarterly and annual views with drill-down capability from L1 (division) to L4 (cost center) hierarchy levels.",
      "Established a recurring review cadence with stakeholders to track forecast accuracy and identify emerging trends.",
    ],
    problem:
      "Executive leadership needed a clear, consistent view of financial performance across the organization, with the ability to compare actuals against plan and prior forecasts at various levels of granularity.",
    approach:
      "Built layered report views starting from high-level P&L summaries down to detailed cost center breakdowns. Incorporated multi-version comparisons (AOP, current forecast, prior periods) and automated data refreshes to minimize manual preparation.",
    outcome:
      "Enabled data-driven decision making at the executive level with clear visibility into financial performance, variance drivers, and trend analysis. Reduced dashboard preparation time and improved forecast accuracy tracking.",
    tools: ["Anaplan", "Excel", "Data Visualization", "Financial Modeling"],
    category: "Analytics",
    featured: true,
  },
  {
    slug: "data-lake-sql-pipeline",
    title: "Data Lake & SQL Query Pipeline",
    summary:
      "Built SQL query pipelines against enterprise data lakes, enabling self-service analytics and training team members on data access.",
    description: [
      "Developed optimized Hive SQL queries against the enterprise data lake to extract transactional and financial data for analysis and forecasting.",
      "Created documentation and training materials for team members to access and query the data lake independently.",
      "Built a library of reusable query templates covering active accounts, transaction volumes, and fee structures.",
    ],
    problem:
      "Critical business data was locked in the enterprise data lake with no established query patterns for the FP&A team. Team members lacked access and training to pull data independently.",
    approach:
      "Worked with data engineering to establish access patterns and query filters. Wrote optimized Hive queries with proper partitioning and filtering. Created step-by-step guides and conducted training sessions for the team.",
    outcome:
      "Empowered the FP&A team with self-service data access. Reduced dependency on data engineering for routine queries. Built a reusable query library that accelerated future analysis projects.",
    tools: [
      "Hive SQL",
      "Data Lake",
      "SAP BusinessObjects",
      "Documentation",
      "Training",
    ],
    category: "Data Engineering",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

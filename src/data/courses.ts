export interface Lesson {
  id: string;
  title: string;
  duration: string;
  previewAvailable?: boolean;
}

export interface CurriculumModule {
  id: string;
  moduleNumber: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  categorySlug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  hours: number;
  lessonsCount: number;
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  hasCertificate: boolean;
  internshipOpportunity: boolean;
  instructor: {
    name: string;
    role: string;
    company: string;
    bio: string;
    avatarInitials: string;
  };
  learningOutcomes: string[];
  prerequisites: string[];
  curriculum: CurriculumModule[];
  toolsCovered: string[];
}

export const COURSES: Course[] = [
  {
    id: "course-1",
    slug: "credit-analysis-fundamentals",
    title: "Credit Analysis & Risk Underwriting",
    shortDescription: "Master corporate credit evaluation, debt-service coverage, financial ratios, and Indian banking lending norms.",
    description: "Built in direct partnership with senior banking underwriters, this program equips students with the exact analytical toolkit used by Indian commercial banks and NBFCs to evaluate borrower creditworthiness, analyze balance sheets, and structure term loans.",
    category: "Finance & Banking",
    categorySlug: "finance-banking",
    level: "Intermediate",
    duration: "6 Weeks",
    hours: 28,
    lessonsCount: 36,
    studentsCount: 3140,
    rating: 4.9,
    reviewsCount: 420,
    price: 1999,
    originalPrice: 4999,
    isPopular: true,
    isFeatured: true,
    hasCertificate: true,
    internshipOpportunity: true,
    instructor: {
      name: "Debabrata Mohanty",
      role: "VP of Credit Risk",
      company: "Ex-HDFC Bank & NBFC Advisory",
      bio: "14+ years underwriting SME & corporate credit lines across eastern and western India with ₹2,400+ Cr disbursed portfolios.",
      avatarInitials: "DM",
    },
    learningOutcomes: [
      "Interpret audited balance sheets, profit and loss, and cash flows for credit health",
      "Calculate DSCR, Current Ratio, Interest Coverage, and TOL/ATNW metrics",
      "Identify early warning signals and red flags in corporate bank statements",
      "Draft institutional Credit Appraisal Memos (CAM) from scratch",
      "Navigate RBI guidelines on priority sector lending and NPA classification",
    ],
    prerequisites: ["Basic understanding of accounting principles", "Comfort with spreadsheets"],
    toolsCovered: ["MS Excel", "RBI CAM Templates", "CIBIL Commercial Analytics", "MCA Portal"],
    curriculum: [
      {
        id: "mod-1",
        moduleNumber: 1,
        title: "Foundations of Commercial Lending & Credit Bureau Framework",
        duration: "4.5 hrs",
        lessons: [
          { id: "l-1-1", title: "Introduction to Indian Banking Ecosystem & NBFCs", duration: "32 mins", previewAvailable: true },
          { id: "l-1-2", title: "Deconstructing CIBIL, Experian, and CRIF High Mark reports", duration: "48 mins", previewAvailable: true },
          { id: "l-1-3", title: "The 5 C's of Credit: Character, Capacity, Capital, Collateral, Condition", duration: "50 mins" },
        ],
      },
      {
        id: "mod-2",
        moduleNumber: 2,
        title: "Financial Statement Spreading & Ratio Deep-Dive",
        duration: "7.0 hrs",
        lessons: [
          { id: "l-2-1", title: "Balance Sheet Horizontal & Vertical Analysis", duration: "55 mins" },
          { id: "l-2-2", title: "Working Capital Assessment: Operating Cycle & MPBF Formulas", duration: "65 mins" },
          { id: "l-2-3", title: "Cash Flow vs Accrual Profitability in High-Growth Firms", duration: "50 mins" },
        ],
      },
      {
        id: "mod-3",
        moduleNumber: 3,
        title: "Bank Statement Analysis & Forensic Fraud Detection",
        duration: "6.5 hrs",
        lessons: [
          { id: "l-3-1", title: "Detecting circular transactions and check bounces", duration: "45 mins" },
          { id: "l-3-2", title: "GST vs Bank turnover reconciliation techniques", duration: "60 mins" },
          { id: "l-3-3", title: "Live Case Study: Evaluating a ₹5 Cr manufacturing loan request", duration: "80 mins" },
        ],
      },
      {
        id: "mod-4",
        moduleNumber: 4,
        title: "Structuring the Credit Appraisal Memo (CAM) & Defense",
        duration: "10.0 hrs",
        lessons: [
          { id: "l-4-1", title: "Executive summary, risk mitigants, and covenant drafting", duration: "75 mins" },
          { id: "l-4-2", title: "Presenting to Sanction Committee & Defense simulation", duration: "90 mins" },
          { id: "l-4-3", title: "Capstone Submission: Real-world borrower evaluation project", duration: "120 mins" },
        ],
      },
    ],
  },
  {
    id: "course-2",
    slug: "excel-for-finance",
    title: "Excel for Finance & Financial Modeling",
    shortDescription: "Build dynamic 3-statement financial models, automated DCF valuations, and institutional dashboards.",
    description: "Move beyond simple spreadsheets. Learn the keyboard-only modeling speed, financial formula architectures, scenario sensitivity tables, and valuation models requested by private equity analysts and corporate finance desks.",
    category: "Finance & Banking",
    categorySlug: "finance-banking",
    level: "Beginner",
    duration: "4 Weeks",
    hours: 20,
    lessonsCount: 28,
    studentsCount: 4890,
    rating: 4.8,
    reviewsCount: 650,
    price: 999,
    originalPrice: 2999,
    isPopular: true,
    isFeatured: true,
    hasCertificate: true,
    internshipOpportunity: true,
    instructor: {
      name: "Sneha Agrawal",
      role: "Senior Financial Analyst",
      company: "Ex-KPMG Deals Advisory",
      bio: "Chartered Accountant specializing in M&A valuations and financial planning for early-stage fintech ventures.",
      avatarInitials: "SA",
    },
    learningOutcomes: [
      "Master essential shortcuts to model without ever touching a mouse",
      "Build dynamic Three-Statement interconnected operating models",
      "Construct sensitivity tables and scenario managers for investor pitches",
      "Automate monthly MIS dashboards with INDEX-MATCH and XLOOKUP formulas",
      "Perform DCF (Discounted Cash Flow) valuations with WACC modeling",
    ],
    prerequisites: ["None. Starts from fundamentals to institutional grade."],
    toolsCovered: ["Microsoft Excel 365", "Google Sheets", "Power Query"],
    curriculum: [
      {
        id: "mod-e1",
        moduleNumber: 1,
        title: "Zero-Mouse Navigation & High-Speed Formula Core",
        duration: "4.0 hrs",
        lessons: [
          { id: "le-1-1", title: "Wall Street formatting conventions & grid hygiene", duration: "35 mins", previewAvailable: true },
          { id: "le-1-2", title: "Dynamic lookup stacks: XLOOKUP, INDEX, MATCH, CHOOSE", duration: "50 mins", previewAvailable: true },
          { id: "le-1-3", title: "Error handling and data validation rules", duration: "40 mins" },
        ],
      },
      {
        id: "mod-e2",
        moduleNumber: 2,
        title: "The 3-Statement Connected Financial Engine",
        duration: "8.0 hrs",
        lessons: [
          { id: "le-2-1", title: "Historical income statement and revenue drivers", duration: "60 mins" },
          { id: "le-2-2", title: "Capex schedules, depreciation water-falls, and debt amortization", duration: "75 mins" },
          { id: "le-2-3", title: "Balancing the balance sheet automatically through cash sweep", duration: "90 mins" },
        ],
      },
      {
        id: "mod-e3",
        moduleNumber: 3,
        title: "Valuation & Executive Pitch Dashboards",
        duration: "8.0 hrs",
        lessons: [
          { id: "le-3-1", title: "Unlevered free cash flow and terminal value calculations", duration: "70 mins" },
          { id: "le-3-2", title: "Two-way data tables for valuation sensitivity matrices", duration: "65 mins" },
          { id: "le-3-3", title: "Executive summary dashboard with clean Sparklines & KPI dials", duration: "80 mins" },
        ],
      },
    ],
  },
  {
    id: "course-3",
    slug: "full-stack-development",
    title: "Full Stack Web Engineering (React, Node, TypeScript)",
    shortDescription: "Build and deploy production SaaS products with modern component architecture, REST/tRPC APIs, and SQL.",
    description: "Designed for engineering students aiming for high-growth product startups. You build 4 tangible portfolio products from bare repository to production CI/CD, handling user authentication, payments, database migrations, and clean UI engineering.",
    category: "Web Development",
    categorySlug: "web-development",
    level: "Intermediate",
    duration: "10 Weeks",
    hours: 52,
    lessonsCount: 64,
    studentsCount: 3820,
    rating: 4.9,
    reviewsCount: 512,
    price: 2499,
    originalPrice: 6999,
    isPopular: true,
    isFeatured: true,
    hasCertificate: true,
    internshipOpportunity: true,
    instructor: {
      name: "Vikram Senapati",
      role: "Lead Systems Architect",
      company: "Ex-Razorpay & Fintech Lead",
      bio: "10+ years engineering scale systems processing millions of daily transactions. Mentor to 1,200+ engineering grads.",
      avatarInitials: "VS",
    },
    learningOutcomes: [
      "Ship full-stack applications with React 19, Next.js, and TypeScript",
      "Architect relational schemas and query optimization using PostgreSQL & Prisma",
      "Implement secure JWT auth, sessions, and Razorpay webhook integrations",
      "Deploy scalable Dockerized workloads on cloud infrastructure",
      "Pass technical system design and live coding rounds at funded startups",
    ],
    prerequisites: ["Familiarity with basic JavaScript or Python programming"],
    toolsCovered: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Docker", "Git"],
    curriculum: [
      {
        id: "mod-fs1",
        moduleNumber: 1,
        title: "Modern TypeScript & Advanced Component Architecture",
        duration: "12.0 hrs",
        lessons: [
          { id: "lfs-1-1", title: "TypeScript generics, utility types, and strict type safety", duration: "55 mins", previewAvailable: true },
          { id: "lfs-1-2", title: "Component lifecycle, state machines, and compound component patterns", duration: "75 mins" },
          { id: "lfs-1-3", title: "Server vs Client Components in production Next.js", duration: "80 mins" },
        ],
      },
      {
        id: "mod-fs2",
        moduleNumber: 2,
        title: "Backend API Systems & Database Architecture",
        duration: "18.0 hrs",
        lessons: [
          { id: "lfs-2-1", title: "PostgreSQL schema design, indexing, and foreign key cascades", duration: "90 mins" },
          { id: "lfs-2-2", title: "Idempotent payment webhooks & ledger transactions", duration: "85 mins" },
          { id: "lfs-2-3", title: "Authentication: OAuth2, session tokens, and RBAC permissions", duration: "70 mins" },
        ],
      },
      {
        id: "mod-fs3",
        moduleNumber: 3,
        title: "Capstone SaaS Project & Deployment",
        duration: "22.0 hrs",
        lessons: [
          { id: "lfs-3-1", title: "Project kickoff: Multi-tenant student job portal architecture", duration: "110 mins" },
          { id: "lfs-3-2", title: "End-to-end testing with Vitest and Playwright", duration: "80 mins" },
          { id: "lfs-3-3", title: "Production deployment, automated migrations, and monitoring", duration: "90 mins" },
        ],
      },
    ],
  },
  {
    id: "course-4",
    slug: "ai-tools-masterclass",
    title: "AI Tools & Workflow Automation Masterclass",
    shortDescription: "Leverage modern LLMs, autonomous coding assistants, and n8n automations to 10x your professional output.",
    description: "Stop using AI like a basic search engine. This intensive training shows you how product builders, finance analysts, and marketers chain prompts, build structured data extraction pipelines, and automate repetitive enterprise workflows.",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    level: "Beginner",
    duration: "3 Weeks",
    hours: 15,
    lessonsCount: 22,
    studentsCount: 2780,
    rating: 4.8,
    reviewsCount: 380,
    price: 799,
    originalPrice: 2499,
    isPopular: false,
    isFeatured: true,
    hasCertificate: true,
    internshipOpportunity: true,
    instructor: {
      name: "Amanjot Kaur",
      role: "Head of AI Solutions",
      company: "NextWave Tech Labs",
      bio: "Pioneering LLM integration frameworks for Indian BFSI companies. Speaker at AI India Summit.",
      avatarInitials: "AK",
    },
    learningOutcomes: [
      "Master structured output prompting (JSON mode, schemas, system prompts)",
      "Build zero-code automated workflows with n8n, Make, and webhook triggers",
      "Automate document processing: extracting data from PDFs, invoices, and bank statements",
      "Use AI code assistants to write, debug, and document production code faster",
      "Understand ethical boundaries, data leakage, and enterprise security guardrails",
    ],
    prerequisites: ["Curiosity to automate tasks; no deep math background needed"],
    toolsCovered: ["Claude", "ChatGPT Pro", "Cursor", "n8n", "Perplexity", "Make"],
    curriculum: [
      {
        id: "mod-ai1",
        moduleNumber: 1,
        title: "Advanced Prompt Engineering & Reasoning Protocols",
        duration: "4.5 hrs",
        lessons: [
          { id: "lai-1-1", title: "Chain-of-thought, tree-of-thought, and few-shot calibration", duration: "40 mins", previewAvailable: true },
          { id: "lai-1-2", title: "Configuring system instructions and temperature parameters", duration: "45 mins" },
        ],
      },
      {
        id: "mod-ai2",
        moduleNumber: 2,
        title: "Automating Workflows with Connectors & APIs",
        duration: "6.0 hrs",
        lessons: [
          { id: "lai-2-1", title: "Connecting Google Sheets to LLM APIs for automated enrichment", duration: "50 mins" },
          { id: "lai-2-2", title: "Building an automated invoice parsing pipeline in n8n", duration: "65 mins" },
        ],
      },
      {
        id: "mod-ai3",
        moduleNumber: 3,
        title: "Practical AI Copilots for Developers & Analysts",
        duration: "4.5 hrs",
        lessons: [
          { id: "lai-3-1", title: "Agentic coding in Cursor & Antigravity IDE", duration: "55 mins" },
          { id: "lai-3-2", title: "Final Project: Building an internal operations bot", duration: "75 mins" },
        ],
      },
    ],
  },
  {
    id: "course-5",
    slug: "resume-and-linkedin",
    title: "ATS Resume Architecture & LinkedIn Personal Branding",
    shortDescription: "Construct high-conversion tech & finance resumes, optimize LinkedIn SEO, and attract inbound recruiters.",
    description: "90% of student resumes are rejected by ATS filters before a human eye sees them. This masterclass transforms your resume into an outcome-driven document with quantified bullet points and shows you how to rank on recruiter search filters.",
    category: "Career Preparation",
    categorySlug: "career-preparation",
    level: "Beginner",
    duration: "2 Weeks",
    hours: 10,
    lessonsCount: 16,
    studentsCount: 5640,
    rating: 4.9,
    reviewsCount: 890,
    price: 499,
    originalPrice: 1999,
    isPopular: false,
    isFeatured: true,
    hasCertificate: true,
    internshipOpportunity: false,
    instructor: {
      name: "Pooja Trivedi",
      role: "Lead Talent Partner",
      company: "Ex-Flipkart & Zomato Campus Hiring",
      bio: "Screened 40,000+ candidate profiles and conducted campus placement drives across tier 1 and tier 2 Indian universities.",
      avatarInitials: "PT",
    },
    learningOutcomes: [
      "Format resumes to score 90%+ on Taleo, Workday, and Lever ATS systems",
      "Write high-impact impact bullets using the Google XYZ formula",
      "Position non-technical or tier-2/3 background into high-leverage assets",
      "Optimize LinkedIn headline, summary, and experience for search algorithms",
      "Execute warm outbound outreach to hiring managers with high reply rates",
    ],
    prerequisites: ["A draft resume or existing LinkedIn profile"],
    toolsCovered: ["Jobscan", "LaTeX Resume Templates", "LinkedIn Creator Mode", "Notion"],
    curriculum: [
      {
        id: "mod-r1",
        moduleNumber: 1,
        title: "The ATS Anatomy & Resume Engineering",
        duration: "4.0 hrs",
        lessons: [
          { id: "lr-1-1", title: "How Applicant Tracking Systems parse and rank applications", duration: "35 mins", previewAvailable: true },
          { id: "lr-1-2", title: "The XYZ Formula: Action Verb + Metric + Business Context", duration: "45 mins" },
          { id: "lr-1-3", title: "Live teardown of 10 student resumes (Good vs Bad)", duration: "60 mins" },
        ],
      },
      {
        id: "mod-r2",
        moduleNumber: 2,
        title: "LinkedIn Inbound Engine & Cold Networking",
        duration: "6.0 hrs",
        lessons: [
          { id: "lr-2-1", title: "Algorithm optimization: keywords, creator mode, and skills endorsements", duration: "50 mins" },
          { id: "lr-2-2", title: "Writing thoughtful content that founders and VPs engage with", duration: "45 mins" },
          { id: "lr-2-3", title: "Cold DM templates that yield 35%+ response rates", duration: "55 mins" },
        ],
      },
    ],
  },
  {
    id: "course-6",
    slug: "interview-preparation",
    title: "Placement Interview Mastery & Case Studies",
    shortDescription: "Conquer behavioral rounds, case study interviews, guesstimates, and group discussions for top firms.",
    description: "Everything you need to clear campus placements and off-campus hiring drives. Features live mock recordings, framework breakdowns for consulting and product cases, and structured answers for tough behavioral questions.",
    category: "Career Preparation",
    categorySlug: "career-preparation",
    level: "Intermediate",
    duration: "4 Weeks",
    hours: 18,
    lessonsCount: 24,
    studentsCount: 3410,
    rating: 4.9,
    reviewsCount: 470,
    price: 1499,
    originalPrice: 3999,
    isPopular: false,
    isFeatured: true,
    hasCertificate: true,
    internshipOpportunity: true,
    instructor: {
      name: "Rohan Varma",
      role: "Strategy & Operations Lead",
      company: "Ex-McKinsey & Co.",
      bio: "BITS Pilani alumnus. Cracked 7 tier-1 campus offers and has mentored 400+ students into consulting and product firms.",
      avatarInitials: "RV",
    },
    learningOutcomes: [
      "Master the STAR method for behavioral and situational questions",
      "Structure guesstimates with logical MECE frameworks",
      "Solve profitability and market entry consulting case studies step-by-step",
      "Demonstrate structured communication in competitive group discussions",
      "Confidently negotiate first-offer CTC and signing bonuses",
    ],
    prerequisites: ["Applicable to final-year students and early-career job seekers"],
    toolsCovered: ["Miro Case Boards", "Mock Interview Rubrics", "Salary Benchmarks"],
    curriculum: [
      {
        id: "mod-i1",
        moduleNumber: 1,
        title: "Behavioral & HR Round Strategy",
        duration: "5.0 hrs",
        lessons: [
          { id: "li-1-1", title: "'Tell me about yourself' — the narrative hook that wins the room", duration: "35 mins", previewAvailable: true },
          { id: "li-1-2", title: "Structuring STAR answers for failure, conflict, and leadership", duration: "50 mins" },
          { id: "li-1-3", title: "Smart questions to ask the interviewer at the close", duration: "30 mins" },
        ],
      },
      {
        id: "mod-i2",
        moduleNumber: 2,
        title: "Guesstimates & Structured Problem Solving",
        duration: "6.5 hrs",
        lessons: [
          { id: "li-2-1", title: "Top-down vs bottom-up estimation models with Indian demographics", duration: "55 mins" },
          { id: "li-2-2", title: "Live guesstimate walk-throughs: Flights in air, chai cups sold", duration: "60 mins" },
        ],
      },
      {
        id: "mod-i3",
        moduleNumber: 3,
        title: "Case Studies & Group Discussion Dynamics",
        duration: "6.5 hrs",
        lessons: [
          { id: "li-3-1", title: "Profitability decline framework: Revenues vs cost structure", duration: "65 mins" },
          { id: "li-3-2", title: "Winning GD roles: The initiator, moderator, and synthesizer", duration: "50 mins" },
        ],
      },
    ],
  },
  {
    id: "course-7",
    slug: "data-analytics-with-python-and-powerbi",
    title: "Data Analytics with SQL, Python & PowerBI",
    shortDescription: "Extract, clean, and visualize enterprise datasets to drive executive commercial decisions.",
    description: "Learn hands-on data analytics using real Indian business cases: fintech churn prediction, retail basket analysis, and logistics supply chain tracking. Graduate with portfolio-ready interactive dashboards.",
    category: "Data Analytics",
    categorySlug: "data-analytics",
    level: "Intermediate",
    duration: "8 Weeks",
    hours: 38,
    lessonsCount: 44,
    studentsCount: 2950,
    rating: 4.8,
    reviewsCount: 395,
    price: 1799,
    originalPrice: 4499,
    isPopular: false,
    isFeatured: false,
    hasCertificate: true,
    internshipOpportunity: true,
    instructor: {
      name: "Ananya Mishra",
      role: "Principal Analytics Manager",
      company: "Swiggy & Analytics Advisor",
      bio: "IIT Kharagpur alum. 9+ years building predictive dashboards for consumer apps and logistics networks.",
      avatarInitials: "AM",
    },
    learningOutcomes: [
      "Write advanced SQL queries with window functions, CTEs, and cohort aggregations",
      "Perform exploratory data analysis (EDA) with Python pandas, seaborn, and numpy",
      "Design interactive executive PowerBI dashboards with DAX formulas",
      "Translate raw technical metrics into actionable business recommendations",
    ],
    prerequisites: ["Basic math and logical reasoning"],
    toolsCovered: ["PostgreSQL", "Python", "PowerBI", "Jupyter", "Pandas"],
    curriculum: [
      {
        id: "mod-da1",
        moduleNumber: 1,
        title: "Advanced SQL for Business Intelligence",
        duration: "12.0 hrs",
        lessons: [
          { id: "lda-1-1", title: "Complex joins, subqueries, and grouping sets", duration: "55 mins", previewAvailable: true },
          { id: "lda-1-2", title: "Window functions: RANK, DENSE_RANK, LEAD, and LAG", duration: "65 mins" },
        ],
      },
      {
        id: "mod-da2",
        moduleNumber: 2,
        title: "Python Data Analysis & Visualization",
        duration: "14.0 hrs",
        lessons: [
          { id: "lda-2-1", title: "Data cleaning workflows with Pandas", duration: "60 mins" },
          { id: "lda-2-2", title: "Exploratory analysis on 100K Indian e-commerce transactions", duration: "75 mins" },
        ],
      },
      {
        id: "mod-da3",
        moduleNumber: 3,
        title: "Executive PowerBI Dashboard Deployment",
        duration: "12.0 hrs",
        lessons: [
          { id: "lda-3-1", title: "Data modeling, star schema, and relationship cardinalities", duration: "60 mins" },
          { id: "lda-3-2", title: "DAX calculations for Year-over-Year revenue growth", duration: "70 mins" },
        ],
      },
    ],
  },
  {
    id: "course-8",
    slug: "executive-workplace-communication",
    title: "Executive Workplace Communication & Influence",
    shortDescription: "Communicate with clarity, present with executive presence, and write crisp business briefs.",
    description: "Technical skills open doors, but communication determines career trajectory. Learn how to write clear memos, lead meetings with senior leaders, negotiate deliverables, and manage upward effectively.",
    category: "Communication Skills",
    categorySlug: "communication-skills",
    level: "Beginner",
    duration: "3 Weeks",
    hours: 12,
    lessonsCount: 18,
    studentsCount: 2190,
    rating: 4.9,
    reviewsCount: 310,
    price: 699,
    originalPrice: 2199,
    isPopular: false,
    isFeatured: false,
    hasCertificate: true,
    internshipOpportunity: false,
    instructor: {
      name: "Karan Johar Bhasin",
      role: "Communications Coach",
      company: "Ex-Corporate Lead & TEDx Speaker",
      bio: "Coached 3,500+ professionals across tech startups, IT services, and financial institutions in high-stakes public speaking.",
      avatarInitials: "KB",
    },
    learningOutcomes: [
      "Structure emails and memos using the Barbara Minto Pyramid Principle",
      "Deliver slide presentations with executive presence and crisp storytelling",
      "Manage difficult cross-functional conversations without conflict",
      "Write concise Slack and asynchronous updates that eliminate meetings",
    ],
    prerequisites: ["Open to all students and working professionals"],
    toolsCovered: ["Notion Memos", "Google Slides", "Pyramid Principle", "Loom"],
    curriculum: [
      {
        id: "mod-c1",
        moduleNumber: 1,
        title: "The Minto Pyramid & Structured Thinking",
        duration: "4.0 hrs",
        lessons: [
          { id: "lc-1-1", title: "Top-down communication: Answer first, support later", duration: "40 mins", previewAvailable: true },
          { id: "lc-1-2", title: "Writing a 1-page executive brief that gets instant approval", duration: "45 mins" },
        ],
      },
      {
        id: "mod-c2",
        moduleNumber: 2,
        title: "Verbal Presence & High-Stakes Presentations",
        duration: "4.5 hrs",
        lessons: [
          { id: "lc-2-1", title: "Vocal inflection, pacing, and eliminating filler words", duration: "50 mins" },
          { id: "lc-2-2", title: "Handling hostile or unexpected questions from leadership", duration: "55 mins" },
        ],
      },
      {
        id: "mod-c3",
        moduleNumber: 3,
        title: "Stakeholder Management & Negotiation",
        duration: "3.5 hrs",
        lessons: [
          { id: "lc-3-1", title: "Upward management: Managing deadlines and setting boundaries", duration: "45 mins" },
          { id: "lc-3-2", title: "Simulation: Negotiating a project scope reduction", duration: "50 mins" },
        ],
      },
    ],
  },
];

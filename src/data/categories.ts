export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  courseCount: number;
  featuredRole: string;
  avgPackage: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "finance-banking",
    title: "Finance & Banking",
    slug: "finance-banking",
    description: "Credit underwriting, financial modeling, retail banking operations, and risk analysis.",
    iconName: "Landmark",
    courseCount: 6,
    featuredRole: "Credit Analyst",
    avgPackage: "₹6.5 - 12 LPA",
  },
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    description: "Production full-stack engineering with Next.js, Node.js, TypeScript, and cloud deployments.",
    iconName: "Code2",
    courseCount: 8,
    featuredRole: "Full Stack Engineer",
    avgPackage: "₹8 - 18 LPA",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "LLM application architecture, prompt engineering, RAG pipelines, and automated business workflows.",
    iconName: "Cpu",
    courseCount: 5,
    featuredRole: "AI Solutions Developer",
    avgPackage: "₹10 - 22 LPA",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    slug: "data-analytics",
    description: "SQL, Advanced Excel, PowerBI, statistical modeling, and data-driven business intelligence.",
    iconName: "BarChart3",
    courseCount: 7,
    featuredRole: "Business Analyst",
    avgPackage: "₹6 - 14 LPA",
  },
  {
    id: "communication-skills",
    title: "Communication Skills",
    slug: "communication-skills",
    description: "Workplace communication, executive presentations, stakeholder management, and business writing.",
    iconName: "MessageSquare",
    courseCount: 4,
    featuredRole: "Client Success & Ops",
    avgPackage: "₹5 - 10 LPA",
  },
  {
    id: "career-preparation",
    title: "Career Preparation",
    slug: "career-preparation",
    description: "Ats-optimized resume architecture, LinkedIn positioning, technical mocks, and salary negotiations.",
    iconName: "Briefcase",
    courseCount: 5,
    featuredRole: "Placement Fast-Track",
    avgPackage: "Guaranteed Referrals",
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    slug: "civil-engineering",
    description: "AutoCAD drafting, structural estimation, project management software, and on-site QA protocols.",
    iconName: "Building2",
    courseCount: 3,
    featuredRole: "Site Project Engineer",
    avgPackage: "₹4.5 - 9 LPA",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    slug: "entrepreneurship",
    description: "Unit economics, Indian startup compliance, venture fundraising, and lean MVP execution.",
    iconName: "Compass",
    courseCount: 4,
    featuredRole: "Founder's Office",
    avgPackage: "Incubation Access",
  },
];

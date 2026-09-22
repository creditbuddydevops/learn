export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: string;
  domain: string;
  bio: string;
  avatarInitials: string;
  linkedinUrl: string;
  sessionsConducted: number;
  featured: boolean;
}

export const MENTORS: Mentor[] = [
  {
    id: "m-1",
    name: "Debabrata Mohanty",
    role: "VP of Credit Risk",
    company: "Ex-HDFC Bank",
    experience: "14+ Yrs",
    domain: "Banking & Credit Underwriting",
    bio: "Underwritten corporate credit books exceeding ₹2,400 Cr. Trains students on forensic financial analysis and CAM preparation.",
    avatarInitials: "DM",
    linkedinUrl: "https://linkedin.com",
    sessionsConducted: 140,
    featured: true,
  },
  {
    id: "m-2",
    name: "Vikram Senapati",
    role: "Lead Systems Architect",
    company: "Ex-Razorpay",
    experience: "10+ Yrs",
    domain: "Full Stack & Cloud Architecture",
    bio: "Built distributed payment engines and fintech scale systems. Mentors on clean system architecture and technical interviews.",
    avatarInitials: "VS",
    linkedinUrl: "https://linkedin.com",
    sessionsConducted: 210,
    featured: true,
  },
  {
    id: "m-3",
    name: "Sneha Agrawal, CA",
    role: "Senior Financial Modeler",
    company: "Ex-KPMG Deals",
    experience: "8+ Yrs",
    domain: "Financial Modeling & Valuations",
    bio: "Chartered Accountant guiding candidates through corporate finance, M&A valuations, and 3-statement models.",
    avatarInitials: "SA",
    linkedinUrl: "https://linkedin.com",
    sessionsConducted: 185,
    featured: true,
  },
  {
    id: "m-4",
    name: "Amanjot Kaur",
    role: "Head of AI Automation",
    company: "NextWave Tech",
    experience: "7+ Yrs",
    domain: "LLM Workflows & Prompt Engineering",
    bio: "Designs enterprise AI agents for BFSI institutions. Coaches on modern agentic workflows and automated data extraction.",
    avatarInitials: "AK",
    linkedinUrl: "https://linkedin.com",
    sessionsConducted: 95,
    featured: true,
  },
  {
    id: "m-5",
    name: "Rohan Varma",
    role: "Strategy & Operations Lead",
    company: "Ex-McKinsey & Co.",
    experience: "6+ Yrs",
    domain: "Consulting & Placement Mocks",
    bio: "BITS Pilani alumnus. Cracked 7 top campus offers. Specializes in guesstimates, problem solving, and behavioral interviews.",
    avatarInitials: "RV",
    linkedinUrl: "https://linkedin.com",
    sessionsConducted: 260,
    featured: true,
  },
  {
    id: "m-6",
    name: "Pooja Trivedi",
    role: "Lead Talent Partner",
    company: "Ex-Flipkart Hiring",
    experience: "9+ Yrs",
    domain: "Resume Engineering & Outbound Recruiting",
    bio: "Reviewed over 40,000 resumes. Mentors students on crafting ATS-clearing resumes and commanding higher compensation packages.",
    avatarInitials: "PT",
    linkedinUrl: "https://linkedin.com",
    sessionsConducted: 320,
    featured: true,
  },
];

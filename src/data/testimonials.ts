export interface Testimonial {
  id: string;
  name: string;
  college: string;
  courseTaken: string;
  placedAt: string;
  role: string;
  package: string;
  rating: number;
  quote: string;
  avatarInitials: string;
  verifiedStudent: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Arjun Panigrahi",
    college: "VSSUT Burla / Sambalpur University",
    courseTaken: "Credit Analysis Fundamentals",
    placedAt: "Axis Bank Commercial Banking",
    role: "Associate Credit Analyst",
    package: "₹8.2 LPA",
    rating: 5,
    quote: "Most colleges teach outdated textbook ratios. At CreditBuddy, we analyzed actual balance sheets of Indian manufacturing firms and drafted CAM notes. In my interview, the zonal manager was shocked that a fresher already understood working capital cycles.",
    avatarInitials: "AP",
    verifiedStudent: true,
  },
  {
    id: "t-2",
    name: "Meera Subramanian",
    college: "Delhi University (SRCC)",
    courseTaken: "Excel for Finance & Financial Modeling",
    placedAt: "TresVista Financial Services",
    role: "Financial Analyst",
    package: "₹9.5 LPA",
    rating: 5,
    quote: "The zero-mouse financial modeling exercises were intense. Sneha ma'am's guidance on 3-statement models helped me clear the 2-hour modeling test during off-campus placements with zero errors.",
    avatarInitials: "MS",
    verifiedStudent: true,
  },
  {
    id: "t-3",
    name: "Tanmay Deshmukh",
    college: "KIIT University Bhubaneswar",
    courseTaken: "Full Stack Web Engineering",
    placedAt: "Fintech Scale-Up (Bengaluru)",
    role: "Frontend Engineer",
    package: "₹14 LPA",
    rating: 5,
    quote: "Instead of generic todo lists, we built an end-to-end ledger app with webhooks and PostgreSQL. Vikram sir's code reviews felt exactly like working in a high-caliber engineering team.",
    avatarInitials: "TD",
    verifiedStudent: true,
  },
  {
    id: "t-4",
    name: "Rhea Sen",
    college: "St. Xavier's College Kolkata",
    courseTaken: "Placement Interview Mastery & ATS Resume",
    placedAt: "PwC India",
    role: "Management Consultant Associate",
    package: "₹11 LPA",
    rating: 5,
    quote: "Pooja ma'am completely rebuilt my resume using the Google XYZ structure. Rohan sir's guesstimate frameworks gave me structured confidence during the partner round. Worth 10x the fee.",
    avatarInitials: "RS",
    verifiedStudent: true,
  },
];

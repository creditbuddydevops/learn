export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Certificates" | "Internships" | "Billing";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Are the courses pre-recorded or live?",
    answer: "Our courses follow a hybrid structure: core foundational lessons are delivered in modular, studio-recorded HD modules that you can watch at your own pace, paired with weekly live masterclasses, interactive weekend Q&A, and live project critiques by industry practitioners.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Do I get an accredited certificate upon completion?",
    answer: "Yes. Every student who completes the syllabus, passes the module quizzes, and submits the capstone project receives an official, cryptographically verified certificate issued by CreditBuddy Partners Private Limited. Each certificate includes a unique verification hash verifiable at /certificates.",
    category: "Certificates",
  },
  {
    id: "faq-3",
    question: "Is 1-on-1 mentorship included in the programs?",
    answer: "Mentorship is included in both our Pro and Elite tracks. Pro tier members receive bi-weekly group cohort sessions and direct Slack code/assignment reviews. Elite tier members receive direct 1-on-1 private mentoring, resume teardowns, and mock placement interviews with VPs and Engineering Leads.",
    category: "General",
  },
  {
    id: "faq-4",
    question: "What are the eligibility criteria for guaranteed internship interviews?",
    answer: "Students enrolled in Pro or Elite who maintain an 85%+ module completion rate and achieve a passing grade on their capstone project are eligible for our partner internship matching pool. We connect you directly with vetted startups, fintechs, and corporate hiring partners across India.",
    category: "Internships",
  },
  {
    id: "faq-5",
    question: "What is your refund policy if the course doesn't suit my goals?",
    answer: "We offer a 7-day no-questions-asked refund policy for all self-paced and cohort tracks, provided you have watched less than 25% of the total course material. Simply email info@creditbuddy.org.in within 7 days of enrollment.",
    category: "Billing",
  },
  {
    id: "faq-6",
    question: "Can I access the course material and code repositories after completion?",
    answer: "Yes, all students receive lifetime access to course recordings, downloadable spreadsheets, CAM templates, code repositories, and future curriculum updates at no additional charge.",
    category: "General",
  },
];

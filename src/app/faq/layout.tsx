import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Common questions about CreditBuddy Learn, credit score courses, loan education, pricing, certificates, and how to get started with financial literacy.",
  openGraph: {
    title: "FAQ — CreditBuddy Learn",
    description:
      "Find answers to common questions about our credit and finance education platform.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

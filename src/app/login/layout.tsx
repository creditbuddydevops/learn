import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in to your account",
  description:
    "Log in or create a student account on CreditBuddy Learn to access credit score mastery, loan underwriting, and personal finance courses.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}

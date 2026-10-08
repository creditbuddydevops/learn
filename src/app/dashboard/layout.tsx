import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Your CreditBuddy Learn student dashboard — track enrolled courses, view progress, and access learning materials.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}

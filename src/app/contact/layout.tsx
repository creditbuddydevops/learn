import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the CreditBuddy Learn team for questions about credit scores, loan underwriting courses, or partnership opportunities.",
  openGraph: {
    title: "Contact CreditBuddy Learn",
    description:
      "Reach out to our team for support, course inquiries, or partnership discussions.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

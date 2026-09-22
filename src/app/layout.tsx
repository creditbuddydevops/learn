import type { Metadata } from "next";
import { Sora, Inter, Kalam } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CreditBuddy Learning Academy | Smart Money, Clear Future!",
  description:
    "Indian ed-tech platform training students for internships, placements, corporate credit underwriting, financial modeling, full stack engineering, and career growth.",
  keywords: [
    "CreditBuddy",
    "CreditBuddy Learning Academy",
    "Credit Analysis Course",
    "Financial Modeling India",
    "Student Internships",
    "Placement Preparation",
    "Smart Money Clear Future",
  ],
  authors: [{ name: "CreditBuddy Partners Private Limited" }],
  openGraph: {
    title: "CreditBuddy Learning Academy | Smart Money, Clear Future!",
    description:
      "Understand loans, interest rates, and APR upfront. Learn industry skills that actually get you hired.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${inter.variable} ${kalam.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#2952E3] text-[#1E293B] antialiased">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

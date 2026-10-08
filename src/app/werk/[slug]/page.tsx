import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button052 } from "@/components/extrafazant/Button052";
import { DrawLineLink } from "@/components/extrafazant/DrawLineLink";

interface Props {
  params: Promise<{ slug: string }>;
}

const CASE_DATA: Record<
  string,
  {
    title: string;
    client: string;
    service: string;
    year: string;
    heroImg: string;
    lead: string;
    description: string;
    bgColor: string;
    deliverables: string[];
  }
> = {
  "credit-score-mastery": {
    title: "Credit Score Mastery",
    client: "CIBIL, Experian & Equifax",
    service: "Credit Bureau Analysis",
    year: "Core Track",
    heroImg:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    lead: "How credit bureaus calculate scores, how to spot and dispute reporting errors, and maintain a 750+ profile.",
    description:
      "In this comprehensive track, we explore how CIBIL, Experian, CRIF High Mark, and Equifax gather payment history from banks and NBFCs. You will learn the exact weightage of payment track records (35%), credit utilization (30%), credit age (15%), credit mix (10%), and hard inquiries (10%), and how to fix clerical errors that unfairly penalize your borrowing power.",
    bgColor: "#fee897",
    deliverables: [
      "Credit Report Line-by-Line Breakdown",
      "Dispute Letter Templates for CIBIL/Experian",
      "Utilization Ratio Optimization Guide",
      "Settled vs Closed Account Distinctions",
    ],
  },
  "loan-math-underwriting": {
    title: "Loan Math & Underwriting",
    client: "Fintech Underwriting Standards",
    service: "Lending Risk & Mechanics",
    year: "Core Track",
    heroImg:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    lead: "Understanding how lenders evaluate credit risk, compute debt-to-income, and calculate real monthly EMIs.",
    description:
      "Lenders evaluate your application based on risk models, repayment capacity, and credit score. This track deconstructs the underwriting black box: how debt-service ratios are set, why processing fees and upfront insurance deduct from your disbursed amount, and how to verify that your lender complies with RBI digital lending guidelines.",
    bgColor: "#21105b",
    deliverables: [
      "Amortization Table Calculator",
      "FOIR (Fixed Obligation to Income) Estimator",
      "Digital Lending Checklist (RBI Compliance)",
      "Processing Fee & Hidden Charge Audit",
    ],
  },
  "debt-payoff-cashflow": {
    title: "Debt Payoff & Cashflow",
    client: "Personal Balance Sheets",
    service: "Debt Optimization",
    year: "Core Track",
    heroImg:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    lead: "Actionable frameworks for eliminating multiple loans using the debt avalanche and snowball methods.",
    description:
      "Having multiple ongoing loans, credit card balances, or EMIs can drain monthly cashflow. This module outlines the mathematics of high-interest payoff strategies: comparing the psychological momentum of the Snowball method with the interest savings of the Avalanche approach, alongside debt consolidation fundamentals.",
    bgColor: "#05aa38",
    deliverables: [
      "Snowball vs Avalanche Payoff Model",
      "Monthly Debt-Free Milestone Roadmap",
      "Emergency Fund Buffer Framework",
      "Debt Consolidation Evaluation Matrix",
    ],
  },
  "interest-rates-apr": {
    title: "Interest Rates & APR",
    client: "Lending Math Fundamentals",
    service: "Rate Analysis",
    year: "Elective Track",
    heroImg:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
    lead: "Why a 10% flat interest rate is nearly double a 10% reducing balance rate, and how to calculate APR.",
    description:
      "Many borrowers fall victim to promotional rates advertised as 'flat interest.' In this lesson, we break down the formula differences between flat and reducing balances, showing why a 12% flat rate actually represents nearly 22% annualized interest. Learn how to demand and inspect the Key Fact Statement (KFS).",
    bgColor: "#fec602",
    deliverables: [
      "Flat to Reducing Rate Conversion Tool",
      "Annual Percentage Rate (APR) Formula Sheet",
      "Key Fact Statement (KFS) Walkthrough",
      "Prepayment Penalty & Foreclosure Rules",
    ],
  },
  "personal-loan-eligibility": {
    title: "Loan Eligibility & FOIR",
    client: "CreditBuddy Underwriting",
    service: "Borrower Assessment",
    year: "Elective Track",
    heroImg:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    lead: "What banks and NBFCs look for in bank statements, salary slips, and employment history.",
    description:
      "Before applying for an in-app loan, knowing your eligibility criteria saves you from hard inquiries that ding your score. This track examines banking stability, bounce charges, minimum average quarterly balances, and co-applicant advantages.",
    bgColor: "#21105b",
    deliverables: [
      "Bank Statement Health Scorecard",
      "Salary & Self-Employed Thresholds",
      "Co-Applicant & Guarantee Guidelines",
      "Application Timing Best Practices",
    ],
  },
  "business-loan-underwriting": {
    title: "MSME & Business Borrowing",
    client: "Enterprise Finance",
    service: "Commercial Lending",
    year: "Elective Track",
    heroImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    lead: "Navigating working capital, GST returns, and merchant cash advances for business expansion.",
    description:
      "Business credit requires an understanding of cash cycles and balance sheet ratios. In this track, entrepreneurs learn how GST returns match bank inflows, how inventory financing works, and when collateral-free loans are appropriate versus secured credit.",
    bgColor: "#05aa38",
    deliverables: [
      "GST Return vs Bank Reconciliation Guide",
      "Working Capital Cycle Worksheet",
      "Collateral vs Unsecured Evaluation",
      "MSME Government Subsidy Directory",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = CASE_DATA[slug];

  if (!data) {
    return { title: "Course not found" };
  }

  return {
    title: data.title,
    description: data.lead,
    openGraph: {
      title: `${data.title} — CreditBuddy Learn`,
      description: data.lead,
      type: "article",
      images: [{ url: data.heroImg, width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} — CreditBuddy Learn`,
      description: data.lead,
      images: [data.heroImg],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(CASE_DATA).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const data = CASE_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-[#f4f4f4] min-h-screen">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Back Link */}
        <div className="mb-10">
          <DrawLineLink href="/werk" className="text-sm font-semibold uppercase tracking-wider text-black/60 hover:text-black">
            ← Back to all learning tracks
          </DrawLineLink>
        </div>

        {/* Header */}
        <div className="max-w-5xl mb-12 sm:mb-16">
          <span className="eyebrow-s text-[#05aa38] font-bold uppercase tracking-wider block mb-3">
            {data.service} • {data.year}
          </span>
          <h1 className="heading-xl tracking-tight text-[#101010] font-bold mb-6">
            {data.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#101010]/80 leading-relaxed font-medium">
            {data.lead}
          </p>
        </div>

        {/* Hero Visual Card */}
        <div
          className="rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white mb-16 aspect-[16/9]"
          style={{ backgroundColor: data.bgColor }}
        >
          <img
            src={data.heroImg}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Track Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 my-20">
          <div className="lg:col-span-8">
            <h2 className="heading-m text-3xl sm:text-4xl font-bold mb-6">
              Core Principles &amp; Takeaways
            </h2>
            <p className="paragraph-m text-lg sm:text-xl text-[#101010]/80 leading-relaxed mb-8">
              {data.description}
            </p>
            <p className="paragraph-m text-lg sm:text-xl text-[#101010]/80 leading-relaxed mb-12">
              Every lesson includes real sample statements, arithmetic calculators, and clear step-by-step actions you can apply to your personal finances or loan applications right away.
            </p>

            {/* Detailed Learning Outcomes */}
            <div className="space-y-8 pt-8 border-t border-black/10">
              <h3 className="heading-s text-2xl font-bold text-[#101010]">
                What You Will Master in This Track
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-2">
                  <h4 className="font-bold text-lg text-[#101010]">1. Bureau &amp; Lenders Rules</h4>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">
                    Understand the underlying algorithms, risk thresholds, and compliance norms enforced by financial regulators and credit rating agencies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-2">
                  <h4 className="font-bold text-lg text-[#101010]">2. Mathematical Formulas</h4>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">
                    Master step-by-step mathematical calculations for interest rates, APR, reducing balances, and monthly amortization schedules.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-2">
                  <h4 className="font-bold text-lg text-[#101010]">3. Actionable Spreadsheets</h4>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">
                    Download and utilize customizable financial tools, dispute letter templates, and debt payoff trackers designed for quick application.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-2">
                  <h4 className="font-bold text-lg text-[#101010]">4. Real-World Application</h4>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">
                    Apply these concepts directly to personal borrowing, small business cash flow management, or careers in credit analysis and underwriting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-black/5">
            <h3 className="text-xs uppercase tracking-wider font-bold text-black/40 mb-4">
              Track Outline
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <span className="text-black/50 block text-xs">Category</span>
                <span className="font-bold text-[#101010]">{data.client}</span>
              </div>
              <div>
                <span className="text-black/50 block text-xs">Pillar</span>
                <span className="font-bold text-[#101010]">{data.service}</span>
              </div>
              <div>
                <span className="text-black/50 block text-xs">Resources Included</span>
                <ul className="list-disc list-inside space-y-1 font-medium text-[#101010]/90 pt-1">
                  {data.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-16 border-t border-black/10">
          <h2 className="heading-m text-3xl sm:text-4xl font-bold mb-6">
            Have questions about this topic or need assistance?
          </h2>
          <Button052 href="/contact">Talk with our mentors</Button052>
        </div>
      </div>
    </div>
  );
}

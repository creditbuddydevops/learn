import React from "react";
import Link from "next/link";
import { Button052 } from "@/components/extrafazant/Button052";

export const metadata = {
  title: "Learning Tracks | CreditBuddy Learn",
  description:
    "Explore practical financial modules covering credit scores, loan underwriting, interest rate calculations, and debt payoff systems.",
};

const TRACKS = [
  {
    slug: "credit-score-mastery",
    title: "Credit Score Mastery",
    category: "CIBIL & Bureau Analysis",
    bgColor: "#fec602",
    textColor: "#101010",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "loan-math-underwriting",
    title: "Loan Math & Underwriting",
    category: "Lending Norms & Risk Scoring",
    bgColor: "#21105b",
    textColor: "#ffffff",
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "debt-payoff-cashflow",
    title: "Debt Payoff & Cashflow",
    category: "Snowball & Avalanche Systems",
    bgColor: "#05aa38",
    textColor: "#ffffff",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "interest-rates-apr",
    title: "Interest Rates & APR",
    category: "Flat vs Reducing Balance",
    bgColor: "#fec602",
    textColor: "#101010",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "personal-loan-eligibility",
    title: "Loan Eligibility & FOIR",
    category: "Fixed Obligation to Income Ratio",
    bgColor: "#21105b",
    textColor: "#ffffff",
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "business-loan-underwriting",
    title: "MSME & Business Borrowing",
    category: "Working Capital & Cash Flow",
    bgColor: "#05aa38",
    textColor: "#ffffff",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function WerkPage() {
  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-[#f4f4f4] min-h-screen">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Title */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
            Curated Curriculum
          </span>
          <h1 className="heading-xl tracking-tight text-[#101010] font-bold mb-6">
            Master the rules of <span className="heading-alt text-[#05aa38] italic">borrowing</span>.
          </h1>
          <p className="paragraph-m text-[#101010]/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            From fixing credit bureau errors to calculating the real cost of debt before you sign. Each module is built by lending practitioners to provide clear, actionable insights.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20 sm:mb-28">
          {TRACKS.map((item, idx) => (
            <Link
              key={idx}
              href={`/werk/${item.slug}`}
              data-cursor-marquee-text="View track →"
              className="group block relative rounded-3xl overflow-hidden shadow-xl border-4 border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="aspect-[16/11] overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold opacity-80 block mb-1">
                  {item.category}
                </span>
                <h3 className="heading-m text-3xl sm:text-4xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Learn With Us Section */}
        <div className="my-20 pt-16 border-t border-black/10">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-m text-3xl sm:text-4xl font-bold text-[#101010] mb-4">
              Designed by Underwriters, Built for Everyday Borrowers
            </h2>
            <p className="text-base sm:text-lg text-[#101010]/80 leading-relaxed">
              Most financial courses focus on complex stock market jargon or abstract macroeconomics. CreditBuddy Learn focuses exclusively on the numbers that affect your real-world wallet: credit bureau scoring, interest rate formulas, loan amortization schedules, and debt acceleration strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05aa38] block">
                Feature 01
              </span>
              <h3 className="text-xl font-bold text-[#101010]">Practical Sample Statements</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Learn using actual CIBIL, Experian, and bank statement extracts so you know exactly what credit managers analyze when reviewing loan applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0038ff] block">
                Feature 02
              </span>
              <h3 className="text-xl font-bold text-[#101010]">Calculators &amp; Templates</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Every track comes equipped with interactive Excel/web spreadsheets for debt avalanche tracking, flat-to-reducing rate conversion, and FOIR estimation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#21105b] block">
                Feature 03
              </span>
              <h3 className="text-xl font-bold text-[#101010]">Career Readiness</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Gain foundational knowledge essential for careers in retail banking, fintech credit operations, risk analysis, and NBFC loan processing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-black/10">
          <h2 className="heading-m text-3xl sm:text-4xl font-bold mb-6">
            Need guidance on loan eligibility or credit disputes?
          </h2>
          <Button052 href="/contact">Get in touch with mentors</Button052>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { ServicesCards } from "@/components/extrafazant/ServicesCards";
import { Button052 } from "@/components/extrafazant/Button052";

export const metadata = {
  title: "Curriculum & Methodology | CreditBuddy Learn",
  description:
    "Discover the CreditBuddy Learn curriculum: practical modules in credit scoring, loan underwriting, interest math, and personal cashflow.",
};

export default function WatWeDoenPage() {
  return (
    <div className="pt-36 sm:pt-48 bg-[#f4f4f4]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 pb-12">
        <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
          Curriculum &amp; Educational Pillars
        </span>
        <h1 className="heading-xl tracking-tight text-[#101010] font-bold max-w-4xl mb-6">
          Financial knowledge that{" "}
          <span className="heading-alt text-[#05aa38] italic">empowers</span>.
        </h1>
        <p className="paragraph-m text-[#101010]/80 text-xl sm:text-2xl max-w-3xl leading-relaxed">
          At CreditBuddy, we believe responsible lending starts with education. We teach the exact mechanisms behind loan approvals, bureau algorithms, interest rate formulas, and debt payoff models without financial jargon.
        </p>
      </div>

      <ServicesCards />

      {/* 4-Step Methodology section */}
      <div className="py-24 bg-white border-t border-b border-black/5">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow-s text-[#21105b] font-bold uppercase tracking-wider block mb-2">
              Our Learning Framework
            </span>
            <h2 className="heading-l font-bold text-[#101010]">
              In 4 clear stages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-[#f4f4f4] border border-black/5 space-y-3">
              <span className="text-3xl font-extrabold text-[#21105b]">01</span>
              <h3 className="text-xl font-bold text-[#101010]">Diagnose Baseline</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Pull and audit your credit reports across CIBIL, Experian, and Equifax. Identify incorrect inquiries, overdue flags, or outdated data.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#f4f4f4] border border-black/5 space-y-3">
              <span className="text-3xl font-extrabold text-[#05aa38]">02</span>
              <h3 className="text-xl font-bold text-[#101010]">Master the Math</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Learn how APR, reducing interest, processing fees, and loan tenures impact the total cost of capital before taking on debt.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#f4f4f4] border border-black/5 space-y-3">
              <span className="text-3xl font-extrabold text-[#fec602]">03</span>
              <h3 className="text-xl font-bold text-[#101010]">Execute Strategy</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Apply structured debt snowball or avalanche repayments, resolve reporting disputes, and optimize your credit utilization ratio below 30%.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#f4f4f4] border border-black/5 space-y-3">
              <span className="text-3xl font-extrabold text-[#05aa38]">04</span>
              <h3 className="text-xl font-bold text-[#101010]">Borrow Confidently</h3>
              <p className="text-sm text-[#101010]/70 leading-relaxed">
                Apply for personal or business loans with clear expectations, knowing your exact eligibility and negotiating power.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button052 href="/werk">Explore all modules</Button052>
          </div>
        </div>
      </div>
    </div>
  );
}

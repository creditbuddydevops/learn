import React from "react";
import { Button052 } from "@/components/extrafazant/Button052";
import { TeamParallax } from "@/components/extrafazant/TeamParallax";

export const metadata = {
  title: "About Us | CreditBuddy Learn",
  description:
    "CreditBuddy is a fintech startup offering in-app loans. CreditBuddy Learn is our educational platform dedicated to building financial literacy and credit confidence across India.",
};

export default function OverPage() {
  return (
    <div className="pt-36 sm:pt-48 bg-[#f4f4f4]">
      {/* Hero section */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 pb-20">
        <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
          About CreditBuddy Learn
        </span>
        <h1 className="heading-xl tracking-tight text-[#101010] font-bold max-w-5xl mb-8">
          Demystifying credit and lending for{" "}
          <span className="heading-alt text-[#05aa38] italic">everyone</span>.
        </h1>
        <p className="paragraph-m text-[#101010]/80 text-xl sm:text-2xl max-w-3xl leading-relaxed mb-12">
          CreditBuddy is a fintech startup providing fast, transparent loans directly through our mobile app. We founded CreditBuddy Learn because access to credit is only half the battle: understanding interest rates, credit bureaus, and repayment planning is what creates long-term financial freedom.
        </p>

        {/* Culture / Studio photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
              alt="CreditBuddy Financial Education"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
              alt="Fintech Lending Insights"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Deep Dive Pillars Section */}
        <div className="my-20 space-y-12">
          <div className="max-w-3xl">
            <h2 className="heading-m text-3xl sm:text-4xl font-bold text-[#101010] mb-4">
              Why Credit Literacy Matters Across India
            </h2>
            <p className="text-lg text-[#101010]/80 leading-relaxed">
              In India's rapidly growing digital economy, access to personal, business, and micro-loans has never been faster. However, millions of borrowers remain unaware of how credit bureaus like CIBIL and Experian track repayment history, how annual percentage rates (APR) differ from advertised monthly interest rates, or how to resolve reporting errors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05aa38] block">
                Pillar 01
              </span>
              <h3 className="text-2xl font-bold text-[#101010]">Demystifying Bureau Scoring</h3>
              <p className="text-base text-[#101010]/70 leading-relaxed">
                We break down the exact mathematical formula used by credit bureaus. Learn how payment history (35%), credit utilization (30%), credit age (15%), credit mix (10%), and inquiries (10%) combine to determine your borrowing health.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0038ff] block">
                Pillar 02
              </span>
              <h3 className="text-2xl font-bold text-[#101010]">Unmasking Hidden Loan Costs</h3>
              <p className="text-base text-[#101010]/70 leading-relaxed">
                Many borrowers fall for 'flat interest rate' marketing without realizing a 10% flat rate equals nearly 18%-20% reducing interest. We teach borrowers how to evaluate Key Fact Statements (KFS) and calculate real APR.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#21105b] block">
                Pillar 03
              </span>
              <h3 className="text-2xl font-bold text-[#101010]">Structured Debt Acceleration</h3>
              <p className="text-base text-[#101010]/70 leading-relaxed">
                Whether managing personal loans, credit card balances, or working capital debt, our structured Snowball and Avalanche debt payoff models help borrowers eliminate obligations systematically.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#fec602] block">
                Pillar 04
              </span>
              <h3 className="text-2xl font-bold text-[#101010]">Corporate Responsibility</h3>
              <p className="text-base text-[#101010]/70 leading-relaxed">
                Operated by CREDITBUDDY PARTNERS PRIVATE LIMITED (CIN: U62090OD2026PTC053104), our platform adheres to strict transparency, financial privacy, and ethical lending practices under RBI guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Parallax component */}
      <TeamParallax />

      {/* Manifest banner */}
      <div className="bg-[#101010] text-white py-24 sm:py-32">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 text-center">
          <span className="eyebrow-s text-[#fec602] mb-4 block font-semibold">
            Our Commitment
          </span>
          <h2 className="heading-l font-bold max-w-4xl mx-auto mb-8 leading-tight">
            Clear numbers, zero hidden clauses. Learn finance the{" "}
            <span className="heading-alt text-[#05aa38] italic">practical</span> way.
          </h2>
          <Button052 href="/werk" variant="dark">
            Explore learning tracks
          </Button052>
        </div>
      </div>
    </div>
  );
}

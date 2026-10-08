"use client";

import React, { useState } from "react";
import { Button052 } from "@/components/extrafazant/Button052";

const FAQS = [
  {
    q: "What is CreditBuddy Learn?",
    a: "CreditBuddy Learn is the official financial literacy initiative created by CreditBuddy (CREDITBUDDY PARTNERS PRIVATE LIMITED). While CreditBuddy provides fast, accessible personal and business loans through our mobile app, CreditBuddy Learn delivers free, structured education on credit bureau scoring, interest rate formulas, risk underwriting, and debt repayment strategy.",
  },
  {
    q: "Does CreditBuddy offer loans directly?",
    a: "Yes! CreditBuddy is a fintech lending platform offering fast, transparent loans through our mobile application. We established CreditBuddy Learn because access to credit must be paired with financial education. Our goal is to ensure every borrower understands annual percentage rates (APR), reducing balance calculations, and debt-service ratios before borrowing.",
  },
  {
    q: "Does checking my credit score on CreditBuddy lower my CIBIL score?",
    a: "No. Checking your own credit score through CreditBuddy or credit bureau portals (CIBIL, Experian, Equifax, CRIF High Mark) is classified as a 'soft inquiry'. Soft inquiries have zero impact on your credit score. Only 'hard inquiries' conducted by financial institutions when evaluating formal loan applications can temporarily lower your score.",
  },
  {
    q: "What is the difference between flat and reducing interest rates?",
    a: "Under a flat interest rate, interest is calculated on the initial principal amount for the full loan tenure, which effectively doubles your true interest expense. Under a reducing balance rate, interest is recalculated each month based solely on the remaining unpaid principal balance. CreditBuddy Learn teaches you how to convert flat rates to true reducing rates and demand Key Fact Statements (KFS).",
  },
  {
    q: "How does CreditBuddy calculate loan eligibility (FOIR)?",
    a: "Lenders evaluate loan eligibility using the Fixed Obligation to Income Ratio (FOIR). FOIR measures what percentage of your monthly income is consumed by existing debt obligations (EMIs, credit card minimums). Most lenders cap total debt obligations at 40% to 50% of monthly net income. Our Loan Math track teaches you how to optimize your FOIR before applying.",
  },
  {
    q: "How can I dispute errors on my CIBIL or Experian credit report?",
    a: "If your credit report contains incorrect personal details, duplicate accounts, or settled loans wrongly marked as defaulted, you can file a formal dispute directly with CIBIL or Experian online. CreditBuddy Learn provides step-by-step dispute workflows and official dispute letter templates to clean up clerical errors.",
  },
  {
    q: "What registered details govern CreditBuddy?",
    a: "CreditBuddy is owned and operated by CREDITBUDDY PARTNERS PRIVATE LIMITED (CIN: U62090OD2026PTC053104, GSTIN: 21AANCC6754D1ZS). Our registered office is located at Gram Devi Mandir, Matru Vihar Shanti Nagar, Budharaja, Sambalpur, Odisha - 768004, India.",
  },
  {
    q: "Are CreditBuddy Learn courses completely free?",
    a: "Yes. All foundational learning modules, financial calculators, and credit score guides on CreditBuddy Learn are 100% free for students, job seekers, small business owners, and borrowers across India.",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-[#f4f4f4] min-h-screen">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Title */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
            Frequently Asked Questions &amp; Knowledge Base
          </span>
          <h1 className="heading-xl tracking-tight text-[#101010] font-bold mb-6">
            Clear answers to your <span className="heading-alt text-[#0038ff] italic">credit &amp; lending</span> questions.
          </h1>
          <p className="paragraph-m text-[#101010]/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Everything you need to know about CreditBuddy, our lending app, credit score rules, interest calculations, and our educational curriculum.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4 mb-20 sm:mb-24">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-xl sm:text-2xl text-[#101010] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`ml-4 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#0038ff] text-white border-[#0038ff]" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`pt-4 text-base sm:text-lg text-[#101010]/70 leading-relaxed ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-black/10">
          <h2 className="heading-m text-3xl sm:text-4xl font-bold mb-6">
            Have another question about credit or loans?
          </h2>
          <Button052 href="/contact">Ask our mentors</Button052>
        </div>
      </div>
    </div>
  );
}

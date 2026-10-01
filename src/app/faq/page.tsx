"use client";

import React, { useState } from "react";
import { Button052 } from "@/components/extrafazant/Button052";

const FAQS = [
  {
    q: "What is CreditBuddy Learn?",
    a: "CreditBuddy Learn is the educational initiative created by CreditBuddy (CREDITBUDDY PARTNERS PRIVATE LIMITED). While CreditBuddy provides fast, accessible loans in-app, CreditBuddy Learn provides structured guidance on credit scoring, interest rate formulas, loan underwriting, and debt management so you can borrow responsibly.",
  },
  {
    q: "Does CreditBuddy offer loans?",
    a: "Yes! CreditBuddy is a fintech startup offering loans directly within our mobile application. We built CreditBuddy Learn so that our users and the broader public can understand loan terms, interest calculations, and repayment schedules with complete transparency.",
  },
  {
    q: "Does checking my credit score lower my CIBIL score?",
    a: "No. When you check your own score via CreditBuddy or credit bureau websites, it is logged as a 'soft inquiry' and has zero impact on your CIBIL or Experian score. A 'hard inquiry' only occurs when a lender checks your profile after you submit a formal loan application.",
  },
  {
    q: "What is the difference between flat and reducing interest rates?",
    a: "Under a flat rate, interest is charged on the entire initial principal amount for the full loan tenure, which effectively doubles the real borrowing cost. Under a reducing balance rate, interest is recalculated each month only on the remaining unpaid balance, saving you significant money as you pay down the loan.",
  },
  {
    q: "What are the company's registered credentials?",
    a: "CreditBuddy is operated by CREDITBUDDY PARTNERS PRIVATE LIMITED (CIN: U62090OD2026PTC053104, GSTIN: 21AANCC6754D1ZS), located at Gram Devi Mandir, Matru Vihar Shanti Nagar, Budharaja, Sambalpur, Odisha - 768004.",
  },
  {
    q: "How can I get assistance with a loan application or credit dispute?",
    a: "You can reach out to our team at support@creditbuddy.co.in or submit an inquiry through our Contact page. Our practitioners are available to guide you on financial education topics.",
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
            Frequently Asked Questions
          </span>
          <h1 className="heading-xl tracking-tight text-[#101010] font-bold mb-6">
            Clear answers to your <span className="heading-alt text-[#0038ff] italic">finance</span> questions.
          </h1>
          <p className="paragraph-m text-[#101010]/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Everything you need to know about CreditBuddy, our lending app, and our educational curriculum.
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

                {isOpen && (
                  <div className="pt-4 text-base sm:text-lg text-[#101010]/70 leading-relaxed animate-in fade-in">
                    {faq.a}
                  </div>
                )}
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

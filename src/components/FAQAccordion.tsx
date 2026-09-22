"use client";

import React from "react";
import { FAQS } from "@/data/faq";
import { Mail, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { CardSplitAccordian } from "@/components/ui/card-split-accordian";

export function FAQAccordion() {
  const accordionItems = FAQS.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="py-20 bg-white border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left info column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block">
              Frequently Asked Questions
            </span>
            <h2 className="text-[28px] md:text-[34px] font-heading font-semibold text-[#111111]">
              Everything you need to know about learning with us
            </h2>
            <p className="text-[14px] text-[#50504B] leading-relaxed">
              Have questions regarding eligibility, certificates, or cohort schedules?
              Our admissions counselors are available daily.
            </p>

            <div className="pt-4 rounded-[12px] bg-[#FAFAF8] border border-[#E6E6DE] p-4 text-xs space-y-2">
              <span className="font-semibold text-[#111111] block">Still have a question?</span>
              <p className="text-[#50504B]">
                Reach out directly to our student support desk in Sambalpur, Odisha.
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-[#009E70] font-semibold hover:underline pt-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column Powered by Watermelon CardSplitAccordian */}
          <div className="lg:col-span-8">
            <CardSplitAccordian items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

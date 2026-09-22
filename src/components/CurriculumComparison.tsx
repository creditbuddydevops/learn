"use client";

import React from "react";
import { Check, X, ShieldAlert, Award } from "lucide-react";

export function CurriculumComparison() {
  const comparisons = [
    {
      parameter: "Curriculum Genesis",
      college: "Outdated 10-year textbook syllabus rarely aligned with fintech requirements",
      creditbuddy: "Architected directly with underwriters & engineers from HDFC, Razorpay, and KPMG",
    },
    {
      parameter: "Evaluation Format",
      college: "Pen-and-paper rote memory exams testing definitions and equations",
      creditbuddy: "Live CAM memo defense, production Next.js apps, and automated financial models",
    },
    {
      parameter: "Instructors & Feedback",
      college: "Academic lecturers with limited commercial banking or startup engineering experience",
      creditbuddy: "Practicing Vice Presidents, Senior Analysts, and Lead Architects",
    },
    {
      parameter: "Credential Validity",
      college: "Paper marksheet with 6-month third-party verification turnaround",
      creditbuddy: "Instant cryptographic SHA-256 registry check verifiable in 1-click",
    },
    {
      parameter: "Placement Support",
      college: "Generic placement cell waiting for mass off-campus recruiters",
      creditbuddy: "Direct warm referrals to 140+ vetted Indian startups and banking desks",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="max-w-2xl mb-14">
          <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
            The Structural Gap
          </span>
          <h2 className="text-[30px] md:text-[40px] font-heading font-semibold text-[#111111] leading-tight">
            Why traditional degrees leave students unemployed
          </h2>
          <p className="text-[15px] text-[#50504B] mt-3">
            Hiring managers don&apos;t ask for textbook definitions in technical rounds.
            See how CreditBuddy replaces academic inertia with institutional rigor.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-[18px] bg-white border border-[#E6E6DE] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-12 bg-[#F4F4EE] border-b border-[#E6E6DE] p-4 text-xs font-mono uppercase text-[#7E7E76]">
            <div className="col-span-3 font-semibold text-[#111111]">Dimension</div>
            <div className="col-span-4 text-[#8E8E86]">Traditional College Degrees</div>
            <div className="col-span-5 font-bold text-[#007050]">CreditBuddy Learning Academy</div>
          </div>

          <div className="divide-y divide-[#F0F0EA]">
            {comparisons.map((row, idx) => (
              <div
                key={row.parameter}
                className={`grid grid-cols-12 p-5 text-xs items-center gap-4 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
                }`}
              >
                <div className="col-span-12 md:col-span-3 font-semibold text-[#111111] text-[13px]">
                  {row.parameter}
                </div>

                <div className="col-span-12 md:col-span-4 text-[#7E7E76] flex items-start gap-2 leading-relaxed">
                  <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>{row.college}</span>
                </div>

                <div className="col-span-12 md:col-span-5 font-medium text-[#111111] flex items-start gap-2 leading-relaxed bg-[#E8F8F2]/40 p-2.5 rounded-[8px] border border-[#99E7D1]/50">
                  <Check className="w-4 h-4 text-[#009E70] shrink-0 mt-0.5" />
                  <span>{row.creditbuddy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

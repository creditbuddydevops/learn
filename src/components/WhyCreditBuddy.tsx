"use client";

import React from "react";
import { FolderGit2, Briefcase, Users, Target, CheckCircle2 } from "lucide-react";

export function WhyCreditBuddy() {
  const features = [
    {
      icon: <FolderGit2 className="w-6 h-6 text-[#111111]" />,
      title: "Real Projects Over Theory",
      tag: "Proof of Work",
      description: "Replace trivial tutorials with actual production challenges: underwriting ₹5 Cr loan files, building payment webhooks, and optimizing multi-table SQL queries.",
      bullets: ["Live industry datasets", "Version-controlled GitHub capstones", "Standardized evaluation rubrics"],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#111111]" />,
      title: "Internship Opportunities",
      tag: "Vetted Matching",
      description: "Direct referral pipelines to fast-growing Indian startups, commercial banks, and fintech organizations seeking junior analysts and engineers with verified skills.",
      bullets: ["Exclusive partner listings", "Direct interview recommendations", "Stipend-backed internships"],
    },
    {
      icon: <Users className="w-6 h-6 text-[#111111]" />,
      title: "Industry Mentors",
      tag: "Practitioner Led",
      description: "Learn exclusively from professionals working at firms like Razorpay, HDFC Bank, KPMG, and McKinsey. No theoretical lecturers or outdated slide decks.",
      bullets: ["Weekend live masterclasses", "1-on-1 code and CAM reviews", "Unfiltered industry insights"],
    },
    {
      icon: <Target className="w-6 h-6 text-[#111111]" />,
      title: "Placement Preparation",
      tag: "High Conversion",
      description: "Master the behavioral STAR method, consulting guesstimates, and ATS resume design that helped over 12,000 students secure offers across India.",
      bullets: ["90%+ ATS resume scoring", "Recorded mock video interviews", "Compensation negotiation coaching"],
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="max-w-2xl mb-14">
          <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
            The CreditBuddy Advantage
          </span>
          <h2 className="text-[28px] md:text-[34px] font-heading font-semibold text-[#111111] mb-3">
            Engineered for employment, not just course completion
          </h2>
          <p className="text-[15px] text-[#50504B]">
            Traditional colleges provide degrees; CreditBuddy equips you with the exact operational skills,
            verified projects, and personal introductions demanded by hiring managers.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] bg-[#FAFAF8] border border-[#E6E6DE] p-8 transition-all duration-200 hover:border-[#111111] hover:bg-white"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-[12px] bg-white border border-[#E6E6DE] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[11px] font-semibold text-[#007050] bg-[#E8F8F2] border border-[#99E7D1] px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-[19px] font-heading font-semibold text-[#111111] mb-2">
                {item.title}
              </h3>

              <p className="text-[14px] text-[#50504B] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-[#E6E6DE]/60">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2 text-[13px] text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#009E70] shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

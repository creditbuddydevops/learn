"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, TrendingUp, Building2, Clock, CheckCircle } from "lucide-react";

interface CareerPathway {
  id: string;
  title: string;
  tagline: string;
  baseCTC: string;
  companies: string[];
  courseSlug: string;
  timeframe: string;
  coreDeliverable: string;
}

const PATHWAYS: CareerPathway[] = [
  {
    id: "credit",
    title: "Credit Analyst & Underwriter",
    tagline: "Commercial Banking & NBFCs",
    baseCTC: "₹6.5 - ₹12 LPA",
    companies: ["HDFC Bank", "Axis Bank", "Tata Capital", "ICICI Bank"],
    courseSlug: "credit-analysis-fundamentals",
    timeframe: "6 Weeks",
    coreDeliverable: "Draft 3 Institutional Credit Appraisal Memos (CAM)",
  },
  {
    id: "fullstack",
    title: "Full Stack Software Engineer",
    tagline: "High-Growth Product Startups",
    baseCTC: "₹8.0 - ₹18 LPA",
    companies: ["Razorpay", "CRED", "Swiggy", "BrowserStack"],
    courseSlug: "full-stack-development",
    timeframe: "10 Weeks",
    coreDeliverable: "Ship Multi-Tenant SaaS with PostgreSQL & Webhooks",
  },
  {
    id: "finance",
    title: "Financial Modeler & Analyst",
    tagline: "Private Equity & Deals Advisory",
    baseCTC: "₹7.0 - ₹14 LPA",
    companies: ["TresVista", "KPMG", "Nomura", "Deloitte"],
    courseSlug: "excel-for-finance",
    timeframe: "4 Weeks",
    coreDeliverable: "Build Dynamic 3-Statement Connected DCF Model",
  },
  {
    id: "ai",
    title: "AI Solutions Developer",
    tagline: "Applied LLMs & Enterprise Automation",
    baseCTC: "₹10.0 - ₹22 LPA",
    companies: ["NextWave", "Fractal", "Tiger Analytics", "Fintech Labs"],
    courseSlug: "ai-tools-masterclass",
    timeframe: "3 Weeks",
    coreDeliverable: "Automate BFSI Invoice & PDF Extraction Pipelines",
  },
];

export function CareerSalaryCalculator() {
  const [selectedTrack, setSelectedTrack] = useState<string>("credit");
  const activePathway = PATHWAYS.find((p) => p.id === selectedTrack) || PATHWAYS[0];

  return (
    <section className="py-24 bg-white border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="max-w-2xl mb-12">
          <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
            Outcome Benchmarks
          </span>
          <h2 className="text-[30px] md:text-[40px] font-heading font-semibold text-[#111111] leading-tight">
            Calculate your career compensation pathway
          </h2>
          <p className="text-[15px] text-[#50504B] mt-3">
            Select a specialized domain to view audited starting CTC benchmarks, active hiring partners,
            and the exact proof-of-work capstone needed to clear technical rounds.
          </p>
        </div>

        {/* 2-Column Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Track Selector */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-mono uppercase text-[#7E7E76] block mb-2">
              Select Your Target Career Discipline
            </span>

            {PATHWAYS.map((p) => {
              const isSelected = p.id === selectedTrack;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedTrack(p.id)}
                  className={`cursor-pointer rounded-[14px] p-5 border transition-all duration-150 ${
                    isSelected
                      ? "bg-[#FAFAF8] border-[#111111] shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
                      : "bg-white border-[#E6E6DE] hover:bg-[#FAFAF8] hover:border-[#D1D1C7]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[15px] font-heading font-semibold text-[#111111]">
                      {p.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-[#009E70]">
                      {p.baseCTC}
                    </span>
                  </div>
                  <span className="text-xs text-[#7E7E76] block">{p.tagline}</span>
                </div>
              );
            })}
          </div>

          {/* Right Outcome Card */}
          <div className="lg:col-span-7 rounded-[18px] bg-[#FAFAF8] border border-[#E6E6DE] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E6DE] mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#009E70] font-semibold block">
                    Verified Industry Benchmark
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-[#111111]">
                    {activePathway.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-[#7E7E76] block">
                    Projected Starting CTC
                  </span>
                  <span className="text-2xl font-heading font-bold text-[#111111]">
                    {activePathway.baseCTC}
                  </span>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-[10px] bg-white border border-[#E6E6DE] p-4 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#7E7E76]">
                    <Clock className="w-3.5 h-3.5 text-[#009E70]" />
                    <span className="font-mono uppercase text-[10px]">Preparation Window</span>
                  </div>
                  <span className="font-semibold text-sm text-[#111111] block">
                    {activePathway.timeframe} to First Interview
                  </span>
                </div>

                <div className="rounded-[10px] bg-white border border-[#E6E6DE] p-4 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#7E7E76]">
                    <Building2 className="w-3.5 h-3.5 text-[#009E70]" />
                    <span className="font-mono uppercase text-[10px]">Hiring Ecosystem</span>
                  </div>
                  <span className="font-semibold text-sm text-[#111111] block">
                    {activePathway.companies.join(", ")}
                  </span>
                </div>
              </div>

              {/* Required Capstone Deliverable */}
              <div className="rounded-[12px] bg-white border border-[#E6E6DE] p-5 mb-6 text-xs space-y-1.5">
                <span className="text-[10px] uppercase font-mono text-[#7E7E76] block font-semibold">
                  Required Proof of Work Capstone
                </span>
                <p className="text-sm font-medium text-[#111111]">
                  {activePathway.coreDeliverable}
                </p>
                <div className="flex items-center gap-1.5 text-[#009E70] text-[11px] pt-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Graded by VPs & Lead Architects</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#7E7E76]">
                Guaranteed referral matching included in cohort
              </span>

              <Link
                href={`/course/${activePathway.courseSlug}`}
                className="btn-primary text-xs py-2.5 px-5 rounded-[8px] w-full sm:w-auto font-medium"
              >
                <span>View Program Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

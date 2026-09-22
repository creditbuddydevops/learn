"use client";

import React, { useState } from "react";
import { 
  UserPlus, 
  PlayCircle, 
  FileCheck2, 
  Users2, 
  Briefcase, 
  Award, 
  CheckCircle 
} from "lucide-react";

interface Step {
  stepNumber: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  deliverable: string;
}

const STEPS: Step[] = [
  {
    stepNumber: "01",
    title: "Enroll & Diagnostic",
    icon: <UserPlus className="w-5 h-5 text-[#111111]" />,
    tagline: "Tailored Skill Baseline",
    description: "Take an initial diagnostic assessment to map your current proficiency and match you into the ideal cohort track.",
    deliverable: "Personalized Career Study Plan",
  },
  {
    stepNumber: "02",
    title: "Watch Lessons",
    icon: <PlayCircle className="w-5 h-5 text-[#111111]" />,
    tagline: "Modular Deep-Dives",
    description: "Learn through studio-recorded masterclasses, zero-fluff case studies, and production-grade code & financial models.",
    deliverable: "30+ Hours of Practical Frameworks",
  },
  {
    stepNumber: "03",
    title: "Complete Assignments",
    icon: <FileCheck2 className="w-5 h-5 text-[#111111]" />,
    tagline: "Rigorous Weekly Drills",
    description: "Draft real Credit Appraisal Memos (CAMs), build full-stack endpoints, or construct 3-statement models from raw filings.",
    deliverable: "Direct Feedback from Grading Desks",
  },
  {
    stepNumber: "04",
    title: "Live Mentorship",
    icon: <Users2 className="w-5 h-5 text-[#111111]" />,
    tagline: "Weekend Masterclasses",
    description: "Interact directly with VPs, engineering architects, and founders during live AMA teardowns and mock interview drills.",
    deliverable: "Behavioral & Technical Readiness",
  },
  {
    stepNumber: "05",
    title: "Internship Project",
    icon: <Briefcase className="w-5 h-5 text-[#111111]" />,
    tagline: "Real Enterprise Capstone",
    description: "Execute a live capstone problem statement sourced directly from partner fintechs, NBFCs, and SaaS companies.",
    deliverable: "Portfolio-Grade Work Samples",
  },
  {
    stepNumber: "06",
    title: "Certificate & Placement",
    icon: <Award className="w-5 h-5 text-[#009E70]" />,
    tagline: "Verified Credential Hash",
    description: "Receive a tamper-proof certificate verified by CreditBuddy Partners Pvt Ltd and enter our exclusive hiring network.",
    deliverable: "Direct Recruiter Introductions",
  },
];

export function LearningJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-[#FAFAF8] border-b border-[#E6E6DE]">
      <div className="cb-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
            Structured Progression
          </span>
          <h2 className="text-[28px] md:text-[34px] font-heading font-semibold text-[#111111] mb-3">
            From classroom fundamentals to an institutional offer
          </h2>
          <p className="text-[15px] text-[#50504B]">
            Our 6-stage roadmap removes ambiguity. Each milestone yields a verifiable output
            that hiring managers can inspect before they interview you.
          </p>
        </div>

        {/* Horizontal Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-[18px] p-5 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.04)] ring-1 ring-[#111111]"
                    : "bg-white/70 border-[#E6E6DE] hover:bg-white hover:border-[#C8C8BE]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[12px] font-bold text-[#7E7E76]">
                      {step.stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-[8px] bg-[#F4F4EE] flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-[15px] font-heading font-semibold text-[#111111] mb-1 leading-snug">
                    {step.title}
                  </h3>

                  <span className="text-[11px] font-medium text-[#009E70] block mb-2">
                    {step.tagline}
                  </span>

                  <p className="text-[12px] text-[#50504B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F0EA] flex items-center gap-1.5 text-[11px] text-[#111111] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#009E70] shrink-0" />
                  <span className="truncate">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap Connected Milestone Bar */}
        <div className="mt-8 rounded-[12px] bg-white border border-[#E6E6DE] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00C48C]"></span>
            <span className="text-[#111111] font-medium">
              Milestone Active: Stage {STEPS[activeStep].stepNumber} — {STEPS[activeStep].title}
            </span>
          </div>
          <div className="text-[#50504B] flex items-center gap-2">
            <span>Proof of work:</span>
            <span className="px-2 py-0.5 rounded bg-[#F4F4EE] border border-[#E6E6DE] font-mono text-[11px] text-[#111111]">
              {STEPS[activeStep].deliverable}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

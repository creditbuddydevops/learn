"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  FileCheck, 
  TrendingUp, 
  ShieldCheck, 
  ArrowUpRight, 
  Code2, 
  Sparkles,
  CheckCircle2,
  Sliders,
  DollarSign
} from "lucide-react";

export function PlatformBentoGrid() {
  // Interactive mini-calculator state for Cell 1 (Credit Underwriting CAM)
  const [loanAmount, setLoanAmount] = useState(5); // in Crores
  const [ebitda, setEbitda] = useState(1.4); // in Crores
  const dscr = (ebitda / (loanAmount * 0.18)).toFixed(2);
  const isApproved = parseFloat(dscr) >= 1.35;

  // Interactive tab for Cell 2 (ATS Scanner)
  const [activeKeyword, setActiveKeyword] = useState("XYZ Formula");

  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-[#E6E6DE]">
      <div className="cb-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
            Production-Grade Tooling
          </span>
          <h2 className="text-[30px] md:text-[40px] font-heading font-semibold text-[#111111] leading-tight">
            Built like an enterprise workspace, not a video player
          </h2>
          <p className="text-[15px] text-[#50504B] mt-3">
            Every track integrates real industry software, institutional evaluation rubrics,
            and live capstone tools used by hiring desks across India.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* BENTO CELL 1: Interactive Credit Underwriting CAM Calculator (Span 7) */}
          <div className="md:col-span-7 rounded-[18px] bg-white border border-[#E6E6DE] p-7 md:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#111111] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-[8px] bg-[#E8F8F2] border border-[#99E7D1] flex items-center justify-center text-[#009E70]">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                      Live CAM Underwriting Simulator
                    </h3>
                    <span className="text-[11px] text-[#7E7E76] font-mono">
                      Banking Module 03 • Interactive Tool
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-[6px] border ${
                    isApproved
                      ? "bg-[#E8F8F2] text-[#007050] border-[#99E7D1]"
                      : "bg-[#FFF4E5] text-[#B45309] border-[#FDE68A]"
                  }`}
                >
                  {isApproved ? "Sanction Viable (DSCR > 1.35)" : "High Risk Exposure"}
                </span>
              </div>

              <p className="text-[13px] text-[#50504B] leading-relaxed mb-6">
                Students calculate Debt Service Coverage Ratios (DSCR), stress test interest rates,
                and draft actual sanction committee covenants for Indian commercial loan files.
              </p>

              {/* Interactive Sliders */}
              <div className="rounded-[12px] bg-[#FAFAF8] border border-[#EBEBE4] p-5 space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[#50504B] font-medium">Borrower Loan Request</span>
                    <span className="font-mono font-bold text-[#111111]">₹{loanAmount} Crores</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-[#E6E6DE] rounded-lg appearance-none cursor-pointer accent-[#111111]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[#50504B] font-medium">Operating EBITDA Generated</span>
                    <span className="font-mono font-bold text-[#111111]">₹{ebitda} Crores</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.1"
                    value={ebitda}
                    onChange={(e) => setEbitda(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-[#E6E6DE] rounded-lg appearance-none cursor-pointer accent-[#00C48C]"
                  />
                </div>

                <div className="pt-2 border-t border-[#E6E6DE] flex items-center justify-between text-xs">
                  <span className="text-[#7E7E76]">Computed Debt Service Coverage (DSCR):</span>
                  <span className="font-mono text-base font-bold text-[#111111]">{dscr}x</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0F0EA] flex items-center justify-between text-[11px] text-[#7E7E76]">
              <span>Taught by Debabrata Mohanty (Ex-HDFC VP)</span>
              <span className="text-[#009E70] font-medium">Interactive Spreadsheet Included</span>
            </div>
          </div>

          {/* BENTO CELL 2: ATS Resume Score Optimizer (Span 5) */}
          <div className="md:col-span-5 rounded-[18px] bg-white border border-[#E6E6DE] p-7 md:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#111111] transition-all">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-[8px] bg-[#F4F4EE] border border-[#E6E6DE] flex items-center justify-center text-[#111111]">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                    ATS Resume Architecture
                  </h3>
                  <span className="text-[11px] text-[#7E7E76] font-mono">
                    Placement Track • Score: 94/100
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-[#50504B] leading-relaxed mb-5">
                Every line item is rewritten using the Google XYZ formula: accomplished [X] as measured by [Y], by doing [Z].
              </p>

              {/* Interactive checklist */}
              <div className="space-y-2.5">
                {[
                  { tag: "XYZ Formula", desc: "Quantified metrics on 100% of project bullet points" },
                  { tag: "Parser Safety", desc: "Clean single-column structure parsed by Workday & Taleo" },
                  { tag: "Key Skills", desc: "Indexed keywords tailored to Indian fintech & banking roles" },
                ].map((item) => (
                  <div
                    key={item.tag}
                    onClick={() => setActiveKeyword(item.tag)}
                    className={`cursor-pointer rounded-[10px] p-3 text-xs border transition-colors ${
                      activeKeyword === item.tag
                        ? "bg-[#FAFAF8] border-[#111111]"
                        : "bg-white border-[#E6E6DE] hover:bg-[#FAFAF8]"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-medium text-[#111111] mb-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#009E70]" />
                      <span>{item.tag}</span>
                    </div>
                    <span className="text-[#50504B] text-[11px] pl-5 block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0F0EA] flex items-center justify-between text-[11px]">
              <span className="text-[#7E7E76]">Reviewed by Pooja Trivedi</span>
              <span className="text-[#007050] font-semibold">Ex-Flipkart Talent Lead</span>
            </div>
          </div>

          {/* BENTO CELL 3: Placement Pipeline Live Stream (Span 5) */}
          <div className="md:col-span-5 rounded-[18px] bg-white border border-[#E6E6DE] p-7 md:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#111111] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-[8px] bg-[#E8F8F2] border border-[#99E7D1] flex items-center justify-center text-[#009E70]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                      Placement Stream
                    </h3>
                    <span className="text-[11px] text-[#7E7E76] font-mono">
                      Recent Candidate Outcomes
                    </span>
                  </div>
                </div>

                <span className="w-2 h-2 rounded-full bg-[#00C48C] animate-ping"></span>
              </div>

              <p className="text-[13px] text-[#50504B] leading-relaxed mb-4">
                Verified referrals directly matching graduates to active requisitions.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="rounded-[10px] bg-[#FAFAF8] border border-[#E6E6DE] p-3 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#111111] block">Arjun Panigrahi</span>
                    <span className="text-[11px] text-[#7E7E76]">VSSUT Burla → Axis Bank</span>
                  </div>
                  <span className="font-mono font-semibold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                    ₹8.2 LPA
                  </span>
                </div>

                <div className="rounded-[10px] bg-[#FAFAF8] border border-[#E6E6DE] p-3 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#111111] block">Meera Subramanian</span>
                    <span className="text-[11px] text-[#7E7E76]">SRCC → TresVista Deals</span>
                  </div>
                  <span className="font-mono font-semibold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                    ₹9.5 LPA
                  </span>
                </div>

                <div className="rounded-[10px] bg-[#FAFAF8] border border-[#E6E6DE] p-3 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#111111] block">Tanmay Deshmukh</span>
                    <span className="text-[11px] text-[#7E7E76]">KIIT → Fintech Scale-Up</span>
                  </div>
                  <span className="font-mono font-semibold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                    ₹14 LPA
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F0F0EA] flex items-center justify-between text-[11px] text-[#7E7E76]">
              <span>140+ Active Hiring Partners</span>
              <span className="text-[#111111] font-semibold">100% Verified Placements</span>
            </div>
          </div>

          {/* BENTO CELL 4: Cryptographic Credential Engine (Span 7) */}
          <div className="md:col-span-7 rounded-[18px] bg-[#111111] text-white border border-[#222222] p-7 md:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-[#333333] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-[8px] bg-white/10 border border-white/20 flex items-center justify-center text-[#00C48C]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-heading font-semibold text-white">
                      Cryptographic Credential Engine
                    </h3>
                    <span className="text-[11px] text-[#A0A09A] font-mono">
                      Tamper-Proof SHA-256 Registry
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-[#00C48C] bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-0.5 rounded-[4px]">
                  ECDSA Verified
                </span>
              </div>

              <p className="text-[13px] text-[#A0A09A] leading-relaxed mb-6">
                Recruiters do not need to call your college administration. Each certificate includes an
                immutable verification hash that cross-references the student&apos;s capstone repo, grading rubrics, and director sign-off.
              </p>

              <div className="rounded-[12px] bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-xs space-y-2">
                <div className="flex justify-between items-center text-[11px] text-[#8E8E86]">
                  <span>SAMPLE REGISTRY ENTRY</span>
                  <span className="text-[#00C48C]">STATUS: ACTIVE & VERIFIED</span>
                </div>
                <div className="font-mono text-xs text-[#E6E6DE] break-all">
                  SHA256: e4f81c9b2a609d43501a91b4028ce37017b13904dd2f019
                </div>
                <div className="text-[11px] text-[#A0A09A] pt-1 border-t border-[#2A2A2A] flex justify-between">
                  <span>Holder: Pratik Nayak (VSSUT)</span>
                  <span>Issued: CreditBuddy Partners Pvt Ltd</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-[11px] text-[#8E8E86]">
              <span>Corporate Reg: U62090OD2026PTC053104</span>
              <span className="text-[#00C48C] font-medium">Verify any ID in 1-Click</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

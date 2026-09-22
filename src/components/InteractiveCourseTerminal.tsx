"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Play, 
  CheckCircle2, 
  FileSpreadsheet, 
  Code2, 
  Calculator, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

type TabMode = "underwriting" | "fullstack" | "modeling";

export function InteractiveCourseTerminal() {
  const [activeMode, setActiveMode] = useState<TabMode>("underwriting");
  const [copied, setCopied] = useState(false);
  const [executed, setExecuted] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setExecuted(false);
    setTimeout(() => setExecuted(true), 300);
  };

  return (
    <section className="py-24 bg-white border-b border-[#E6E6DE]">
      <div className="cb-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E6E6DE] text-xs font-semibold text-[#009E70] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00C48C] animate-pulse"></span>
              <span>Live Terminal Experience</span>
            </div>
            <h2 className="text-[30px] md:text-[42px] font-heading font-semibold text-[#111111] leading-tight">
              Test drive the curriculum before enrolling
            </h2>
            <p className="text-[15px] text-[#50504B] mt-2">
              No theoretical slideshows. Inspect the actual models, code repositories, and credit appraisal memos
              our students build to pass technical rounds.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-[10px] bg-[#FAFAF8] border border-[#E6E6DE] self-start md:self-auto">
            {[
              { id: "underwriting", label: "Credit Underwriting (CAM)", icon: <Calculator className="w-3.5 h-3.5" /> },
              { id: "fullstack", label: "Fintech Webhooks (TS)", icon: <Code2 className="w-3.5 h-3.5" /> },
              { id: "modeling", label: "3-Statement Model", icon: <FileSpreadsheet className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveMode(tab.id as TabMode);
                  setExecuted(false);
                }}
                className={`flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-[6px] transition-colors ${
                  activeMode === tab.id
                    ? "bg-[#111111] text-white font-semibold"
                    : "text-[#50504B] hover:text-[#111111] hover:bg-[#F4F4EE]"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-[18px] bg-[#111111] border border-[#262626] text-white shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#262626] bg-[#161616]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#333333]"></span>
              <span className="w-3 h-3 rounded-full bg-[#333333]"></span>
              <span className="w-3 h-3 rounded-full bg-[#333333]"></span>
              <span className="text-xs font-mono text-[#8E8E86] ml-2">
                {activeMode === "underwriting"
                  ? "creditbuddy/underwriting/cam_sanction_memo.ts"
                  : activeMode === "fullstack"
                  ? "creditbuddy/api/ledger/idempotent_webhook.ts"
                  : "creditbuddy/models/dcf_operating_sweep.xlsx"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleRun}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-[6px] bg-[#00C48C] text-[#0A3A2A] hover:bg-[#00B37F] transition-colors"
              >
                <Play className="w-3 h-3 fill-[#0A3A2A]" />
                <span>Run Evaluation</span>
              </button>
            </div>
          </div>

          {/* Code & Logic Body */}
          <div className="p-6 md:p-8 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px] flex flex-col justify-between">
            <div>
              <AnimatePresence mode="wait">
                {activeMode === "underwriting" && (
                  <motion.div
                    key="underwriting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-3"
                  >
                    <div className="text-[#7E7E76]">
                      // Commercial Credit Appraisal: Borrower Risk Evaluation (₹5 Cr Facility)
                    </div>
                    <div>
                      <span className="text-[#818CF8]">const</span> borrowerFinancials = {"{"}
                      <br />
                      &nbsp;&nbsp;annualTurnover: <span className="text-[#34D399]">34_80_00_000</span>, <span className="text-[#7E7E76]">// ₹34.8 Cr audited turnover</span>
                      <br />
                      &nbsp;&nbsp;operatingEbitda: <span className="text-[#34D399]">4_20_00_000</span>, <span className="text-[#7E7E76]">// 12.06% EBITDA margin</span>
                      <br />
                      &nbsp;&nbsp;existingDebtService: <span className="text-[#34D399]">1_10_00_000</span>, <span className="text-[#7E7E76]">// Principal + Interest</span>
                      <br />
                      &nbsp;&nbsp;proposedWorkingCapital: <span className="text-[#34D399]">5_00_00_000</span>, <span className="text-[#7E7E76]">// Requested Limit</span>
                      <br />
                      &nbsp;&nbsp;cibilCommercialScore: <span className="text-[#34D399]">782</span>, <span className="text-[#7E7E76]">// Clean repayment track</span>
                      <br />
                      {"};"}
                    </div>
                    <div>
                      <span className="text-[#818CF8]">function</span> evaluateSanction(borrower) {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="text-[#818CF8]">const</span> dscr = borrower.operatingEbitda / (borrower.existingDebtService + (borrower.proposedWorkingCapital * <span className="text-[#34D399]">0.105</span>));
                      <br />
                      &nbsp;&nbsp;<span className="text-[#818CF8]">return</span> dscr &gt;= <span className="text-[#34D399]">1.35</span> ? <span className="text-[#00C48C]">&quot;SANCTION_RECOMMENDED&quot;</span> : <span className="text-[#F87171]">&quot;DECLINE_EXPOSURE&quot;</span>;
                      <br />
                      {"}"}
                    </div>
                  </motion.div>
                )}

                {activeMode === "fullstack" && (
                  <motion.div
                    key="fullstack"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-3"
                  >
                    <div className="text-[#7E7E76]">
                      // Production Payment Webhook: Handling Idempotency & Database Ledger Updates
                    </div>
                    <div>
                      <span className="text-[#818CF8]">export async function</span> handlePaymentEvent(event: WebhookEvent) {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="text-[#818CF8]">const</span> isProcessed = <span className="text-[#818CF8]">await</span> redis.get(`event:${"{"}event.id{"}"}`);
                      <br />
                      &nbsp;&nbsp;<span className="text-[#818CF8]">if</span> (isProcessed) <span className="text-[#818CF8]">return</span> {"{"} status: <span className="text-[#34D399]">200</span>, duplicate: <span className="text-[#818CF8]">true</span> {"}"};
                      <br />
                      <br />
                      &nbsp;&nbsp;<span className="text-[#7E7E76]">// Atomic PostgreSQL Transaction</span>
                      <br />
                      &nbsp;&nbsp;<span className="text-[#818CF8]">await</span> prisma.$transaction([
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;prisma.studentEnrollment.update({"{"} where: {"{"} id: event.metadata.studentId {"}"}, data: {"{"} status: <span className="text-[#00C48C]">&quot;ACTIVE&quot;</span> {"}"} {"}"}),
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;prisma.ledgerEntry.create({"{"} data: {"{"} amount: event.amount, currency: <span className="text-[#34D399]">&quot;INR&quot;</span> {"}"} {"}"})
                      <br />
                      &nbsp;&nbsp;]);
                      <br />
                      {"}"}
                    </div>
                  </motion.div>
                )}

                {activeMode === "modeling" && (
                  <motion.div
                    key="modeling"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-3"
                  >
                    <div className="text-[#7E7E76]">
                      // Wall Street 3-Statement Model: Dynamic Operating Cash Sweep
                    </div>
                    <div>
                      <span className="text-[#818CF8]">Formula [Row 42]:</span> =IF(Cash_Balance &gt; Min_Cash_Buffer, Cash_Balance - Min_Cash_Buffer, 0)
                      <br />
                      <span className="text-[#818CF8]">Formula [Row 54]:</span> =INDEX(Revenue_Drivers!B4:M4, MATCH(Current_Fiscal_Year, Timeline!B1:M1, 0))
                      <br />
                      <span className="text-[#818CF8]">Formula [Row 88]:</span> =NPV(WACC, Unlevered_Free_Cash_Flow) + Terminal_Value / (1 + WACC)^5
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Execution Output Console */}
            <div className="mt-6 pt-4 border-t border-[#262626] bg-[#0A0A0A] p-4 rounded-[10px] text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#7E7E76] mb-2 font-mono">
                <span>TERMINAL OUTPUT</span>
                <span className="text-[#00C48C]">
                  {executed ? "EXECUTION COMPLETE (0.12s)" : "CLICK 'RUN EVALUATION' TO EXECUTE"}
                </span>
              </div>

              {executed ? (
                <div className="space-y-1 text-[#34D399]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
                    <span>Calculated DSCR: 1.62x (Standard Banking Minimum: 1.35x)</span>
                  </div>
                  <div className="text-[#E6E6DE]">
                    Committee Verdict: Credit Appraisal Memo Sanction Recommended under Priority Lending Norms.
                  </div>
                </div>
              ) : (
                <div className="text-[#7E7E76]">
                  $ ready to compile evaluation metrics for Indian enterprise case study...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA to Track */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-[14px] bg-[#FAFAF8] border border-[#E6E6DE]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00C48C]"></span>
            <span className="text-xs text-[#111111] font-semibold">
              Want to build these exact case studies from scratch?
            </span>
          </div>

          <Link
            href="/courses"
            className="btn-primary text-xs py-2 px-4 rounded-[8px]"
          >
            <span>Browse All 24 Hands-On Tracks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

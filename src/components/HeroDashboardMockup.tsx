"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Users, 
  BookOpen, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Play, 
  Clock 
} from "lucide-react";

export function HeroDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"progress" | "placements" | "certificate">("progress");

  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
      {/* Main Container */}
      <div className="relative rounded-[18px] border border-[#E6E6DE] bg-[#FFFFFF] p-5 md:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        {/* Top window header with interactive view tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#F0F0EA] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DE]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DE]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DE]"></span>
            <span className="text-[11px] font-mono text-[#7E7E76] ml-2 truncate">
              academy.creditbuddy.org.in
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#FAFAF8] p-1 rounded-[6px] border border-[#E6E6DE]">
            {(
              [
                { id: "progress", label: "Active Track" },
                { id: "placements", label: "Live Offers" },
                { id: "certificate", label: "Credential" },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-[4px] transition-colors ${
                  activeTab === t.id
                    ? "bg-[#111111] text-white"
                    : "text-[#7E7E76] hover:text-[#111111]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Core Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <div className="rounded-[12px] bg-[#FAFAF8] border border-[#EBEBE4] p-3">
            <div className="flex items-center gap-1.5 text-[#7E7E76] mb-1">
              <BookOpen className="w-3.5 h-3.5 text-[#111111]" />
              <span className="text-[11px] font-medium">Curriculum</span>
            </div>
            <div className="text-[20px] font-heading font-bold text-[#111111] leading-none">
              24
            </div>
            <span className="text-[10px] text-[#7E7E76] block mt-1">Specialized Tracks</span>
          </div>

          <div className="rounded-[12px] bg-[#FAFAF8] border border-[#EBEBE4] p-3">
            <div className="flex items-center gap-1.5 text-[#7E7E76] mb-1">
              <Users className="w-3.5 h-3.5 text-[#009E70]" />
              <span className="text-[11px] font-medium">Community</span>
            </div>
            <div className="text-[20px] font-heading font-bold text-[#111111] leading-none">
              12,000+
            </div>
            <span className="text-[10px] text-[#7E7E76] block mt-1">Students Trained</span>
          </div>

          <div className="rounded-[12px] bg-[#FAFAF8] border border-[#EBEBE4] p-3">
            <div className="flex items-center gap-1.5 text-[#7E7E76] mb-1">
              <Star className="w-3.5 h-3.5 text-[#D97706] fill-[#D97706]" />
              <span className="text-[11px] font-medium">Ratings</span>
            </div>
            <div className="text-[20px] font-heading font-bold text-[#111111] leading-none">
              4.9★
            </div>
            <span className="text-[10px] text-[#7E7E76] block mt-1">From 2,800+ Mocks</span>
          </div>

          <div className="rounded-[12px] bg-[#FAFAF8] border border-[#EBEBE4] p-3">
            <div className="flex items-center gap-1.5 text-[#7E7E76] mb-1">
              <Award className="w-3.5 h-3.5 text-[#009E70]" />
              <span className="text-[11px] font-medium">Internships</span>
            </div>
            <div className="text-[20px] font-heading font-bold text-[#111111] leading-none">
              2,450+
            </div>
            <span className="text-[10px] text-[#7E7E76] block mt-1">Offers Verified</span>
          </div>
        </div>

        {/* Dynamic Centerpiece Based on Active Tab */}
        <div className="min-h-[170px]">
          <AnimatePresence mode="wait">
            {activeTab === "progress" && (
              <motion.div
                key="progress"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                <div className="rounded-[12px] border border-[#E6E6DE] bg-[#FAFAF8] p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#009E70] block">
                        Live Masterclass Module
                      </span>
                      <h4 className="text-[14px] font-heading font-semibold text-[#111111] mt-0.5">
                        Credit Analysis & Corporate Appraisal Memo
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-[4px] bg-white border border-[#E6E6DE] text-[11px] font-medium text-[#50504B]">
                      Module 3 of 4
                    </span>
                  </div>

                  <div className="w-full bg-[#E5E5DE] h-2 rounded-full overflow-hidden mt-3 mb-2">
                    <div className="bg-[#00C48C] h-full w-[76%] rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#7E7E76]">
                    <span>24 of 36 sessions completed</span>
                    <span className="font-semibold text-[#111111]">76% complete</span>
                  </div>
                </div>

                <div className="rounded-[10px] bg-[#FFFFFF] border border-[#E6E6DE] p-3 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-[#009E70]" />
                    <span className="text-[#111111] font-medium">Up next: Working Capital Cycle & MPBF Formulas</span>
                  </div>
                  <span className="text-[#7E7E76] font-mono text-[11px]">50 mins</span>
                </div>
              </motion.div>
            )}

            {activeTab === "placements" && (
              <motion.div
                key="placements"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-2.5"
              >
                <div className="rounded-[10px] bg-[#FAFAF8] border border-[#E6E6DE] p-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#111111] block">Arjun Panigrahi (VSSUT)</span>
                    <span className="text-[11px] text-[#7E7E76]">Placed at Axis Bank • Commercial Desk</span>
                  </div>
                  <span className="font-mono font-bold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                    ₹8.2 LPA
                  </span>
                </div>

                <div className="rounded-[10px] bg-[#FAFAF8] border border-[#E6E6DE] p-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#111111] block">Meera Subramanian (SRCC)</span>
                    <span className="text-[11px] text-[#7E7E76]">Placed at TresVista • Financial Modeler</span>
                  </div>
                  <span className="font-mono font-bold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                    ₹9.5 LPA
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "certificate" && (
              <motion.div
                key="certificate"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="space-y-2.5"
              >
                <div className="rounded-[12px] border border-[#99E7D1] bg-[#E8F8F2]/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-[8px] bg-white border border-[#99E7D1] flex items-center justify-center text-[#009E70] shadow-sm">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[13px] font-heading font-semibold text-[#111111]">
                            Internship Certificate Issued
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009E70]" />
                        </div>
                        <span className="text-[11px] text-[#50504B] block font-mono">
                          ID: CB-ACADEMY-2026-8942
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-[#007050] bg-white px-2.5 py-1 rounded-[6px] border border-[#99E7D1]">
                      Verified
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-[8px] bg-[#FAFAF8] border border-[#E6E6DE] text-[11px] text-[#50504B] flex justify-between items-center">
                  <span>Cryptographic Hash:</span>
                  <span className="font-mono text-[#111111]">e4f81c9b2a609d</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Snippet */}
        <div className="mt-4 pt-3 border-t border-[#F0F0EA] flex items-center justify-between text-[11px] text-[#7E7E76]">
          <span>CreditBuddy Partners Pvt Ltd</span>
          <span className="font-mono text-[#50504B]">Sambalpur • Odisha</span>
        </div>
      </div>
    </div>
  );
}

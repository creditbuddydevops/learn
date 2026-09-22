"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function CallToAction() {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="cb-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] border border-[#333333] text-xs font-semibold text-[#00C48C]">
            <span className="w-2 h-2 rounded-full bg-[#00C48C]"></span>
            <span>Next Cohort Starts Monday • Limited Seats</span>
          </div>

          <h2 className="text-[34px] md:text-[46px] font-heading font-semibold text-white tracking-tight leading-tight">
            Ready to Build Your Career?
          </h2>

          <p className="text-[16px] text-[#A0A09A] max-w-xl mx-auto leading-relaxed">
            Gain verified skills, build portfolio-grade capstones, and get direct referrals
            to hiring managers across Indian commercial banking and technology startups.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="btn-emerald text-[15px] py-3.5 px-8 rounded-[8px] w-full sm:w-auto font-semibold"
            >
              <span>Join Academy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-medium py-3.5 px-8 rounded-[8px] border border-[#333333] bg-[#1A1A1A] text-white hover:bg-[#252525] transition-all w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-[#A0A09A]" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E8E86]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
              <span>Verified Certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
              <span>7-Day Refund Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C48C]" />
              <span>Direct Placement Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

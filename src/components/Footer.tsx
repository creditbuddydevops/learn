"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/data/company";
import { Mail, ArrowUpRight } from "lucide-react";
import { DotSticker } from "@/components/scrapbook/WashiTape";
import { DoodlePaperclipGlasses } from "@/components/scrapbook/HandDoodles";

export function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return null;
  }

  return (
    <footer className="w-full pt-16 pb-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* ========================================================
            PINNED LEGAL DISCLOSURE PAPER CARD
            Exact match of the bottom card in the user's reference graphic
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-[14px] p-7 sm:p-10 shadow-[0_20px_45px_rgba(0,0,0,0.25)] border border-black/10"
        >
          {/* Circular Pastel Green Dot Sticker Pin at Top Center */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
            <DotSticker color="green" size="lg" />
          </div>

          {/* Header Row with Hand-Doodle Glasses */}
          <div className="flex items-center justify-between pb-1">
            <div>
              <h3 className="font-heading text-[22px] sm:text-[26px] font-extrabold text-[#0F172A] tracking-tight">
                CreditBuddy Partners Pvt Ltd
              </h3>
              <p className="font-hand text-[15px] sm:text-[16px] text-[#475569] font-medium mt-0.5">
                Building a better financial ecosystem for students across India.
              </p>
            </div>
            {/* Pen doodle glasses / paperclip */}
            <div className="hidden sm:block">
              <DoodlePaperclipGlasses className="w-16 h-8" />
            </div>
          </div>

          <div className="my-4 border-t border-[#E2E8F0]" />

          {/* Legal Identity and Registration Details */}
          <div className="space-y-3 text-[12px] sm:text-[13px] text-[#334155] leading-relaxed font-mono">
            <div className="font-semibold text-[#0F172A]">
              CREDITBUDDY PARTNERS PRIVATE LIMITED CIN - {COMPANY_INFO.cin} GSTIN - {COMPANY_INFO.gstin}
            </div>
            <div>
              PLOT NO. {COMPANY_INFO.registeredOffice.plotNo} {COMPANY_INFO.registeredOffice.landmark},{" "}
              {COMPANY_INFO.registeredOffice.area}, {COMPANY_INFO.registeredOffice.locality},{" "}
              {COMPANY_INFO.registeredOffice.city}, {COMPANY_INFO.registeredOffice.state}, {COMPANY_INFO.registeredOffice.pincode}
            </div>
          </div>

          {/* Contact Email Link */}
          <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#059669] hover:underline"
            >
              <Mail className="w-4 h-4 text-[#059669]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-[11px] font-medium text-[#64748B] font-hand">
              Official Grievance &amp; Verification Desk
            </span>
          </div>

          {/* Torn Paper Bottom Edge effect */}
          <div className="absolute -bottom-2 left-6 right-6 flex justify-between space-x-2 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-[#2952E3] -mb-1.5" />
            ))}
          </div>
        </motion.div>

        {/* Directory Navigation Links on Cobalt Canvas */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] font-semibold text-white/90">
          <Link href="/courses" className="hover:text-white transition-colors">
            All Courses
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/mentors" className="hover:text-white transition-colors">
            Mentors
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/certificates" className="hover:text-white transition-colors">
            Verify Certificate
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/about" className="hover:text-white transition-colors">
            About CreditBuddy
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Campus Partnerships
          </Link>
          <span className="text-white/40">•</span>
          <Link href="/dashboard" className="text-[#86EFAC] hover:underline flex items-center gap-1 font-bold">
            <span>Student Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} CreditBuddy Partners Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

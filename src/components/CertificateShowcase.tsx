"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, Award, ArrowUpRight, CheckCircle, QrCode } from "lucide-react";

export function CertificateShowcase() {
  return (
    <section className="py-20 bg-white border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block">
              Cryptographic Verification
            </span>
            <h2 className="text-[28px] md:text-[36px] font-heading font-semibold text-[#111111] leading-tight">
              Industry-ready certificates verified by CreditBuddy Learning Academy
            </h2>
            <p className="text-[15px] text-[#50504B] leading-relaxed">
              Every graduate receives a tamper-proof credential backed by an unalterable registry ID.
              Recruiters and HR managers verify your grade, capstone submission, and instructor sign-off
              in one click.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#111111]">
                <CheckCircle className="w-4 h-4 text-[#009E70]" />
                <span>Unique registry hash (verifiable by third-party background checkers)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#111111]">
                <CheckCircle className="w-4 h-4 text-[#009E70]" />
                <span>Direct LinkedIn 1-click credential badge integration</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#111111]">
                <CheckCircle className="w-4 h-4 text-[#009E70]" />
                <span>Issued by CreditBuddy Partners Pvt Ltd (CIN: {COMPANY_INFO.cin})</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/certificates"
                className="btn-primary text-[14px] py-2.5 px-5"
              >
                <span>Verify Certificate</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="btn-secondary text-[14px] py-2.5 px-5"
              >
                <span>Browse Accredited Tracks</span>
              </Link>
            </div>
          </div>

          {/* Right Certificate Mockup Column */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-[620px] rounded-[18px] border border-[#D1D1C7] bg-[#FAFAF8] p-6 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              {/* Inner certificate frame */}
              <div className="rounded-[12px] border-2 border-[#E6E6DE] bg-white p-6 md:p-8 relative">
                {/* Watermark seal */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F0F0EA]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[6px] bg-[#111111] flex items-center justify-center text-white text-xs font-bold">
                      <span className="text-[#00C48C]">C</span>B
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm tracking-tight text-[#111111] block">
                        CREDITBUDDY LEARNING ACADEMY
                      </span>
                      <span className="text-[10px] text-[#7E7E76] uppercase font-mono">
                        CREDENTIAL OF INSTITUTIONAL MASTERY
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-[6px] bg-[#E8F8F2] border border-[#99E7D1] text-[11px] font-semibold text-[#007050]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED ISSUE</span>
                  </div>
                </div>

                {/* Certificate Recipient Content */}
                <div className="py-6 text-center space-y-2">
                  <span className="text-xs text-[#7E7E76] font-mono uppercase tracking-wider block">
                    This certifies that
                  </span>
                  <h3 className="text-2xl font-heading font-semibold text-[#111111]">
                    Pratik Nayak
                  </h3>
                  <p className="text-xs text-[#50504B] max-w-md mx-auto">
                    has successfully satisfied all rigorous curriculum requirements, case evaluations,
                    and final capstone defense for
                  </p>
                  <div className="inline-block px-4 py-1.5 rounded-[8px] bg-[#F4F4EE] border border-[#E6E6DE] text-sm font-semibold text-[#111111]">
                    Credit Analysis & Commercial Underwriting
                  </div>
                </div>

                {/* Footer Signatories & QR */}
                <div className="pt-6 border-t border-[#F0F0EA] flex items-end justify-between text-xs">
                  <div className="text-left space-y-1">
                    <span className="font-heading font-bold text-[#111111] block text-[13px]">
                      Debabrata Mohanty
                    </span>
                    <span className="text-[11px] text-[#7E7E76] block">
                      Director & Head of Underwriting
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E86]">
                      CreditBuddy Partners Pvt Ltd
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAFAF8] p-2 rounded-[8px] border border-[#E6E6DE]">
                    <div className="w-8 h-8 bg-white border border-[#E6E6DE] flex items-center justify-center rounded-[4px]">
                      <QrCode className="w-6 h-6 text-[#111111]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] uppercase font-mono text-[#7E7E76] block">
                        Registry ID
                      </span>
                      <span className="font-mono font-bold text-[11px] text-[#111111]">
                        CB-ACADEMY-2026-8942
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

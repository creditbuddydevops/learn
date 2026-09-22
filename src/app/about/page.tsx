import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, TrendingUp, Award, MapPin, Mail, ArrowRight } from "lucide-react";
import { WashiTape } from "@/components/scrapbook/WashiTape";

export default function AboutPage() {
  return (
    <div className="py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main White Paper Card */}
        <div className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-10 z-20">
            <WashiTape variant="orange-checkered" className="w-24" />
          </div>

          {/* Header Story */}
          <div className="mb-8 pb-4 border-b border-[#E2E8F0]">
            <span className="font-hand text-[15px] font-bold text-[#059669] block mb-1">
              Company Story &amp; Mandate
            </span>
            <h1 className="text-[28px] sm:text-[36px] font-heading font-extrabold text-[#0F172A] leading-tight mb-2">
              Democratizing Institutional Skills for Indian Students
            </h1>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              {COMPANY_INFO.name} was established under {COMPANY_INFO.legalEntity} with a singular conviction:
              Indian colleges teach theoretical syllabus, but modern commercial banks, fintechs, and tech desks hire for practical proof of work.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] p-5 space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A]">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
              </div>
              <h3 className="text-[15px] font-heading font-bold text-[#0F172A]">
                Transparency Without Fine Print
              </h3>
              <p className="text-[12px] text-[#475569] leading-relaxed">
                Empower students with honest knowledge about loans, credit scores, APR, and career benchmarks upfront.
              </p>
            </div>

            <div className="rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] p-5 space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A]">
                <TrendingUp className="w-4 h-4 text-[#059669]" />
              </div>
              <h3 className="text-[15px] font-heading font-bold text-[#0F172A]">
                Industry Practitioner Mentorship
              </h3>
              <p className="text-[12px] text-[#475569] leading-relaxed">
                Modules are guided and reviewed by professionals actively working at firms like HDFC Bank, Razorpay, and KPMG.
              </p>
            </div>

            <div className="rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] p-5 space-y-2">
              <div className="w-8 h-8 rounded-[6px] bg-white border border-[#CBD5E1] flex items-center justify-center text-[#0F172A]">
                <Award className="w-4 h-4 text-[#059669]" />
              </div>
              <h3 className="text-[15px] font-heading font-bold text-[#0F172A]">
                Verified Proof of Work
              </h3>
              <p className="text-[12px] text-[#475569] leading-relaxed">
                Graduates build tangible work samples — CAM balance sheet spreading and full stack apps — backed by registry IDs.
              </p>
            </div>
          </div>

          {/* Corporate Legal Entity Card */}
          <div className="rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 space-y-4">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#059669] uppercase block mb-0.5">
                Corporate Governance
              </span>
              <h3 className="text-[18px] font-heading font-extrabold text-[#0F172A]">
                {COMPANY_INFO.legalEntity}
              </h3>
              <p className="text-[12px] text-[#475569] mt-0.5">
                Registered under the Companies Act, 2013 with the Ministry of Corporate Affairs (MCA), Government of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#E2E8F0] text-xs">
              <div className="space-y-2 font-mono">
                <div>
                  <span className="text-[#64748B] block text-[10px]">CIN:</span>
                  <span className="font-bold text-[#0F172A]">{COMPANY_INFO.cin}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[10px]">GSTIN:</span>
                  <span className="font-bold text-[#0F172A]">{COMPANY_INFO.gstin}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div className="text-[#475569] leading-relaxed">
                  <span className="font-bold text-[#0F172A] block">Headquarters:</span>
                  <span>{COMPANY_INFO.registeredOffice.fullAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="text-center pt-8">
            <Link href="/courses" className="btn-tape-black text-xs py-2 px-5 rounded-[8px]">
              <span>Explore All Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

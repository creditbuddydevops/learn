"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, Search, Download, AlertCircle } from "lucide-react";
import { WashiTape } from "@/components/scrapbook/WashiTape";

interface CertificateRecord {
  id: string;
  studentName: string;
  courseTitle: string;
  issueDate: string;
  grade: string;
  verificationHash: string;
  capstoneProject: string;
  status: "Verified & Active";
}

const DATABASE_CERTS: Record<string, CertificateRecord> = {
  "CB-ACADEMY-2026-8942": {
    id: "CB-ACADEMY-2026-8942",
    studentName: "Pratik Nayak",
    courseTitle: "Credit Analysis & Commercial Underwriting",
    issueDate: "September 08, 2026",
    grade: "Grade A+ (Distinction)",
    verificationHash: "e4f81c9b2a609d43501a",
    capstoneProject: "Corporate Credit Appraisal Memo (CAM) for ₹5 Cr Working Capital Facility",
    status: "Verified & Active",
  },
  "CB-ACADEMY-2026-4109": {
    id: "CB-ACADEMY-2026-4109",
    studentName: "Arjun Panigrahi",
    courseTitle: "Excel for Finance & Financial Modeling",
    issueDate: "August 14, 2026",
    grade: "Grade A",
    verificationHash: "a91b4028ce3701",
    capstoneProject: "Dynamic 3-Statement Operating Model & DCF Valuation",
    status: "Verified & Active",
  },
  "CB-ACADEMY-2026-7231": {
    id: "CB-ACADEMY-2026-7231",
    studentName: "Meera Subramanian",
    courseTitle: "Full Stack Web Engineering (React, Node, TS)",
    issueDate: "July 22, 2026",
    grade: "Grade A+ (Distinction)",
    verificationHash: "7b13904dd2f019",
    capstoneProject: "Multi-tenant Student Job Application Portal with PostgreSQL & Razorpay Webhooks",
    status: "Verified & Active",
  },
};

function CertificateLookupContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("id") || "CB-ACADEMY-2026-8942";

  const [query, setQuery] = useState(initialQuery);
  const [activeRecord, setActiveRecord] = useState<CertificateRecord | null>(
    DATABASE_CERTS[initialQuery] || null
  );
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toUpperCase();
    setHasSearched(true);
    setActiveRecord(DATABASE_CERTS[clean] || null);
  };

  return (
    <div className="py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Main White Paper Card */}
        <div className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-10 z-20">
            <WashiTape variant="orange-checkered" className="w-24" />
          </div>

          {/* Header */}
          <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#0F172A] font-semibold">Verification</span>
            </div>
            <h1 className="text-[28px] sm:text-[36px] font-heading font-extrabold text-[#0F172A] leading-tight">
              Certificate Verification Registry
            </h1>
            <p className="text-[14px] text-[#475569] mt-1">
              Validate authentic credentials issued by {COMPANY_INFO.legalEntity}.
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-3 mb-6 bg-[#F8FAFC] p-4 rounded-[10px] border border-[#E2E8F0]">
            <label className="text-xs font-bold text-[#0F172A] block">
              Enter Certificate Registration ID
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. CB-ACADEMY-2026-8942"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-[6px] border border-[#CBD5E1] bg-white text-[#0F172A] font-mono focus:outline-none focus:border-[#0F172A]"
                />
              </div>
              <button type="submit" className="btn-tape-black text-xs py-2 px-5 rounded-[6px]">
                <span>Verify</span>
              </button>
            </div>
            <div className="text-[11px] text-[#64748B] flex items-center gap-2">
              <span>Sample ID:</span>
              <button
                type="button"
                onClick={() => {
                  setQuery("CB-ACADEMY-2026-8942");
                  setActiveRecord(DATABASE_CERTS["CB-ACADEMY-2026-8942"]);
                }}
                className="text-[#059669] underline font-mono font-bold"
              >
                CB-ACADEMY-2026-8942
              </button>
            </div>
          </form>

          {/* Record Display */}
          {activeRecord ? (
            <div className="rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E2E8F0] gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[6px] bg-[#D1FAE5] border border-[#A7F3D0] flex items-center justify-center text-[#059669]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-heading font-bold text-[#0F172A]">
                      Verified Credential
                    </h3>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      ID: {activeRecord.id}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert("Verification dossier downloaded.")}
                  className="btn-tape-white text-xs py-1.5 px-3 rounded-[6px] inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Proof</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#64748B] block">Recipient</span>
                  <span className="font-bold text-[#0F172A] text-sm">{activeRecord.studentName}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#64748B] block">Track</span>
                  <span className="font-bold text-[#0F172A] text-sm">{activeRecord.courseTitle}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#64748B] block">Issue Date</span>
                  <span className="text-[#475569]">{activeRecord.issueDate}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#64748B] block">Honors</span>
                  <span className="font-bold text-[#059669]">{activeRecord.grade}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded border border-[#E2E8F0] text-xs space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#64748B] block">
                  Capstone Defense
                </span>
                <p className="text-[#0F172A] font-medium leading-relaxed">
                  {activeRecord.capstoneProject}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#64748B] gap-1 font-mono">
                <span>SHA-256: {activeRecord.verificationHash}</span>
                <span>Issuer: {COMPANY_INFO.legalEntity}</span>
              </div>
            </div>
          ) : hasSearched ? (
            <div className="rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 text-center space-y-2">
              <AlertCircle className="w-6 h-6 text-[#D97706] mx-auto" />
              <h4 className="text-sm font-bold text-[#0F172A]">No Certificate Found</h4>
              <p className="text-xs text-[#64748B]">Please verify the registration string or contact student support.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-white">Loading registry...</div>}>
      <CertificateLookupContent />
    </Suspense>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { IssuedCertificate } from "@/data/dashboard";
import { ShieldCheck, Download, ExternalLink, QrCode } from "lucide-react";

interface CertificateCardProps {
  certificate: IssuedCertificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 flex flex-col justify-between transition-all duration-200 hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
      <div>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0F0EA]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[6px] bg-[#111111] flex items-center justify-center text-white text-[11px] font-bold">
              <span className="text-[#00C48C]">C</span>B
            </div>
            <span className="text-[11px] font-mono text-[#7E7E76]">
              {certificate.certificateNumber}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#007050] bg-[#E8F8F2] border border-[#99E7D1] px-2 py-0.5 rounded-[4px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified
          </span>
        </div>

        <h3 className="text-[17px] font-heading font-semibold text-[#111111] mb-2 leading-snug">
          {certificate.courseTitle}
        </h3>

        <div className="rounded-[10px] bg-[#FAFAF8] border border-[#EBEBE4] p-3 text-xs space-y-1 mb-4">
          <div className="flex justify-between">
            <span className="text-[#7E7E76]">Issued to:</span>
            <span className="font-semibold text-[#111111]">{certificate.studentName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7E7E76]">Issue Date:</span>
            <span className="text-[#50504B]">{certificate.issueDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7E7E76]">Assessment:</span>
            <span className="text-[#007050] font-semibold">{certificate.grade}</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[#F0F0EA] flex items-center justify-between gap-3">
        <Link
          href={`/certificates?id=${encodeURIComponent(certificate.certificateNumber)}`}
          className="text-xs text-[#009E70] font-semibold hover:underline inline-flex items-center gap-1"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Verify Credential</span>
        </Link>

        <button
          type="button"
          onClick={() => alert(`Certificate ${certificate.certificateNumber} download started.`)}
          className="btn-secondary text-[12px] py-1.5 px-3 rounded-[6px]"
        >
          <Download className="w-3.5 h-3.5 text-[#50504B]" />
          <span>PDF</span>
        </button>
      </div>
    </div>
  );
}

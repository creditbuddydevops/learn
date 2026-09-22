"use client";

import React from "react";

const PARTNERS = [
  { name: "VSSUT Burla", category: "College" },
  { name: "IIT Kharagpur", category: "Alumni Network" },
  { name: "BITS Pilani", category: "Mentors" },
  { name: "Delhi University", category: "College" },
  { name: "Razorpay", category: "Hiring Partner" },
  { name: "Zerodha", category: "Mentorship" },
  { name: "HDFC Bank", category: "Banking Desk" },
  { name: "CRED", category: "Fintech Partner" },
  { name: "Swiggy", category: "Product Track" },
  { name: "Axis Bank", category: "Credit Hiring" },
];

export function TrustedMarquee() {
  return (
    <section className="border-y border-[#E6E6DE] bg-[#FFFFFF] py-10">
      <div className="cb-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div>
            <span className="text-[12px] font-semibold text-[#7E7E76] uppercase tracking-wider block">
              Ecosystem & Placements
            </span>
            <p className="text-[14px] text-[#50504B] mt-0.5">
              Trained candidates recruited by leading tech companies, retail banks, and partner colleges.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-[#7E7E76]">
            <span className="px-2.5 py-1 rounded-[6px] bg-[#F4F4EE] text-[#50504B] font-medium border border-[#E6E6DE]">
              85+ Colleges
            </span>
            <span className="px-2.5 py-1 rounded-[6px] bg-[#F4F4EE] text-[#50504B] font-medium border border-[#E6E6DE]">
              140+ Hiring Startups
            </span>
          </div>
        </div>

        {/* Monochrome Logo Strip */}
        <div className="relative overflow-hidden py-2">
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8 opacity-85">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 group transition-opacity hover:opacity-100"
              >
                <div className="w-2 h-2 rounded-full bg-[#111111]/40 group-hover:bg-[#00C48C] transition-colors"></div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-heading font-semibold text-[#111111] tracking-tight">
                    {partner.name}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#7E7E76]">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { MENTORS } from "@/data/mentors";
import { MentorCard } from "@/components/MentorCard";
import { Search } from "lucide-react";
import { WashiTape } from "@/components/scrapbook/WashiTape";

export default function MentorsPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = MENTORS.filter((m) => {
    const matchesDomain = selectedDomain === "all" || m.domain === selectedDomain;
    const matchesQuery =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesQuery;
  });

  return (
    <div className="py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
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
              <span className="text-[#0F172A] font-semibold">Mentors</span>
            </div>
            <h1 className="text-[28px] sm:text-[36px] font-heading font-extrabold text-[#0F172A] leading-tight">
              Learn from Industry Practitioners
            </h1>
            <p className="text-[14px] text-[#475569] mt-1">
              Active VPs, leads, and analysts from Razorpay, HDFC Bank, and KPMG coaching motivated students.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0] p-3 mb-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search mentors by name, company, or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-[6px] border border-[#CBD5E1] bg-white text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0F172A]"
              />
            </div>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

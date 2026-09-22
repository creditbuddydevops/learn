"use client";

import React from "react";
import Link from "next/link";
import { Mentor } from "@/data/mentors";
import { ShieldCheck, Calendar, ArrowUpRight, Award } from "lucide-react";

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] group">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[14px]">
              {mentor.avatarInitials}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                  {mentor.name}
                </h3>
                <ShieldCheck className="w-4 h-4 text-[#009E70]" />
              </div>
              <p className="text-[12px] font-medium text-[#009E70]">
                {mentor.role}
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-[#50504B] bg-[#FAFAF8] border border-[#E6E6DE] px-2 py-0.5 rounded-[4px]">
            {mentor.experience}
          </span>
        </div>

        <div className="rounded-[10px] bg-[#FAFAF8] border border-[#EBEBE4] p-3 mb-4 text-xs">
          <span className="text-[#7E7E76] block text-[10px] uppercase font-mono">Current / Past Organization</span>
          <span className="text-[#111111] font-semibold mt-0.5 block">{mentor.company}</span>
        </div>

        <p className="text-[13px] text-[#50504B] leading-relaxed mb-4">
          {mentor.bio}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#E8F8F2] text-[#007050] px-2.5 py-1 rounded-[6px]">
            <Award className="w-3 h-3" />
            {mentor.domain}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-[#F0F0EA] flex items-center justify-between text-xs">
        <span className="text-[#7E7E76]">
          {mentor.sessionsConducted}+ hours mentored
        </span>

        <Link
          href="/signup"
          className="btn-secondary text-[12px] py-1.5 px-3 rounded-[6px]"
        >
          <Calendar className="w-3.5 h-3.5 text-[#009E70]" />
          <span>Book Session</span>
        </Link>
      </div>
    </div>
  );
}

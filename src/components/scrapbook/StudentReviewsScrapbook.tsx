"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, ShieldCheck } from "lucide-react";
import { WashiTape } from "./WashiTape";

export function StudentReviewsScrapbook() {
  const [selectedId, setSelectedId] = useState<string>(TESTIMONIALS[0].id);
  const activeStudent = TESTIMONIALS.find((t) => t.id === selectedId) || TESTIMONIALS[0];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-8">
      {/* Clean White Paper Card on Cobalt Blue with scroll entrance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10"
      >
        {/* Top Washi Tape Accent */}
        <div className="absolute -top-3 left-10 z-20">
          <WashiTape variant="orange-checkered" className="w-24" />
        </div>

        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
          <span className="font-hand text-[15px] font-bold text-[#059669] block mb-1">
            Verified Student Outcomes
          </span>
          <h2 className="font-heading text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-tight">
            Hear From Placed Students
          </h2>
          <p className="text-[14px] text-[#475569] mt-1">
            Freshers who trained on real credit underwriting &amp; engineering workflows.
          </p>
        </div>

        {/* Student Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          {TESTIMONIALS.map((student) => {
            const isSelected = student.id === selectedId;
            return (
              <motion.button
                key={student.id}
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedId(student.id)}
                className={`p-3 rounded-[8px] text-left transition-colors duration-150 border ${
                  isSelected
                    ? "bg-[#D1FAE5] border-[#059669] text-[#065F46] font-bold shadow-sm"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-white hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-[10px] font-bold">
                    {student.avatarInitials}
                  </div>
                  <span className="text-xs font-bold truncate">
                    {student.name.split(" ")[0]}
                  </span>
                </div>
                <div className="text-[11px] font-bold text-[#059669] truncate">
                  {student.package}
                </div>
                <div className="text-[10px] text-[#64748B] truncate">
                  {student.placedAt.split(" ")[0]}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Featured Testimonial Content with smooth AnimatePresence transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudent.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-[#F8FAFC] rounded-[12px] p-6 sm:p-8 border border-[#E2E8F0] space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(activeStudent.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                ))}
                <span className="ml-2 font-hand text-[14px] font-bold text-[#0F172A]">
                  5.0 Verified Review
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#D1FAE5] text-[#065F46] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                <ShieldCheck className="w-3 h-3" /> Placed: {activeStudent.package}
              </span>
            </div>

            <blockquote className="text-[16px] sm:text-[18px] text-[#1E293B] font-medium leading-[1.7] pl-3 border-l-2 border-[#059669]">
              &ldquo;{activeStudent.quote}&rdquo;
            </blockquote>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#E2E8F0]">
              <div>
                <span className="font-bold text-[#0F172A] block">{activeStudent.name}</span>
                <span className="text-[#64748B]">{activeStudent.role} • {activeStudent.placedAt}</span>
              </div>
              <div className="text-[#64748B] font-mono text-[11px]">
                {activeStudent.college.split("/")[0]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Quote } from "lucide-react";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#FAFAF8] border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
              Verified Student Outcomes
            </span>
            <h2 className="text-[28px] md:text-[34px] font-heading font-semibold text-[#111111]">
              Hear from graduates who secured offers
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#7E7E76] font-mono mr-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-[8px] bg-white border border-[#E6E6DE] flex items-center justify-center text-[#111111] hover:bg-[#F4F4EE] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-[8px] bg-white border border-[#E6E6DE] flex items-center justify-center text-[#111111] hover:bg-[#F4F4EE] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-8 md:p-12 relative shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D97706] fill-[#D97706]" />
                ))}
                <span className="ml-2 text-xs font-semibold text-[#111111]">5.0 Verified Review</span>
              </div>

              <blockquote className="text-[18px] md:text-[21px] text-[#111111] font-heading font-normal leading-relaxed">
                “{item.quote}”
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <span className="px-2.5 py-1 rounded-[6px] bg-[#E8F8F2] text-[#007050] font-semibold border border-[#99E7D1]">
                  Placed at: {item.placedAt}
                </span>
                <span className="px-2.5 py-1 rounded-[6px] bg-[#F4F4EE] text-[#111111] font-medium border border-[#E6E6DE]">
                  Package: {item.package}
                </span>
                <span className="text-[#7E7E76]">
                  Track: {item.courseTaken}
                </span>
              </div>
            </div>

            {/* Student Profile Column */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#F0F0EA] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm tracking-tight">
                  {item.avatarInitials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-semibold text-[#111111] text-[16px]">
                      {item.name}
                    </h4>
                    <ShieldCheck className="w-4 h-4 text-[#009E70]" />
                  </div>
                  <p className="text-xs text-[#50504B] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="bg-[#FAFAF8] rounded-[10px] p-3 border border-[#E6E6DE] text-xs text-[#7E7E76]">
                <span className="block text-[10px] uppercase font-mono text-[#8E8E86]">Alma Mater</span>
                <span className="font-medium text-[#111111] mt-0.5 block">{item.college}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small thumbnail selector dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? "w-8 bg-[#111111]" : "w-2 bg-[#D1D1C7]"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

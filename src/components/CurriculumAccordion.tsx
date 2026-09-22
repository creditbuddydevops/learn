"use client";

import React, { useState } from "react";
import { CurriculumModule } from "@/data/courses";
import { ChevronDown, PlayCircle, Lock, FileText, CheckCircle } from "lucide-react";

interface CurriculumAccordionProps {
  curriculum: CurriculumModule[];
}

export function CurriculumAccordion({ curriculum }: CurriculumAccordionProps) {
  const [openModuleId, setOpenModuleId] = useState<string | null>(
    curriculum[0]?.id || null
  );

  const toggle = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {curriculum.map((module) => {
        const isOpen = openModuleId === module.id;

        return (
          <div
            key={module.id}
            className={`rounded-[14px] border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#111111] bg-white"
                : "border-[#E6E6DE] bg-[#FAFAF8] hover:border-[#D1D1C7]"
            }`}
          >
            {/* Module header toggle */}
            <button
              type="button"
              onClick={() => toggle(module.id)}
              className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-[6px] bg-[#111111] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {module.moduleNumber}
                </span>
                <div>
                  <h4 className="text-[15px] font-heading font-semibold text-[#111111]">
                    {module.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#7E7E76] mt-0.5">
                    <span>{module.lessons.length} lessons</span>
                    <span>•</span>
                    <span>{module.duration}</span>
                  </div>
                </div>
              </div>

              <div
                className={`w-7 h-7 rounded-[6px] border border-[#E6E6DE] bg-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#111111] text-white border-[#111111]" : "text-[#50504B]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Nested Lessons */}
            {isOpen && (
              <div className="border-t border-[#F0F0EA] divide-y divide-[#F0F0EA] bg-white px-5 py-2">
                {module.lessons.map((lesson, idx) => (
                  <div
                    key={lesson.id}
                    className="py-3 flex items-center justify-between gap-4 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.previewAvailable ? (
                        <PlayCircle className="w-4 h-4 text-[#009E70] shrink-0" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-[#8E8E86] shrink-0" />
                      )}
                      <span className="font-medium text-[#111111]">
                        {lesson.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {lesson.previewAvailable && (
                        <span className="px-2 py-0.5 rounded-[4px] bg-[#E8F8F2] text-[#007050] font-semibold text-[10px]">
                          Free Preview
                        </span>
                      )}
                      <span className="text-[#7E7E76] font-mono">
                        {lesson.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

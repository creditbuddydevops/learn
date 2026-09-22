"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { COURSES } from "@/data/courses";
import { CATEGORIES } from "@/data/categories";
import { CourseCard } from "@/components/CourseCard";
import { Search, BookOpen } from "lucide-react";
import { WashiTape } from "@/components/scrapbook/WashiTape";

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.categorySlug === selectedCategory;
      const matchesLevel =
        selectedLevel === "all" || course.level.toLowerCase() === selectedLevel.toLowerCase();
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <div className="py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Clean White Paper Card on Cobalt Canvas */}
        <div className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Top Washi Tape Accent */}
          <div className="absolute -top-3 left-10 z-20">
            <WashiTape variant="orange-checkered" className="w-24" />
          </div>

          {/* Page Title & Breadcrumb */}
          <div className="max-w-3xl mb-8 pb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#0F172A] font-semibold">Curriculum</span>
            </div>
            <h1 className="text-[28px] sm:text-[36px] font-heading font-extrabold text-[#0F172A] leading-tight">
              Explore All Programs
            </h1>
            <p className="text-[14px] text-[#475569] mt-1">
              Industry-designed tracks taught by practitioners from HDFC, Razorpay, and KPMG.
            </p>
          </div>

          {/* Search & Level Filters */}
          <div className="bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0] p-3.5 mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tracks or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-[6px] border border-[#CBD5E1] bg-white text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0F172A]"
              />
            </div>

            {/* Level Filter Buttons */}
            <div className="flex items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs text-[#64748B] font-medium mr-1 hidden sm:inline">Level:</span>
              {["all", "Beginner", "Intermediate"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1 rounded-[6px] text-xs font-medium border transition-colors ${
                    selectedLevel === level
                      ? "bg-[#0F172A] text-white border-[#0F172A]"
                      : "bg-white text-[#475569] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  {level === "all" ? "All Levels" : level}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                selectedCategory === "all"
                  ? "bg-[#0F172A] text-white border-[#0F172A]"
                  : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#0F172A]"
              }`}
            >
              All Tracks ({COURSES.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = COURSES.filter((c) => c.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    selectedCategory === cat.slug
                      ? "bg-[#D1FAE5] text-[#065F46] border-[#059669] font-bold"
                      : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#0F172A]"
                  }`}
                >
                  {cat.title} ({count})
                </button>
              );
            })}
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] p-10 text-center max-w-sm mx-auto my-8">
              <BookOpen className="w-8 h-8 text-[#94A3B8] mx-auto mb-2" />
              <h3 className="text-base font-heading font-bold text-[#0F172A] mb-1">
                No courses found
              </h3>
              <p className="text-xs text-[#64748B] mb-3">
                Try clearing your filters or search keywords.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSearchQuery("");
                }}
                className="btn-tape-black text-xs py-1.5 px-3 rounded-[6px]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-white">Loading curriculum...</div>}>
      <CoursesContent />
    </Suspense>
  );
}

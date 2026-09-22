"use client";

import React from "react";
import Link from "next/link";
import { Course } from "@/data/courses";
import { Clock, Star, Users, ArrowUpRight, Award, ShieldCheck } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="rounded-[18px] bg-white border border-[#E6E6DE] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#111111] hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] group">
      <div>
        {/* Course Header / Simulated Thumbnail with Minimalist Grid */}
        <div className="relative p-5 pb-4 bg-[#FAFAF8] border-b border-[#E6E6DE] flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold text-[#007050] bg-[#E8F8F2] border border-[#99E7D1] px-2.5 py-1 rounded-[6px]">
              {course.category}
            </span>
            <span className="text-[11px] font-medium text-[#50504B] bg-white border border-[#E6E6DE] px-2 py-0.5 rounded-[4px]">
              {course.level}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-3 text-[12px] text-[#7E7E76]">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#50504B]" />
                {course.duration} ({course.hours} hrs)
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#50504B]" />
                {course.studentsCount.toLocaleString("en-IN")} learners
              </span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="p-6">
          <Link href={`/course/${course.slug}`}>
            <h3 className="text-[17px] font-heading font-semibold text-[#111111] group-hover:text-[#009E70] transition-colors line-clamp-2 mb-2 leading-snug">
              {course.title}
            </h3>
          </Link>

          <p className="text-[13px] text-[#50504B] line-clamp-2 mb-4 leading-relaxed">
            {course.shortDescription}
          </p>

          {/* Instructor snapshot */}
          <div className="flex items-center gap-2.5 py-3 border-y border-[#F0F0EA] mb-4">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-[11px] font-bold tracking-tight">
              {course.instructor.avatarInitials}
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-[#111111] leading-tight">
                {course.instructor.name}
              </span>
              <span className="text-[11px] text-[#7E7E76] leading-tight">
                {course.instructor.company}
              </span>
            </div>
          </div>

          {/* Value props (Internship & Certificate) */}
          <div className="flex items-center gap-2 mb-4">
            {course.internshipOpportunity && (
              <span className="inline-flex items-center gap-1 text-[11px] text-[#007050] font-medium bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                <Award className="w-3 h-3 text-[#009E70]" />
                Internship Matching
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[11px] text-[#50504B] font-medium bg-[#F4F4EE] px-2 py-0.5 rounded-[4px]">
              <ShieldCheck className="w-3 h-3 text-[#50504B]" />
              Verified Certificate
            </span>
          </div>
        </div>
      </div>

      {/* Footer Pricing & CTA */}
      <div className="px-6 pb-6 pt-2 border-t border-[#F0F0EA] flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[19px] font-heading font-bold text-[#111111]">
              {formatPrice(course.price)}
            </span>
            <span className="text-[12px] text-[#7E7E76] line-through">
              {formatPrice(course.originalPrice)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#7E7E76] mt-0.5">
            <Star className="w-3 h-3 text-[#D97706] fill-[#D97706]" />
            <span className="font-semibold text-[#111111]">{course.rating}</span>
            <span>({course.reviewsCount})</span>
          </div>
        </div>

        <Link
          href={`/course/${course.slug}`}
          className="btn-primary text-[13px] py-2 px-3.5 rounded-[8px]"
        >
          <span>View Track</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

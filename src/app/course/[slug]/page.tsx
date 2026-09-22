import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/courses";
import { CurriculumAccordion } from "@/components/CurriculumAccordion";
import { 
  Clock, 
  Users, 
  Star, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Download,
  Play
} from "lucide-react";
import { WashiTape } from "@/components/scrapbook/WashiTape";

export function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Main White Header Card */}
        <div className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-10 z-20">
            <WashiTape variant="orange-checkered" className="w-24" />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
            <Link href="/courses" className="text-[#64748B] hover:text-[#0F172A]">
              Courses
            </Link>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#059669] bg-[#D1FAE5] px-2 py-0.5 rounded-[4px] font-bold border border-[#A7F3D0]">
              {course.category}
            </span>
            <span className="text-[#475569] bg-[#F1F5F9] px-2 py-0.5 rounded-[4px] font-medium border border-[#E2E8F0]">
              {course.level}
            </span>
          </div>

          <h1 className="text-[28px] sm:text-[38px] font-heading font-extrabold text-[#0F172A] leading-tight mb-2">
            {course.title}
          </h1>

          <p className="text-[15px] text-[#475569] leading-relaxed max-w-2xl mb-4">
            {course.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#475569] pt-2 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <span className="font-bold text-[#0F172A]">{course.rating}</span>
              <span className="text-[#64748B]">({course.reviewsCount} reviews)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#64748B]" />
              <span>{course.duration} ({course.hours} practical hrs)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#64748B]" />
              <span>{course.studentsCount.toLocaleString("en-IN")} enrolled</span>
            </div>
          </div>
        </div>

        {/* 2-Column Content: Curriculum & Enrollment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-6">
            {/* Learning Outcomes Card */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-[0_12px_28px_rgba(0,0,0,0.15)] border border-black/10">
              <h3 className="text-[18px] font-heading font-extrabold text-[#0F172A] mb-4">
                What You Will Master &amp; Ship
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0F172A]">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Tools Covered */}
              <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                <span className="text-[11px] font-mono uppercase text-[#64748B] block mb-2 font-bold">
                  Tooling &amp; Software Covered
                </span>
                <div className="flex flex-wrap gap-2">
                  {course.toolsCovered.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-semibold text-[#0F172A]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Curriculum Accordion Card */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-[0_12px_28px_rgba(0,0,0,0.15)] border border-black/10">
              <div className="mb-4">
                <h3 className="text-[18px] font-heading font-extrabold text-[#0F172A]">
                  Curriculum Architecture
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {course.curriculum.length} Core Modules • {course.lessonsCount} Practical Lessons
                </p>
              </div>

              <CurriculumAccordion curriculum={course.curriculum} />
            </div>

            {/* Lead Instructor Card */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-[0_12px_28px_rgba(0,0,0,0.15)] border border-black/10">
              <h3 className="text-[18px] font-heading font-extrabold text-[#0F172A] mb-4">
                Meet Your Lead Instructor
              </h3>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {course.instructor.avatarInitials}
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="text-[15px] font-heading font-bold text-[#0F172A]">
                    {course.instructor.name}
                  </h4>
                  <p className="text-[#059669] font-bold">
                    {course.instructor.role} • {course.instructor.company}
                  </p>
                  <p className="text-[#475569] leading-relaxed pt-1">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Enrollment Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-[16px] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10 space-y-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] font-heading font-extrabold text-[#0F172A]">
                    {formatPrice(course.price)}
                  </span>
                  <span className="text-xs text-[#94A3B8] line-through">
                    {formatPrice(course.originalPrice)}
                  </span>
                  <span className="text-[11px] font-bold text-[#065F46] bg-[#D1FAE5] px-2 py-0.5 rounded-[4px] ml-auto">
                    60% OFF
                  </span>
                </div>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  One-time enrollment • Full lifetime access
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href={`/signup?course=${course.slug}`}
                  className="btn-tape-black w-full justify-center text-xs py-2.5 rounded-[8px]"
                >
                  <span>Enroll in Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contact"
                  className="btn-tape-white w-full justify-center text-xs py-2 rounded-[8px]"
                >
                  Request Bulk / Campus Seat
                </Link>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2.5 pt-3 border-t border-[#E2E8F0] text-xs text-[#0F172A]">
                <span className="font-mono uppercase text-[10px] text-[#64748B] block font-bold">
                  Includes
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#059669]" />
                  <span>{course.hours} practical training hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Downloadable templates &amp; models</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Verified certificate credential</span>
                </div>
                {course.internshipOpportunity && (
                  <div className="flex items-center gap-2 text-[#059669] font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Internship referral matching</span>
                  </div>
                )}
              </div>

              <div className="pt-1 text-[11px] text-center text-[#64748B]">
                7-Day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

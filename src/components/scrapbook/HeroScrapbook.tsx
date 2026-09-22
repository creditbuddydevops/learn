"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Laptop } from "lucide-react";
import { SpiralRings } from "./SpiralRings";
import { WashiTape, DotSticker } from "./WashiTape";
import { DoodleSmiley, DoodleStarHeart } from "./HandDoodles";

const smoothFade = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroScrapbook() {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-8 md:py-12 overflow-hidden">
      {/* ========================================================
          1. TOP HERO NOTE: "Smart Money, Clear Future!"
      ======================================================== */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={smoothFade}
        className="relative w-full max-w-lg px-4 sm:px-0"
      >
        {/* Top-Left Angled Orange Checkered Washi Tape */}
        <div className="absolute -top-4 -left-3 sm:-left-5 z-30 transform -rotate-[30deg]">
          <div className="h-8 w-32 washi-tape-orange rounded-[2px] shadow-sm" />
        </div>

        {/* The White Notebook Paper Card */}
        <div className="relative bg-white rounded-[14px] p-8 sm:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Top Perforation / Tear notches */}
          <div className="absolute -top-1.5 left-8 right-8 flex justify-between space-x-2 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#2952E3] -mt-1" />
            ))}
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center pt-1 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] flex items-center justify-center">
                <span className="font-heading font-black text-sm text-[#059669]">₹</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-[#0F172A]">
                Credit<span className="text-[#059669]">Buddy</span>
              </span>
            </div>
            <span className="text-[10px] font-medium text-[#64748B] tracking-wider uppercase mt-0.5">
              Learning Academy
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-center font-heading text-[34px] sm:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-3">
            Smart Money,<br />Clear Future!
          </h1>

          <p className="text-center text-[14px] sm:text-[15px] text-[#475569] max-w-sm mx-auto leading-relaxed mb-6">
            Master finance, AI, development, and credit underwriting through practical projects, internships, and expert mentorship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/signup"
                className="btn-tape-black w-full text-[13px] px-6 py-2.5 rounded-[8px]"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/courses"
                className="btn-tape-white w-full text-[13px] px-6 py-2.5 rounded-[8px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Browse Courses</span>
              </Link>
            </motion.div>
          </div>

          {/* Blue Pen Doodle Smiley Face (Bottom Left) */}
          <div className="absolute -bottom-4 left-6 sm:left-8 z-20 pointer-events-none">
            <DoodleSmiley className="w-16 h-16 drop-shadow-sm" />
          </div>

          {/* Pinned Pastel Green Sticky Note (Bottom Right): "Learn the Basics" */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-8 -right-2 sm:-right-6 z-30 transform rotate-4 cursor-pointer"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-40">
              <DotSticker color="peach" size="sm" />
            </div>

            <div className="w-28 sm:w-32 h-24 sm:h-28 sticky-note-green rounded-[4px] p-2.5 pt-4 flex flex-col items-center justify-center text-center shadow-md border border-[#A7F3D0]">
              <span className="font-hand text-[18px] sm:text-[20px] font-bold text-[#065F46] leading-tight select-none">
                Learn the<br />Basics
              </span>
              <span className="text-[10px] text-[#047857] mt-1 font-medium font-hand">
                100% Free
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================================
          2. SPIRAL NOTEBOOK CARD + POLAROIDS
      ======================================================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={smoothFade}
        className="w-full max-w-4xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6"
      >
        {/* Left: Spiral Bound Notebook Card */}
        <div className="lg:col-span-7 relative">
          <div className="relative bg-white rounded-[16px] p-6 sm:p-8 pt-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
            {/* 5 Metal Spiral Rings across top */}
            <SpiralRings count={5} />

            {/* Inner Bordered Container */}
            <div className="border border-[#CBD5E1] rounded-[10px] p-5 sm:p-6 bg-white relative">
              {/* Logo with Green Rupee Symbol */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-heading font-extrabold text-xl text-[#0F172A] tracking-tight">
                  <span className="text-[#059669]">₹</span> CreditBuddy
                </span>
                <span className="text-[10px] bg-[#D1FAE5] text-[#065F46] font-bold px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                  Charter
                </span>
              </div>

              {/* Notebook Paper Content */}
              <p className="text-[15px] text-[#1E293B] font-medium leading-[1.75] mb-4">
                At <span className="font-bold text-[#0F172A]">CreditBuddy</span>, we empower students with complete transparency. Understand loans, interest rates, and APR upfront so you can make smart, confident financial choices without hidden fees or fine print.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#475569] font-medium border-t border-[#E2E8F0]">
                <span className="inline-flex items-center gap-1 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Industry Curriculum
                </span>
                <span className="inline-flex items-center gap-1 text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> RBI-Compliant Principles
                </span>
              </div>

              {/* Doodle at bottom-left */}
              <div className="absolute -bottom-4 -left-3 z-20">
                <DoodleStarHeart />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tactile Polaroid Photo Cards */}
        <div className="lg:col-span-5 relative flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4">
          {/* Polaroid 1 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.18 }}
            className="polaroid-card rounded-[4px] w-60 sm:w-64 transform rotate-2 cursor-pointer"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
              <div className="h-4 w-16 washi-tape-green rounded-[1px] shadow-sm" />
            </div>

            <div className="bg-[#F8FAFC] rounded-[3px] p-4 h-36 flex flex-col justify-between border border-[#E2E8F0]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#0F172A]">
                <span>LOAN & APR ANALYSIS</span>
                <span className="text-xs text-[#059669] font-mono font-bold">+8.5%</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 bg-[#E2E8F0] rounded-full w-4/5" />
                <div className="h-2 bg-[#E2E8F0] rounded-full w-3/5" />
              </div>
              <div className="flex items-center justify-between text-xs text-[#475569] font-semibold pt-1 border-t border-[#E2E8F0]">
                <span>Credit Score 780+</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="font-hand text-[14px] font-bold text-[#0F172A]">
                Financial Underwriting Flow
              </span>
            </div>
          </motion.div>

          {/* Polaroid 2 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.18 }}
            className="polaroid-card rounded-[4px] w-60 sm:w-64 transform -rotate-1 cursor-pointer"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
              <div className="h-4 w-16 washi-tape-orange rounded-[1px] shadow-sm" />
            </div>

            <div className="bg-[#F8FAFC] rounded-[3px] p-4 h-36 flex flex-col justify-between border border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-[#0F172A]" />
                <span className="text-[11px] font-bold text-[#0F172A] uppercase">
                  Capstone Studio
                </span>
              </div>
              <div className="p-2 bg-white rounded border border-[#E2E8F0] text-xs font-mono text-[#0F172A]">
                <div>&gt; git commit -m &quot;fintech app&quot;</div>
                <div className="text-[#059669]">&gt; Underwriting model verified</div>
              </div>
              <div className="text-[11px] text-[#475569] font-medium flex items-center justify-between">
                <span>Internship Ready</span>
                <span className="font-bold text-[#059669]">1:1 Mentored</span>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="font-hand text-[14px] font-bold text-[#0F172A]">
                Hands-on Project Submissions
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================================
          3. "INSTRUCTIONS" RIBBON & 3 PINNED STEP CARDS
      ======================================================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={smoothFade}
        className="w-full max-w-4xl px-4 sm:px-6 pt-6 flex flex-col items-center"
      >
        {/* Orange Checkered Washi-Tape Banner: "Instructions" */}
        <div className="relative mb-6 z-20 transform -rotate-1">
          <div className="px-8 py-2 washi-tape-orange rounded-[3px] shadow-md border border-black/10 flex items-center justify-center">
            <span className="font-heading text-[20px] font-extrabold text-white tracking-wide uppercase">
              Instructions
            </span>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* STEP 1 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.18 }}
            className="relative bg-white rounded-[12px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-black/5"
          >
            <div className="absolute -top-2.5 -left-2.5 z-30 transform -rotate-45">
              <div className="h-4 w-12 washi-tape-green rounded-[1px] shadow-sm" />
            </div>

            <div className="mb-2">
              <h3 className="font-hand text-[20px] font-bold text-[#0F172A] leading-tight">
                Step 1: Learn the Basics
              </h3>
            </div>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Explore fundamental financial terms like Principal, Interest, APR, and Credit Scores to understand how loans actually work.
            </p>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.18 }}
            className="relative bg-white rounded-[12px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-black/5"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30">
              <DotSticker color="green" size="md" />
            </div>

            <div className="mb-2 pt-1">
              <h3 className="font-hand text-[20px] font-bold text-[#0F172A] leading-tight">
                Step 2: Compare & Calculate
              </h3>
            </div>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Review transparent, interest-rate options with zero hidden fees and see exactly what fits your budget.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.18 }}
            className="relative bg-white rounded-[12px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-black/5"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30">
              <div className="h-4 w-16 washi-tape-green rounded-[1px] shadow-sm" />
            </div>

            <div className="mb-2 pt-1">
              <h3 className="font-hand text-[20px] font-bold text-[#0F172A] leading-tight">
                Step 3: Apply & Build Credit
              </h3>
            </div>
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Select your plan with clear repayment terms and start building a strong financial track record responsibly.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================================
          4. ACTIVITY SECTION: GRID PAPER CANVAS & POLAROIDS
      ======================================================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={smoothFade}
        className="w-full max-w-4xl px-4 sm:px-6 pt-6"
      >
        <div className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
          <div className="text-center mb-8">
            <h2 className="font-heading text-[20px] sm:text-[22px] font-bold text-[#0F172A]">
              Here&apos;s an example of the practical activity.
            </h2>
            <p className="font-hand text-[16px] text-[#475569] mt-0.5 font-semibold">
              Make sure to complete hands-on assignments!
            </p>
          </div>

          {/* 3 Polaroids */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Polaroid 1 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="polaroid-card rounded-[4px] w-full max-w-[240px] transform -rotate-1">
                <div className="h-36 bg-[#F8FAFC] rounded-[2px] p-3 flex flex-col justify-between border border-[#E2E8F0]">
                  <div className="text-[10px] font-bold text-[#0F172A] uppercase">
                    Core Foundations
                  </div>
                  <div className="text-center font-heading font-extrabold text-xl text-[#0F172A]">
                    Go Skills
                  </div>
                  <div className="text-xs text-[#475569] text-center font-medium">
                    Accounting, Credit Math, Code
                  </div>
                </div>

                <div className="w-full sticky-note-green rounded-[3px] p-3 -mt-2 shadow-sm relative z-10">
                  <h4 className="font-hand text-[16px] font-bold text-[#065F46] text-center">
                    Go Fuel
                  </h4>
                  <p className="text-[11px] text-[#047857] text-center mt-0.5 font-hand font-medium">
                    Core technical capability
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Polaroid 2 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="polaroid-card rounded-[4px] w-full max-w-[240px] transform rotate-1">
                <div className="h-36 bg-[#F8FAFC] rounded-[2px] p-3 flex flex-col justify-between border border-[#E2E8F0]">
                  <div className="text-[10px] font-bold text-[#0F172A] uppercase">
                    Building & Scaling
                  </div>
                  <div className="text-center font-heading font-extrabold text-xl text-[#0F172A]">
                    Grow Projects
                  </div>
                  <div className="text-xs text-[#475569] text-center font-medium">
                    Live Lending App & Models
                  </div>
                </div>

                <div className="w-full sticky-note-peach rounded-[3px] p-3 -mt-2 shadow-sm relative z-10">
                  <h4 className="font-hand text-[16px] font-bold text-[#9A3412] text-center">
                    Grow Fuel
                  </h4>
                  <p className="text-[11px] text-[#C2410C] text-center mt-0.5 font-hand font-medium">
                    Capstone work with real code
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Polaroid 3 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="polaroid-card rounded-[4px] w-full max-w-[240px] transform -rotate-1">
                <div className="h-36 bg-[#F8FAFC] rounded-[2px] p-3 flex flex-col justify-between border border-[#E2E8F0]">
                  <div className="text-[10px] font-bold text-[#0F172A] uppercase">
                    Career & Recognition
                  </div>
                  <div className="text-center font-heading font-extrabold text-xl text-[#0F172A]">
                    Glow Placement
                  </div>
                  <div className="text-xs text-[#475569] text-center font-medium">
                    Verified Credentials & Offers
                  </div>
                </div>

                <div className="w-full sticky-note-green rounded-[3px] p-3 -mt-2 shadow-sm relative z-10">
                  <h4 className="font-hand text-[16px] font-bold text-[#065F46] text-center">
                    Glow Fuel
                  </h4>
                  <p className="text-[11px] text-[#047857] text-center mt-0.5 font-hand font-medium">
                    Internship offers and credentials
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import { HeroScrapbook } from "@/components/scrapbook/HeroScrapbook";
import { StudentReviewsScrapbook } from "@/components/scrapbook/StudentReviewsScrapbook";
import { FAQScrapbook } from "@/components/scrapbook/FAQScrapbook";
import { LivePlacementTicker } from "@/components/LivePlacementTicker";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative pb-16">
      {/* Real-time floating placement stream notification toast */}
      <LivePlacementTicker />

      {/* 1. MASTER SCRAPBOOK HERO & REFERENCE SECTIONS
          Exact visual match of the user's uploaded reference graphic:
          - Top pinned note: "Smart Money, Clear Future!" + doodle smiley + green sticky note
          - Spiral binder notebook card with 5 metal rings + Polaroids
          - Orange checkered washi-tape "Instructions" banner + 3 pinned step cards
          - "Here's an example of the practical activity" grid paper section + 3 Polaroids with ruled sticky notes
      */}
      <section className="relative w-full">
        <HeroScrapbook />
      </section>

      {/* 2. ENHANCED STUDENT TESTIMONIALS SCRAPBOOK
          Tactile Polaroid review board with real graduate placement outcomes
      */}
      <section className="relative w-full">
        <StudentReviewsScrapbook />
      </section>

      {/* 3. ENHANCED FAQ SCRAPBOOK
          Spiral-bound notebook with expandable cards and pinned student support desk
      */}
      <section className="relative w-full">
        <FAQScrapbook />
      </section>
    </div>
  );
}

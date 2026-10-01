"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOPICS = [
  "CIBIL TransUnion",
  "Loan Underwriting",
  "Experian Score",
  "RBI Lending Norms",
  "Equifax India",
  "APR vs Flat Rate",
  "CRIF High Mark",
  "Debt Amortization",
  "Credit Utilization",
  "Personal Balance Sheets",
];

export const Marquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    if (!track) return;

    let timeScale = 1;
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        // Reverse direction when scrolling up, speed up when scrolling faster
        const dir = self.direction === 1 ? 1 : -1;
        const speed = Math.min(Math.abs(self.getVelocity() / 300), 4);
        timeScale = dir * (1 + speed);
        gsap.to(tween, {
          timeScale,
          duration: 0.25,
          overwrite: "auto",
        });
      },
    });

    return () => {
      tween.kill();
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-8 sm:py-10 border-t border-b border-black/5 bg-[#f0f0f0]"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-10 sm:gap-16 md:gap-20 w-max whitespace-nowrap will-change-transform"
      >
        {/* Render 3 duplicates to create seamless infinite loop */}
        {[...TOPICS, ...TOPICS, ...TOPICS].map((topic, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center gap-3 select-none opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#05aa38]" />
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight uppercase text-[#101010]/80">
              {topic}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { DrawLineLink } from "./DrawLineLink";

const SERVICES = [
  {
    title: "Credit & Scores",
    eyebrow: "CIBIL scores, bureau reports, and dispute resolution",
    bgColor: "#21105b",
    thumb:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    rotation: "-rotate-3 md:-rotate-4",
    offset: "lg:translate-y-8",
  },
  {
    title: "Loan Math",
    eyebrow: "Underwriting, reducing balance rates, and EMI amortization",
    bgColor: "#05aa38",
    thumb:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    rotation: "rotate-0",
    offset: "lg:translate-y-0",
  },
  {
    title: "Debt Systems",
    eyebrow: "Snowball vs avalanche payoffs, cashflow, and emergency buffers",
    bgColor: "#fec602",
    thumb:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    rotation: "rotate-2 md:rotate-5",
    offset: "lg:translate-y-6",
  },
];

export const ServicesCards = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#f4f4f4] overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
            Our Learning Pillars
          </span>
          <h2 className="heading-xl tracking-tight text-[#101010] font-bold">
            What we <span className="heading-alt text-[#05aa38] italic">teach</span>
          </h2>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center justify-center max-w-6xl mx-auto mb-16 sm:mb-20">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative transition-all duration-500 ease-out cursor-pointer ${service.offset} ${
                  isHovered
                    ? "scale-105 z-30"
                    : isAnyHovered
                    ? "scale-95 opacity-80 z-10"
                    : "scale-100 z-20"
                }`}
              >
                <div
                  className={`rounded-3xl p-6 sm:p-8 text-white shadow-xl transition-transform duration-500 ease-out ${
                    isHovered ? "rotate-0" : service.rotation
                  }`}
                  style={{ backgroundColor: service.bgColor }}
                >
                  {/* Card Media Visual */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-black/20 shadow-inner">
                    <img
                      src={service.thumb}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Text Content */}
                  <div>
                    <h3 className="heading-m text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <div className="eyebrow-s text-white/90 text-sm sm:text-base font-normal leading-snug">
                      {service.eyebrow}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center items-center">
          <div className="group inline-flex items-center gap-4 text-left font-semibold text-lg sm:text-xl text-[#101010]">
            <DrawLineLink href="/wat-we-doen" alwaysShow={true}>
              View full curriculum
            </DrawLineLink>

            <span className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center bg-white shadow-sm group-hover:border-black transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 -rotate-90"
              >
                <path
                  d="M14.7835 9.48099L11.3653 6.86942L7.88099 4.15207L8.84628 2.02314L8.84628 16L5.93719 16L5.93719 2.02314L6.90248 4.15207L3.41818 6.86942L-2.84955e-07 9.48099L-4.51997e-07 5.65951L7.39173 -3.23103e-07L14.7835 5.65951L14.7835 9.48099Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

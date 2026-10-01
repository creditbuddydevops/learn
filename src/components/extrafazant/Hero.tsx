"use client";

import React, { useRef } from "react";
import { Marquee } from "./Marquee";
import { DrawLineLink } from "./DrawLineLink";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={heroRef}
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-36 sm:pt-44 md:pt-48 overflow-hidden bg-[#f4f4f4] select-none"
    >
      {/* Main Content */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[1560px]">
          {/* Eyebrow - noticeably bigger and prominent */}
          <div className="mb-5 sm:mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#101010]/85">
              Financial literacy &amp; credit education
            </span>
          </div>

          {/* Heading - monumental, high-impact large display typography */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] 2xl:text-[10.5rem] font-bold tracking-tight leading-[0.94] sm:leading-[0.98] mb-10 sm:mb-16">
            <span className="block whitespace-nowrap text-[#21105b]">
              Understand loans,
            </span>
            <span className="block whitespace-nowrap text-[#101010]">
              credit &amp;{" "}
              <span className="heading-alt italic text-[#05aa38]">
                finance
              </span>
            </span>
          </h1>

          {/* Explore tracks CTA link with arrow - enlarged */}
          <div className="pt-2 flex items-center">
            <button
              onClick={() => scrollToSection("intro")}
              className="group inline-flex items-center gap-5 text-left focus:outline-none"
            >
              <DrawLineLink 
                href="#intro" 
                alwaysShow={true}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#101010]"
              >
                Explore tracks
              </DrawLineLink>

              <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/20 flex items-center justify-center bg-white shadow-sm group-hover:border-black transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 15 16"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path
                    d="M14.7835 9.48099L11.3653 6.86942L7.88099 4.15207L8.84628 2.02314L8.84628 16L5.93719 16L5.93719 2.02314L6.90248 4.15207L3.41818 6.86942L-2.84955e-07 9.48099L-4.51997e-07 5.65951L7.39173 -3.23103e-07L14.7835 5.65951L14.7835 9.48099Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="mt-16 sm:mt-24">
        <Marquee />
      </div>
    </header>
  );
};

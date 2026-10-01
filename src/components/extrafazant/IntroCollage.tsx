"use client";

import React, { useState } from "react";
import { Button052 } from "./Button052";

export const IntroCollage = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="intro" className="py-24 sm:py-32 md:py-40 bg-[#f4f4f4] overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left: Interactive Organic Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[520px]">
            {/* Collage Items Container */}
            <div className="relative w-full max-w-[580px] h-[380px] sm:h-[480px]">
              {/* Item 1: Large Team Photo */}
              <div
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
                className="absolute left-0 top-6 sm:top-10 w-[72%] sm:w-[68%] z-10 transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform:
                    hoveredItem === 1
                      ? "scale(1.06) translate(0px, -8px) rotate(0deg)"
                      : hoveredItem === 2
                      ? "scale(0.94) translate(-25px, 12px) rotate(-3deg)"
                      : hoveredItem === 3
                      ? "scale(0.96) translate(-15px, 8px) rotate(-2deg)"
                      : "scale(1) translate(0, 0) rotate(-1.5deg)",
                }}
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#f4f4f4]">
                  <video
                    src="/assets/creditbuddy_animation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover aspect-[4/3] select-none"
                  />
                </div>
              </div>

              {/* Item 2: Second CreditBuddy App Animation */}
              <div
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
                className="absolute right-0 bottom-4 sm:bottom-6 w-[56%] sm:w-[52%] z-20 transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform:
                    hoveredItem === 2
                      ? "scale(1.08) translate(0px, -10px) rotate(0deg)"
                      : hoveredItem === 1
                      ? "scale(0.93) translate(30px, 15px) rotate(4deg)"
                      : hoveredItem === 3
                      ? "scale(0.95) translate(15px, -10px) rotate(3deg)"
                      : "scale(1) translate(0, 0) rotate(2deg)",
                }}
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#f4f4f4]">
                  <video
                    src="/assets/creditbud_ani.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover aspect-[4/3] select-none"
                  />
                </div>
              </div>

              {/* Item 3: EF Run Club Floating Badge */}
              <div
                onMouseEnter={() => setHoveredItem(3)}
                onMouseLeave={() => setHoveredItem(null)}
                className="absolute right-4 top-2 sm:top-4 w-28 sm:w-36 z-30 transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform:
                    hoveredItem === 3
                      ? "scale(1.15) rotate(12deg)"
                      : hoveredItem === 1
                      ? "scale(0.9) translate(10px, -10px) rotate(-6deg)"
                      : hoveredItem === 2
                      ? "scale(0.92) translate(-8px, -15px) rotate(-3deg)"
                      : "scale(1) rotate(-5deg)",
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4b7468ff2f42835f0c_18c0ace3d313d4465b315a7d77a1d929_ef-run-club.svg"
                  alt="EF Run Club"
                  className="w-full h-auto filter drop-shadow-lg select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Content & Pitch */}
          <div className="lg:col-span-6 lg:pl-10">
            <div className="max-w-xl">
              <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
                Why CreditBuddy Learn
              </span>
              <h2 className="heading-l tracking-tight text-[#101010] mb-6 font-bold leading-[0.92]">
                Real financial skills by{" "}
                <span className="heading-alt text-[#21105b] italic">CreditBuddy</span>
              </h2>

              <p className="paragraph-m text-[#101010]/80 leading-relaxed mb-10 text-lg sm:text-xl">
                Loans and credit don&apos;t need to be confusing or shrouded in banking jargon. As a fintech startup offering loans directly in our app, we created CreditBuddy Learn to make credit scores, interest rates, and loan decisions completely transparent.
              </p>

              <div>
                <Button052 href="/over">More about our mission</Button052>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

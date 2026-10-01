"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawLineLink } from "./DrawLineLink";

const TEAM = [
  {
    name: "Tom • Underwriting",
    img: "https://cdn.prod.website-files.com/6a7eba014f1644e9f15be528/6aa0222d73177a9ee9b14138_Tom.avif",
  },
  {
    name: "Willem • Operations",
    img: "https://cdn.prod.website-files.com/6a7eba014f1644e9f15be528/6aa0220b9d4a50d9c4b5e096_Willem.avif",
  },
  {
    name: "Natasja • Bureau Data",
    img: "https://cdn.prod.website-files.com/6a7eba014f1644e9f15be528/6aa021f05f6796a2a40d468e_Natasja.avif",
  },
  {
    name: "Ted • Financial Math",
    img: "https://cdn.prod.website-files.com/6a7eba014f1644e9f15be528/6aa021d6c80f9e6cde2c9160_Ted.avif",
  },
  {
    name: "Romy • Credit Coach",
    img: "https://cdn.prod.website-files.com/6a7eba014f1644e9f15be528/6aa021901e928c31755ae5f1_Romy.avif",
  },
  {
    name: "Tarrel • Compliance",
    img: "https://cdn.prod.website-files.com/6a7eba014f1644e9f15be528/6aa021660553cda09ce3eceb_Tarrel.avif",
  },
];

export const TeamParallax = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  // Scroll Parallax
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !col1 || !col2) return;

    const st1 = gsap.to(col1, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const st2 = gsap.to(col2, {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      st1.scrollTrigger?.kill();
      st2.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 bg-[#f4f4f4] relative overflow-hidden"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Title & Floating Stickers */}
        <div className="relative text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
            Our Financial Educators
          </span>
          <h2 className="heading-xl tracking-tight text-[#101010] font-bold">
            <span className="inline-block whitespace-nowrap">
              <span className="heading-alt text-[#21105b] italic">Credit</span>Buddy{" "}
            </span>
            <span className="inline-block whitespace-nowrap heading-alt text-[#05aa38] italic">
              Mentors
            </span>
          </h2>

          {/* Floating Sticker 1: EF */}
          <div className="absolute -top-12 -right-4 sm:-right-16 w-20 sm:w-28 transform rotate-12 hover:scale-110 hover:rotate-6 transition-all duration-300 pointer-events-auto cursor-pointer drop-shadow-md">
            <img
              src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82c663977de19f46b249ff_ef.svg"
              alt="EF"
              className="w-full h-auto select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Parallax Team Grid with 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto relative mb-20 sm:mb-28">
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-10 sm:gap-14">
            {TEAM.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black/5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-white font-bold text-sm tracking-wide">
                  {member.name}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div
            ref={col2Ref}
            className="flex flex-col gap-10 sm:gap-14 md:pt-20"
          >
            {TEAM.slice(3, 6).map((member, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black/5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-5 left-5 px-4 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-white font-bold text-sm tracking-wide">
                  {member.name}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Sticker 2: ABCDEF */}
          <div className="absolute -bottom-8 -left-4 sm:-left-12 w-28 sm:w-36 transform -rotate-12 hover:scale-110 hover:rotate-0 transition-all duration-300 pointer-events-auto cursor-pointer drop-shadow-lg z-20">
            <img
              src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a857a1c6e24603c8711bff1_abcdef.svg"
              alt="ABCDEF"
              className="w-full h-auto select-none"
              loading="lazy"
            />
          </div>

          {/* Floating Sticker 3: Geen praatjes */}
          <div className="absolute top-1/2 -right-6 sm:-right-16 w-32 sm:w-40 transform rotate-6 hover:scale-110 hover:-rotate-3 transition-all duration-300 pointer-events-auto cursor-pointer drop-shadow-lg z-20">
            <img
              src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4bc7479729d0d12a28_geen-praatjes.svg"
              alt="Geen praatjes"
              className="w-full h-auto select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center items-center">
          <div className="group inline-flex items-center gap-4 text-left font-semibold text-lg sm:text-xl text-[#101010]">
            <DrawLineLink href="/over" alwaysShow={true}>
              More about our mentors
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

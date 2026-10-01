"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button052 } from "./Button052";

const FEATURED_CASES = [
  {
    title: "Credit Score Mastery",
    bgColor: "#fec602",
    textColor: "#101010",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    href: "/werk/credit-score-mastery",
  },
  {
    title: "Loan Underwriting & Math",
    bgColor: "#21105b",
    textColor: "#ffffff",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    href: "/werk/loan-math-underwriting",
  },
  {
    title: "Debt Payoff & Cashflow",
    bgColor: "#05aa38",
    textColor: "#ffffff",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    href: "/werk/debt-payoff-cashflow",
  },
];

export const FeaturedStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pin = pinRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !pin || cards.length < 2) return;

    // Desktop 3D stacked scroll timeline
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      // Position cards initially in 3D depth
      const depth = 110;
      const offset = 35;
      cards.forEach((card, i) => {
        gsap.set(card, {
          z: -i * depth,
          y: -i * offset,
          zIndex: cards.length - i,
          autoAlpha: 1,
          transformOrigin: "center center",
        });
      });

      const tl = gsap.timeline({ paused: true });

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        const startTime = i;

        // Peel off current top card
        tl.to(
          card,
          {
            y: "+=" + window.innerHeight * 0.85,
            ease: "power2.in",
            duration: 1,
          },
          startTime
        );

        // Fade out slightly before exit
        tl.to(
          card,
          {
            autoAlpha: 0,
            ease: "none",
            duration: 0.3,
          },
          startTime + 0.7
        );

        // Bring following cards forward in 3D
        cards.slice(i + 1).forEach((nextCard, nextIndex) => {
          tl.to(
            nextCard,
            {
              z: -nextIndex * depth,
              y: -nextIndex * offset,
              ease: "none",
              duration: 1,
            },
            startTime
          );
        });
      });

      // Spin scroll badge
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { rotation: 0 },
          { rotation: 360, ease: "none", duration: cards.length - 1 },
          0
        );
      }

      tl.totalDuration(cards.length - 1);

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * 1.2 * (cards.length - 1)}`,
        pin: pin,
        pinSpacing: true,
        scrub: 0.4,
        onUpdate: (self) => {
          tl.progress(self.progress);
        },
      });

      return () => {
        st.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pinRef.current) return;
    const rect = pinRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -ny * 7,
      y: nx * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative bg-[#101010] text-white pt-24 pb-20 overflow-hidden"
    >
      <div
        ref={pinRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 min-h-screen flex flex-col justify-between py-12"
      >
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="eyebrow-s text-white/60 mb-3 max-w-sm sm:max-w-md">
              Practical finance modules designed by lending specialists.
            </div>
            <h2 className="heading-xl tracking-tight font-bold">
              Core{" "}
              <span className="heading-alt text-[#05aa38] italic">tracks</span>
            </h2>
          </div>

          {/* Rotating "SCROLL" badge sticker */}
          <div className="hidden lg:block">
            <img
              ref={badgeRef}
              src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a8483d32bc0835ce2cd96c5_scroll.svg"
              alt="Scroll"
              className="w-24 h-24 select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3D Pinned Stacking Card Deck */}
        <div
          ref={rootRef}
          className="featured-perspective-root relative w-full max-w-5xl mx-auto h-[420px] sm:h-[540px] md:h-[620px] my-auto"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          {FEATURED_CASES.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="featured-slide-3d absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-300"
              style={{
                backgroundColor: item.bgColor,
              }}
            >
              <Link
                href={item.href}
                data-cursor-marquee-text="View track →"
                className="group block w-full h-full p-6 sm:p-10 relative overflow-hidden text-inherit no-underline"
              >
                {/* Image / Video preview */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Card Title on bottom */}
                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center">
          <Button052 href="/werk" variant="dark">
            Explore all tracks
          </Button052>
        </div>
      </div>
    </section>
  );
};

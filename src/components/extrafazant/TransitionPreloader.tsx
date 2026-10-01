"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const TransitionPreloader = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    // Total GIF animation is 124 frames = exactly 4.13 seconds (4130ms)
    // We let the full animation play through once to completion, then smoothly fade out.
    const timer = setTimeout(() => {
      if (isCancelled || !overlayRef.current) return;
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          if (!isCancelled) {
            setIsDone(true);
          }
        },
      });
    }, 4150);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const handleSkip = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
        onComplete: () => setIsDone(true),
      });
    }
  };

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleSkip}
      data-transition-wrap=""
      className="fixed inset-0 z-[99999] cursor-pointer flex items-center justify-center bg-white transition-opacity select-none"
      title="Click anywhere to skip"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] p-6 flex flex-col items-center justify-center bg-white">
        <div className="w-full flex items-center justify-center bg-white">
          <img
            src="/assets/logo_ani.gif"
            alt="CreditBuddy"
            className="w-full h-auto max-h-[75vh] object-contain bg-white"
          />
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("View track →");

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (window.matchMedia("(hover: none)").matches) return;

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });

    const handlePointerMove = (e: PointerEvent) => {
      quickX(e.clientX);
      quickY(e.clientY);

      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const marqueeEl = target?.closest("[data-cursor-marquee-text]") as HTMLElement | null;

      if (marqueeEl) {
        const marqueeText = marqueeEl.getAttribute("data-cursor-marquee-text") || "View track →";
        setText(marqueeText);
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      data-cursor-marquee-status={isActive ? "active" : "not-active"}
      className="cursor-marquee pointer-events-none fixed top-0 left-0 z-[99999]"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="cursor-marquee__card flex items-center gap-2">
        <span className="cursor-marquee__text-span text-white font-semibold">
          {text}
        </span>
      </div>
    </div>
  );
};

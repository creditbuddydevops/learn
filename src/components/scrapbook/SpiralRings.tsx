import React from "react";

export function SpiralRings({ count = 6 }: { count?: number }) {
  return (
    <div className="absolute -top-3.5 left-0 right-0 flex justify-around px-8 pointer-events-none z-20">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Top hole */}
          <div className="w-3 h-3 rounded-full bg-[#1A389D] border border-black/20 shadow-inner"></div>
          {/* Wire spiral loop */}
          <div className="w-2.5 h-6 -my-1.5 rounded-full border-2 border-[#D1D5DB] bg-gradient-to-r from-[#F3F4F6] via-[#E5E7EB] to-[#9CA3AF] shadow-sm transform -rotate-12"></div>
          {/* Bottom hole */}
          <div className="w-3 h-3 rounded-full bg-[#1A389D] border border-black/20 shadow-inner"></div>
        </div>
      ))}
    </div>
  );
}

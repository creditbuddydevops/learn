import React from "react";

interface WashiTapeProps {
  className?: string;
  variant?: "orange-checkered" | "mint-green" | "pastel-peach" | "white";
  style?: React.CSSProperties;
}

export function WashiTape({ className = "", variant = "orange-checkered", style }: WashiTapeProps) {
  if (variant === "orange-checkered") {
    return (
      <div
        style={style}
        className={`h-7 w-28 washi-tape-orange shadow-sm transform -rotate-2 select-none pointer-events-none rounded-[2px] ${className}`}
      />
    );
  }

  if (variant === "mint-green") {
    return (
      <div
        style={style}
        className={`h-6 w-24 washi-tape-green shadow-sm select-none pointer-events-none rounded-[1px] ${className}`}
      />
    );
  }

  if (variant === "pastel-peach") {
    return (
      <div
        style={style}
        className={`h-6 w-24 bg-[#FFC5A8] shadow-sm select-none pointer-events-none rounded-[1px] opacity-90 ${className}`}
      />
    );
  }

  return (
    <div
      style={style}
      className={`h-6 w-24 washi-tape-white shadow-sm select-none pointer-events-none rounded-[1px] ${className}`}
    />
  );
}

export function DotSticker({
  color = "green",
  className = "",
  size = "md",
}: {
  color?: "green" | "peach" | "yellow" | "blue";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
  const colorClass =
    color === "peach"
      ? "bg-[#FDBA74] border-[#FB923C]"
      : color === "yellow"
      ? "bg-[#FDE047] border-[#EAB308]"
      : color === "blue"
      ? "bg-[#93C5FD] border-[#60A5FA]"
      : "bg-[#86EFAC] border-[#4ADE80]";

  return (
    <div
      className={`${sizeClass} rounded-full ${colorClass} border border-black/10 shadow-[0_2px_4px_rgba(0,0,0,0.15)] select-none pointer-events-none ${className}`}
    />
  );
}

export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-6 h-6 transform -rotate-45 select-none pointer-events-none drop-shadow-sm ${className}`}
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

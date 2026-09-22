import React from "react";

export function DoodleSmiley({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Outer hand-drawn circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#2563EB"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="260"
        strokeDashoffset="10"
        className="opacity-90"
      />
      {/* Left eye dot */}
      <circle cx="36" cy="40" r="3.5" fill="#2563EB" />
      {/* Right eye dot */}
      <circle cx="64" cy="40" r="3.5" fill="#2563EB" />
      {/* Hand-drawn curved smile */}
      <path
        d="M 33 58 C 42 74, 58 74, 67 58"
        stroke="#2563EB"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStarHeart({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      {/* Small doodle yellow star */}
      <svg
        viewBox="0 0 50 50"
        fill="#FDE047"
        stroke="#1E293B"
        strokeWidth="2"
        strokeLinejoin="round"
        className="w-7 h-7 transform -rotate-12 inline-block drop-shadow-sm"
      >
        <polygon points="25,4 31,18 46,18 34,28 38,43 25,33 12,43 16,28 4,18 19,18" />
      </svg>
      {/* Small doodle pink heart with hatch */}
      <svg
        viewBox="0 0 50 50"
        fill="#F472B6"
        stroke="#1E293B"
        strokeWidth="2"
        strokeLinecap="round"
        className="w-6 h-6 transform rotate-12 inline-block ml-1 drop-shadow-sm"
      >
        <path d="M 25 39 C 14 30, 4 20, 10 11 C 15 4, 22 7, 25 14 C 28 7, 35 4, 40 11 C 46 20, 36 30, 25 39 Z" />
      </svg>
    </div>
  );
}

export function DoodlePaperclipGlasses({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`opacity-60 select-none pointer-events-none ${className}`}
    >
      {/* Double loop hand doodle glasses / wire rings */}
      <circle cx="24" cy="20" r="14" />
      <circle cx="56" cy="20" r="14" />
      <path d="M 38 18 Q 40 16 42 18" />
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="#1E293B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`select-none pointer-events-none ${className}`}
    >
      <path d="M 5 20 C 20 12, 35 28, 50 18" />
      <path d="M 40 10 L 52 18 L 42 26" />
    </svg>
  );
}

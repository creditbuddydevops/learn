"use client";

import React from "react";

interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  label?: string;
}

export function ProgressRing({
  progress,
  size = 110,
  strokeWidth = 8,
  color = "#00C48C",
  bgColor = "#E6E6DE",
  label,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex flex-col items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress indicator circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          style={{ transition: "stroke-dashoffset 500ms ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[20px] font-heading font-bold text-[#111111] leading-none">
          {Math.round(progress)}%
        </span>
        {label && (
          <span className="text-[10px] text-[#7E7E76] font-medium mt-0.5">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

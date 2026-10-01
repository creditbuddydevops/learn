"use client";

import React from "react";
import Link from "next/link";

interface Button052Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
}

export const Button052: React.FC<Button052Props> = ({
  href,
  children,
  className = "",
  onClick,
  variant = "light",
}) => {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ${
        isDark
          ? "bg-[#181818] text-white border border-white/10 hover:border-white/20 shadow-md"
          : "bg-white text-[#131313] border border-black/10 hover:border-black/20 shadow-sm hover:shadow-md"
      } px-6 py-3.5 text-base sm:text-lg button-052 ${className}`}
    >
      {/* Default icon */}
      <span className="button-052__icon-wrap is--default mr-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 14 13"
          fill="none"
          className="w-3.5 h-3.5 text-current transform transition-transform"
        >
          <path
            d="M5.70413 12.9355L7.98926 9.94463L10.3669 6.89587L12.2298 7.74049L0 7.74049L0 5.19504L12.2298 5.19504L10.3669 6.03967L7.98926 2.99091L5.70413 0L9.04793 0L14 6.46777L9.04793 12.9355H5.70413Z"
            fill="currentColor"
          />
        </svg>
      </span>

      {/* Button text */}
      <span className="button-052__text-wrap inline-block will-change-transform transition-transform duration-300">
        <span className="button-052__text block">{children}</span>
      </span>

      {/* Hover flying icon */}
      <span className="button-052__icon-wrap is--hover absolute left-5 flex items-center justify-center scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 14 13"
          fill="none"
          className="w-3.5 h-3.5 text-current"
        >
          <path
            d="M5.70413 12.9355L7.98926 9.94463L10.3669 6.89587L12.2298 7.74049L0 7.74049L0 5.19504L12.2298 5.19504L10.3669 6.03967L7.98926 2.99091L5.70413 0L9.04793 0L14 6.46777L9.04793 12.9355H5.70413Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </Link>
  );
};

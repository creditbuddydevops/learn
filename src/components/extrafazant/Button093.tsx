"use client";

import React from "react";
import Link from "next/link";

interface Button093Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button093: React.FC<Button093Props> = ({
  href,
  children,
  className = "",
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-[#131313] font-semibold text-sm sm:text-base border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden button-093 ${className}`}
    >
      <span className="button-093__bg absolute inset-0 bg-transparent" />
      <span className="button-093__inner relative flex items-center">
        {/* Animated 4 colored dots wrap matching logo palette */}
        <span className="button-093__dot-wrap relative flex items-center justify-center w-3 h-3 mr-2.5">
          <span className="button-093__dot w-2 h-2 rounded-full bg-[#21105b] transition-transform duration-300 group-hover:scale-0" />
          <span className="button-093__dot is--first absolute w-2 h-2 rounded-full bg-[#05aa38] scale-0 transition-transform duration-300 group-hover:scale-100 group-hover:-translate-x-1" />
          <span className="button-093__dot is--second absolute w-2 h-2 rounded-full bg-[#fec602] scale-0 transition-transform duration-300 delay-75 group-hover:scale-100" />
          <span className="button-093__dot is--third absolute w-2 h-2 rounded-full bg-[#05aa38] scale-0 transition-transform duration-300 delay-150 group-hover:scale-100 group-hover:translate-x-1" />
        </span>

        {/* Rolling 3D text */}
        <span className="button-093__text-wrap relative inline-block overflow-hidden h-[1.3em] leading-[1.3]">
          <span className="button-093__text is--default block transition-transform duration-300 group-hover:-translate-y-full group-hover:-rotate-12">
            {children}
          </span>
          <span
            aria-hidden="true"
            className="button-093__text is--hover absolute top-0 left-0 block translate-y-full rotate-12 transition-transform duration-300 group-hover:translate-y-0 group-hover:rotate-0"
          >
            {children}
          </span>
        </span>
      </span>
    </Link>
  );
};

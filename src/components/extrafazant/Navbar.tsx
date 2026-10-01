"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DrawLineLink } from "./DrawLineLink";
import { Button093 } from "./Button093";

import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { user, userProfile, activeRole } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll<HTMLElement>("[data-nav-theme='dark']");
      const navHeight = 80;
      let foundDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          foundDark = true;
        }
      });

      setIsDarkTheme(foundDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        role="banner"
        data-nav=""
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isOpen ? "bg-[#101010] text-white" : ""
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 py-5 sm:py-7 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="CreditBuddy Learn home"
            className="flex items-center gap-3 group"
          >
            <div
              className={`transition-all duration-300 flex items-center gap-3 sm:gap-3.5 ${
                isOpen || isDarkTheme
                  ? "bg-white rounded-2xl px-4 py-2 shadow-md"
                  : "py-1"
              }`}
            >
              <img
                src="/assets/main_logo.png"
                alt="CreditBuddy"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
              <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full border border-black/25 text-[#101010] bg-black/[0.04]">
                Learn
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-base font-semibold">
            <DrawLineLink
              href="/over"
              className={`transition-colors duration-300 ${
                isDarkTheme ? "text-white/90 hover:text-white" : "text-[#101010]/90 hover:text-[#101010]"
              }`}
            >
              About
            </DrawLineLink>
            <DrawLineLink
              href="/werk"
              className={`transition-colors duration-300 ${
                isDarkTheme ? "text-white/90 hover:text-white" : "text-[#101010]/90 hover:text-[#101010]"
              }`}
            >
              Tracks
            </DrawLineLink>
            <DrawLineLink
              href="/wat-we-doen"
              className={`transition-colors duration-300 ${
                isDarkTheme ? "text-white/90 hover:text-white" : "text-[#101010]/90 hover:text-[#101010]"
              }`}
            >
              Curriculum
            </DrawLineLink>
            <DrawLineLink
              href="/faq"
              className={`transition-colors duration-300 ${
                isDarkTheme ? "text-white/90 hover:text-white" : "text-[#101010]/90 hover:text-[#101010]"
              }`}
            >
              FAQ
            </DrawLineLink>
          </div>

          {/* Right Action: Dashboard / Login Button & Mobile Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {user ? (
              <Link
                href="/dashboard"
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
                  isDarkTheme
                    ? "bg-white text-[#101010] border-white/20 hover:bg-white/90"
                    : "bg-[#21105b] text-white border-transparent hover:bg-[#05aa38]"
                }`}
              >
                <span>Dashboard</span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded-full bg-white/20">
                  {activeRole}
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                  isDarkTheme
                    ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    : "bg-white text-[#101010] border-black/15 hover:bg-black/5"
                }`}
              >
                Log in
              </Link>
            )}

            <Button093 href="/contact" className="hidden sm:inline-flex">
              Get in touch
            </Button093>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label="Toggle Navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative w-11 h-11 rounded-full flex flex-col items-center justify-center p-2.5 transition-colors duration-300 ${
                isDarkTheme || isOpen
                  ? "bg-white/10 text-white"
                  : "bg-black/5 text-[#101010]"
              }`}
            >
              <div
                className={`w-5 h-0.5 bg-current rounded-full transition-transform duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"
                }`}
              />
              <div
                className={`w-5 h-0.5 bg-current rounded-full transition-transform duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Slide Down Drawer */}
        <div
          className={`md:hidden fixed inset-x-0 top-[78px] bottom-0 bg-[#101010] text-white flex flex-col justify-between px-8 py-10 transition-all duration-500 ease-in-out z-40 ${
            isOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-6"
          }`}
        >
          <div className="flex flex-col space-y-6 text-3xl font-bold pt-4">
            {user ? (
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="text-[#05aa38] font-extrabold flex items-center justify-between"
              >
                <span>Dashboard</span>
                <span className="text-xs uppercase px-2 py-0.5 rounded-full bg-white text-[#101010]">
                  {activeRole}
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-[#05aa38] font-extrabold"
              >
                Log in / Sign up
              </Link>
            )}
            <Link
              href="/over"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#05aa38] transition-colors"
            >
              About
            </Link>
            <Link
              href="/werk"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#05aa38] transition-colors"
            >
              Learning Tracks
            </Link>
            <Link
              href="/wat-we-doen"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#05aa38] transition-colors"
            >
              Curriculum
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#05aa38] transition-colors"
            >
              FAQ
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
            <Button093
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center text-center py-3.5"
            >
              Get in touch
            </Button093>
            <p className="text-sm text-white/50">
              Budharaja, Sambalpur, Odisha • CreditBuddy Learn
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

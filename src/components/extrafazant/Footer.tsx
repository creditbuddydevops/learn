"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DrawLineLink } from "./DrawLineLink";
import { Button052 } from "./Button052";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-nav-theme="dark"
      className="bg-[#101010] text-white pt-20 pb-12 overflow-hidden relative select-none"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* CTA Banner Box */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#181818] border border-white/10 p-10 sm:p-16 md:p-24 overflow-hidden mb-20 sm:mb-28 text-center flex flex-col items-center justify-center">
          <div className="relative z-10 max-w-2xl">
            <h2 className="heading-xl tracking-tight font-bold mb-4">
              Ready to make your
              <br />
              <span className="heading-alt text-[#05aa38] italic">
                next smart move?
              </span>
            </h2>

            <p className="paragraph-m text-white/70 mb-10 text-lg sm:text-xl">
              Get clear on loans, credit scores, and borrowing. Learn at your own pace with CreditBuddy Learn.
            </p>

            <div>
              <Button052 href="/werk" variant="dark">
                Explore learning tracks
              </Button052>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-white/10 items-start">
          {/* Logo & Corporate Entity on Left */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" aria-label="CreditBuddy Learn home" className="inline-flex items-center gap-3">
              <div className="inline-flex items-center gap-3.5 bg-white rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="/assets/main_logo.png"
                  alt="CreditBuddy"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
                <span className="text-xs sm:text-sm uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-[#21105b] text-white">
                  Learn
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              CreditBuddy is a fintech startup offering loans in our app. CreditBuddy Learn is our dedicated education platform where we empower individuals to master credit scores, loan math, and smart money habits.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/75 space-y-1.5 max-w-sm">
              <div className="font-bold text-white text-sm">
                CREDITBUDDY PARTNERS PRIVATE LIMITED
              </div>
              <div>
                <span className="text-white/50">CIN:</span> U62090OD2026PTC053104
              </div>
              <div>
                <span className="text-white/50">GSTIN:</span> 21AANCC6754D1ZS
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-2">
              Platform
            </h3>
            <DrawLineLink href="/over" className="text-lg text-white/80 hover:text-white">
              About CreditBuddy
            </DrawLineLink>
            <DrawLineLink href="/werk" className="text-lg text-white/80 hover:text-white">
              Learning Tracks
            </DrawLineLink>
            <DrawLineLink href="/wat-we-doen" className="text-lg text-white/80 hover:text-white">
              Curriculum &amp; Pillars
            </DrawLineLink>
            <DrawLineLink href="/faq" className="text-lg text-white/80 hover:text-white">
              Frequently Asked Questions
            </DrawLineLink>
            <DrawLineLink href="/contact" className="text-lg text-white/80 hover:text-white">
              Contact &amp; Support
            </DrawLineLink>
          </div>

          {/* Registered Office & Contact */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-2">
              Registered Office
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Gram Devi Mandir, Matru Vihar Shanti Nagar, <br />
              Budharaja, Sambalpur, <br />
              Odisha - 768004, India
            </p>
            <DrawLineLink
              href="mailto:support@creditbuddy.co.in"
              className="text-base text-[#05aa38] hover:text-white pt-2"
            >
              support@creditbuddy.co.in
            </DrawLineLink>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="md:col-span-2 flex flex-col justify-between h-full space-y-8">
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-2">
                Socials
              </h3>
              <DrawLineLink
                href="https://www.instagram.com/extrafazant/"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-white/80 hover:text-white"
              >
                Instagram
              </DrawLineLink>
              <DrawLineLink
                href="https://vimeo.com/extrafazant"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-white/80 hover:text-white"
              >
                Vimeo
              </DrawLineLink>
              <DrawLineLink
                href="https://linkedin.com/company/extrafazant?originalSubdomain=nl"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-white/80 hover:text-white"
              >
                LinkedIn
              </DrawLineLink>
            </div>

            {/* Scroll Top Button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="group relative w-12 h-12 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-white"
              >
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  className="relative z-10 w-4 h-4 text-white group-hover:text-black transition-colors duration-300 rotate-180"
                >
                  <path
                    d="M14.7835 9.48099L11.3653 6.86942L7.88099 4.15207L8.84628 2.02314L8.84628 16L5.93719 16L5.93719 2.02314L6.90248 4.15207L3.41818 6.86942L-2.84955e-07 9.48099L-4.51997e-07 5.65951L7.39173 -3.23103e-07L14.7835 5.65951L14.7835 9.48099Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-white/50 gap-4">
          <div>© {currentYear} CREDITBUDDY PARTNERS PRIVATE LIMITED. All rights reserved.</div>

          <div className="flex items-center space-x-6">
            <DrawLineLink href="/privacy" className="text-white/60 hover:text-white">
              Privacy Policy
            </DrawLineLink>
            <DrawLineLink href="/terms" className="text-white/60 hover:text-white">
              Terms &amp; Conditions
            </DrawLineLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

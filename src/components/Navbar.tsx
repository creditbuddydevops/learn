"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { WashiTape } from "@/components/scrapbook/WashiTape";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();
  const { userProfile } = useAuth();

  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return null;
  }

  const navLinks = [
    { href: "/courses", label: "Courses" },
    { href: "/mentors", label: "Mentors" },
    { href: "/certificates", label: "Verify Certificate" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="max-w-5xl mx-auto relative">
        {/* Subtle washi tape pins at left and right edges */}
        <div className="hidden lg:block absolute -top-2.5 -left-3 z-30 transform -rotate-12 pointer-events-none">
          <div className="h-5 w-16 washi-tape-orange rounded-[1px] shadow-sm" />
        </div>
        <div className="hidden lg:block absolute -top-2.5 -right-3 z-30 transform rotate-12 pointer-events-none">
          <div className="h-5 w-16 washi-tape-green rounded-[1px] shadow-sm" />
        </div>

        {/* Paper Banner Bar with Silky Smooth Floating Highlight */}
        <div className="bg-white/95 backdrop-blur-sm rounded-[16px] px-5 sm:px-7 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-black/10 flex items-center justify-between">
          {/* Brand Logo with Gentle Hover */}
          <motion.div
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] flex items-center justify-center shadow-xs">
                <span className="font-heading font-black text-sm text-[#059669]">₹</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading text-[17px] font-extrabold tracking-tight text-[#0F172A] leading-none">
                    Credit<span className="text-[#059669]">Buddy</span>
                  </span>
                  <span className="text-[10px] font-bold bg-[#D1FAE5] text-[#065F46] px-1.5 py-0.5 rounded-full border border-[#A7F3D0]">
                    Academy
                  </span>
                </div>
                <span className="text-[10px] font-medium text-[#64748B] mt-0.5 font-hand">
                  Learn. Build. Get Hired.
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav Links: Silky Smooth Glide Pill Hover */}
          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden md:flex items-center gap-1 relative"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;

              return (
                <div
                  key={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  className="relative flex flex-col items-center"
                >
                  {/* Floating Smooth Pill Highlight behind hovered item */}
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-[#F1F5F9] rounded-[8px] z-0"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <Link
                      href={link.href}
                      className={`text-[13px] font-semibold px-3 py-1.5 rounded-[8px] transition-colors duration-150 block select-none ${
                        isActive
                          ? "text-[#0F172A] font-bold"
                          : "text-[#475569] hover:text-[#0F172A]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>

                  {/* macOS Dock Indicator Dot under active page */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] -mt-0.5 relative z-10" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTAs with Gentle Silky Spring */}
          <div className="hidden md:flex items-center gap-2">
            {userProfile ? (
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold px-3.5 py-1.5 rounded-[8px] bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs transition-all"
                >
                  <div className="w-4 h-4 rounded-full bg-[#059669] text-white flex items-center justify-center text-[9px] font-extrabold">
                    {userProfile.avatarInitials || "CB"}
                  </div>
                  <span>Student Portal</span>
                </Link>
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Link
                    href="/login"
                    className="text-[13px] font-semibold text-[#475569] hover:text-[#0F172A] px-3 py-1.5 rounded-[8px] hover:bg-[#F8FAFC] transition-colors block"
                  >
                    Sign In
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Link
                    href="/courses"
                    className="btn-tape-black text-[12px] py-1.5 px-3.5 rounded-[8px] shadow-xs flex items-center gap-1.5"
                  >
                    <span>Explore Programs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-[6px] bg-[#0F172A] text-white"
            >
              <GraduationCap className="w-3 h-3 text-[#059669]" />
              <span>Portal</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-[6px] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 bg-white rounded-[12px] p-5 shadow-xl border border-black/10 space-y-3"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[14px] font-semibold text-[#0F172A] py-1 border-b border-[#E2E8F0]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-tape-black w-full justify-center text-[13px] py-2"
              >
                <GraduationCap className="w-4 h-4 text-[#059669]" />
                <span>Student Portal</span>
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-tape-white w-full justify-center text-[13px] py-2"
              >
                <span>Sign In</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

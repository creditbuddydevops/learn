"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/faq";
import { ChevronDown, Mail } from "lucide-react";
import { WashiTape } from "./WashiTape";
import { SpiralRings } from "./SpiralRings";
import { COMPANY_INFO } from "@/data/company";

export function FAQScrapbook() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [FAQS[0]?.id || "faq-1"]: true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-8">
      {/* Notebook Paper Canvas with scroll entrance */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10 pt-10"
      >
        {/* Metal spiral rings at top */}
        <SpiralRings count={5} />

        {/* Washi tape on corner */}
        <div className="absolute -top-3 right-10 z-20">
          <WashiTape variant="orange-checkered" className="w-24" />
        </div>

        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="font-hand text-[15px] font-bold text-[#059669] block mb-1">
              Clear Answers
            </span>
            <h2 className="font-heading text-[26px] sm:text-[32px] font-extrabold text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[14px] text-[#475569] mt-0.5">
              Everything you need to know about learning, projects, certificates, and placement support.
            </p>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:underline"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>

        {/* FAQ List with smooth Framer Motion height accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-[10px] border transition-colors duration-150 overflow-hidden ${
                  isOpen
                    ? "bg-[#FFFDFB] border-[#059669] shadow-sm"
                    : "bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 font-heading font-semibold text-[14px] sm:text-[15px] text-[#0F172A]"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#059669]">
                      0{index + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${isOpen ? "text-[#059669]" : "text-[#64748B]"}`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-1 text-[13px] text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

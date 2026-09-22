"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, X } from "lucide-react";

interface TickerItem {
  id: number;
  name: string;
  college: string;
  role: string;
  company: string;
  package: string;
  timeAgo: string;
}

const ITEMS: TickerItem[] = [
  {
    id: 1,
    name: "Arjun Panigrahi",
    college: "VSSUT Burla",
    role: "Associate Credit Analyst",
    company: "Axis Bank",
    package: "₹8.2 LPA",
    timeAgo: "12m ago",
  },
  {
    id: 2,
    name: "Meera Subramanian",
    college: "SRCC Delhi",
    role: "Financial Analyst",
    company: "TresVista",
    package: "₹9.5 LPA",
    timeAgo: "28m ago",
  },
  {
    id: 3,
    name: "Tanmay Deshmukh",
    college: "KIIT University",
    role: "Frontend Engineer",
    company: "Razorpay Desk",
    package: "₹14 LPA",
    timeAgo: "45m ago",
  },
  {
    id: 4,
    name: "Rhea Sen",
    college: "St. Xavier's Kolkata",
    role: "Management Consultant",
    company: "PwC India",
    package: "₹11 LPA",
    timeAgo: "1h ago",
  },
];

export function LivePlacementTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ITEMS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted || !visible) return null;

  const current = ITEMS[index];

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-[14px] bg-white border border-[#E6E6DE] p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E8F8F2] border border-[#99E7D1] flex items-center justify-center text-[#009E70] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-medium text-[#111111]">
                <span>{current.name}</span>
                <span className="text-[#7E7E76] font-normal text-[11px]">({current.college})</span>
              </div>
              <div className="text-[11px] text-[#50504B]">
                Placed at <strong className="text-[#111111]">{current.company}</strong> •{" "}
                <span className="text-[#007050] font-semibold">{current.package}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-[#F0F0EA]">
            <span className="text-[10px] text-[#8E8E86] whitespace-nowrap font-mono">
              {current.timeAgo}
            </span>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="text-[#7E7E76] hover:text-[#111111] p-1"
              aria-label="Close notification"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

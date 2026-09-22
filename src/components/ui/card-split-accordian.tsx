"use client";

import React, { useState, type FC } from "react";
import { motion, MotionConfig, type Transition } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import useMeasure from "react-use-measure";

export interface AccordionItemData {
  id: number | string;
  title: string;
  icon?: React.ReactNode;
  content: string;
  category?: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  setOpenId: (id: number | string | null) => void;
  index: number;
  total: number;
  openIndex: number;
}

interface AccordionProps {
  items?: AccordionItemData[];
  className?: string;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 1,
};

const DEFAULT_ITEMS: AccordionItemData[] = [
  {
    id: 1,
    title: "Are the courses pre-recorded or live cohort based?",
    content:
      "Our programs follow a hybrid structure: foundational frameworks are studio-recorded in high definition for self-paced study, paired with weekly live masterclasses, live CAM evaluations, and code reviews led by industry practitioners.",
  },
  {
    id: 2,
    title: "Do I receive an accredited certificate upon completion?",
    content:
      "Yes. Every graduate who completes the syllabus, passes module tests, and submits the capstone project receives an official, cryptographically verified certificate issued by CreditBuddy Partners Private Limited (verifiable at /certificates).",
  },
  {
    id: 3,
    title: "Is 1-on-1 industry mentorship included?",
    content:
      "Mentorship is included in our cohort tracks. You get direct access to VPs, lead engineers, and credit underwriters from Razorpay, HDFC Bank, and KPMG for code reviews, CAM defense simulations, and placement guidance.",
  },
  {
    id: 4,
    title: "What are the eligibility criteria for internship matching?",
    content:
      "Students maintaining an 85%+ module completion rate and passing grade on their capstone deliverable enter our partner internship matching pool. We connect you directly with vetted startups, fintechs, and corporate desks.",
  },
  {
    id: 5,
    title: "What is your refund policy if the track doesn't suit me?",
    content:
      "We offer a 7-day no-questions-asked refund policy for all tracks, provided you have watched less than 25% of the total course material. Simply email info@creditbuddy.org.in within 7 days of enrollment.",
  },
];

const AccordionItem: FC<AccordionItemProps> = ({
  item,
  setOpenId,
  index,
  total,
  openIndex,
}) => {
  const [ref, bounds] = useMeasure();
  const isOpen = index === openIndex;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const isBeforeOpen = index === openIndex - 1;
  const isAfterOpen = index === openIndex + 1;

  const isAlone = (isAfterOpen && isLast) || (isBeforeOpen && isFirst);

  const BORDER_WIDTH = "1px";
  const BORDER_STYLE = "solid";
  const borderTopWidth =
    isFirst || isAfterOpen || isOpen ? BORDER_WIDTH : "0px";
  const borderBottomWidth =
    isLast || isBeforeOpen || isOpen ? BORDER_WIDTH : "0px";
  const borderLeftWidth = BORDER_WIDTH;
  const borderRightWidth = BORDER_WIDTH;

  let borderTopLeftRadius = 0;
  let borderTopRightRadius = 0;
  let borderBottomLeftRadius = 0;
  let borderBottomRightRadius = 0;

  if (isOpen || isAlone) {
    borderTopLeftRadius = 18;
    borderTopRightRadius = 18;
    borderBottomLeftRadius = 18;
    borderBottomRightRadius = 18;
  } else if (isBeforeOpen) {
    borderBottomLeftRadius = 18;
    borderBottomRightRadius = 18;
  } else if (isAfterOpen) {
    borderTopLeftRadius = 18;
    borderTopRightRadius = 18;
  } else if (isFirst) {
    borderTopLeftRadius = 18;
    borderTopRightRadius = 18;
  } else if (isLast) {
    borderBottomLeftRadius = 18;
    borderBottomRightRadius = 18;
  }

  return (
    <MotionConfig transition={springTransition}>
      <motion.li layout className="list-none">
        <motion.div
          animate={{
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
          }}
          className={`overflow-hidden transition-colors ${
            isOpen
              ? "bg-[#FFFFFF] border-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
              : "bg-[#FAFAF8] border-[#E6E6DE] hover:bg-white"
          }`}
          style={{
            borderTopWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderRightWidth,
            borderStyle: BORDER_STYLE,
            marginBlock: isOpen ? "12px" : "0px",
          }}
        >
          <button
            type="button"
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left transition-colors"
          >
            <div className="flex items-center gap-3 pr-4">
              {item.icon ? (
                <div className="shrink-0">{item.icon}</div>
              ) : (
                <div
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                    isOpen ? "bg-[#00C48C]" : "bg-[#B0B0A8]"
                  }`}
                />
              )}

              <span
                className={`text-[15px] md:text-[16px] font-heading font-semibold transition-colors ${
                  isOpen ? "text-[#111111]" : "text-[#333330]"
                }`}
              >
                {item.title}
              </span>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 w-7 h-7 rounded-[6px] border border-[#E6E6DE] bg-white flex items-center justify-center text-[#50504B]"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? bounds.height : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="overflow-hidden will-change-transform"
          >
            <div ref={ref}>
              <div className="px-5 pb-5 pt-1 text-[13px] md:text-[14px] text-[#50504B] leading-relaxed border-t border-[#F0F0EA]">
                {item.content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.li>
    </MotionConfig>
  );
};

export const CardSplitAccordian: FC<AccordionProps> = ({ items, className = "" }) => {
  const defaultItems = items ?? DEFAULT_ITEMS;
  const [openId, setOpenId] = useState<number | string | null>(defaultItems[0]?.id || null);

  const openIndex = defaultItems.findIndex((item) => item.id === openId);

  return (
    <div className={`w-full ${className}`}>
      <ul className="w-full p-0 m-0 space-y-0">
        {defaultItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            setOpenId={setOpenId}
            index={index}
            total={defaultItems.length}
            openIndex={openIndex}
          />
        ))}
      </ul>
    </div>
  );
};

// Also export AccordionApp as alias for direct drop-in compatibility
export const AccordionApp = CardSplitAccordian;

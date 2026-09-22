"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Shield } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"onetime" | "annual">("onetime");

  const plans = [
    {
      name: "Starter",
      badge: "Self-Paced Track",
      price: 499,
      description: "Ideal for first- and second-year college students mastering core fundamental tools.",
      features: [
        "Full access to 1 selected course track",
        "Downloadable spreadsheets & code templates",
        "Graded automated module quizzes",
        "Official verified completion certificate",
        "Community forum access",
      ],
      notIncluded: [
        "1-on-1 industry mentor sessions",
        "Guaranteed internship interview pool",
        "Live CAM / Code defense simulations",
      ],
      ctaText: "Enroll in Starter",
      highlighted: false,
    },
    {
      name: "Pro",
      badge: "Most Selected by Final Years",
      price: 1999,
      description: "Our core cohort experience with live weekend masterclasses and guaranteed internship interviews.",
      features: [
        "Access to any 3 specialized career tracks",
        "Weekend live masterclasses with industry VPs",
        "Guaranteed internship interview matching",
        "ATS resume rebuild (Google XYZ format)",
        "Cryptographically verified Certificate of Mastery",
        "Direct Slack channels with teaching assistants",
        "Mock interview review with grading scorecard",
      ],
      notIncluded: [
        "Private 1-on-1 executive mentorship calls",
      ],
      ctaText: "Join Pro Cohort",
      highlighted: true,
    },
    {
      name: "Elite",
      badge: "Placement Fast-Track",
      price: 4999,
      description: "Intensive 1-on-1 placement guidance with private mentor hours and dedicated career referral agent.",
      features: [
        "Unlimited lifetime access to all 24 tracks",
        "4 private 1-on-1 calls with domain VPs/Engineers",
        "Direct recruiter introduction to partner firms",
        "Comprehensive live capstone defense simulation",
        "Full salary negotiation advisory before signing",
        "Priority grading & code review turnaround (<12h)",
        "Lifetime platform curriculum updates",
      ],
      notIncluded: [],
      ctaText: "Apply for Elite Track",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAF8] border-b border-[#E6E6DE]">
      <div className="cb-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[12px] font-semibold text-[#009E70] uppercase tracking-wider block mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-[28px] md:text-[36px] font-heading font-semibold text-[#111111] mb-3">
            Invest in skills that return 100x your tuition
          </h2>
          <p className="text-[15px] text-[#50504B]">
            Affordable pricing designed for Indian students. Zero hidden fees, zero fine print.
            All plans include a 7-day money-back guarantee.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[18px] p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.highlighted
                  ? "bg-white border-2 border-[#111111] shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
                  : "bg-white border border-[#E6E6DE] hover:border-[#D1D1C7]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#111111] text-white text-[11px] font-semibold tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[20px] font-heading font-semibold text-[#111111]">
                    {plan.name}
                  </h3>
                  {!plan.highlighted && (
                    <span className="text-[11px] font-medium text-[#7E7E76] px-2 py-0.5 rounded bg-[#FAFAF8] border border-[#E6E6DE]">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-[#50504B] mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-[#F0F0EA]">
                  <span className="text-[34px] font-heading font-bold text-[#111111]">
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-[#7E7E76]">/ one-time tuition</span>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E7E76] block">
                    What&apos;s Included
                  </span>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-[13px] text-[#111111]">
                      <Check className="w-4 h-4 text-[#009E70] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-[13px] text-[#A0A09A]">
                      <span className="w-4 h-4 rounded-full border border-[#D1D1C7] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        -
                      </span>
                      <span className="line-through">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="/signup"
                  className={`w-full justify-center text-[14px] py-3 rounded-[8px] ${
                    plan.highlighted ? "btn-emerald" : "btn-primary"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-[#7E7E76]">
                  <Shield className="w-3.5 h-3.5 text-[#009E70]" />
                  <span>7-Day Refund Policy • Instant Access</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

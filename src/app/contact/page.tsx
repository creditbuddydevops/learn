"use client";

import React, { useState } from "react";
import { DrawLineLink } from "@/components/extrafazant/DrawLineLink";
import { Button052 } from "@/components/extrafazant/Button052";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Credit Score Mastery",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-40 pb-28 sm:pt-48 sm:pb-36 bg-[#f4f4f4] min-h-screen">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
            Contact &amp; Corporate Details
          </span>
          <h1 className="heading-xl tracking-tight text-[#101010] font-bold mb-6">
            Get in touch with <span className="heading-alt text-[#0038ff] italic">CreditBuddy</span>
          </h1>
          <p className="paragraph-m text-[#101010]/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Have questions about our learning tracks, financial curriculum, or loan app? Reach out to our team in Sambalpur, Odisha, or send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-black/5">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0038ff]/10 text-[#0038ff] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="heading-m text-3xl font-bold text-[#101010]">
                  Thank you for reaching out
                </h3>
                <p className="text-base text-[#101010]/70 max-w-md mx-auto">
                  We have received your message and our team will get back to you within one business day.
                </p>
                <div className="pt-4">
                  <Button052 href="#" onClick={() => setSubmitted(false)}>
                    Send another inquiry
                  </Button052>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#101010] mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-black/15 bg-white text-base text-[#101010] focus:outline-none focus:border-[#0038ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#101010] mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-black/15 bg-white text-base text-[#101010] focus:outline-none focus:border-[#0038ff] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#101010] mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-black/15 bg-white text-base text-[#101010] focus:outline-none focus:border-[#0038ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#101010] mb-2">
                      Learning track of interest
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-black/15 bg-white text-base text-[#101010] focus:outline-none focus:border-[#0038ff] transition-colors"
                    >
                      <option value="Credit Score Mastery">Credit Score Mastery (CIBIL/Experian)</option>
                      <option value="Loan Underwriting & Math">Loan Underwriting &amp; Math</option>
                      <option value="Debt Payoff & Cashflow">Debt Payoff &amp; Cashflow Systems</option>
                      <option value="General Support">General Support &amp; App Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#101010] mb-2">
                    How can we help? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you'd like to learn or any questions you have regarding our educational tracks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-black/15 bg-white text-base text-[#101010] focus:outline-none focus:border-[#0038ff] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="button-052 !bg-[#0038ff] !text-white !border-transparent hover:!shadow-lg !px-8 !py-4 text-lg font-semibold"
                >
                  Submit inquiry →
                </button>
              </form>
            )}
          </div>

          {/* Corporate Legal Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-black/5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0038ff] block mb-1">
                  Registered Entity
                </span>
                <h3 className="heading-m text-2xl font-bold text-[#101010] leading-snug">
                  CREDITBUDDY PARTNERS PRIVATE LIMITED
                </h3>
              </div>

              <div className="space-y-4 text-base text-[#101010]/80">
                <div className="grid grid-cols-2 gap-4 pt-1 border-t border-b border-black/5 py-3">
                  <div>
                    <span className="text-xs text-black/50 uppercase tracking-wider font-semibold block">
                      CIN
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#101010]">
                      U62090OD2026PTC053104
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-black/50 uppercase tracking-wider font-semibold block">
                      GSTIN
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#101010]">
                      21AANCC6754D1ZS
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-black/50 uppercase tracking-wider font-semibold mb-1">
                    Registered Office Address
                  </div>
                  <p className="font-medium text-sm sm:text-base leading-relaxed">
                    Gram Devi Mandir, Matru Vihar Shanti Nagar, <br />
                    Budharaja, Sambalpur, <br />
                    Odisha - 768004, India
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-black/50 uppercase tracking-wider font-semibold mb-1">
                    Direct Contact
                  </div>
                  <div className="flex flex-col space-y-2">
                    <DrawLineLink href="mailto:support@creditbuddy.co.in" className="text-[#0038ff] font-semibold text-lg">
                      support@creditbuddy.co.in
                    </DrawLineLink>
                    <DrawLineLink href="mailto:learn@creditbuddy.co.in" className="text-[#101010] font-semibold text-base">
                      learn@creditbuddy.co.in
                    </DrawLineLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick App Note Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0038ff] block">
                Fintech App
              </span>
              <h4 className="text-xl font-bold text-[#101010]">
                Need a personal or business loan?
              </h4>
              <p className="text-sm text-black/70 leading-relaxed">
                CreditBuddy offers fast, transparent in-app loans with clear EMI schedules and competitive rates. Download our app or reach out to our support team for loan eligibility details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

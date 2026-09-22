"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { MapPin, Mail, CheckCircle2, Send } from "lucide-react";
import { WashiTape } from "@/components/scrapbook/WashiTape";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeOrOrg: "",
    inquiryType: "Admission & Cohort",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Main White Paper Card */}
        <div className="relative bg-white rounded-[16px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-10 z-20">
            <WashiTape variant="orange-checkered" className="w-24" />
          </div>

          {/* Header */}
          <div className="mb-8 pb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] mb-1">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#0F172A] font-semibold">Contact</span>
            </div>
            <h1 className="text-[28px] sm:text-[36px] font-heading font-extrabold text-[#0F172A] leading-tight">
              Get in Touch with Admissions
            </h1>
            <p className="text-[14px] text-[#475569] mt-1">
              Reach out directly to our counselor and campus partnership desk in Sambalpur, Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#0F172A]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-[#475569] max-w-xs mx-auto">
                    Thank you, {formData.name}. Our counselor will contact you at {formData.email} within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-tape-black text-xs py-2 px-4 rounded-[6px]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pratik Nayak"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#CBD5E1] bg-white text-xs text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. pratik@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#CBD5E1] bg-white text-xs text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                        College / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. VSSUT Burla"
                        value={formData.collegeOrOrg}
                        onChange={(e) => setFormData({ ...formData, collegeOrOrg: e.target.value })}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#CBD5E1] bg-white text-xs text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                        Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 rounded-[6px] border border-[#CBD5E1] bg-white text-xs text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                      >
                        <option value="Admission & Cohort">Student Admission</option>
                        <option value="Campus Partnership">Campus / TPO Partnership</option>
                        <option value="Hiring Partner">Hiring Vetted Graduates</option>
                        <option value="General Support">General Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your learning goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-[6px] border border-[#CBD5E1] bg-white text-xs text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-tape-black text-xs py-2.5 px-6 rounded-[8px] w-full sm:w-auto"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Registered Office Info */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-[12px] border border-[#E2E8F0] p-6 space-y-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#059669] uppercase block mb-0.5">
                  Operating Office
                </span>
                <h4 className="font-heading font-bold text-[16px] text-[#0F172A]">
                  CreditBuddy Partners Pvt Ltd
                </h4>
              </div>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {COMPANY_INFO.registeredOffice.fullAddress}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0]">
                  <Mail className="w-4 h-4 text-[#059669] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#059669] font-bold hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] font-mono text-[11px] text-[#64748B] space-y-1">
                <div>CIN: {COMPANY_INFO.cin}</div>
                <div>GSTIN: {COMPANY_INFO.gstin}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

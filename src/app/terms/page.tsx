import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Building, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | CreditBuddy Learn",
  description: "Terms of Service and legal agreement governing the use of CreditBuddy Learn platform services by CREDITBUDDY PARTNERS PRIVATE LIMITED.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-28 sm:pt-36 pb-24 px-6 sm:px-10 md:px-14">
      <div className="w-full max-w-[1000px] mx-auto space-y-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#101010]/60 hover:text-[#05aa38] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="bg-white rounded-3xl border border-black/10 p-8 sm:p-12 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#21105b] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            <FileText className="w-3.5 h-3.5 text-[#05aa38]" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101010] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-[#101010]/70 leading-relaxed max-w-2xl">
            Effective Date: <strong>October 1, 2026</strong> • Last Updated: <strong>October 1, 2026</strong>
          </p>
          <p className="text-xs text-[#101010]/50 pt-2 border-t border-black/10">
            Operated by <strong>CREDITBUDDY PARTNERS PRIVATE LIMITED</strong> (CIN: U62090OD2026PTC053104)
          </p>
        </div>

        {/* Main Content Body */}
        <div className="bg-white rounded-3xl border border-black/10 p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#101010]/80 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or creating an account on <strong>CreditBuddy Learn</strong>, you agree to be bound by these Terms and Conditions. This platform is maintained by <strong>CREDITBUDDY PARTNERS PRIVATE LIMITED</strong> (&ldquo;Company&rdquo;). If you do not agree to these terms, please discontinue access to our learning platform immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">2. Educational Purpose Disclaimer</h2>
            <p>
              All curriculum modules, loan math calculators, CIBIL scoring benchmarks, interest rate comparisons, and financial tools provided on CreditBuddy Learn are strictly for <strong>educational and informational purposes</strong>.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1 text-xs">
              <div className="flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Notice on Financial Advice</span>
              </div>
              <p>
                CreditBuddy Learn is not a direct lender, Non-Banking Financial Company (NBFC), or registered financial advisor. Calculations and simulations do not constitute binding credit approval or formal loan sanction offers.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">3. Account Registration &amp; Role Assignments</h2>
            <p>When creating an account on CreditBuddy Learn:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-[#05aa38]">
              <li>All registered accounts are initialized with the <strong>Student</strong> role by default.</li>
              <li>Each user is strictly bound to single-role access. Elevated access (Moderator or Admin) is managed exclusively by authorized system administrators via Firestore.</li>
              <li>You are responsible for maintaining the confidentiality of your authentication credentials.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">4. Intellectual Property Rights</h2>
            <p>
              All course content, infographics, interactive loan math modules, brand marks, software code, and logo assets are the exclusive intellectual property of <strong>CREDITBUDDY PARTNERS PRIVATE LIMITED</strong>. Reproduction or distribution without written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">5. System Availability &amp; Modifications</h2>
            <p>
              We reserve the right to update curriculum content, revise financial calculator formulas to align with updated Reserve Bank of India (RBI) regulations, or modify platform features at any time without prior notification.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-lg font-bold text-[#101010]">6. Corporate Governance &amp; Contact</h2>
            <div className="bg-[#f4f4f4] rounded-2xl p-6 border border-black/10 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#101010]">
                <Building className="w-4 h-4 text-[#21105b]" />
                <span>CREDITBUDDY PARTNERS PRIVATE LIMITED</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#101010]/70">
                <p><strong>CIN:</strong> U62090OD2026PTC053104</p>
                <p><strong>GSTIN:</strong> 21AANCC6754D1ZS</p>
                <p><strong>Registered Address:</strong> Sambalpur, Odisha - 768004, India</p>
                <p><strong>Legal Email:</strong> support@creditbuddy.org.in</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

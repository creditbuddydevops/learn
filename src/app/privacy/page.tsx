import React from "react";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft, Mail, MapPin, Building } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | CreditBuddy Learn",
  description: "Official Privacy Policy of CREDITBUDDY PARTNERS PRIVATE LIMITED. Read how we collect, process, and protect your data.",
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5 text-[#05aa38]" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101010] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#101010]/70 leading-relaxed max-w-2xl">
            Effective Date: <strong>October 1, 2026</strong> • Last Updated: <strong>October 1, 2026</strong>
          </p>
          <p className="text-xs text-[#101010]/50 pt-2 border-t border-black/10">
            Issued by <strong>CREDITBUDDY PARTNERS PRIVATE LIMITED</strong> (CIN: U62090OD2026PTC053104)
          </p>
        </div>

        {/* Main Content Body */}
        <div className="bg-white rounded-3xl border border-black/10 p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#101010]/80 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">1. Introduction &amp; Ownership</h2>
            <p>
              This Privacy Policy applies to the digital educational platform <strong>CreditBuddy Learn</strong>, owned and operated by <strong>CREDITBUDDY PARTNERS PRIVATE LIMITED</strong> (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, &ldquo;Our&rdquo;). We are committed to protecting the privacy, security, and confidentiality of personal data provided by users who access our educational modules, loan math tools, and credit score literacy resources.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">2. Information We Collect</h2>
            <p>We collect only the minimum required information necessary to deliver customized financial education:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-[#05aa38]">
              <li><strong>Account Credentials:</strong> Full name, email address, profile picture URL, and authentication metadata provided during Google OAuth or email sign-up.</li>
              <li><strong>Educational Activity:</strong> Module completion status, lesson progress, interactive loan math calculations, and quiz responses.</li>
              <li><strong>Technical Logs:</strong> IP address, browser type, device operating system, session time, and security event logs.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">3. How We Use Your Data</h2>
            <p>Your personal data is used strictly for the following purpose parameters:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-[#05aa38]">
              <li>To provide access to learning dashboards tailored to your account role (Student, Moderator, Admin).</li>
              <li>To save your financial calculator settings and track progress across sessions.</li>
              <li>To maintain audit trails for user role assignments and account security.</li>
              <li>To ensure compliance with applicable legal guidelines and digital privacy standards in India.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">4. Data Protection &amp; Security Protocols</h2>
            <p>
              We implement industry-standard encryption protocols (TLS 1.3 in transit and AES-256 at rest via Google Firebase Infrastructure). We enforce strict HTTP security response headers, Content Security Policy (CSP) directives, and cross-site scripting (XSS) protections to safeguard user communication.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">5. Third-Party Services &amp; Infrastructure</h2>
            <p>
              We store authentication credentials and application state securely in <strong>Google Firebase Services</strong>. We do not sell, trade, rent, or lease personal user data to third-party telemarketers or unauthorized commercial entities.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#101010]">6. User Rights</h2>
            <p>Under Indian digital data privacy regulations, you possess the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-[#05aa38]">
              <li>Request a copy of the personal data associated with your account.</li>
              <li>Request correction or deletion of your registered email or profile records.</li>
              <li>Withdraw consent for optional analytics tracking.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-lg font-bold text-[#101010]">7. Corporate Identity &amp; Contact Details</h2>
            <div className="bg-[#f4f4f4] rounded-2xl p-6 border border-black/10 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#101010]">
                <Building className="w-4 h-4 text-[#21105b]" />
                <span>CREDITBUDDY PARTNERS PRIVATE LIMITED</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#101010]/70">
                <p><strong>CIN:</strong> U62090OD2026PTC053104</p>
                <p><strong>GSTIN:</strong> 21AANCC6754D1ZS</p>
                <p><strong>Registered City:</strong> Sambalpur, Odisha - 768004</p>
                <p><strong>Support Email:</strong> legal@creditbuddy.org.in</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

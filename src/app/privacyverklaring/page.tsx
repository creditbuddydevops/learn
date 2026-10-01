import React from "react";
import { DrawLineLink } from "@/components/extrafazant/DrawLineLink";

export const metadata = {
  title: "Privacy Policy | CreditBuddy Learn",
  description:
    "Privacy Policy of CREDITBUDDY PARTNERS PRIVATE LIMITED. Learn how we handle and protect user data across our educational and financial services.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-[#f4f4f4] min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <h1 className="heading-l font-bold text-[#101010] mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5 space-y-6 text-base text-[#101010]/80 leading-relaxed">
          <p className="font-semibold text-lg text-[#101010]">
            CREDITBUDDY PARTNERS PRIVATE LIMITED (CIN: U62090OD2026PTC053104, GSTIN: 21AANCC6754D1ZS), with registered office at Gram Devi Mandir, Matru Vihar Shanti Nagar, Budharaja, Sambalpur, Odisha - 768004, is dedicated to protecting the privacy of our website visitors and educational platform users.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you interact with CreditBuddy Learn (such as submitting an inquiry, subscribing to curriculum updates, or seeking loan information), we may collect:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Full name and contact details (email address, telephone number)</li>
            <li>Inquiry details regarding learning tracks or loan eligibility</li>
            <li>Technical and usage data (IP address, browser type, interaction analytics)</li>
          </ul>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            2. Purpose of Processing
          </h2>
          <p>
            Your information is used strictly to respond to inquiries, deliver educational content, improve website user experience, and ensure compliance with applicable Indian financial and data protection laws. We never sell your personal contact details to third-party telemarketers.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            3. Cookies and Analytics
          </h2>
          <p>
            We use essential and analytics cookies to optimize site navigation and evaluate which financial education modules are most helpful. You can adjust your cookie settings at any time using our preferences panel.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            4. Grievance Officer &amp; Contact
          </h2>
          <p>
            For questions concerning your personal data or this Privacy Policy, please contact our team at{" "}
            <DrawLineLink href="mailto:support@creditbuddy.co.in" className="text-[#0038ff] font-semibold">
              support@creditbuddy.co.in
            </DrawLineLink>{" "}
            or write to our registered office in Budharaja, Sambalpur, Odisha - 768004.
          </p>
        </div>
      </div>
    </div>
  );
}

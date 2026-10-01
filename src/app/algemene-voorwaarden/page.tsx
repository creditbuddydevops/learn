import React from "react";
import { DrawLineLink } from "@/components/extrafazant/DrawLineLink";

export const metadata = {
  title: "Terms & Conditions | CreditBuddy Learn",
  description:
    "Terms and Conditions governing the use of CreditBuddy Learn, operated by CREDITBUDDY PARTNERS PRIVATE LIMITED.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="pt-36 sm:pt-48 pb-28 bg-[#f4f4f4] min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <h1 className="heading-l font-bold text-[#101010] mb-8">
          Terms &amp; Conditions
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5 space-y-6 text-base text-[#101010]/80 leading-relaxed">
          <p className="font-semibold text-lg text-[#101010]">
            These Terms &amp; Conditions govern your use of the CreditBuddy Learn website and educational services provided by CREDITBUDDY PARTNERS PRIVATE LIMITED (CIN: U62090OD2026PTC053104, GSTIN: 21AANCC6754D1ZS), located at Gram Devi Mandir, Matru Vihar Shanti Nagar, Budharaja, Sambalpur, Odisha - 768004.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            1. Nature of Services
          </h2>
          <p>
            CreditBuddy is a fintech startup providing loan products through its dedicated mobile application. CreditBuddy Learn is an informational and educational platform designed to enhance financial literacy, credit awareness, and responsible borrowing practices. The educational materials provided do not constitute certified legal, tax, or investment advice.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            2. Intellectual Property
          </h2>
          <p>
            All text, graphics, interactive models, curriculum structures, visual components, and logos on this website are the proprietary property of CREDITBUDDY PARTNERS PRIVATE LIMITED. You may access materials for personal, non-commercial education. Unauthorized reproduction or redistribution is prohibited.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            3. Accuracy of Content
          </h2>
          <p>
            While we strive to ensure all calculators, formulas, and regulatory references (such as RBI circulars or bureau scoring ranges) remain accurate and up-to-date, credit policies and lending criteria vary by institution. Users should independently verify loan terms in the Key Fact Statement (KFS) provided by their specific lender.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            4. In-App Loan Services
          </h2>
          <p>
            Formal loan applications, KYC verification, underwriting decisions, and loan disbursements take place strictly within the official CreditBuddy app and are subject to separate credit agreements and NBFC/banking partner terms.
          </p>

          <h2 className="text-xl font-bold text-[#101010] pt-4">
            5. Jurisdiction &amp; Inquiries
          </h2>
          <p>
            These terms are governed by the laws of India, with jurisdiction in Sambalpur, Odisha. For queries or notices, write to{" "}
            <DrawLineLink href="mailto:support@creditbuddy.org.in" className="text-[#0038ff] font-semibold">
              support@creditbuddy.org.in
            </DrawLineLink>.
          </p>
        </div>
      </div>
    </div>
  );
}

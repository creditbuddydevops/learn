import React from "react";
import { Button052 } from "@/components/extrafazant/Button052";
import { TeamParallax } from "@/components/extrafazant/TeamParallax";

export const metadata = {
  title: "About Us | CreditBuddy Learn",
  description:
    "CreditBuddy is a fintech startup offering in-app loans. CreditBuddy Learn is our educational platform dedicated to building financial literacy and credit confidence across India.",
};

export default function OverPage() {
  return (
    <div className="pt-36 sm:pt-48 bg-[#f4f4f4]">
      {/* Hero section */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 pb-20">
        <span className="eyebrow-m text-[#101010]/70 font-semibold mb-3 block">
          About CreditBuddy Learn
        </span>
        <h1 className="heading-xl tracking-tight text-[#101010] font-bold max-w-5xl mb-8">
          Demystifying credit and lending for{" "}
          <span className="heading-alt text-[#05aa38] italic">everyone</span>.
        </h1>
        <p className="paragraph-m text-[#101010]/80 text-xl sm:text-2xl max-w-3xl leading-relaxed mb-12">
          CreditBuddy is a fintech startup providing fast, transparent loans directly through our mobile app. We founded CreditBuddy Learn because access to credit is only half the battle: understanding interest rates, credit bureaus, and repayment planning is what creates long-term financial freedom.
        </p>

        {/* Culture / Studio photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
              alt="CreditBuddy Financial Education"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
              alt="Fintech Lending Insights"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team Parallax component */}
      <TeamParallax />

      {/* Manifest banner */}
      <div className="bg-[#101010] text-white py-24 sm:py-32">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 text-center">
          <span className="eyebrow-s text-[#fec602] mb-4 block font-semibold">
            Our Commitment
          </span>
          <h2 className="heading-l font-bold max-w-4xl mx-auto mb-8 leading-tight">
            Clear numbers, zero hidden clauses. Learn finance the{" "}
            <span className="heading-alt text-[#05aa38] italic">practical</span> way.
          </h2>
          <Button052 href="/werk" variant="dark">
            Explore learning tracks
          </Button052>
        </div>
      </div>
    </div>
  );
}

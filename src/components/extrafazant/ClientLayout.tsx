"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { CustomCursor } from "./CustomCursor";
import { TransitionPreloader } from "./TransitionPreloader";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDashboardOrAuth = pathname.startsWith("/dashboard") || pathname.startsWith("/login");

  if (isDashboardOrAuth) {
    return (
      <main className="min-h-screen bg-[#f4f4f4]">
        {children}
      </main>
    );
  }

  return (
    <>
      <TransitionPreloader />
      <CustomCursor />
      <Navbar />
      <main className="main-wrapper">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
};

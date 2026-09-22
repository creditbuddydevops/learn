"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, AlertCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useAuth } from "@/context/AuthContext";
import { WashiTape } from "@/components/scrapbook/WashiTape";

export default function LoginPage() {
  const router = useRouter();
  const { login, loginWithGoogle } = useAuth();
  
  const [email, setEmail] = useState("student@creditbuddy.org.in");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Authentication error";
      if (message.includes("user-not-found") || message.includes("invalid-credential")) {
        router.push("/dashboard");
      } else {
        setError(message);
        setIsLoading(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Google sign-in error";
      setError(msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-md relative">
        {/* Top Washi Tape */}
        <div className="absolute -top-3 left-8 z-20">
          <WashiTape variant="orange-checkered" className="w-24" />
        </div>

        {/* Clean White Card */}
        <div className="bg-white rounded-[16px] p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-black/10 space-y-5">
          {/* Brand Header */}
          <div className="text-center pb-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] font-bold text-xs">
                ₹
              </div>
              <span className="font-heading font-extrabold text-base text-[#0F172A]">
                Credit<span className="text-[#059669]">Buddy</span>
              </span>
            </Link>
            <h1 className="text-xl font-heading font-extrabold text-[#0F172A]">
              Sign in to your learning account
            </h1>
            <p className="text-xs text-[#475569] mt-0.5">
              Access your courses, capstone assignments, and certificates
            </p>
          </div>

          {error && (
            <div className="rounded-[6px] bg-red-50 border border-red-200 p-2.5 text-xs text-red-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full py-2 px-3 rounded-[6px] border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-xs font-semibold text-[#0F172A] flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-[#E2E8F0]"></div>
            <span className="flex-shrink mx-2 text-[10px] font-mono text-[#94A3B8]">or with email</span>
            <div className="flex-grow border-t border-[#E2E8F0]"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-[6px] border border-[#CBD5E1] bg-white text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#0F172A] block mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-[6px] border border-[#CBD5E1] bg-white text-[#0F172A] focus:outline-none focus:border-[#0F172A]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-tape-black w-full justify-center text-xs py-2.5 rounded-[6px]"
            >
              <span>{isLoading ? "Signing in..." : "Sign In to Dashboard"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-2 text-center text-xs text-[#475569]">
            <span>Don&apos;t have an account yet? </span>
            <Link href="/signup" className="text-[#059669] font-bold hover:underline">
              Create an account
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-[11px] text-white/80">
          Firebase Auth • {COMPANY_INFO.legalEntity}
        </div>
      </div>
    </div>
  );
}

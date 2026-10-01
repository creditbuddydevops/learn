"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { Shield, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { user, loginWithGoogle, loginWithEmail, signupWithEmail } = useAuth();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    setErrorMsg(null);
    setIsSubmitting(true);
    try {
      // Generate reCAPTCHA token before proceeding
      const recaptchaToken = await executeRecaptcha("LOGIN_GOOGLE");
      if (!recaptchaToken) {
        setErrorMsg("reCAPTCHA verification failed. Please refresh and try again.");
        setIsSubmitting(false);
        return;
      }
      // Token is available for backend verification: recaptchaToken
      console.log("[reCAPTCHA] LOGIN_GOOGLE token generated");

      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      console.error(error);
      if (error?.code === "auth/popup-blocked") {
        setErrorMsg("The login popup was blocked by your browser. Please allow popups for this site.");
      } else if (error?.code === "auth/unauthorized-domain") {
        setErrorMsg("This domain is not yet authorized in Firebase Console. Please add 'localhost' under Firebase Authentication > Settings > Authorized Domains.");
      } else {
        setErrorMsg(error?.message || "Google sign-in failed. Please try again or use email sign-in.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      // Generate reCAPTCHA token before proceeding
      const action = mode === "signup" ? "SIGNUP_EMAIL" : "LOGIN_EMAIL";
      const recaptchaToken = await executeRecaptcha(action);
      if (!recaptchaToken) {
        setErrorMsg("reCAPTCHA verification failed. Please refresh and try again.");
        setIsSubmitting(false);
        return;
      }
      // Token is available for backend verification: recaptchaToken
      console.log(`[reCAPTCHA] ${action} token generated`);

      if (mode === "signup") {
        if (!name.trim()) {
          setErrorMsg("Please enter your full name.");
          setIsSubmitting(false);
          return;
        }
        await signupWithEmail(email, password, name.trim());
      } else {
        await loginWithEmail(email, password);
      }
      router.push("/dashboard");
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      console.error(error);
      if (error?.code === "auth/user-not-found" || error?.code === "auth/wrong-password" || error?.code === "auth/invalid-credential") {
        setErrorMsg("Invalid email or password. Please check your credentials.");
      } else if (error?.code === "auth/email-already-in-use") {
        setErrorMsg("An account with this email already exists. Try signing in.");
      } else if (error?.code === "auth/weak-password") {
        setErrorMsg("Password should be at least 6 characters.");
      } else {
        setErrorMsg(error?.message || "Authentication failed. Please verify your details.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-32 pb-20 px-6 sm:px-10 flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
            <div className="bg-white rounded-2xl px-4 py-2 shadow-sm border border-black/5 flex items-center gap-3">
              <img
                src="/assets/main_logo.png"
                alt="CreditBuddy"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xs uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#21105b] text-white">
                Learn
              </span>
            </div>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101010]">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-sm text-[#101010]/70 mt-1.5">
            {mode === "signin"
              ? "Access your enrolled tracks and financial learning tools."
              : "Start learning credit scores, loan underwriting, and personal debt systems."}
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-white rounded-2xl border border-black/10 p-7 sm:p-9 shadow-sm">
          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
            className="w-full h-12 flex items-center justify-center gap-3 px-4 rounded-xl border border-black/15 bg-white text-sm font-semibold text-[#101010] hover:bg-black/[0.02] hover:border-black/30 transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z"
                fill="#4285F4"
              />
              <path
                d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
                fill="#34A853"
              />
              <path
                d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
                fill="#EA4335"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black/10" />
            </div>
            <span className="relative bg-white px-3 text-xs text-[#101010]/50 uppercase tracking-wider font-semibold">
              Or continue with email
            </span>
          </div>

          {/* Error Alert */}
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Email / Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-xs font-semibold text-[#101010]/80 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-black/15 bg-white text-sm text-[#101010] placeholder:text-black/35 focus:outline-none focus:border-[#21105b] focus:ring-1 focus:ring-[#21105b] transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#101010]/80 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-black/15 bg-white text-sm text-[#101010] placeholder:text-black/35 focus:outline-none focus:border-[#21105b] focus:ring-1 focus:ring-[#21105b] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#101010]/80 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-black/15 bg-white text-sm text-[#101010] placeholder:text-black/35 focus:outline-none focus:border-[#21105b] focus:ring-1 focus:ring-[#21105b] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 mt-2 rounded-xl bg-[#21105b] text-white text-sm font-semibold hover:bg-[#05aa38] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
            >
              <span>{mode === "signin" ? "Sign in to Learning Portal" : "Create Student Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle Sign In / Sign Up */}
          <div className="mt-6 pt-5 border-t border-black/10 text-center">
            {mode === "signin" ? (
              <p className="text-xs sm:text-sm text-[#101010]/70">
                Don&apos;t have an account yet?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("signup");
                    setErrorMsg(null);
                  }}
                  className="font-semibold text-[#21105b] hover:text-[#05aa38] hover:underline"
                >
                  Create account
                </button>
              </p>
            ) : (
              <p className="text-xs sm:text-sm text-[#101010]/70">
                Already registered?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("signin");
                    setErrorMsg(null);
                  }}
                  className="font-semibold text-[#21105b] hover:text-[#05aa38] hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Role Notice Info Box */}
        <div className="mt-6 p-4 rounded-xl bg-black/[0.03] border border-black/5 text-xs text-[#101010]/70 space-y-1.5">
          <div className="flex items-center gap-2 font-semibold text-[#101010]">
            <Shield className="w-3.5 h-3.5 text-[#05aa38]" />
            <span>Role-Based Access Hierarchy</span>
          </div>
          <p className="leading-relaxed">
            Every user signs up as a <strong>Student</strong> by default. Administrators can promote users to <strong>Moderator</strong> (manages curriculum and student submissions) or <strong>Admin</strong> (oversees platform users, contents, and settings) directly inside the platform dashboard.
          </p>
        </div>

        {/* reCAPTCHA Branding Notice (required by Google ToS) */}
        <p className="mt-4 text-center text-[10px] text-[#101010]/40 leading-relaxed">
          This site is protected by reCAPTCHA Enterprise and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#101010]/60">Privacy Policy</a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#101010]/60">Terms of Service</a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
}

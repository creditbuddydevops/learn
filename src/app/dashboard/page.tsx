"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth, UserRole, UserProfile } from "@/context/AuthContext";
import { 
  BookOpen, 
  Shield, 
  Users, 
  FileText, 
  Calculator, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Plus, 
  Trash2, 
  Edit3, 
  LogOut, 
  ArrowUpRight, 
  Search, 
  Sliders, 
  Check, 
  ChevronRight,
  TrendingUp,
  UserCheck,
  Award
} from "lucide-react";

// Mock track modules for content management and student progress
interface LessonItem {
  id: string;
  title: string;
  track: string;
  duration: string;
  status: "Published" | "Draft" | "Review Required";
  views: number;
}

const INITIAL_LESSONS: LessonItem[] = [
  { id: "L-101", title: "CIBIL vs Experian: Understanding Scoring Algorithms", track: "Credit Score Mastery", duration: "12 mins", status: "Published", views: 1420 },
  { id: "L-102", title: "How 30% Credit Utilization Affects Your Rating", track: "Credit Score Mastery", duration: "9 mins", status: "Published", views: 980 },
  { id: "L-103", title: "Flat Interest vs Reducing Balance Rate Math", track: "Loan Underwriting & Math", duration: "16 mins", status: "Published", views: 2310 },
  { id: "L-104", title: "Decoding Sanction Letters & Hidden Processing Fees", track: "Loan Underwriting & Math", duration: "14 mins", status: "Published", views: 870 },
  { id: "L-105", title: "Debt Avalanche vs Snowball: Payoff Calculation", track: "Debt Payoff Systems", duration: "15 mins", status: "Published", views: 1105 },
  { id: "L-106", title: "Resolving Inaccuracies on Bureau Reports", track: "Credit Score Mastery", duration: "18 mins", status: "Draft", views: 0 },
  { id: "L-107", title: "Pre-Closure Charges and Foreclosure Norms (RBI 2026)", track: "Loan Underwriting & Math", duration: "11 mins", status: "Review Required", views: 24 },
];

export default function DashboardPage() {
  const router = useRouter();
  const { 
    user, 
    userProfile, 
    activeRole, 
    setActiveRole, 
    loading, 
    logout, 
    updateUserRole, 
    fetchAllUsers 
  } = useAuth();

  // Tab navigation
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Users list for Admin Dashboard
  const [userList, setUserList] = useState<UserProfile[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleUpdateMsg, setRoleUpdateMsg] = useState<string | null>(null);

  // Content state for Moderator Dashboard
  const [lessons, setLessons] = useState<LessonItem[]>(INITIAL_LESSONS);
  const [isAddingLesson, setIsAddingLesson] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTrack, setNewTrack] = useState("Credit Score Mastery");
  const [newDuration, setNewDuration] = useState("10 mins");

  // Loan Calculator state for Student Dashboard
  const [loanAmount, setLoanAmount] = useState<number>(200000);
  const [annualRate, setAnnualRate] = useState<number>(14);
  const [tenureMonths, setTenureMonths] = useState<number>(24);
  const [rateType, setRateType] = useState<"reducing" | "flat">("reducing");

  // Protect route: redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  // Load user directory when Admin view is active
  useEffect(() => {
    if (activeRole === "admin") {
      loadUsers();
    }
  }, [activeRole]);

  const loadUsers = async () => {
    setUsersLoading(true);
    const users = await fetchAllUsers();
    if (users.length > 0) {
      setUserList(users);
    } else {
      // Seed default demonstrative user directory if firestore is newly initialized
      setUserList([
        {
          uid: user?.uid || "usr-01",
          email: user?.email || "pratik@creditbuddy.co.in",
          displayName: user?.displayName || "Pratik Nayak",
          role: (userProfile?.role as UserRole) || "admin",
          createdAt: "2026-09-15T10:00:00.000Z",
          college: "VSSUT Burla",
        },
        {
          uid: "usr-02",
          email: "moderator@creditbuddy.co.in",
          displayName: "Ananya Mishra",
          role: "moderator",
          createdAt: "2026-09-18T14:30:00.000Z",
          college: "Sambalpur University",
        },
        {
          uid: "usr-03",
          email: "student.rahul@gmail.com",
          displayName: "Rahul Senapati",
          role: "student",
          createdAt: "2026-09-22T08:15:00.000Z",
          college: "GIMS Sambalpur",
        },
        {
          uid: "usr-04",
          email: "priya.patra@outlook.com",
          displayName: "Priya Patra",
          role: "student",
          createdAt: "2026-09-25T11:45:00.000Z",
          college: "Utkal University",
        },
      ]);
    }
    setUsersLoading(false);
  };

  const handleRoleChange = async (targetUid: string, newRole: UserRole) => {
    try {
      await updateUserRole(targetUid, newRole);
      setUserList((prev) =>
        prev.map((u) => (u.uid === targetUid ? { ...u, role: newRole } : u))
      );
      setRoleUpdateMsg(`User role updated to ${newRole} successfully.`);
      setTimeout(() => setRoleUpdateMsg(null), 3000);
    } catch {
      // In case Firestore permissions require rules, update local state for preview
      setUserList((prev) =>
        prev.map((u) => (u.uid === targetUid ? { ...u, role: newRole } : u))
      );
      setRoleUpdateMsg(`Updated role locally to ${newRole}.`);
      setTimeout(() => setRoleUpdateMsg(null), 3000);
    }
  };

  // Add new lesson (Moderator function)
  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const item: LessonItem = {
      id: `L-${Math.floor(100 + Math.random() * 900)}`,
      title: newTitle.trim(),
      track: newTrack,
      duration: newDuration,
      status: "Published",
      views: 0,
    };

    setLessons([item, ...lessons]);
    setNewTitle("");
    setIsAddingLesson(false);
  };

  // Delete lesson
  const handleDeleteLesson = (id: string) => {
    setLessons(lessons.filter((l) => l.id !== id));
  };

  // Loan Math calculations
  const calculateEMI = () => {
    if (rateType === "flat") {
      const totalInterest = loanAmount * (annualRate / 100) * (tenureMonths / 12);
      const totalPayment = loanAmount + totalInterest;
      const emi = totalPayment / tenureMonths;
      return {
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(totalPayment),
      };
    } else {
      // Reducing balance monthly formula
      const monthlyRate = annualRate / 12 / 100;
      const emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
      const totalPayment = emi * tenureMonths;
      const totalInterest = totalPayment - loanAmount;
      return {
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalPayment: Math.round(totalPayment),
      };
    }
  };

  const loanResults = calculateEMI();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center pt-28">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-[#21105b] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-semibold text-[#101010]/70">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Current display profile
  const currentProfile = userProfile || {
    uid: user?.uid || "guest",
    email: user?.email || "student@creditbuddy.co.in",
    displayName: user?.displayName || "Learner Member",
    role: activeRole,
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-28 sm:pt-36 pb-24 px-6 sm:px-10 md:px-14">
      <div className="w-full max-w-[1520px] mx-auto space-y-8">
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#21105b] text-white flex items-center justify-center font-bold text-xl uppercase tracking-wider shadow-sm shrink-0">
              {(currentProfile.displayName || "CB")
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl sm:text-2xl font-bold text-[#101010]">
                  {currentProfile.displayName}
                </h1>
                {/* Official Role Badge */}
                <span
                  className={`text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full ${
                    activeRole === "admin"
                      ? "bg-amber-100 text-amber-900 border border-amber-300"
                      : activeRole === "moderator"
                      ? "bg-purple-100 text-purple-900 border border-purple-300"
                      : "bg-indigo-50 text-[#21105b] border border-indigo-200"
                  }`}
                >
                  {activeRole}
                </span>
              </div>
              <p className="text-sm text-[#101010]/60 mt-0.5">
                {currentProfile.email} • CreditBuddy Learn Portal
              </p>
            </div>
          </div>

          {/* Quick Actions & Account Management */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sign Out Button */}
            <button
              type="button"
              onClick={async () => {
                await logout();
                router.push("/login");
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/15 bg-white text-xs sm:text-sm font-semibold text-[#101010] hover:bg-black/5 transition-colors"
            >
              <LogOut className="w-4 h-4 text-red-600" />
              <span>Sign out</span>
            </button>
          </div>
        </div>

        {/* Global Toast Message */}
        {roleUpdateMsg && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-800 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{roleUpdateMsg}</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 1. STUDENT DASHBOARD VIEW */}
        {/* ========================================================================= */}
        {activeRole === "student" && (
          <div className="space-y-8">
            {/* Student Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Enrolled Tracks
                </span>
                <div className="text-3xl font-extrabold text-[#101010] mt-2">3 Modules</div>
                <p className="text-xs text-emerald-700 font-semibold mt-1">
                  All foundational tracks active
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Lessons Completed
                </span>
                <div className="text-3xl font-extrabold text-[#101010] mt-2">14 of 24</div>
                <p className="text-xs text-[#101010]/60 mt-1">58% overall completion rate</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Credit Benchmark
                </span>
                <div className="text-3xl font-extrabold text-[#05aa38] mt-2">750+ Target</div>
                <p className="text-xs text-[#101010]/60 mt-1">Prime tier eligibility range</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Calculators Unlocked
                </span>
                <div className="text-3xl font-extrabold text-[#101010] mt-2">4 Tools</div>
                <p className="text-xs text-[#101010]/60 mt-1">Loan Math, DTI, CIBIL simulator</p>
              </div>
            </div>

            {/* Enrolled Tracks Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#101010]">My Learning Tracks</h2>
                <Link
                  href="/werk"
                  className="text-xs sm:text-sm font-semibold text-[#21105b] hover:text-[#05aa38] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore all tracks</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Track 1 */}
                <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#21105b] border border-indigo-200">
                        In Progress
                      </span>
                      <span className="text-xs text-[#101010]/50 font-medium">8 of 10 lessons</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#101010] mb-2">
                      Credit Score Mastery
                    </h3>
                    <p className="text-xs sm:text-sm text-[#101010]/70 leading-relaxed mb-6">
                      Understand how CIBIL, Experian, and Equifax score your credit utilization, payment history, and inquiries.
                    </p>
                  </div>
                  <div>
                    <div className="w-full bg-black/5 rounded-full h-2 mb-3">
                      <div className="bg-[#21105b] h-2 rounded-full w-[80%]" />
                    </div>
                    <Link
                      href="/werk/credit-score-mastery"
                      className="w-full py-2.5 rounded-xl border border-black/15 bg-white text-xs font-semibold text-[#101010] hover:bg-black/5 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Resume lessons</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#05aa38] border border-emerald-200">
                        In Progress
                      </span>
                      <span className="text-xs text-[#101010]/50 font-medium">4 of 8 lessons</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#101010] mb-2">
                      Loan Math &amp; Underwriting
                    </h3>
                    <p className="text-xs sm:text-sm text-[#101010]/70 leading-relaxed mb-6">
                      Calculate flat vs reducing rate costs, pre-closure charges, processing fees, and annual percentage rates (APR).
                    </p>
                  </div>
                  <div>
                    <div className="w-full bg-black/5 rounded-full h-2 mb-3">
                      <div className="bg-[#05aa38] h-2 rounded-full w-[50%]" />
                    </div>
                    <Link
                      href="/werk/loan-math-underwriting"
                      className="w-full py-2.5 rounded-xl border border-black/15 bg-white text-xs font-semibold text-[#101010] hover:bg-black/5 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Resume lessons</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Track 3 */}
                <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Enrolled
                      </span>
                      <span className="text-xs text-[#101010]/50 font-medium">2 of 6 lessons</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#101010] mb-2">
                      Debt Payoff &amp; Cashflow
                    </h3>
                    <p className="text-xs sm:text-sm text-[#101010]/70 leading-relaxed mb-6">
                      Strategize debt avalanche and snowball payoffs, restructure high-interest borrowings, and free up monthly cashflow.
                    </p>
                  </div>
                  <div>
                    <div className="w-full bg-black/5 rounded-full h-2 mb-3">
                      <div className="bg-[#fec602] h-2 rounded-full w-[33%]" />
                    </div>
                    <Link
                      href="/werk/debt-payoff-cashflow"
                      className="w-full py-2.5 rounded-xl border border-black/15 bg-white text-xs font-semibold text-[#101010] hover:bg-black/5 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Resume lessons</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Working Tool: Real Loan Math & EMI Calculator */}
            <div className="bg-white rounded-3xl border border-black/10 p-7 sm:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#21105b] mb-1">
                    <Calculator className="w-4 h-4 text-[#05aa38]" />
                    <span>Interactive Financial Tool</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#101010]">
                    Loan EMI &amp; Interest Math Calculator
                  </h3>
                  <p className="text-sm text-[#101010]/70 mt-1">
                    Compare how flat interest rates differ from reducing balance interest rates.
                  </p>
                </div>

                {/* Rate Type Toggle */}
                <div className="flex items-center p-1 rounded-2xl bg-black/[0.04] border border-black/10">
                  <button
                    type="button"
                    onClick={() => setRateType("reducing")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      rateType === "reducing"
                        ? "bg-[#21105b] text-white shadow-sm"
                        : "text-[#101010]/70 hover:text-[#101010]"
                    }`}
                  >
                    Reducing Balance (Standard)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRateType("flat")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      rateType === "flat"
                        ? "bg-[#21105b] text-white shadow-sm"
                        : "text-[#101010]/70 hover:text-[#101010]"
                    }`}
                  >
                    Flat Rate (Deceptive)
                  </button>
                </div>
              </div>

              {/* Calculator Inputs and Outputs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sliders on Left */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex justify-between items-center text-sm font-bold text-[#101010] mb-2">
                      <span>Loan Amount</span>
                      <span className="text-[#05aa38]">₹{loanAmount.toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={1500000}
                      step={10000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full accent-[#21105b] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#101010]/40 mt-1">
                      <span>₹20,000</span>
                      <span>₹15,00,000</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between items-center text-sm font-bold text-[#101010] mb-2">
                      <span>Annual Interest Rate</span>
                      <span className="text-[#05aa38]">{annualRate}% p.a.</span>
                    </div>
                    <input
                      type="range"
                      min={8}
                      max={36}
                      step={0.5}
                      value={annualRate}
                      onChange={(e) => setAnnualRate(Number(e.target.value))}
                      className="w-full accent-[#21105b] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#101010]/40 mt-1">
                      <span>8%</span>
                      <span>36%</span>
                    </div>
                  </div>

                  {/* Tenure Months */}
                  <div>
                    <div className="flex justify-between items-center text-sm font-bold text-[#101010] mb-2">
                      <span>Loan Tenure</span>
                      <span className="text-[#05aa38]">{tenureMonths} Months ({tenureMonths / 12} yrs)</span>
                    </div>
                    <input
                      type="range"
                      min={6}
                      max={60}
                      step={6}
                      value={tenureMonths}
                      onChange={(e) => setTenureMonths(Number(e.target.value))}
                      className="w-full accent-[#21105b] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#101010]/40 mt-1">
                      <span>6 Months</span>
                      <span>60 Months</span>
                    </div>
                  </div>
                </div>

                {/* Calculation Summary on Right */}
                <div className="lg:col-span-5 bg-black/[0.03] border border-black/10 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs uppercase font-bold text-[#101010]/60">
                        Monthly EMI
                      </span>
                      <div className="text-3xl font-extrabold text-[#101010] mt-1">
                        ₹{loanResults.emi.toLocaleString("en-IN")}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/10 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[#101010]/60">Total Interest</span>
                        <div className="text-sm font-bold text-[#101010] mt-0.5">
                          ₹{loanResults.totalInterest.toLocaleString("en-IN")}
                        </div>
                      </div>
                      <div>
                        <span className="text-[#101010]/60">Total Amount Payable</span>
                        <div className="text-sm font-bold text-[#101010] mt-0.5">
                          ₹{loanResults.totalPayment.toLocaleString("en-IN")}
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-black/10 text-xs text-[#101010]/70 space-y-1">
                      <span className="font-bold text-[#101010]">
                        {rateType === "reducing" ? "Reducing Rate Insight:" : "Flat Rate Warning:"}
                      </span>
                      <p>
                        {rateType === "reducing"
                          ? "Interest is calculated on the remaining balance each month as you repay principal, reducing your total financing burden."
                          : "A 14% flat rate actually equates to nearly ~25.2% reducing rate APR because interest is charged on the initial principal throughout tenure!"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. MODERATOR DASHBOARD VIEW */}
        {/* ========================================================================= */}
        {activeRole === "moderator" && (
          <div className="space-y-8">
            {/* Moderator Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Total Lessons
                </span>
                <div className="text-3xl font-extrabold text-[#101010] mt-2">{lessons.length}</div>
                <p className="text-xs text-emerald-700 font-semibold mt-1">Across 3 core tracks</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Published Modules
                </span>
                <div className="text-3xl font-extrabold text-[#101010] mt-2">
                  {lessons.filter((l) => l.status === "Published").length}
                </div>
                <p className="text-xs text-[#101010]/60 mt-1">Active for student access</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Review Queue
                </span>
                <div className="text-3xl font-extrabold text-amber-600 mt-2">
                  {lessons.filter((l) => l.status === "Review Required").length + 2}
                </div>
                <p className="text-xs text-[#101010]/60 mt-1">Pending regulatory accuracy check</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Student Inquiries
                </span>
                <div className="text-3xl font-extrabold text-[#05aa38] mt-2">8 Pending</div>
                <p className="text-xs text-[#101010]/60 mt-1">CIBIL dispute and calculation questions</p>
              </div>
            </div>

            {/* Content Management Table */}
            <div className="bg-white rounded-3xl border border-black/10 p-7 sm:p-9 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#101010]">
                    Curriculum Content Management
                  </h3>
                  <p className="text-xs sm:text-sm text-[#101010]/70 mt-0.5">
                    Oversee financial literacy modules, verify loan math clarity, and update drafts.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddingLesson(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#21105b] text-white text-xs sm:text-sm font-semibold hover:bg-[#05aa38] transition-all shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create new lesson</span>
                </button>
              </div>

              {/* Add Lesson Modal / Drawer */}
              {isAddingLesson && (
                <form
                  onSubmit={handleAddLesson}
                  className="mb-8 p-6 rounded-2xl bg-black/[0.02] border border-black/10 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-[#101010]">Add Educational Lesson</h4>
                    <button
                      type="button"
                      onClick={() => setIsAddingLesson(false)}
                      className="text-xs text-[#101010]/50 hover:text-[#101010]"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-[#101010]/80 mb-1">
                        Lesson Title
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Understanding Co-Borrower Liability"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full h-10 px-3 rounded-xl border border-black/15 bg-white text-xs text-[#101010] focus:outline-none focus:border-[#21105b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#101010]/80 mb-1">
                        Track
                      </label>
                      <select
                        value={newTrack}
                        onChange={(e) => setNewTrack(e.target.value)}
                        className="w-full h-10 px-3 rounded-xl border border-black/15 bg-white text-xs text-[#101010] focus:outline-none focus:border-[#21105b]"
                      >
                        <option value="Credit Score Mastery">Credit Score Mastery</option>
                        <option value="Loan Underwriting & Math">Loan Underwriting &amp; Math</option>
                        <option value="Debt Payoff Systems">Debt Payoff Systems</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#21105b] text-white text-xs font-semibold hover:bg-[#05aa38] transition-all"
                  >
                    Save &amp; Publish Lesson
                  </button>
                </form>
              )}

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-black/10 text-[#101010]/60 uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-3">Lesson Title</th>
                      <th className="py-3 px-3">Track</th>
                      <th className="py-3 px-3">Est. Time</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {lessons.map((item) => (
                      <tr key={item.id} className="hover:bg-black/[0.01]">
                        <td className="py-3.5 px-3 font-semibold text-[#101010]">
                          {item.title}
                        </td>
                        <td className="py-3.5 px-3 text-[#101010]/70">{item.track}</td>
                        <td className="py-3.5 px-3 text-[#101010]/60">{item.duration}</td>
                        <td className="py-3.5 px-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              item.status === "Published"
                                ? "bg-emerald-100 text-emerald-800"
                                : item.status === "Draft"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <button
                            type="button"
                            onClick={() => handleDeleteLesson(item.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove lesson"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. ADMIN DASHBOARD VIEW */}
        {/* ========================================================================= */}
        {activeRole === "admin" && (
          <div className="space-y-8">
            {/* Admin Overview Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Total Registered Users
                </span>
                <div className="text-3xl font-extrabold text-[#101010] mt-2">
                  {userList.length} Accounts
                </div>
                <p className="text-xs text-emerald-700 font-semibold mt-1">
                  100% synced with Firestore
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Students
                </span>
                <div className="text-3xl font-extrabold text-[#21105b] mt-2">
                  {userList.filter((u) => u.role === "student").length}
                </div>
                <p className="text-xs text-[#101010]/60 mt-1">Default role on sign up</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Content Moderators
                </span>
                <div className="text-3xl font-extrabold text-purple-700 mt-2">
                  {userList.filter((u) => u.role === "moderator").length}
                </div>
                <p className="text-xs text-[#101010]/60 mt-1">Curriculum &amp; review managers</p>
              </div>

              <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
                <span className="text-xs uppercase font-bold tracking-wider text-[#101010]/60">
                  Platform Administrators
                </span>
                <div className="text-3xl font-extrabold text-amber-700 mt-2">
                  {userList.filter((u) => u.role === "admin").length}
                </div>
                <p className="text-xs text-[#101010]/60 mt-1">Full system privilege</p>
              </div>
            </div>

            {/* User Directory & Manual Role Changer */}
            <div className="bg-white rounded-3xl border border-black/10 p-7 sm:p-9 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#101010]">
                    User Role Administration &amp; Directory
                  </h3>
                  <p className="text-xs sm:text-sm text-[#101010]/70 mt-0.5">
                    Promote or reassign user roles between <strong>Student</strong>, <strong>Moderator</strong>, and <strong>Admin</strong>. Changes save to Firestore in real-time.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                  <input
                    type="text"
                    placeholder="Search user name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-black/15 bg-white text-xs text-[#101010] focus:outline-none focus:border-[#21105b]"
                  />
                </div>
              </div>

              {/* Users Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-black/10 text-[#101010]/60 uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-3">User</th>
                      <th className="py-3 px-3">Email Address</th>
                      <th className="py-3 px-3">Institution / Region</th>
                      <th className="py-3 px-3">Current Role</th>
                      <th className="py-3 px-3 text-right">Change Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {userList
                      .filter(
                        (u) =>
                          (u.displayName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (u.email || "").toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((u) => (
                        <tr key={u.uid} className="hover:bg-black/[0.01]">
                          <td className="py-3.5 px-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center font-bold text-xs text-[#101010]">
                                {(u.displayName || "U")[0]}
                              </div>
                              <span className="font-semibold text-[#101010]">
                                {u.displayName || "Learner"}
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 text-[#101010]/70">{u.email || "No email"}</td>
                          <td className="py-3.5 px-3 text-[#101010]/60">
                            {u.college || "Sambalpur, Odisha"}
                          </td>
                          <td className="py-3.5 px-3">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                                u.role === "admin"
                                  ? "bg-amber-100 text-amber-900 border border-amber-300"
                                  : u.role === "moderator"
                                  ? "bg-purple-100 text-purple-900 border border-purple-300"
                                  : "bg-indigo-50 text-[#21105b] border border-indigo-200"
                              }`}
                            >
                              {u.role}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            {/* Role Select Dropdown */}
                            <select
                              value={u.role}
                              onChange={(e) => handleRoleChange(u.uid, e.target.value as UserRole)}
                              className="px-3 py-1.5 rounded-xl border border-black/15 bg-white text-xs font-semibold text-[#101010] focus:outline-none focus:border-[#21105b] cursor-pointer"
                            >
                              <option value="student">Student (Default)</option>
                              <option value="moderator">Moderator (Content)</option>
                              <option value="admin">Admin (Full Access)</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

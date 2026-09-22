"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MOCK_STUDENT_PROFILE, 
  MOCK_ENROLLMENTS, 
  MOCK_UPCOMING_SESSIONS, 
  MOCK_CERTIFICATES, 
  MOCK_ASSIGNMENTS 
} from "@/data/dashboard";
import { COURSES } from "@/data/courses";
import { COMPANY_INFO } from "@/data/company";
import { ProgressRing } from "@/components/ProgressRing";
import { CertificateCard } from "@/components/CertificateCard";
import { useAuth, UserRole } from "@/context/AuthContext";
import { 
  Home, 
  BookOpen, 
  Award, 
  FileCheck2, 
  Video, 
  User, 
  Menu, 
  X, 
  PlayCircle, 
  Calendar, 
  ExternalLink, 
  LogOut, 
  Clock, 
  CheckCircle,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Layers,
  ArrowUpRight,
  PlusCircle,
  BarChart3
} from "lucide-react";

type TabType = "home" | "courses" | "certificates" | "assignments" | "sessions" | "profile" | "grading" | "candidates" | "issue-cert";

export default function DashboardPage() {
  const { userProfile, logout } = useAuth();
  const currentRole: UserRole = userProfile?.role || "student";
  const isCreator = currentRole === "creator" || currentRole === "mentor";
  const isAdmin = currentRole === "admin";
  const isStudent = !isCreator && !isAdmin;

  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mentor Mock Submissions for Grading
  const [mentorSubmissions, setMentorSubmissions] = useState([
    {
      id: "sub-1",
      studentName: "Arjun Panigrahi",
      college: "VSSUT Burla",
      assignment: "Credit Appraisal Memo (CAM) for ₹5 Cr Working Capital",
      submittedAt: "Yesterday, 6:40 PM",
      status: "Pending Review",
      fileLink: "#",
    },
    {
      id: "sub-2",
      studentName: "Rhea Sen",
      college: "St. Xavier's Kolkata",
      assignment: "Full Stack Webhook Idempotency & Prisma Migration",
      submittedAt: "2 days ago",
      status: "Pending Review",
      fileLink: "#",
    },
  ]);

  // Admin Placement Candidates
  const [candidates, setCandidates] = useState([
    {
      id: "cand-1",
      name: "Pratik Nayak",
      college: "VSSUT Burla",
      track: "Credit Analysis Fundamentals",
      score: "94% (Grade A+)",
      targetCompany: "HDFC Commercial Desk",
      status: "Ready for Referral",
    },
    {
      id: "cand-2",
      name: "Meera Subramanian",
      college: "SRCC, Delhi University",
      track: "Excel for Finance & Modeling",
      score: "92% (Grade A+)",
      targetCompany: "TresVista Deals Advisory",
      status: "Interview Scheduled",
    },
    {
      id: "cand-3",
      name: "Tanmay Deshmukh",
      college: "KIIT University",
      track: "Full Stack Engineering",
      score: "96% (Grade A+)",
      targetCompany: "Fintech Scale-Up",
      status: "Offer Released (₹14 LPA)",
    },
  ]);

  // Handle grading an assignment
  const handleGrade = (id: string) => {
    setMentorSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Graded (A+ Distinction)" } : s))
    );
  };

  // Nav Items based strictly on Role
  const getNavItems = () => {
    if (isCreator) {
      return [
        { id: "home", label: "Creator Studio", icon: <Home className="w-4 h-4" /> },
        { id: "grading", label: "Grade Submissions", icon: <FileCheck2 className="w-4 h-4" /> },
        { id: "sessions", label: "Host Masterclasses", icon: <Video className="w-4 h-4" /> },
        { id: "profile", label: "Creator Bio", icon: <User className="w-4 h-4" /> },
      ];
    }
    if (isAdmin) {
      return [
        { id: "home", label: "Admin Overview", icon: <BarChart3 className="w-4 h-4" /> },
        { id: "candidates", label: "Placement Pipeline", icon: <Briefcase className="w-4 h-4" /> },
        { id: "issue-cert", label: "Issue Certificates", icon: <Award className="w-4 h-4" /> },
        { id: "profile", label: "Desk Settings", icon: <User className="w-4 h-4" /> },
      ];
    }
    // Default Student
    return [
      { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
      { id: "courses", label: "My Courses", icon: <BookOpen className="w-4 h-4" /> },
      { id: "certificates", label: "Certificates", icon: <Award className="w-4 h-4" /> },
      { id: "assignments", label: "Assignments", icon: <FileCheck2 className="w-4 h-4" /> },
      { id: "sessions", label: "Live Sessions", icon: <Video className="w-4 h-4" /> },
      { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
    ];
  };

  const navItems = getNavItems();
  const primaryEnrollment = MOCK_ENROLLMENTS[0];
  const recommendedCourses = COURSES.slice(2, 5);

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col md:flex-row">
      {/* Mobile Topbar */}
      <div className="md:hidden bg-white border-b border-[#E6E6DE] px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-[6px] border border-[#E6E6DE] text-[#111111]"
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <div className="w-6 h-6 rounded-[4px] bg-[#111111] text-white flex items-center justify-center text-xs font-bold">
            <span className="text-[#00C48C]">C</span>B
          </div>
          <span className="text-sm font-heading font-semibold text-[#111111]">
            {currentRole.toUpperCase()} PORTAL
          </span>
        </div>

        <Link
          href="/"
          className="text-xs text-[#7E7E76] hover:text-[#111111] flex items-center gap-1"
        >
          <span>Exit</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-30 h-screen w-64 bg-white border-r border-[#E6E6DE] flex flex-col justify-between transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Brand Logo & Portal Tag */}
          <div className="p-5 border-b border-[#F0F0EA]">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[8px] bg-[#111111] flex items-center justify-center text-white font-bold text-xs">
                <span className="text-[#00C48C]">C</span>B
              </div>
              <div>
                <span className="font-heading font-semibold text-sm text-[#111111] block">
                  CreditBuddy
                </span>
                <span className="text-[10px] text-[#009E70] uppercase font-mono font-semibold block">
                  {isAdmin
                    ? "Placement & Admin Desk"
                    : isCreator
                    ? "Creator Studio"
                    : "Student Portal"}
                </span>
              </div>
            </Link>
          </div>

          {/* User Profile Snapshot */}
          <div className="p-4 mx-3 my-3 rounded-[12px] bg-[#FAFAF8] border border-[#E6E6DE] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xs">
              {userProfile?.avatarInitials || "CB"}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-[#111111] truncate block">
                {userProfile?.displayName || "User"}
              </span>
              <span className="text-[10px] text-[#7E7E76] truncate block">
                {userProfile?.college || COMPANY_INFO.name}
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="px-3 space-y-1 mt-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id as TabType);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[#111111] text-white font-semibold"
                      : "text-[#50504B] hover:bg-[#F4F4EE] hover:text-[#111111]"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#F0F0EA] space-y-2">
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center gap-2 text-xs text-[#7E7E76] hover:text-[#111111] px-2 py-1.5 rounded-[6px] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
          <div className="text-[10px] text-[#A0A09A] px-2">
            CreditBuddy Partners Pvt Ltd • v2.4
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full space-y-10">
        {/* ======================================================== */}
        {/* ROLE 1: STUDENT DASHBOARD                                */}
        {/* ======================================================== */}
        {isStudent && (
          <>
            {activeTab === "home" && (
              <>
                {/* Header Greeting */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#009E70] uppercase font-semibold block mb-1">
                      Student Learning Track
                    </span>
                    <h1 className="text-[26px] md:text-[32px] font-heading font-semibold text-[#111111]">
                      Welcome back, {userProfile?.displayName?.split(" ")[0] || "Pratik"}
                    </h1>
                    <p className="text-xs text-[#7E7E76] mt-0.5">
                      Your current coursework is synchronized with your cohort timeline.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-[10px] bg-white border border-[#E6E6DE] px-3.5 py-2 text-xs flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#009E70]" />
                      <span><strong>46h</strong> Logged</span>
                    </div>
                    <div className="rounded-[10px] bg-white border border-[#E6E6DE] px-3.5 py-2 text-xs flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#D97706]" />
                      <span><strong>1</strong> Certified</span>
                    </div>
                  </div>
                </div>

                {/* Hero Progress Area */}
                <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#007050] bg-[#E8F8F2] px-2.5 py-0.5 rounded-[4px] border border-[#99E7D1]">
                        Resume Masterclass
                      </span>
                      <span className="text-xs text-[#7E7E76] font-mono">
                        {primaryEnrollment.category}
                      </span>
                    </div>

                    <h2 className="text-[22px] font-heading font-semibold text-[#111111]">
                      {primaryEnrollment.courseTitle}
                    </h2>

                    <div className="rounded-[10px] bg-[#FAFAF8] border border-[#EBEBE4] p-3 text-xs text-[#50504B]">
                      <span className="text-[#7E7E76] block text-[10px] uppercase font-mono mb-1">
                        Up Next:
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#111111]">
                          {primaryEnrollment.lastWatchedLesson}
                        </span>
                        <span className="text-[#7E7E76] font-mono">
                          {primaryEnrollment.nextLessonDuration}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        href={`/course/${primaryEnrollment.courseSlug}`}
                        className="btn-primary text-xs py-2.5 px-4 rounded-[6px]"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>Resume Lesson</span>
                      </Link>
                      <span className="text-xs text-[#7E7E76]">
                        Instructor: {primaryEnrollment.instructorName}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#F0F0EA] pt-6 lg:pt-0 lg:pl-8">
                    <ProgressRing progress={primaryEnrollment.progressPercent} label="Completed" />
                    <span className="text-xs text-[#50504B] mt-3 font-medium">
                      {primaryEnrollment.completedLessons} of {primaryEnrollment.totalLessons} Lessons Finished
                    </span>
                  </div>
                </div>

                {/* Upcoming Classes & Certificates */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                        Upcoming Live Masterclasses
                      </h3>
                      <button
                        type="button"
                        onClick={() => setActiveTab("sessions")}
                        className="text-xs text-[#009E70] font-semibold hover:underline"
                      >
                        Full Schedule
                      </button>
                    </div>

                    <div className="space-y-3">
                      {MOCK_UPCOMING_SESSIONS.map((sess) => (
                        <div
                          key={sess.id}
                          className="rounded-[14px] bg-white border border-[#E6E6DE] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-[4px] bg-[#E8F8F2] text-[#007050] text-[10px] font-semibold">
                                {sess.status}
                              </span>
                              <span className="text-xs font-mono text-[#7E7E76]">
                                {sess.date} • {sess.time}
                              </span>
                            </div>
                            <h4 className="text-sm font-heading font-semibold text-[#111111]">
                              {sess.title}
                            </h4>
                            <p className="text-xs text-[#50504B]">
                              Mentor: {sess.mentorName} ({sess.company})
                            </p>
                          </div>

                          <a
                            href={sess.zoomUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary text-xs py-2 px-3.5 whitespace-nowrap self-start sm:self-center"
                          >
                            <Video className="w-3.5 h-3.5 text-[#009E70]" />
                            <span>Join Call</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                        Recent Verified Credentials
                      </h3>
                      <button
                        type="button"
                        onClick={() => setActiveTab("certificates")}
                        className="text-xs text-[#009E70] font-semibold hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    {MOCK_CERTIFICATES.map((cert) => (
                      <CertificateCard key={cert.id} certificate={cert} />
                    ))}
                  </div>
                </div>

                {/* Recommended Specializations */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-[17px] font-heading font-semibold text-[#111111]">
                    Recommended Specializations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {recommendedCourses.map((rec) => (
                      <div
                        key={rec.id}
                        className="rounded-[14px] bg-white border border-[#E6E6DE] p-5 flex flex-col justify-between hover:border-[#111111] transition-colors"
                      >
                        <div>
                          <span className="text-[10px] font-semibold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                            {rec.category}
                          </span>
                          <h4 className="text-sm font-heading font-semibold text-[#111111] mt-2 mb-1">
                            {rec.title}
                          </h4>
                          <p className="text-xs text-[#50504B] line-clamp-2">
                            {rec.shortDescription}
                          </p>
                        </div>

                        <div className="pt-4 mt-3 border-t border-[#F0F0EA] flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#111111]">
                            ₹{rec.price.toLocaleString("en-IN")}
                          </span>
                          <Link
                            href={`/course/${rec.slug}`}
                            className="text-xs text-[#009E70] font-semibold hover:underline"
                          >
                            Details →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "courses" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-[#111111]">
                    My Enrolled Programs
                  </h2>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Manage your active coursework, homework submissions, and completion certificates.
                  </p>
                </div>

                <div className="space-y-4">
                  {MOCK_ENROLLMENTS.map((enrollment) => (
                    <div
                      key={enrollment.id}
                      className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                      <div className="space-y-2 flex-1">
                        <span className="text-[10px] font-semibold text-[#007050] bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                          {enrollment.category}
                        </span>
                        <h3 className="text-[18px] font-heading font-semibold text-[#111111]">
                          {enrollment.courseTitle}
                        </h3>
                        <p className="text-xs text-[#50504B]">
                          Lead Instructor: {enrollment.instructorName}
                        </p>

                        <div className="pt-2 w-full max-w-md">
                          <div className="flex justify-between text-xs text-[#7E7E76] mb-1">
                            <span>Progress: {enrollment.completedLessons}/{enrollment.totalLessons} Lessons</span>
                            <span className="font-semibold text-[#111111]">{enrollment.progressPercent}%</span>
                          </div>
                          <div className="w-full h-2 bg-[#E5E5DE] rounded-full overflow-hidden">
                            <div
                              className="bg-[#00C48C] h-full rounded-full"
                              style={{ width: `${enrollment.progressPercent}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/course/${enrollment.courseSlug}`}
                        className="btn-primary text-xs py-2.5 px-4 self-start md:self-center"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>Continue Program</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-[#111111]">
                    My Verified Certificates
                  </h2>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Official credentials issued by CreditBuddy Partners Private Limited with tamper-proof IDs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MOCK_CERTIFICATES.map((cert) => (
                    <CertificateCard key={cert.id} certificate={cert} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "assignments" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-[#111111]">
                    Assignments & Practical Capstones
                  </h2>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Draft Credit Appraisal Memos, full-stack endpoints, and financial statements graded by mentors.
                  </p>
                </div>

                <div className="space-y-4">
                  {MOCK_ASSIGNMENTS.map((asg) => (
                    <div
                      key={asg.id}
                      className="rounded-[14px] bg-white border border-[#E6E6DE] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#7E7E76] block">
                          {asg.courseTitle}
                        </span>
                        <h4 className="text-sm font-heading font-semibold text-[#111111]">
                          {asg.title}
                        </h4>
                        <span className="text-xs text-[#50504B]">
                          Due Date: {asg.dueDate}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2.5 py-1 rounded-[6px] text-xs font-semibold ${
                            asg.status === "Graded"
                              ? "bg-[#E8F8F2] text-[#007050]"
                              : "bg-[#FAFAF8] text-[#50504B] border border-[#E6E6DE]"
                          }`}
                        >
                          {asg.status} {asg.score && `• ${asg.score}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sessions" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-[#111111]">
                    Live Weekend Masterclasses & AMAs
                  </h2>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Connect live via Zoom with domain leads from Razorpay, HDFC, and KPMG.
                  </p>
                </div>

                <div className="space-y-4">
                  {MOCK_UPCOMING_SESSIONS.map((sess) => (
                    <div
                      key={sess.id}
                      className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-[4px] bg-[#E8F8F2] text-[#007050] text-xs font-semibold">
                            {sess.status}
                          </span>
                          <span className="text-xs font-mono text-[#7E7E76]">
                            {sess.date} • {sess.time}
                          </span>
                        </div>
                        <h3 className="text-base font-heading font-semibold text-[#111111]">
                          {sess.title}
                        </h3>
                        <p className="text-xs text-[#50504B]">
                          Speaker: {sess.mentorName} ({sess.mentorRole}, {sess.company})
                        </p>
                      </div>

                      <a
                        href={sess.zoomUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-emerald text-xs py-2.5 px-4 self-start sm:self-center"
                      >
                        <Video className="w-4 h-4" />
                        <span>Join Masterclass</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6 max-w-2xl">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-[#111111]">
                    Student Profile & Verification Data
                  </h2>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Managed via Firebase Authentication & Firestore User Directory.
                  </p>
                </div>

                <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 space-y-4 text-xs">
                  <div className="flex items-center gap-4 pb-4 border-b border-[#F0F0EA]">
                    <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center text-base font-bold">
                      {userProfile?.avatarInitials || "CB"}
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-semibold text-[#111111]">
                        {userProfile?.displayName}
                      </h3>
                      <span className="text-[#009E70] font-medium block">{userProfile?.email}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-[#7E7E76] block text-[10px] uppercase font-mono">College / University</span>
                      <span className="text-sm font-semibold text-[#111111]">{userProfile?.college || "VSSUT Burla"}</span>
                    </div>
                    <div>
                      <span className="text-[#7E7E76] block text-[10px] uppercase font-mono">Assigned Role</span>
                      <span className="text-sm font-semibold text-[#007050] uppercase font-mono">Student</span>
                    </div>
                    <div>
                      <span className="text-[#7E7E76] block text-[10px] uppercase font-mono">Auth Provider</span>
                      <span className="text-sm font-semibold text-[#111111]">Firebase Auth</span>
                    </div>
                    <div>
                      <span className="text-[#7E7E76] block text-[10px] uppercase font-mono">Referral Status</span>
                      <span className="text-sm font-semibold text-[#007050]">Eligible for Interviews</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ======================================================== */}
        {/* ROLE 2: CREATOR & MENTOR DASHBOARD                       */}
        {/* ======================================================== */}
        {isCreator && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#009E70] uppercase font-semibold block mb-1">
                  Creator Studio & Operations Workspace
                </span>
                <h1 className="text-[26px] md:text-[32px] font-heading font-semibold text-[#111111]">
                  Creator Dashboard: {userProfile?.displayName}
                </h1>
                <p className="text-xs text-[#7E7E76] mt-0.5">
                  Review student capstone projects, grade CAM memos, and host scheduled live cohort masterclasses.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-[10px] bg-white border border-[#E6E6DE] px-3.5 py-2 text-xs flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#009E70]" />
                  <span><strong>140</strong> Students Guided</span>
                </div>
                <div className="rounded-[10px] bg-white border border-[#E6E6DE] px-3.5 py-2 text-xs flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-[#D97706]" />
                  <span><strong>18</strong> Live Masterclasses</span>
                </div>
              </div>
            </div>

            {/* Mentor Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 space-y-2">
                <span className="text-xs font-mono text-[#7E7E76] uppercase">Submissions Pending Review</span>
                <div className="text-3xl font-heading font-bold text-[#111111]">
                  {mentorSubmissions.filter((s) => s.status === "Pending Review").length}
                </div>
                <span className="text-[11px] text-[#007050] font-medium block">
                  Credit Appraisal Memos awaiting grade
                </span>
              </div>

              <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 space-y-2">
                <span className="text-xs font-mono text-[#7E7E76] uppercase">Next Scheduled Session</span>
                <div className="text-base font-heading font-semibold text-[#111111] truncate">
                  Wed, Sep 24 • 7:00 PM IST
                </div>
                <span className="text-[11px] text-[#50504B] block">
                  Live CAM Defense Simulation (68 enrolled)
                </span>
              </div>

              <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 space-y-2">
                <span className="text-xs font-mono text-[#7E7E76] uppercase">Mentor Satisfaction</span>
                <div className="text-3xl font-heading font-bold text-[#111111]">
                  4.95 / 5.0
                </div>
                <span className="text-[11px] text-[#007050] font-medium block">
                  From 420+ anonymous student reviews
                </span>
              </div>
            </div>

            {/* Submissions Queue Table */}
            <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 md:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-[#111111]">
                    Assignment Grading Queue
                  </h3>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Click &ldquo;Approve & Grade&rdquo; to evaluate candidate submissions with official rubric scores.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-[#F0F0EA]">
                {mentorSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-[#111111]">{sub.studentName}</span>
                        <span className="text-xs text-[#7E7E76]">({sub.college})</span>
                        <span className="text-[10px] text-[#7E7E76] font-mono">• {sub.submittedAt}</span>
                      </div>
                      <p className="text-xs text-[#50504B]">{sub.assignment}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2.5 py-1 rounded-[6px] text-xs font-semibold ${
                          sub.status.includes("Graded")
                            ? "bg-[#E8F8F2] text-[#007050]"
                            : "bg-[#FAFAF8] border border-[#E6E6DE] text-[#50504B]"
                        }`}
                      >
                        {sub.status}
                      </span>
                      {sub.status === "Pending Review" && (
                        <button
                          type="button"
                          onClick={() => handleGrade(sub.id)}
                          className="btn-primary text-xs py-1.5 px-3 rounded-[6px]"
                        >
                          Grade A+
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ======================================================== */}
        {/* ROLE 3: ADMIN & PLACEMENT DESK DASHBOARD                 */}
        {/* ======================================================== */}
        {isAdmin && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#009E70] uppercase font-semibold block mb-1">
                  Placement & Academic Governance Desk
                </span>
                <h1 className="text-[26px] md:text-[32px] font-heading font-semibold text-[#111111]">
                  Placement Desk: {COMPANY_INFO.legalEntity}
                </h1>
                <p className="text-xs text-[#7E7E76] mt-0.5">
                  Track partner college candidate pipelines, verify credentials, and issue certificates.
                </p>
              </div>

              <Link
                href="/certificates"
                className="btn-secondary text-xs py-2 px-3.5 self-start sm:self-center"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#009E70]" />
                <span>Open Public Registry</span>
              </Link>
            </div>

            {/* Admin Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-[14px] bg-white border border-[#E6E6DE] p-4">
                <span className="text-[11px] font-mono text-[#7E7E76] uppercase">Total Enrolled</span>
                <div className="text-2xl font-heading font-bold text-[#111111] mt-1">12,480</div>
                <span className="text-[10px] text-[#009E70] font-semibold mt-0.5 block">+340 this week</span>
              </div>
              <div className="rounded-[14px] bg-white border border-[#E6E6DE] p-4">
                <span className="text-[11px] font-mono text-[#7E7E76] uppercase">Partner Startups</span>
                <div className="text-2xl font-heading font-bold text-[#111111] mt-1">140+</div>
                <span className="text-[10px] text-[#50504B] mt-0.5 block">Active hiring desks</span>
              </div>
              <div className="rounded-[14px] bg-white border border-[#E6E6DE] p-4">
                <span className="text-[11px] font-mono text-[#7E7E76] uppercase">Certs Issued</span>
                <div className="text-2xl font-heading font-bold text-[#111111] mt-1">3,890</div>
                <span className="text-[10px] text-[#009E70] font-semibold mt-0.5 block">100% hash verified</span>
              </div>
              <div className="rounded-[14px] bg-white border border-[#E6E6DE] p-4">
                <span className="text-[11px] font-mono text-[#7E7E76] uppercase">Avg Graduate CTC</span>
                <div className="text-2xl font-heading font-bold text-[#111111] mt-1">₹8.4 LPA</div>
                <span className="text-[10px] text-[#50504B] mt-0.5 block">Across BFSI & Tech</span>
              </div>
            </div>

            {/* Placement Candidate Referral Pipeline */}
            <div className="rounded-[18px] bg-white border border-[#E6E6DE] p-6 md:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-[#111111]">
                    Placement Referral Matching Pipeline
                  </h3>
                  <p className="text-xs text-[#7E7E76] mt-0.5">
                    Verified graduates prepared for direct introduction to partner commercial banks & tech firms.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-[#F0F0EA]">
                {candidates.map((cand) => (
                  <div
                    key={cand.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-[#111111]">{cand.name}</span>
                        <span className="text-[#7E7E76]">({cand.college})</span>
                        <span className="text-[#007050] font-medium bg-[#E8F8F2] px-2 py-0.5 rounded-[4px]">
                          {cand.score}
                        </span>
                      </div>
                      <p className="text-[#50504B]">Track: {cand.track} • Target: {cand.targetCompany}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-[6px] bg-[#FAFAF8] border border-[#E6E6DE] text-[#111111] font-semibold">
                        {cand.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

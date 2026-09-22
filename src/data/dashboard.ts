export interface StudentEnrollment {
  id: string;
  courseId: string;
  courseTitle: string;
  courseSlug: string;
  category: string;
  instructorName: string;
  completedLessons: number;
  totalLessons: number;
  progressPercent: number;
  lastWatchedLesson: string;
  nextLessonDuration: string;
  thumbnailColor: string;
}

export interface UpcomingSession {
  id: string;
  title: string;
  mentorName: string;
  mentorRole: string;
  company: string;
  date: string;
  time: string;
  zoomUrl: string;
  status: "Live in 2h" | "Tomorrow" | "Upcoming";
}

export interface IssuedCertificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseTitle: string;
  issueDate: string;
  grade: string;
  verificationHash: string;
  downloadUrl: string;
}

export interface StudentAssignment {
  id: string;
  title: string;
  courseTitle: string;
  dueDate: string;
  status: "Submitted" | "Pending Review" | "Graded";
  score?: string;
}

export interface StudentProfile {
  name: string;
  email: string;
  college: string;
  degree: string;
  yearOfGraduation: string;
  avatarInitials: string;
  overallHoursLearned: number;
  streakDays: number;
  completedCoursesCount: number;
  activeCoursesCount: number;
}

export const MOCK_STUDENT_PROFILE: StudentProfile = {
  name: "Pratik Nayak",
  email: "pratik.nayak@student.vssut.ac.in",
  college: "VSSUT Burla (Sambalpur)",
  degree: "B.Tech Computer Science & Financial Engineering",
  yearOfGraduation: "2026",
  avatarInitials: "PN",
  overallHoursLearned: 46,
  streakDays: 14,
  completedCoursesCount: 1,
  activeCoursesCount: 2,
};

export const MOCK_ENROLLMENTS: StudentEnrollment[] = [
  {
    id: "en-1",
    courseId: "course-1",
    courseTitle: "Credit Analysis & Risk Underwriting",
    courseSlug: "credit-analysis-fundamentals",
    category: "Finance & Banking",
    instructorName: "Debabrata Mohanty",
    completedLessons: 24,
    totalLessons: 36,
    progressPercent: 67,
    lastWatchedLesson: "Working Capital Assessment: Operating Cycle & MPBF",
    nextLessonDuration: "50 mins",
    thumbnailColor: "#111111",
  },
  {
    id: "en-2",
    courseId: "course-2",
    courseTitle: "Excel for Finance & Financial Modeling",
    courseSlug: "excel-for-finance",
    category: "Finance & Banking",
    instructorName: "Sneha Agrawal, CA",
    completedLessons: 18,
    totalLessons: 28,
    progressPercent: 64,
    lastWatchedLesson: "Balancing the Balance Sheet Automatically via Cash Sweep",
    nextLessonDuration: "45 mins",
    thumbnailColor: "#192823",
  },
];

export const MOCK_UPCOMING_SESSIONS: UpcomingSession[] = [
  {
    id: "sess-1",
    title: "Live CAM Defense Simulation: Evaluating ₹12 Cr NBFC Loan Proposal",
    mentorName: "Debabrata Mohanty",
    mentorRole: "VP of Credit Risk",
    company: "Ex-HDFC Bank",
    date: "Wednesday, Sep 24",
    time: "7:00 PM - 8:30 PM IST",
    zoomUrl: "https://zoom.us",
    status: "Live in 2h",
  },
  {
    id: "sess-2",
    title: "Weekend Placement Q&A: Technical System Design & Resume Teardowns",
    mentorName: "Vikram Senapati",
    mentorRole: "Lead Systems Architect",
    company: "Ex-Razorpay",
    date: "Saturday, Sep 27",
    time: "11:00 AM - 1:00 PM IST",
    zoomUrl: "https://zoom.us",
    status: "Upcoming",
  },
];

export const MOCK_CERTIFICATES: IssuedCertificate[] = [
  {
    id: "cert-101",
    certificateNumber: "CB-ACADEMY-2026-8942",
    studentName: "Pratik Nayak",
    courseTitle: "ATS Resume Architecture & LinkedIn Branding",
    issueDate: "September 08, 2026",
    grade: "Grade A+ (Distinction)",
    verificationHash: "e4f81c9b2a609d",
    downloadUrl: "#",
  },
];

export const MOCK_ASSIGNMENTS: StudentAssignment[] = [
  {
    id: "asg-1",
    title: "Build 3-Statement Working Capital Schedule for Solar Manufacturer",
    courseTitle: "Credit Analysis & Risk Underwriting",
    dueDate: "Sep 28, 2026",
    status: "Pending Review",
  },
  {
    id: "asg-2",
    title: "ATS Resume Rewrite (Google XYZ format) & LinkedIn Profile Audit",
    courseTitle: "ATS Resume Architecture & LinkedIn Branding",
    dueDate: "Sep 05, 2026",
    status: "Graded",
    score: "96/100",
  },
];

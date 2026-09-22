"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithPopup, 
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";

export type UserRole = "student" | "creator" | "mentor" | "admin";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: UserRole;
  college?: string;
  avatarInitials?: string;
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string, name: string, college?: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const DEFAULT_STUDENT_PROFILE: UserProfile = {
  uid: "student-101",
  email: "student@creditbuddy.org.in",
  displayName: "Pratik Nayak",
  role: "student",
  college: "VSSUT Burla (Sambalpur)",
  avatarInitials: "PN",
  createdAt: "2026-09-01",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(DEFAULT_STUDENT_PROFILE);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserProfile = async (firebaseUser: User) => {
    try {
      const userDocRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(userDocRef);
      
      let assignedRole: UserRole = "student";
      let college = "";

      if (snap.exists()) {
        const data = snap.data();
        assignedRole = (data.role as UserRole) || "student";
        college = data.college || "";
      } else {
        // Check if manually assigned in local storage for developer testing
        const manualRole = (typeof window !== "undefined" && localStorage.getItem("cb_user_role")) as UserRole | null;
        if (manualRole === "admin" || manualRole === "creator" || manualRole === "mentor") {
          assignedRole = manualRole;
        }

        // Initialize Firestore document with default 'student' role
        try {
          await setDoc(userDocRef, {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || "CreditBuddy Student",
            role: assignedRole,
            college: college,
            createdAt: new Date().toISOString(),
          });
        } catch {
          // ignore if firestore rules prevent writing
        }
      }

      // Check manual override if set in browser storage
      const manualOverride = typeof window !== "undefined" ? localStorage.getItem("cb_user_role") as UserRole | null : null;
      if (manualOverride && (manualOverride === "admin" || manualOverride === "creator" || manualOverride === "mentor" || manualOverride === "student")) {
        assignedRole = manualOverride;
      }

      setUserProfile({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || "CreditBuddy Member",
        role: assignedRole,
        college: college,
        avatarInitials: (firebaseUser.displayName || "CB")
          .split(" ")
          .map((n) => n[0])
          .join("")
          .substring(0, 2)
          .toUpperCase(),
      });
    } catch {
      // Fallback
      setUserProfile(DEFAULT_STUDENT_PROFILE);
    }
  };

  useEffect(() => {
    // Check manual role override from developer console or storage
    const manualRole = (typeof window !== "undefined" && localStorage.getItem("cb_user_role")) as UserRole | null;
    if (manualRole) {
      setUserProfile((prev) => ({
        ...(prev || DEFAULT_STUDENT_PROFILE),
        role: manualRole,
      }));
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchUserProfile(firebaseUser);
      } else {
        // Keep default student profile for visitors
        setUserProfile((prev) => ({
          ...(prev || DEFAULT_STUDENT_PROFILE),
          role: (manualRole as UserRole) || "student",
        }));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const refreshProfile = async () => {
    if (user) {
      await fetchUserProfile(user);
    } else {
      const manualRole = (typeof window !== "undefined" && localStorage.getItem("cb_user_role")) as UserRole | null;
      if (manualRole) {
        setUserProfile((prev) => ({
          ...(prev || DEFAULT_STUDENT_PROFILE),
          role: manualRole,
        }));
      }
    }
  };

  const login = async (email: string, pass: string) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, pass);
      setUser(cred.user);
      await fetchUserProfile(cred.user);
    } catch (err: unknown) {
      console.warn("Firebase Auth error:", err);
      throw err;
    }
  };

  // Sign up is STRICTLY default student
  const signup = async (
    email: string, 
    pass: string, 
    name: string, 
    college?: string
  ) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(cred.user, { displayName: name });
    
    // Every user is strictly defaulted to 'student'
    const defaultRole: UserRole = "student";

    try {
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email,
        displayName: name,
        role: defaultRole,
        college: college || "",
        createdAt: new Date().toISOString(),
      });
    } catch (e) {
      console.warn("Could not save to firestore:", e);
    }

    const profile: UserProfile = {
      uid: cred.user.uid,
      email,
      displayName: name,
      role: defaultRole,
      college,
      avatarInitials: name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase(),
    };
    setUser(cred.user);
    setUserProfile(profile);
  };

  const loginWithGoogle = async () => {
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      setUser(cred.user);
      const userRef = doc(db, "users", cred.user.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName,
          role: "student", // Strictly default student
          createdAt: new Date().toISOString(),
        });
      }
      await fetchUserProfile(cred.user);
    } catch (err) {
      console.warn("Google sign-in error:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("SignOut error:", e);
    }
    setUser(null);
    setUserProfile(DEFAULT_STUDENT_PROFILE);
    localStorage.removeItem("cb_user_role");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        login,
        signup,
        loginWithGoogle,
        logout,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

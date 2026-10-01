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
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  getDocs,
  onSnapshot
} from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";

export type UserRole = "student" | "moderator" | "admin";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  role: UserRole;
  createdAt?: string;
  lastLoginAt?: string;
  college?: string;
  avatarInitials?: string;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signupWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserRole: (targetUid: string, newRole: UserRole) => Promise<void>;
  fetchAllUsers: () => Promise<UserProfile[]>;
}

const DEFAULT_GUEST_PROFILE: UserProfile = {
  uid: "guest-demo",
  email: "student@creditbuddy.org.in",
  displayName: "Learner Guest",
  role: "student",
  createdAt: new Date().toISOString(),
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>("student");
  const [loading, setLoading] = useState<boolean>(true);

  // Sync profile from Firestore or initialize as student
  const syncProfile = async (firebaseUser: User) => {
    try {
      const userRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(userRef);

      const now = new Date().toISOString();

      if (snap.exists()) {
        const data = snap.data();
        const role = (data.role as UserRole) || "student";
        const profile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: data.displayName || firebaseUser.displayName || "Member",
          photoURL: firebaseUser.photoURL || null,
          role,
          createdAt: data.createdAt || now,
          lastLoginAt: now,
          avatarInitials: (data.displayName || firebaseUser.displayName || "CB")
            .split(" ")
            .map((n: string) => n[0])
            .join("")
            .substring(0, 2)
            .toUpperCase(),
        };

        setUserProfile(profile);
        setActiveRole(role);

        // Update last login
        try {
          await updateDoc(userRef, { lastLoginAt: now });
        } catch {
          // Ignore if permission issue
        }
      } else {
        // First login: every user is strictly "student"
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || "Student",
          photoURL: firebaseUser.photoURL || null,
          role: "student",
          createdAt: now,
          lastLoginAt: now,
        };

        try {
          await setDoc(userRef, newProfile);
        } catch (e) {
          console.warn("Could not create user document in Firestore:", e);
        }

        setUserProfile(newProfile);
        setActiveRole("student");
      }
    } catch (err) {
      console.warn("Error fetching user profile:", err);
      // Fallback local student profile
      const fallback: UserProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || "Student",
        photoURL: firebaseUser.photoURL || null,
        role: "student",
        createdAt: new Date().toISOString(),
      };
      setUserProfile(fallback);
      setActiveRole("student");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await syncProfile(firebaseUser);

        // Real-time listener on the user's document for instant role updates
        const docRef = doc(db, "users", firebaseUser.uid);
        const unsubDoc = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.role) {
              const updatedRole = data.role as UserRole;
              setUserProfile((prev) => prev ? { ...prev, role: updatedRole } : null);
              setActiveRole(updatedRole);
            }
          }
        }, (error) => {
          console.warn("Snapshot listener notice:", error);
        });

        setLoading(false);
        return () => unsubDoc();
      } else {
        setUserProfile(null);
        setActiveRole("student");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      setUser(cred.user);
      await syncProfile(cred.user);
    } catch (err: unknown) {
      console.error("Google sign-in error:", err);
      throw err;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, pass);
      setUser(cred.user);
      await syncProfile(cred.user);
    } catch (err: unknown) {
      console.error("Email login error:", err);
      throw err;
    }
  };

  const signupWithEmail = async (email: string, pass: string, name: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(cred.user, { displayName: name });
      
      const now = new Date().toISOString();
      const userRef = doc(db, "users", cred.user.uid);
      const newProfile: UserProfile = {
        uid: cred.user.uid,
        email,
        displayName: name,
        role: "student", // Strictly student first
        createdAt: now,
        lastLoginAt: now,
      };

      try {
        await setDoc(userRef, newProfile);
      } catch (e) {
        console.warn("Could not save new user document to Firestore:", e);
      }

      setUser(cred.user);
      setUserProfile(newProfile);
      setActiveRole("student");
    } catch (err: unknown) {
      console.error("Email signup error:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("Sign out error:", e);
    }
    setUser(null);
    setUserProfile(null);
    setActiveRole("student");
  };

  // Admin function to update any user's role in Firestore
  const updateUserRole = async (targetUid: string, newRole: UserRole) => {
    try {
      const targetRef = doc(db, "users", targetUid);
      await updateDoc(targetRef, { role: newRole });
      
      // If updating own profile, update local state immediately
      if (user && user.uid === targetUid) {
        setUserProfile((prev) => prev ? { ...prev, role: newRole } : null);
        setActiveRole(newRole);
      }
    } catch (err) {
      console.error("Failed to update user role:", err);
      throw err;
    }
  };

  // Fetch all registered users for Admin User Directory
  const fetchAllUsers = async (): Promise<UserProfile[]> => {
    try {
      const usersCol = collection(db, "users");
      const snap = await getDocs(usersCol);
      const list: UserProfile[] = [];
      snap.forEach((d) => {
        const data = d.data();
        list.push({
          uid: d.id,
          email: data.email || null,
          displayName: data.displayName || "Unnamed User",
          photoURL: data.photoURL || null,
          role: (data.role as UserRole) || "student",
          createdAt: data.createdAt || "",
          lastLoginAt: data.lastLoginAt || "",
          college: data.college || "",
        });
      });
      return list;
    } catch (err) {
      console.warn("Failed to fetch all users from Firestore:", err);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        activeRole,
        setActiveRole,
        loading,
        loginWithGoogle,
        loginWithEmail,
        signupWithEmail,
        logout,
        updateUserRole,
        fetchAllUsers,
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

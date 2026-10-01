import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const getAuthDomain = () => {
  const envDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  if (!envDomain || envDomain === "learn.creditbuddy.org.in" || envDomain === "learn-creditbuddy.firebaseapp.com") {
    return "auth.creditbuddy.org.in";
  }
  return envDomain;
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: getAuthDomain(),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "learn-creditbuddy",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
};

// Check if we're in a browser environment with valid config
const isClient = typeof window !== "undefined";
const hasValidConfig = Boolean(firebaseConfig.apiKey);

// Only initialize Firebase when we have a valid API key AND are on the client
function getFirebaseApp(): FirebaseApp | null {
  if (!hasValidConfig) return null;
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

// Lazy singleton getters
let _auth: Auth | null = null;
let _db: Firestore | null = null;
let _googleProvider: GoogleAuthProvider | null = null;

export function getFirebaseAuth(): Auth | null {
  if (!isClient || !hasValidConfig) return null;
  if (!_auth) {
    const app = getFirebaseApp();
    if (!app) return null;
    _auth = getAuth(app);
  }
  return _auth;
}

export function getFirebaseDb(): Firestore | null {
  if (!isClient || !hasValidConfig) return null;
  if (!_db) {
    const app = getFirebaseApp();
    if (!app) return null;
    _db = getFirestore(app);
  }
  return _db;
}

export function getGoogleProvider(): GoogleAuthProvider | null {
  if (!isClient) return null;
  if (!_googleProvider) {
    _googleProvider = new GoogleAuthProvider();
    _googleProvider.setCustomParameters({ prompt: "select_account" });
  }
  return _googleProvider;
}

// Backward-compatible named exports — null during SSR/prerender, live on client
export const auth = isClient && hasValidConfig ? getFirebaseAuth()! : (null as unknown as Auth);
export const db = isClient && hasValidConfig ? getFirebaseDb()! : (null as unknown as Firestore);
export const googleProvider = isClient ? getGoogleProvider()! : (null as unknown as GoogleAuthProvider);

const app = isClient && hasValidConfig ? getFirebaseApp() : null;
export default app as FirebaseApp;

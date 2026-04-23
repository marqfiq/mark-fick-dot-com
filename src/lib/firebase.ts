import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDymhAd7JgzEngg4B5V0p1ld6ui8PY5LJM",
  authDomain: "mark-fick.firebaseapp.com",
  projectId: "mark-fick",
  storageBucket: "mark-fick.firebasestorage.app",
  messagingSenderId: "591261517421",
  appId: "1:591261517421:web:1cb121bc55423189ef6164",
  measurementId: "G-ZLKY4T1XH0",
};

// Initialize Firebase (prevent duplicate initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Analytics is only available in the browser
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };

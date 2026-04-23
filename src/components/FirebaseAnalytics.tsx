"use client";

import { useEffect } from "react";

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Dynamic import to ensure this only runs client-side
    import("../lib/firebase");
  }, []);

  return null;
}

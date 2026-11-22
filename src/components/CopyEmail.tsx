"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5"
      >
        Email me
        <span aria-hidden>→</span>
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-rule px-5 py-3 font-mono text-xs text-ink-2 transition-colors hover:border-accent hover:text-accent"
        aria-live="polite"
      >
        {copied ? "copied ✓" : email}
      </button>
    </div>
  );
}

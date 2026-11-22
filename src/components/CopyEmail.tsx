"use client";

import { useState } from "react";

/**
 * Primary "Email me" button (opens the mail app) plus the address itself as a
 * copy-to-clipboard chip, since mailto: often fails for people using webmail.
 */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: fall back to opening the mail app.
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
        data-copy={email}
        title="Copy email address"
        aria-label={`Copy email address ${email}`}
        className="group inline-flex items-center gap-2.5 rounded-full border border-rule px-5 py-3 font-mono text-xs text-ink-2 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span data-copy-label>{email}</span>
        <span aria-hidden data-copy-icon className="text-sm leading-none">
          {copied ? "✓" : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
            </svg>
          )}
        </span>
        <span role="status" className="sr-only">{copied ? "Email address copied" : ""}</span>
        <span data-copy-toast className={`font-sans text-[0.7rem] font-medium transition-opacity ${copied ? "opacity-100" : "hidden opacity-0"}`}>
          Copied
        </span>
      </button>
    </div>
  );
}

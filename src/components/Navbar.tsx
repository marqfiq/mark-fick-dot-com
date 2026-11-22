"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Work" },
  ...(site.features.writing ? [{ href: "/writing", label: "Writing" }] : []),
  { href: "/#now", label: "Now" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      if (y > last && y > 120) {
        setIsOpen(false);
        setIsVisible(false);
      } else if (y < last) {
        setIsVisible(true);
      }
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${
        isScrolled ? "border-b border-rule bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav ref={navRef} className="relative mx-auto flex max-w-[1080px] items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink" onClick={() => setIsOpen(false)}>
          Mark Fick
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-underline text-sm text-ink-2 hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] text-ink md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block h-[1.5px] w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>

        <div
          className={`absolute right-4 top-[64px] flex w-[200px] origin-top-right flex-col gap-5 rounded-2xl border border-rule bg-card px-7 py-6 shadow-xl transition-all duration-200 md:hidden ${
            isOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="font-display text-lg text-ink">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

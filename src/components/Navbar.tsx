"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Only attach the listener if the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Store scroll state inside the closure to explicitly prevent thrashing the event listener
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle glass background styling based on absolute top offset
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down past absolute top -> completely hide instantly
        setIsOpen(false);
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> reveal
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    // Only intercept scroll natively if we're entirely on the same page
    if (window.location.pathname === "/") {
      e.preventDefault();
      setIsOpen(false);

      const targetElement = document.querySelector(hash);
      if (targetElement) {
        // Calculate precise offset preventing the fixed Navbar from covering the headers
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Let standard Next.js routing process navigation to homepage normally
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Invisible spacer to prevent layout shift from fixed header */}
      <div className="h-[60px] md:h-[40px]" aria-hidden="true"></div>

      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${isScrolled ? "bg-bg/90 backdrop-blur-md border-b-[0.5px] border-accent-rose/40 shadow-sm py-0" : "bg-bg/0 backdrop-blur-none border-b-[0.5px] border-accent-rose/0 shadow-none py-2"
          }`}
      >
        <div className="max-w-[860px] mx-auto px-[20px]">
          <nav ref={navRef} className="py-4 flex justify-between items-center relative">
            <Link href="/" className="font-serif text-lg font-bold text-text-head tracking-[-0.02em]">
              Mark Fick
            </Link>

            <div className="hidden md:flex gap-7 items-baseline">
              <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                about
              </Link>
              <Link href="/#work" onClick={(e) => handleNavClick(e, '#work')} className="text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                work
              </Link>
              {/* <Link href="/#writing" onClick={(e) => handleNavClick(e, '#writing')} className="text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
          writing
        </Link> */}
              <Link href="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                contact
              </Link>
            </div>

            {/* Hamburger Icon */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[4px] w-6 h-6 z-50 text-muted-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`}></span>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              className={`absolute top-[60px] right-0 bg-surface border border-accent-rose/40 rounded-lg shadow-xl shadow-black/40 py-5 px-8 flex flex-col gap-6 md:hidden transition-all duration-300 origin-top-right z-40 w-[200px] ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
              <Link href="/#about" className="flex items-center text-sm text-muted-1 transition-colors duration-150 hover:text-text-head" onClick={(e) => handleNavClick(e, '#about')}>
                about
              </Link>
              <Link href="/#work" className="flex items-center text-sm text-muted-1 transition-colors duration-150 hover:text-text-head" onClick={(e) => handleNavClick(e, '#work')}>
                work
              </Link>
              <Link href="/#writing" className="flex items-center text-sm text-muted-1 transition-colors duration-150 hover:text-text-head" onClick={(e) => handleNavClick(e, '#writing')}>
                writing
              </Link>
              <Link href="/#contact" className="flex items-center text-sm text-muted-1 transition-colors duration-150 hover:text-text-head" onClick={(e) => handleNavClick(e, '#contact')}>
                contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

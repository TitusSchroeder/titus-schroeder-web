"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const PillNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    // Immediately check scroll position on mount/reload
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vorteile", href: "#features" },
    { name: "Demo", href: "#cms-demo" },
    { name: "Preise", href: "#preise" },
    { name: "Über mich", href: "#uber-mich" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          maxWidth: scrolled ? "52rem" : "68rem",
          y: scrolled ? -2 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full pointer-events-auto flex items-center justify-between transition-all duration-300 p-2 ${
          scrolled
            ? "bg-white/60 backdrop-blur-2xl rounded-full border border-slate-200/80 shadow-pill"
            : "bg-white/30 backdrop-blur-md rounded-2xl border border-transparent"
        }`}
      >
        {/* Logo Left */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-brand-navy tracking-tight text-sm sm:text-base group shrink-0"
        >
          <span className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-extrabold group-hover:bg-brand-blue transition-colors shrink-0 shadow-sm">
            TS
          </span>
          <span className="font-extrabold text-brand-navy leading-none">Titus Schröder</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700 h-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-blue transition-colors flex items-center h-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Button (Universal Hover Rule) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold bg-brand-blue text-white border border-brand-blue h-9 px-4 rounded-full hover:bg-transparent hover:text-brand-blue transition-all shadow-sm"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full text-brand-navy hover:bg-slate-100 flex items-center justify-center focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-4 right-4 bg-white/90 backdrop-blur-2xl border border-brand-border rounded-3xl p-6 shadow-2xl md:hidden pointer-events-auto flex flex-col gap-4 text-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-brand-navy hover:text-brand-blue py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}

        </motion.div>
      )}
    </header>
  );
};

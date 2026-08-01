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
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 transition-all duration-300 pointer-events-none">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`pointer-events-auto flex items-center justify-between transition-colors duration-300 ${
          scrolled
            ? "w-full max-w-3xl p-2 bg-white/75 backdrop-blur-2xl rounded-full border border-slate-200/80 shadow-pill"
            : "w-full max-w-5xl p-2 sm:p-3 bg-transparent rounded-2xl"
        }`}
      >
        {/* Left Side: Brand Logo (Constantly TS Titus Schröder, exact equal 8px margin) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-brand-navy tracking-tight text-sm sm:text-base group shrink-0"
        >
          <span className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-extrabold group-hover:bg-brand-blue transition-colors shrink-0 shadow-sm">
            TS
          </span>
          <span className="font-extrabold text-brand-navy leading-none">Titus Schröder</span>
        </Link>

        {/* Center: Desktop Nav Links (Always perfectly centered) */}
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

        {/* Right Side: CTA Button (Exact equal 8px margin) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold bg-brand-blue text-white h-9 px-4 rounded-full hover:bg-brand-blueHover transition-all shadow-md hover:shadow-glow"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full text-brand-navy hover:bg-slate-100/80 flex items-center justify-center focus:outline-none"
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
          className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-brand-border rounded-3xl p-6 shadow-2xl md:hidden pointer-events-auto flex flex-col gap-4 text-center"
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
          <a
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center text-sm font-bold bg-brand-blue text-white py-3 rounded-full hover:bg-brand-blueHover transition-colors shadow-glow"
          >
            Projekt anfragen
          </a>
        </motion.div>
      )}
    </header>
  );
};

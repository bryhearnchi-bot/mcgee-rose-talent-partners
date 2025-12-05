"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-teal-dark/20 rounded-full blur-sm animate-pulse" />
      <Sparkles className="w-8 h-8 text-brand-teal-dark relative z-10" strokeWidth={1.5} />
      <Star className="w-3 h-3 text-brand-yellow absolute top-0 right-0 fill-brand-yellow animate-bounce" style={{ animationDuration: '3s' }} />
    </div>
    <div className="flex flex-col">
      <span className="font-serif text-2xl font-bold text-brand-teal leading-none tracking-tight">McGee Rose</span>
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-red font-bold">Talent Partners</span>
    </div>
  </div>
);

const NavLink = ({ href, children, mobile = false, onClick }: { href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "relative group transition-colors duration-300 font-medium",
      mobile
        ? "text-2xl font-serif text-brand-navy py-2 block"
        : "text-brand-navy/80 hover:text-brand-navy text-sm tracking-wide"
    )}
  >
    {children}
    {!mobile && (
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
    )}
  </Link>
);

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/candidates">Candidates</NavLink>
            <NavLink href="/clients">Clients</NavLink>
            <NavLink href="/jobs">Job Board</NavLink>
            <NavLink href="/about">About</NavLink>
            <Button variant="primary" className="ml-4">Get Started</Button>
          </div>

          <button
            className="md:hidden p-2 text-brand-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              <NavLink mobile href="/candidates" onClick={closeMenu}>Candidates</NavLink>
              <NavLink mobile href="/clients" onClick={closeMenu}>Clients</NavLink>
              <NavLink mobile href="/jobs" onClick={closeMenu}>Job Board</NavLink>
              <NavLink mobile href="/about" onClick={closeMenu}>About</NavLink>
              <div className="w-full h-px bg-brand-navy/10 my-4" />
              <Button className="w-full justify-center text-lg py-4">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

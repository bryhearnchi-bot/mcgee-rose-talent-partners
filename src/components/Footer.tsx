"use client";

import Link from "next/link";
import { Sparkles, Mail, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-brand-cream border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-brand-cream/10 rounded-full">
                  <Sparkles className="w-5 h-5 text-brand-yellow" />
                </div>
                <span className="font-serif text-xl font-bold">McGee Rose</span>
              </div>
              <p className="text-brand-cream/60 text-sm leading-relaxed">
                Boutique recruiting partners dedicated to authentic connections and long-term success.
              </p>
            </div>
            <div className="flex gap-4">
              {["IG", "LI", "FB"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold hover:bg-brand-red transition-colors cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3 text-sm text-brand-cream/70">
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-brand-red transition-colors">Our Team</Link></li>
              <li><Link href="/jobs" className="hover:text-brand-red transition-colors">Careers at McGee Rose</Link></li>
              <li><Link href="/about#contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3 text-sm text-brand-cream/70">
              <li><Link href="/clients" className="hover:text-brand-red transition-colors">Executive Search</Link></li>
              <li><Link href="/clients" className="hover:text-brand-red transition-colors">Team Building</Link></li>
              <li><Link href="/candidates" className="hover:text-brand-red transition-colors">Career Coaching</Link></li>
              <li><Link href="/jobs" className="hover:text-brand-red transition-colors">Job Board</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3 text-sm text-brand-cream/70">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red" />
                hello@mcgeerose.com
              </li>
              <li className="flex items-center gap-3">
                <Briefcase size={16} className="text-brand-red" />
                Based in Austin, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/40">
          <p>&copy; {new Date().getFullYear()} McGee Rose Talent Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-cream">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-cream">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

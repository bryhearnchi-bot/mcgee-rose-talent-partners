"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ children, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 md:mb-12 relative", centered && "text-center")}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block font-script text-2xl md:text-3xl text-brand-red mb-2 rotate-[-2deg]"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-navy font-bold relative inline-block"
      >
        {children}
        <span className="absolute -bottom-2 left-0 w-full h-3 bg-brand-yellow/30 -skew-x-12 -z-10 rounded-full" />
      </motion.h2>
    </div>
  );
}

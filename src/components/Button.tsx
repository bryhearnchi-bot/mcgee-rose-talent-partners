"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-brand-navy text-brand-cream hover:bg-brand-navy/90 shadow-lg hover:shadow-xl",
    secondary: "bg-brand-red text-white hover:bg-brand-red/90 shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream",
    ghost: "text-brand-navy hover:bg-brand-navy/5",
  };

  const buttonClasses = cn(
    "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 active:scale-95",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

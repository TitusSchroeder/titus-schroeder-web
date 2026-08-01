"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer border";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-7 py-3.5 text-base sm:text-lg",
  };

  // Rule:
  // Primary (filled blue) -> hover: background disappears (transparent), text & border blue
  // Secondary (filled navy) -> hover: background disappears (transparent), text & border navy
  // Outline (unfilled) -> hover: gets filled background & white text
  const variantStyles = {
    primary:
      "bg-brand-blue text-white border-brand-blue hover:bg-transparent hover:text-brand-blue shadow-sm",
    secondary:
      "bg-brand-navy text-white border-brand-navy hover:bg-transparent hover:text-brand-navy shadow-sm",
    outline:
      "bg-transparent text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white shadow-sm",
    ghost:
      "bg-transparent text-slate-700 border-transparent hover:bg-slate-100 hover:text-brand-navy",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

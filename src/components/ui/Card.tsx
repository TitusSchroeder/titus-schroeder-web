"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  highlighted = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "rounded-2xl p-6 sm:p-8 bg-brand-card border transition-all duration-300 relative overflow-hidden",
        highlighted
          ? "border-brand-blue ring-1 ring-brand-blue shadow-glow bg-white"
          : "border-brand-border hover:border-slate-300 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

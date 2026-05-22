"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "brand-accent" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full";
    
    const variants = {
      primary: "bg-[var(--color-rich-charcoal)] text-white hover:bg-[var(--color-soft-black)]",
      secondary: "bg-[var(--color-matte-beige)] text-[var(--color-rich-charcoal)] hover:bg-[var(--color-light-champagne)]",
      outline: "border border-[var(--color-rich-charcoal)] text-[var(--color-rich-charcoal)] hover:bg-[var(--color-soft-cream)]",
      ghost: "text-[var(--color-rich-charcoal)] hover:bg-black/5",
      "brand-accent": "bg-gradient-brand text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all",
      whatsapp: "bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366]/20 border border-[#25D366]/20",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

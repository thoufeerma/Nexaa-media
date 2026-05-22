"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export function FadeUp({
  children,
  delay = 0,
  className,
  duration = 0.8,
  yOffset = 30,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type MotionFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionFade({ children, className, delay = 0 }: MotionFadeProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={prefersReduced ? undefined : { duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}



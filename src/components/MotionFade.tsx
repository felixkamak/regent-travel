"use client";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export interface MotionFadeProps {
  children: ReactNode;
  className?: string;
  /** forward standard attributes to the wrapper */
  id?: string;
  style?: CSSProperties;
  /** optional as-prop if you want a different tag later */
  as?: keyof JSX.IntrinsicElements;
}

export default function MotionFade({
  children,
  className,
  id,
  style,
  as: Tag = "div",
}: MotionFadeProps) {
  // use motion.[tag] – default to motion.div
  const MotionTag: any = motion[Tag as keyof typeof motion] ?? motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

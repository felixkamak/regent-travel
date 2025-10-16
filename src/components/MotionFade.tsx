"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type MotionFadeBaseProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

/** Extra motion props are allowed (e.g. onViewportEnter), but we keep it a div to avoid `any`. */
export type MotionFadeProps = MotionFadeBaseProps &
  Omit<HTMLMotionProps<"div">, "children" | "className" | "style" | "id">;

export default function MotionFade({
  children,
  className,
  id,
  style,
  ...rest
}: MotionFadeProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

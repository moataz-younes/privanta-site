import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/motion";

type ScrollStaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  margin?: string;
  amount?: number;
};

export function ScrollStagger({
  children,
  className,
  as = "div",
  margin = "-72px",
  amount = 0.12,
}: ScrollStaggerProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin, amount }}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

export function ScrollStaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag className={cn(className)} variants={staggerItem}>
      {children}
    </MotionTag>
  );
}

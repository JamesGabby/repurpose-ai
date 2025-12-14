"use client";

// src/components/ui/motion.tsx
import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn";

const animations = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

interface MotionWrapperProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: UseInViewOptions["amount"];
}

export function MotionWrapper({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration,
  className,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const selectedAnimation = animations[animation];
  const customTransition = {
    ...selectedAnimation.visible,
    transition: {
      ...(selectedAnimation.visible as any).transition,
      delay,
      ...(duration && { duration }),
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: selectedAnimation.hidden,
        visible: customTransition,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  amount?: UseInViewOptions["amount"];
}

export function MotionContainer({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}: MotionContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MotionItemProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}

export function MotionItem({
  children,
  className,
  animation = "fadeInUp",
}: MotionItemProps) {
  return (
    <motion.div variants={animations[animation]} className={className}>
      {children}
    </motion.div>
  );
}

interface MotionTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function MotionText({ text, className, once = true }: MotionTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface MotionCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function MotionCounter({
  from = 0,
  to,
  duration = 2,
  className,
  suffix = "",
  prefix = "",
}: MotionCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {prefix}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Counter from={from} to={to} duration={duration} />
          </motion.span>
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

function Counter({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const startTime = performance.now();
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(from + (to - from) * easeOutQuart);
      node.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

import React from "react";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

import { useScroll, useTransform } from "framer-motion";
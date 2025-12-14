"use client";

// src/components/ui/animated-text.tsx
import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}

interface AnimatedWordsProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedWords({
  text,
  className,
  once = true,
  delay = 0,
}: AnimatedWordsProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      className={cn("inline", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export function TypewriterText({
  texts,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const text = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < text.length) {
            setCurrentText(text.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(text.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{currentText}</span>
      <motion.span
        className="ml-1 inline-block h-[1em] w-[3px] bg-brand-500"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

interface RotatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function RotatingText({
  texts,
  className,
  interval = 3000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1] // Smooth easing
          }}
          className="inline-flex items-center justify-center whitespace-nowrap"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
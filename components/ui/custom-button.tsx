"use client";

// src/components/ui/custom-button.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonTap } from "@/lib/animations";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30",
        gradient:
          "bg-gradient-to-r from-brand-600 to-purple-600 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:brightness-110",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border-2 border-brand-500 bg-transparent text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-brand-600 underline-offset-4 hover:underline",
        white:
          "bg-white text-brand-600 shadow-lg hover:bg-gray-50 hover:shadow-xl",
        dark:
          "bg-gray-900 text-white hover:bg-gray-800",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CustomButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  glowEffect?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      glowEffect = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        className={cn(
          buttonVariants({ variant, size, className }),
          glowEffect && "relative overflow-hidden",
          isLoading && "cursor-wait"
        )}
        ref={ref}
        disabled={disabled || isLoading}
        whileTap={!disabled && !isLoading ? buttonTap : undefined}
        whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
        {...props}
      >
        {glowEffect && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        )}
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
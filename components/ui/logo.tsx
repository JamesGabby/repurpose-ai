// src/components/ui/logo.tsx
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "default" | "lg";
}

export function Logo({ className, showText = true, size = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    default: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textSizeClasses = {
    sm: "text-lg",
    default: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 text-white shadow-lg shadow-brand-500/25",
          sizeClasses[size]
        )}
      >
        <Sparkles className="h-1/2 w-1/2" />
      </div>
      {showText && (
        <span
          className={cn(
            "font-heading font-bold tracking-tight",
            textSizeClasses[size]
          )}
        >
          Repurpose
          <span className="text-brand-500">AI</span>
        </span>
      )}
    </div>
  );
}
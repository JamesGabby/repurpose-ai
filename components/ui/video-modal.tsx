"use client";

// src/components/ui/video-modal.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title = "Product Demo",
}: VideoModalProps) {
  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl mx-4"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className={cn(
                "absolute -top-12 right-0 p-2 rounded-full",
                "text-white/70 hover:text-white hover:bg-white/10",
                "transition-colors duration-200"
              )}
            >
              <Icons.close className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </motion.button>

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-white/70 text-sm mt-4"
            >
              {title}
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface VideoTriggerProps {
  onClick: () => void;
  className?: string;
  thumbnailUrl?: string;
}

export function VideoTrigger({
  onClick,
  className,
  thumbnailUrl,
}: VideoTriggerProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group rounded-2xl overflow-hidden",
        "border border-border/50 shadow-xl",
        className
      )}
    >
      {/* Thumbnail or placeholder */}
      <div className="aspect-video bg-gradient-to-br from-brand-900 to-purple-900">
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={cn(
            "flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full",
            "bg-white/90 text-brand-600 shadow-lg",
            "group-hover:bg-white transition-colors"
          )}
        >
          <Icons.play className="h-6 w-6 md:h-8 md:w-8 ml-1" />
        </motion.div>
      </div>

      {/* Duration badge */}
      <div className="absolute bottom-4 right-4 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
        2:34
      </div>
    </motion.button>
  );
}
"use client";

// src/components/testimonials/video-testimonial.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface VideoTestimonialProps {
  thumbnailUrl?: string;
  videoUrl?: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  className?: string;
}

export function VideoTestimonial({
  thumbnailUrl,
  videoUrl,
  author,
  role,
  company,
  quote,
  className,
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card",
        className
      )}
    >
      <div className="grid md:grid-cols-2">
        {/* Video Section */}
        <div className="relative aspect-video md:aspect-auto">
          {/* Thumbnail/Video */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-purple-600">
            {thumbnailUrl && !isPlaying && (
              <img
                src={thumbnailUrl}
                alt={`${author}'s testimonial`}
                className="h-full w-full object-cover"
              />
            )}
            {isPlaying && videoUrl && (
              <iframe
                src={videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Play button */}
          {!isPlaying && (
            <motion.button
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 group"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-600 shadow-lg group-hover:scale-110 transition-transform">
                <Icons.play className="h-6 w-6 ml-1" />
              </div>
            </motion.button>
          )}

          {/* Duration badge */}
          {!isPlaying && (
            <div className="absolute bottom-4 right-4 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
              1:24
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <Icons.quote className="h-8 w-8 text-brand-500/20 mb-4" />

          <blockquote className="text-lg leading-relaxed">
            "{quote}"
          </blockquote>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-400 to-purple-400" />
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-sm text-muted-foreground">
                {role} at {company}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icons.star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
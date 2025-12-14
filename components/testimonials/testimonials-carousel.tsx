"use client";

// src/components/testimonials/testimonials-carousel.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Testimonial } from "@/config/testimonials";
import { TestimonialCard } from "./testimonial-card";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialsCarousel({
  testimonials,
  className,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  // Auto-advance
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className={cn("relative", className)}>
      {/* Carousel container */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        {/* Previous button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            "border border-border bg-card hover:bg-muted transition-colors"
          )}
        >
          <Icons.chevronRight className="h-5 w-5 rotate-180" />
          <span className="sr-only">Previous</span>
        </motion.button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "w-8 bg-brand-500"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            >
              <span className="sr-only">Page {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Next button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            "border border-border bg-card hover:bg-muted transition-colors"
          )}
        >
          <Icons.chevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </motion.button>
      </div>
    </div>
  );
}
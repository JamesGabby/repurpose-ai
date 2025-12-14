// src/hooks/use-scroll-position.ts
"use client";

import * as React from "react";
import { throttle } from "@/lib/performance";

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = React.useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export function useScrollDirection(): "up" | "down" | null {
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down" | null>(null);
  const [prevOffset, setPrevOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = throttle(() => {
      const currentOffset = window.scrollY;

      if (currentOffset > prevOffset && currentOffset > 100) {
        setScrollDirection("down");
      } else if (currentOffset < prevOffset) {
        setScrollDirection("up");
      }

      setPrevOffset(currentOffset);
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevOffset]);

  return scrollDirection;
}
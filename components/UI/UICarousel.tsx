"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface UICarouselProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
}

export default function UICarousel<T>({
  items,
  renderItem,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
}: UICarouselProps<T>) {
  const [current, setCurrent] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const handleNext = () => {
    next();
    startTimer();
  };

  const handlePrevious = () => {
    previous();
    startTimer();
  };

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // restart timer
  const startTimer = () => {
    if (!autoPlay) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      next();
    }, interval);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, interval]);

  if (!items.length) return null;

  return (
    <div className="relative">
      {showArrows && (
        <div className="absolute -top-24 right-0 flex gap-4 z-20">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={handlePrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/20 text-lime-400 transition hover:bg-lime-500 hover:text-black"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={handleNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/20 text-lime-400 transition hover:bg-lime-500 hover:text-black"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      )}

      {renderItem(items[current])}
    </div>
  );
}

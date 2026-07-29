"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

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

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  if (!items.length) return null;

  return (
    <div className="relative">

      {showArrows && (
        <div className="absolute -top-24 right-0 flex gap-4 z-20">

          <button
            onClick={previous}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/20 text-lime-400 transition hover:bg-lime-500 hover:text-black"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/20 text-lime-400 transition hover:bg-lime-500 hover:text-black"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      )}

      {renderItem(items[current])}
    </div>
  );
}
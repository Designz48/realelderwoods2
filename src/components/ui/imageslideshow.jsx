// src/components/ui/ImageSlideshow.jsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlideshow({ images = [], interval = 4000 }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [idx, images]);

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setIdx((i) => (i + 1) % images.length);
    }, interval);
  };
  const clearTimer = () => clearTimeout(timerRef.current);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i + 1) % images.length);

  if (!images.length) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        className="w-full h-full object-cover"
      />
      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>
      {/* dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full ${
              i === idx ? "bg-green" : "bg-gray-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

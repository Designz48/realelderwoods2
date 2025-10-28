// src/components/ui/ImageSlideshow.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Props
 *   images   – array of image URLs (required)
 *   interval – milliseconds between automatic slides (default 4000)
 *   className – optional extra Tailwind classes the caller wants to add
 */
export default function ImageSlideshow({
  images = [],
  interval = 4000,
  className = "",
}) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  /* ---------------------------------------------------------
     Timer helpers – memoised so their identity only changes
     when `interval` or `images.length` changes.
     --------------------------------------------------------- */
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []); // never changes – no deps needed

  const startTimer = useCallback(() => {
    // If there are no images we don’t start a timer at all
    if (!images.length) return;

    clearTimer(); // make sure any previous timer is gone
    timerRef.current = setTimeout(() => {
      setIdx((i) => (i + 1) % images.length);
    }, interval);
  }, [clearTimer, images.length, interval]); // <-- deps

  /* ---------------------------------------------------------
     Effect that (re)starts the auto‑advance timer whenever
     the slide index, the image list, or the interval changes.
     --------------------------------------------------------- */
  useEffect(() => {
    startTimer();               // kick off the timer
    return () => clearTimer();  // clean up on unmount or when deps change
  }, [startTimer, clearTimer]); // <-- both functions are stable thanks to useCallback

  /* ---------------------------------------------------------
     Manual navigation helpers (they don’t need memoisation)
     --------------------------------------------------------- */
  const prev = () =>
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIdx((i) => (i + 1) % images.length);

  /* ---------------------------------------------------------
     Guard – if the caller passes an empty array we render nothing.
     --------------------------------------------------------- */
  if (!images.length) return null;

  /* ---------------------------------------------------------
     Render
     --------------------------------------------------------- */
  return (
    <div
      /* Merge the caller‑provided className with the defaults */
      className={`relative w-full overflow-hidden rounded-lg ${className}`}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      {/* ---------- Image ---------- */}
      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        className="w-full h-full object-cover"
      />

      {/* ---------- Left arrow ---------- */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>

      {/* ---------- Right arrow ---------- */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* ---------- Dots (optional) ---------- */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full ${
              i === idx ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

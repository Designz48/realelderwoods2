import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Props:
 *   images: array of image URLs (strings)
 */
export default function ImageCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  if (!images.length) return null;

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-md">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  );
}

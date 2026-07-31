"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface VillaCarouselProps {
  images: string[];
  villaName: string;
}

export default function VillaCarousel({ images, villaName }: VillaCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);
  const prev = () => { setPaused(true); setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); };
  const goTo = (i: number) => { setPaused(true); setCurrent(i); };

  useEffect(() => {
    if (paused || images.length === 0) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, images.length, next]);

  if (images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] bg-[#ede5d5] flex items-center justify-center">
        <p className="text-[#b8924a] text-sm tracking-[0.2em] uppercase">Photos Coming Soon</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative w-full aspect-[4/3] bg-[#ede5d5] overflow-hidden">
        <Image
          src={images[current]}
          alt={`${villaName} — photo ${current + 1} of ${images.length}`}
          fill
          unoptimized
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Prev / Next */}
        <button
          onClick={() => prev()}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1c2b4b]/60 text-[#fdfaf4] w-9 h-9 flex items-center justify-center hover:bg-[#1c2b4b]/90 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => { setPaused(true); next(); }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1c2b4b]/60 text-[#fdfaf4] w-9 h-9 flex items-center justify-center hover:bg-[#1c2b4b]/90 transition-colors"
        >
          ›
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-4 bg-[#1c2b4b]/60 text-[#fdfaf4] text-xs px-2 py-1 tracking-widest">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-[#b8924a]" : "bg-[#ddd0bc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

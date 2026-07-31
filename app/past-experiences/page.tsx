import type { Metadata } from "next";
import Image from "next/image";
import { readdirSync } from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Past Experiences — Chef Rocco Garibaldi Sicily",
  description:
    "Photos from past culinary experiences hosted by Chef Rocco Garibaldi — cooking, wine, villa life, and the beauty of Sicily.",
};

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .map((f) => `/gallery/${f}`);
  } catch {
    return [];
  }
}

export default function PastExperiencesPage() {
  const images = getGalleryImages();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Past Experiences — Chef Rocco Garibaldi</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Memories from Sicily</p>
        <p className="text-[#ede5d5] font-serif text-4xl md:text-5xl italic font-light">
          Past Experiences
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {images.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-12 h-px bg-[#b8924a] mx-auto mb-8" />
            <p className="text-[#7a8090] text-lg">Photos coming soon.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((src, i) => (
              <div key={src} className="break-inside-avoid overflow-hidden">
                <Image
                  src={src}
                  alt={`Past experience photo ${i + 1}`}
                  width={800}
                  height={600}
                  unoptimized
                  className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#000000] mb-4">Join Us in Sicily</h2>
        <p className="text-[#000000]/70 mb-8 text-lg">September 1–10, 2026 · Limited spots available</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#000000] text-[#fdfaf4] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#000000]/80 transition-colors"
          >
            Book Italy
          </a>
        </div>
      </section>
    </>
  );
}

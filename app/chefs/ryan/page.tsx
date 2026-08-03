import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Chef Ryan — Chef Rocco Garibaldi Sicily Experience",
  description:
    "Meet Chef Ryan — Master Pastaio traveling from Rome, Italy, whose hands-on pasta-making sessions are a highlight of the Sicily experience.",
};

export default function ChefRyanPage() {
  const hasPhoto = existsSync(
    path.join(process.cwd(), "public", "chefs", "ryan.jpg")
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Chef Ryan — Your Culinary Team</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">
          Your Culinary Team
        </p>
        <p className="text-[#ede5d5] font-serif text-4xl md:text-5xl italic font-light">
          Chef Ryan
        </p>
      </section>

      {/* Bio section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div
          className={`grid grid-cols-1 ${
            hasPhoto ? "lg:grid-cols-2" : ""
          } gap-16 items-start`}
        >
          {/* Photo */}
          {hasPhoto && (
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/chefs/ryan.jpg"
                alt="Chef Ryan"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          )}

          {/* Biography */}
          <div className="lg:pt-4">
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">
              Master Pastaio
            </p>
            <h2 className="font-serif text-4xl text-[#000000] mb-5">
              Chef Ryan
            </h2>
            <div className="w-8 h-px bg-[#b8924a] mb-8" />

            <p className="text-[#7a8090] text-lg leading-relaxed mb-6">
              Traveling from Rome, Italy, Chef Ryan arrives with flour on his
              hands and centuries of tradition behind him. As a Master
              Pastaio, his command of pasta — the textures, the ratios, the
              regional variations that make Southern Italian cuisine unlike
              anything you&apos;ve tasted elsewhere — is extraordinary. He has
              spent years perfecting the art of handmade pasta in Italy, and
              he brings every bit of that expertise to the villa kitchen in
              Cefalù.
            </p>

            <p className="text-[#7a8090] text-lg leading-relaxed mb-6">
              Ryan&apos;s hands-on pasta-making session is consistently the most
              talked-about moment of the experience. You&apos;ll work alongside
              him at the kitchen table, learning the feel of the dough, the
              technique behind each shape, and the sauces that elevate them.
              By the time you sit down to eat what you&apos;ve made, together, the
              pride is unmistakable.
            </p>

            <p className="text-[#7a8090] text-lg leading-relaxed mb-10">
              He also co-leads the Chef Course dinner presentation alongside
              Chefs Rocco and Roberto — an elegant multi-course evening that
              brings together everything learned throughout the week. Ryan
              is patient, passionate, and genuinely excited to share what he
              loves. That energy is contagious.
            </p>

            <Link
              href="/experience"
              className="inline-block border border-[#b8924a] text-[#b8924a] px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-[#b8924a] hover:text-[#fdfaf4] transition-colors"
            >
              ← Back to The Experience
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#000000] mb-4">
          Join Us in Sicily
        </h2>
        <p className="text-[#000000]/70 mb-8 text-lg">
          September 1–10, 2026 · Limited spots available
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#000000] text-[#fdfaf4] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#000000]/80 transition-colors"
          >
            Book Italy
          </a>
          <Link
            href="/itinerary"
            className="border border-[#000000] text-[#000000] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#000000]/10 transition-colors"
          >
            View Itinerary
          </Link>
        </div>
      </section>
    </>
  );
}

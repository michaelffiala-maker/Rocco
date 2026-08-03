import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Chef Roberto — Chef Rocco Garibaldi Sicily Experience",
  description:
    "Meet Chef Roberto — Co-owner of Rocco's Pizza Pub, Sicilian-rooted Pizzaiolo, and guide for the La Rocca di Cefalù hike.",
};

export default function ChefRobertoPage() {
  const hasPhoto = existsSync(
    path.join(process.cwd(), "public", "chefs", "roberto.jpg")
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Chef Roberto — Your Culinary Team</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">
          Your Culinary Team
        </p>
        <p className="text-[#ede5d5] font-serif text-4xl md:text-5xl italic font-light">
          Chef Roberto
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
                src="/chefs/roberto.jpg"
                alt="Chef Roberto"
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
              Chef & Pizzaiolo
            </p>
            <h2 className="font-serif text-4xl text-[#000000] mb-5">
              Chef Roberto
            </h2>
            <div className="w-8 h-px bg-[#b8924a] mb-8" />

            <p className="text-[#7a8090] text-lg leading-relaxed mb-6">
              Co-owner of Rocco&apos;s Pizza Pub on the Big Island of Hawai&apos;i and
              Rocco&apos;s closest collaborator, Roberto is the steady, skilled
              heartbeat of the culinary team. Born with Sicilian roots running
              deep, his understanding of authentic Italian technique — the
              dough, the fire, the timing — is something that can only come
              from a lifetime of immersion in the craft.
            </p>

            <p className="text-[#7a8090] text-lg leading-relaxed mb-6">
              At the villa, Roberto leads the wood-fired pizza sessions with
              a quiet confidence that puts everyone at ease. Whether you&apos;ve
              never stretched dough in your life or you think you know your
              way around a kitchen, Roberto will elevate your technique and
              leave you with skills — and stories — you&apos;ll carry home.
            </p>

            <p className="text-[#7a8090] text-lg leading-relaxed mb-10">
              Beyond the kitchen, Roberto leads the optional early morning
              hike up La Rocca di Cefalù — a 250-meter climb above the
              Tyrrhenian Sea to the ruins of a 4th-century temple and a
              medieval castle. The view from the top is unlike anything else
              in Sicily. He&apos;ll be right there with you every step of the way.
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

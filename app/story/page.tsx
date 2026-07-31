import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Our Story — Chef Rocco Garibaldi Sicily",
  description:
    "The story behind Rocco's — 45 years of Italian family tradition, from Joe Rocco's first pizzeria to Chef Rocco Garibaldi's culinary tours of Sicily.",
};

const storyImages = [
  { src: "/story/1.png", alt: "Joe Rocco — the man who started it all" },
  { src: "/story/2.png", alt: "Joe & his bride — the wedding that started a 55-year love story" },
  { src: "/story/4.jpg", alt: "Chef Rocco hosting dinner under the stars in Sicily" },
];

function StoryPhoto({ src, alt }: { src: string; alt: string }) {
  const filePath = path.join(process.cwd(), "public", src);
  const exists = existsSync(filePath);

  if (!exists) {
    return (
      <div className="w-full aspect-[3/4] bg-[#ede5d5] flex items-center justify-center border border-[#ddd0bc]">
        <p className="text-[#b8924a] text-xs tracking-[0.2em] uppercase text-center px-4">Photo Coming Soon</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden">
      <Image src={src} alt={alt} fill unoptimized className="object-cover" sizes="320px" />
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Our Story — Chef Rocco Garibaldi</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">45 Years of Italian Tradition</p>
        <p className="text-[#ede5d5] font-serif text-4xl md:text-5xl italic font-light">
          It&apos;s a Family Thing
        </p>
      </section>

      {/* Story body — two column: text left, photos right */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="w-12 h-px bg-[#b8924a] mx-auto mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-[#000000] text-xl leading-relaxed mb-8">
              Rocco is our name and it all began 45 years ago when my father Joe Rocco opened the
              very first Rocco&apos;s Pizza. Growing up with an Italian father who was very passionate
              and strict about the quality of his restaurant taught us early on about the importance
              of hard work, pride, respect, and family.
            </p>

            <p className="text-[#000000] text-xl leading-relaxed mb-8">
              When I say family restaurant, I mean it. We all worked the pizzeria — even my youngest
              sister Jo. She was just a little girl, barely old enough to scoot a chair under the
              phone and climb up to answer &ldquo;Rocco&apos;s Pizza Hut.&rdquo; As many times as she was told
              her job was not to answer the phone, she did anyhow. We&apos;re all guilty of being
              stubborn Italians in this family.
            </p>

            <p className="text-[#000000] text-xl leading-relaxed mb-8">
              However, when the restaurant was really busy on Friday and Saturday nights, that&apos;s
              when my Mom came in. Alongside my Dad, they were quite the team. They served many
              families, and many children grew up on our pizza.
            </p>

            <p className="text-[#000000] text-xl leading-relaxed mb-8">
              My parents have been married 55 years and their love and commitment to each other
              and our family has been an inspiration to us throughout the years. By launching
              Rocco&apos;s Pizza Pub on the Big Island of Hawai&apos;i, I made a dedication and representation
              of the respect I have for my Dad&apos;s legacy as a Family Man and Pizza Shop Owner —
              and for my Mom, being his rock and balance when he needed it the most.
            </p>

            <p className="text-[#000000] text-xl leading-relaxed mb-14">
              My promise: to make them proud and provide the same level of quality in our pizza
              and service, while never forgetting the importance of family, tradition, and community.
              This Italy tour is an extension of that promise — an invitation to sit at our table,
              cook with our family, and taste what 45 years of passion tastes like.
            </p>

            <div className="w-12 h-px bg-[#b8924a] mb-14" />

            {/* Pull quote */}
            <blockquote className="border-l-2 border-[#b8924a] pl-8 mb-14">
              <p className="font-serif text-2xl md:text-3xl text-[#000000] italic leading-relaxed">
                &ldquo;This isn&apos;t just a tour. It&apos;s a homecoming.&rdquo;
              </p>
              <cite className="block mt-4 text-[#b8924a] text-xs tracking-[0.2em] uppercase not-italic">
                — Chef Rocco Garibaldi
              </cite>
            </blockquote>
          </div>

          {/* Photos — sticky column */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            {storyImages.map((img) => (
              <StoryPhoto key={img.src} src={img.src} alt={img.alt} />
            ))}
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
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#000000] text-[#fdfaf4] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#0d1829] transition-colors"
          >
            Book Italy
          </a>
          <Link
            href="/experience"
            className="border border-[#000000] text-[#000000] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#000000]/10 transition-colors"
          >
            The Experience
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Chef Rocco Garibaldi Sicily",
  description:
    "The story behind Rocco's — Chef Rocco Garibaldi's culinary journey and 45 years of Italian family tradition.",
};

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Our Story — Chef Rocco Garibaldi</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">The Woman Behind the Experience</p>
        <p className="text-[#ede5d5] font-serif text-4xl md:text-5xl italic font-light">
          Chef Rocco Garibaldi
        </p>
      </section>

      {/* Chef biography */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src="/story/4.jpg"
              alt="Chef Rocco Garibaldi"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Biography */}
          <div className="lg:pt-4">
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Biography</p>
            <h2 className="font-serif text-4xl text-[#000000] mb-5">Chef Rocco Garibaldi</h2>
            <div className="w-8 h-px bg-[#b8924a] mb-8" />

            {/* Placeholder — will be replaced with full biography */}
            <p className="text-[#7a8090] text-lg leading-relaxed mb-6">
              Chef Rocco Garibaldi&apos;s biography will be featured here. Her full story — her culinary journey,
              her passions, her inspirations, and what drives her to share the flavors and traditions of
              Southern Italy with the world — is coming soon.
            </p>

            <blockquote className="border-l-2 border-[#b8924a] pl-8 mt-10">
              <p className="font-serif text-2xl md:text-3xl text-[#000000] italic leading-relaxed">
                &ldquo;This isn&apos;t just a visit. It&apos;s a homecoming.&rdquo;
              </p>
              <cite className="block mt-4 text-[#b8924a] text-xs tracking-[0.2em] uppercase not-italic">
                — Chef Rocco Garibaldi
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Family history */}
      <section className="bg-[#ede5d5] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">45 Years of Italian Tradition</p>
            <h2 className="font-serif text-4xl text-[#000000]">It&apos;s a Family Thing</h2>
            <div className="w-12 h-px bg-[#b8924a] mx-auto mt-5" />
          </div>

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

              <p className="text-[#000000] text-xl leading-relaxed">
                My promise: to make them proud and provide the same level of quality in our pizza
                and service, while never forgetting the importance of family, tradition, and community.
                This Sicily experience is an extension of that promise — an invitation to sit at our table,
                cook with our family, and taste what 45 years of passion tastes like.
              </p>
            </div>

            {/* Family photos */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {[
                { src: "/story/1.png", alt: "Joe Rocco — the man who started it all" },
                { src: "/story/2.png", alt: "Joe & his bride — the wedding that started a 55-year love story" },
              ].map((img) => (
                <div key={img.src} className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              ))}
            </div>
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

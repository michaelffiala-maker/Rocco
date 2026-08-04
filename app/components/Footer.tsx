import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#7a8090] py-14 px-6 text-center">
      <div className="flex justify-center mb-8">
        <Image
          src="/logos/Full%20Logo.png"
          alt="Chef Rocco Garibaldi — Authentic Culinary Experiences in Sicily"
          width={560}
          height={560}
          className="w-48 md:w-56 h-auto opacity-90"
        />
      </div>
      <div className="w-16 h-px bg-[#b8924a] mx-auto mb-6" />
      <p className="text-sm tracking-[0.15em] uppercase text-[#ede5d5] mb-2">
        A Southern Italy Epicurean Experience
      </p>
      <p className="text-sm mb-6">September 1–10, 2026 · Cefalù & Taormina, Sicily</p>
      <p className="text-xs">
        Questions?{" "}
        <a href="/contact" className="text-[#b8924a] hover:underline">
          Contact us
        </a>{" "}
        or{" "}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b8924a] hover:underline"
        >
          book your spot
        </a>
        .
      </p>
      <p className="text-xs mt-8 text-[#4a5a6a]">
        © {new Date().getFullYear()} Rocco&apos;s Pizza Pub. All rights reserved.
      </p>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "The Experience" },
  { href: "/itinerary", label: "Itinerary" },
  { href: "/pricing", label: "Pricing & Book" },
  { href: "/story", label: "Our Story" },
  { href: "/past-experiences", label: "Past Experiences" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/95 backdrop-blur-sm border-b border-[#b8924a]/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[#b8924a] text-[10px] tracking-[0.35em] uppercase">Chef</span>
          <span className="text-[#fdfaf4] font-serif text-lg tracking-[0.08em] leading-tight">
            Rocco Garibaldi
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[#ede5d5] text-xs tracking-[0.2em] uppercase hover:text-[#b8924a] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block border border-[#b8924a] text-[#b8924a] text-xs px-5 py-2 tracking-[0.2em] uppercase hover:bg-[#b8924a] hover:text-[#fdfaf4] transition-colors"
        >
          Book Italy
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#ede5d5] focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#000000] border-t border-[#b8924a]/20">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#ede5d5] text-xs tracking-[0.2em] uppercase hover:text-[#b8924a] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#b8924a] text-[#b8924a] text-xs px-5 py-2 tracking-[0.2em] uppercase"
              >
                Book Italy
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

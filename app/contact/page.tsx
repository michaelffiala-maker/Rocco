"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [message, setMessage] = useState("");
  const youliRef = useRef<HTMLDivElement>(null);
  const youliSicilianTableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!youliRef.current) return;
    const script = document.createElement("script");
    script.src =
      "https://youli.io/embeds/script/trips/chef-rocco-garibaldi-culinary-experience/?view=card&tripid=34b779b8-749a-f111-9b33-000d3aff9d5c&style=detailed";
    script.async = true;
    youliRef.current.appendChild(script);
  }, []);

  useEffect(() => {
    if (!youliSicilianTableRef.current) return;
    const script = document.createElement("script");
    script.src =
      "https://youli.io/embeds/script/trips/chef-rocco-garibaldi-culinary-experience/?view=card&tripid=f1c594c8-55b4-f111-a6a7-000d3a6daace&style=detailed";
    script.async = true;
    youliSicilianTableRef.current.appendChild(script);
  }, []);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("Italy Experience Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTravelers: ${travelers}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:rocco@roccogaribaldi.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Contact — Chef Rocco Garibaldi Sicily Experience</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Get in Touch</p>
        <p className="text-[#fdf6ed] font-serif text-3xl md:text-4xl mb-4">Contact Us</p>
        <p className="text-[#b0a090] text-lg max-w-xl mx-auto">
          Questions about the experience, group bookings, or custom itineraries?
          We&apos;d love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        {/* Info */}
        <div>
          <h2 className="font-serif text-3xl text-[#000000] mb-8">Reach Rocco&apos;s</h2>

          <div className="space-y-6">
            <div>
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-1">Ready to Book?</p>
              <p className="text-[#8c7b6b] text-sm leading-relaxed">
                Visit Pricing &amp; Book to see dates and reserve your spot.
              </p>
              <Link
                href="/pricing"
                className="inline-block mt-3 bg-[#b8924a] text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-[#c9a45a] transition-colors"
              >
                Pricing &amp; Book
              </Link>
            </div>

            <div id="book-around-the-world" className="border-t border-[#ede5d5] pt-6 scroll-mt-24">
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-1">Book Around the World</p>
              <p className="text-[#8c7b6b] text-sm leading-relaxed mb-4">
                Chef Rocco is hosting culinary experiences beyond Sicily. Explore and reserve
                upcoming trips below.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div ref={youliRef} />
                <div ref={youliSicilianTableRef} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#f5f0e6] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#000000] mb-8">Send an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="name" className="block text-[#000000] text-xs tracking-widest uppercase mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#ede5d5] bg-white px-4 py-3 text-sm text-[#000000] placeholder-[#b0a090] focus:outline-none focus:border-[#b8924a] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#000000] text-xs tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#ede5d5] bg-white px-4 py-3 text-sm text-[#000000] placeholder-[#b0a090] focus:outline-none focus:border-[#b8924a] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="travelers" className="block text-[#000000] text-xs tracking-widest uppercase mb-2">
                  Number of Travelers
                </label>
                <select
                  id="travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full border border-[#ede5d5] bg-white px-4 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#b8924a] transition-colors"
                >
                  <option value="1">1 (single room supplement applies)</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+ (group — custom itinerary available)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#000000] text-xs tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Questions, group details, dietary needs, anything else..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-[#ede5d5] bg-white px-4 py-3 text-sm text-[#000000] placeholder-[#b0a090] focus:outline-none focus:border-[#b8924a] transition-colors resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#b8924a] text-white px-16 py-4 text-sm tracking-widest uppercase hover:bg-[#c9a45a] transition-colors"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

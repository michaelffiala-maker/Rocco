"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [message, setMessage] = useState("");

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
      <section className="max-w-5xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <h2 className="font-serif text-3xl text-[#000000] mb-8">Reach Rocco&apos;s</h2>

          <div className="space-y-6">
            <div>
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-1">Ready to Book?</p>
              <p className="text-[#8c7b6b] text-sm leading-relaxed">
                Use our booking form to secure your spot. Early bird pricing ($5,600 pp) is
                available through March 9th, 2026.
              </p>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-[#b8924a] text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-[#b8924a] transition-colors"
              >
                Book Italy
              </a>
            </div>

            <div className="border-t border-[#ede5d5] pt-6">
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-1">Groups of 5+</p>
              <p className="text-[#8c7b6b] text-sm leading-relaxed">
                Custom itineraries and alternate dates are available for groups of 5 or more.
                Use the inquiry form to tell us about your group and we&apos;ll be in touch.
              </p>
            </div>

            <div className="border-t border-[#ede5d5] pt-6">
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-1">About Rocco&apos;s</p>
              <p className="text-[#8c7b6b] text-sm leading-relaxed">
                Rocco&apos;s Pizza Pub is located on the Big Island of Hawai&apos;i. Our Italy experience is
                a natural extension of a 45-year family legacy rooted in Southern Italian cuisine,
                tradition, and hospitality.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="font-serif text-3xl text-[#000000] mb-8">Send an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
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

            <button
              type="submit"
              className="w-full bg-[#b8924a] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#c9a45a] transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

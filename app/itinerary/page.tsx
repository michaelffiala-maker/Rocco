"use client";

import { useState } from "react";

const days = [
  {
    day: 1,
    date: "Tuesday, September 1, 2026",
    title: "Arrival in Sicily & Cena di Benvenuti",
    location: "Cefalù",
    highlights: ["Welcome Prosecco Toast & Aperitivo", "Welcome Dinner at the Villa"],
    details: [
      "Arrival at Palermo Airport Falcone Borcellino (PMO)",
      "Transfer to your Villa in Cefalù, Sicily",
      "Welcome Prosecco Toast & Aperitivo",
      "Relax and settle into your rooms — enjoy the Villa & Pool",
      "Welcome dinner at your Villa with hosts Chef & Pizzaiola Rocco, Chef & Pizzaiollo Roberto, Chef & Master Pastaio Ryan (traveling from Rome), and Chef Keo",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 2,
    date: "Wednesday, September 2, 2026",
    title: "Hands-On Pasta Making & Chef Lunch, Dinner in Cefalù",
    location: "Cefalù",
    highlights: ["Hands-On Pasta Making Session", "Wine Pairings", "Open Air Sicilian Dinner"],
    details: [
      "Breakfast at your Villa in Cefalù, Sicily",
      "Hands-On Pasta Making Session — Cooking & Tasting Chef Lunch with Wine Pairings led by Pastaio Chef Ryan & Chef Rocco at the Villa",
      "Afternoon free at the pool for swimming or relaxing",
      "Evening departure for a local open air restaurant in Cefalù serving traditional Sicilian dishes",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 3,
    date: "Thursday, September 3, 2026",
    title: "Day in Taormina & Open Air Dinner at the Villa",
    location: "Taormina",
    highlights: ["Teatro Antico Greco-Roman Theater", "Views of Mt. Etna", "Traditional Sicilian Dinner"],
    details: [
      "Breakfast at your Villa",
      "Early morning departure for Taormina — a beautiful hilltop town on the East Coast of Sicily with gorgeous views of the Ionian Sea",
      "Visit the Teatro Antico, the ancient Greco-Roman theater with endless views of the Sea and Mt. Etna Volcano",
      "Lunch on your own to explore and enjoy Taormina",
      "Check into your Villa in Taormina",
      "Dinner at your Villa serving Traditional Sicilian Dishes dining in the open air with views of Mt. Etna Volcano",
      "Overnight stay at your Villa in Taormina, Sicily",
    ],
  },
  {
    day: 4,
    date: "Friday, September 4, 2026",
    title: "Free Day in Taormina",
    location: "Taormina",
    highlights: ["Isola Bella Beach", "Explore at Your Own Pace"],
    details: [
      "Breakfast at your Villa in Taormina, Sicily",
      "Free day — relax by the pool, take a walk, shop, hike, enjoy vino, and more",
      "Recommended: visit Isola Bella, a small island on the coast of Taormina — one of the most beautiful beaches in Sicily",
      "Overnight stay at the Villa in Taormina",
    ],
  },
  {
    day: 5,
    date: "Saturday, September 5, 2026",
    title: "Return to Cefalù, Villa Lunch & Sunset Aperitivo",
    location: "Cefalù",
    highlights: ["Villa Lunch by the Chefs", "Sunset Aperitivo at Al Chiosco"],
    details: [
      "Breakfast at the Villa in Taormina, Sicily",
      "Morning departure to Cefalù",
      "Return to Cefalù to your Villa",
      "Lunch by your Chefs at the Villa",
      "Afternoon free to relax and swim at the pool",
      "Sunset Aperitivo at Al Chiosco — gorgeous sunset ocean views of Cefalù",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 6,
    date: "Sunday, September 6, 2026",
    title: "Mercatino Visit, Wine Tasting & Pizza Party",
    location: "Cefalù",
    highlights: ["Local Market (Mercatino)", "Sicilian Wine Tasting", "Pizza Party at the Villa"],
    details: [
      "Visit to the Mercatino in Cefalù — local Italian cheese, meats, olive oil, breads, olives, nuts, fruits, vegetables, and more",
      "Lunch: Wine Tasting & Food Pairing at the Winery & Putia Enosteria, featuring Sicilian wines",
      "Afternoon at the Villa to relax or swim",
      "Pizza Party at your Villa led by Pizzaiola Chef Rocco, Pizzaiolo Chef Roberto, and Pizzaiolo Chef Ryan — make your own pizza and enjoy the evening",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 7,
    date: "Monday, September 7, 2026",
    title: "La Rocca di Cefalù Hike & Chef Course Dinner",
    location: "Cefalù",
    highlights: ["Optional Hike — La Rocca (250m)", "Temple of Diana (4th Century BC)", "Chef Course Dinner Presentation"],
    details: [
      "Breakfast at your Villa in Cefalù, Sicily",
      "Optional: Early morning hike led by Roberto up La Rocca di Cefalù — best view in Cefalù at 250 meters, overlooking the Tyrrhenian Sea",
      "View the Temple of Diana (4th Century B.C.) and remains of a Medieval Castle (13th–14th Century)",
      "Afternoon free to explore Cefalù — the Cathedral at Piazza Duomo, museums, restaurants, shopping, or a Beach Club (Lido)",
      "Dinner: Chef Course Presentation by Chefs Rocco, Ryan & Roberto",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 8,
    date: "Tuesday, September 8, 2026",
    title: "Abbazia Santa Anastasia Winery & Craft Cocktail Evening",
    location: "Cefalù",
    highlights: ["Winery Cellar Tour", "Artisan Meat & Cheese Pairing", "Apericena & Craft Cocktails with Mixologist Matteo"],
    details: [
      "Light Breakfast at your Villa in Cefalù",
      "Early afternoon visit to Abbazia Santa Anastasia Winery — tour of the wine cellar and tasting",
      "Tasting Course: Local Artisan Meats & Cheeses paired with Sicilian wines",
      "Dinner: Apericena & Craft Cocktails with Chefs Rocco, Roberto, Ryan, and Guest Mixologist Matteo",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 9,
    date: "Wednesday, September 9, 2026",
    title: "Grape Harvest at the Vineyard & Festa Della Pizza",
    location: "Cefalù",
    highlights: ["Optional Grape Harvest — Rocco Garibaldi Vineyard", "Festa Della Pizza — Italian Pizza Festival"],
    details: [
      "Breakfast at your Villa in Cefalù",
      "Optional: Early morning departure to harvest grapes at the Rocco Garibaldi Vineyard (subject to Mother Nature)",
      "Lunch at the Villa",
      "Afternoon free to relax or enjoy pool time",
      "Festa Della Pizza — Pizza Festival in Finale di Pollina: enjoy pizza from Master Pizza Makers of Southern Italy, local beer, and live music",
      "Retire for the evening at your Villa",
    ],
  },
  {
    day: 10,
    date: "Thursday, September 10, 2026",
    title: "Departure",
    location: "Cefalù → PMO",
    highlights: ["Final Breakfast at the Villa", "Saltwater Pool"],
    details: [
      "Breakfast at your Villa in Cefalù, Sicily",
      "Relax at the Saltwater Pool",
      "Transfer to Palermo Airport (PMO)",
      "Arrivederci — until next time",
    ],
  },
];

const locationColors: Record<string, string> = {
  "Cefalù": "bg-[#000000] text-[#ede5d5]",
  "Taormina": "bg-[#4a6b3a] text-[#ede5d5]",
  "Cefalù → PMO": "bg-[#7a8090] text-[#ede5d5]",
};

export default function ItineraryPage() {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Itinerary — Chef Rocco Garibaldi Sicily Tour</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Day by Day</p>
        <p className="text-[#ede5d5]/80 text-lg max-w-xl mx-auto">
          September 1–10, 2026 · Cefalù & Taormina, Sicily
        </p>
      </section>

      {/* Location legend */}
      <div className="flex justify-center gap-4 py-6 px-6 bg-[#ede5d5]">
        <span className="flex items-center gap-2 text-xs tracking-widest uppercase">
          <span className="inline-block w-3 h-3 rounded-full bg-[#6b1a2a]" /> Cefalù
        </span>
        <span className="flex items-center gap-2 text-xs tracking-widest uppercase">
          <span className="inline-block w-3 h-3 rounded-full bg-[#6b7c4a]" /> Taormina
        </span>
      </div>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-3">
          {days.map((d) => (
            <div key={d.day} className="border border-[#ede5d5] bg-white overflow-hidden">
              <button
                className="w-full flex items-start gap-4 px-6 py-5 text-left hover:bg-[#fdfaf4] transition-colors focus:outline-none"
                onClick={() => setOpenDay(openDay === d.day ? null : d.day)}
                aria-expanded={openDay === d.day}
              >
                <span className="font-serif text-3xl text-[#b8924a]/30 leading-none mt-1 w-8 flex-shrink-0">
                  {d.day}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 tracking-widest uppercase ${locationColors[d.location] ?? "bg-[#8c7b6b] text-white"}`}>
                      {d.location}
                    </span>
                    <span className="text-[#7a8090] text-xs">{d.date}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#000000] leading-snug">{d.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {d.highlights.map((h) => (
                      <span key={h} className="text-xs text-[#7a8090] border border-[#ede5d5] px-2 py-0.5">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[#b8924a] text-xl flex-shrink-0 mt-1">
                  {openDay === d.day ? "−" : "+"}
                </span>
              </button>

              {openDay === d.day && (
                <div className="px-6 pb-6 pt-0 border-t border-[#ede5d5]">
                  <ul className="mt-4 space-y-2">
                    {d.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#7a8090] leading-relaxed">
                        <span className="text-[#b8924a] flex-shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <div className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <p className="text-[#7a8090] text-sm italic">
          Itinerary subject to change due to weather and other unforeseen events.
          Custom itineraries and dates available for groups of 5+.
        </p>
      </div>

      {/* CTA */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#000000] mb-4">Secure Your Spot</h2>
        <p className="text-[#000000]/70 mb-8">Early bird $5,600 pp · Book by March 9th, 2026</p>
        <a
          href="https://form.jotform.com/242294677009059"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#000000] text-[#fdfaf4] px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#0d1829] transition-colors"
        >
          Book Italy
        </a>
      </section>
    </>
  );
}

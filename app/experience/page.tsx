import type { Metadata } from "next";
import Link from "next/link";
import VillaCarousel from "../components/VillaCarousel";

export const metadata: Metadata = {
  title: "The Experience — Chef Rocco Garibaldi Sicily",
  description:
    "Learn what's included in the Southern Italy Epicurean Experience with Chef Rocco Garibaldi — cooking lessons, winery tours, villa stays, and more.",
};

const chefs = [
  {
    name: "Chef Rocco Garibaldi",
    role: "Host & Pizzaiolo",
    bio: "Owner of Rocco's Pizza Pub on the Big Island of Hawai'i, Rocco carries on a 45-year family legacy started by his father Joe. A passionate Pizzaiolo and host, he brings warmth, humor, and deep culinary knowledge to every experience.",
  },
  {
    name: "Chef Roberto",
    role: "Chef & Pizzaiolo",
    bio: "Co-owner of Rocco's Pizza Pub and Rocco's right hand, Roberto brings his Sicilian roots and expert pizza craft to the villa kitchen. He also leads the legendary hike up La Rocca di Cefalù.",
  },
  {
    name: "Chef Ryan",
    role: "Master Pastaio",
    bio: "Traveling from Rome, Italy, Ryan is a master pasta maker whose Sicilian pasta sessions are a highlight of the trip. His pasta-making class is an unforgettable hands-on experience.",
  },
  {
    name: "Chef Keo",
    role: "Chef",
    bio: "The newest addition to the culinary group, Chef Keo joins from America to bring fresh creative energy to the kitchen and add to the richness of every shared meal.",
  },
];

const included = [
  "9 nights accommodation in Cefalù & Taormina, Sicily",
  "Transfers to and from Palermo Airport (PMO)",
  "All excursion transportation",
  "Welcome Prosecco toast & aperitivo",
  "Breakfast, lunch & dinner (except during free-time periods)",
  "All wine, beer & cocktails throughout the tour",
  "Chef-led lunches with wine/beer pairings",
  "Chef-led dinners with wine/beer pairings",
  "Wood-fired pizza party at the villa",
  "Pizza Festival — Festa Della Pizza",
  "Winery tours & tastings (Abbazia Santa Anastasia & more)",
  "Sunset aperitivo at Al Chiosco",
  "Live music",
  "Saltwater pool & gym at the villa",
  "Hands-on cooking lessons (pasta, pizza, chef course)",
  "Welcome bottle of wine in your room",
  "English/Italian speaking chefs throughout",
  "Grape harvest at Rocco Garibaldi Vineyard (weather permitting)",
  "All tax and VAT included",
  "All gratuities included",
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">The Experience — Chef Rocco Garibaldi Sicily</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">What&apos;s Included</p>
        <p className="text-[#ede5d5]/80 text-lg max-w-xl mx-auto italic font-light">
          Every detail taken care of. All you need to do is arrive with an appetite.
        </p>
      </section>

      {/* What's included */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Everything Covered</p>
          <h2 className="font-serif text-4xl text-[#000000]">All-Inclusive Tour Highlights</h2>
          <div className="w-12 h-px bg-[#b8924a] mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white border border-[#ede5d5] px-6 py-4 hover:border-[#b8924a]/40 transition-colors">
              <span className="text-[#b8924a] mt-0.5 flex-shrink-0">✓</span>
              <span className="text-[#000000] text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the chefs */}
      <section className="bg-[#ede5d5] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Your Culinary Team</p>
            <h2 className="font-serif text-4xl text-[#000000]">Meet the Chefs</h2>
            <div className="w-12 h-px bg-[#b8924a] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chefs.map((chef) => (
              <div key={chef.name} className="bg-[#fdfaf4] border border-[#ddd0bc] p-8">
                <div className="w-8 h-px bg-[#b8924a] mb-5" />
                <h3 className="font-serif text-xl text-[#000000] mb-1">{chef.name}</h3>
                <p className="text-[#b8924a] text-xs tracking-[0.2em] uppercase mb-3">{chef.role}</p>
                <p className="text-[#7a8090] text-sm leading-relaxed">{chef.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villas */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Your Home in Sicily</p>
            <h2 className="font-serif text-4xl text-[#000000]">The Villas</h2>
            <div className="w-12 h-px bg-[#b8924a] mx-auto mt-5" />
          </div>

          {/* Villa 1 — Main Group Villa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <VillaCarousel
              images={Array.from({ length: 16 }, (_, i) => `/villas/villa-main/${i + 1}.jpg`)}
              villaName="The Main Villa"
            />
            <div>
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Sleeps up to 8 Guests</p>
              <h3 className="font-serif text-3xl text-[#000000] mb-5">The Main Villa</h3>
              <div className="w-8 h-px bg-[#b8924a] mb-6" />
              <p className="text-[#7a8090] text-lg leading-relaxed mb-5">
                Your home base for the journey — a spacious, beautifully appointed Sicilian villa
                accommodating up to eight guests. Gather here for chef-led dinners under the open sky,
                morning breakfasts with views of the coastline, and long evenings over wine and stories
                that stretch well past midnight.
              </p>
              <p className="text-[#7a8090] text-lg leading-relaxed mb-8">
                With a private saltwater pool, generous common areas, and the warmth of a true Italian
                home, the Main Villa is where friendships deepen and memories are made. Every meal, every
                cooking lesson, every shared moment happens here.
              </p>
              <ul className="space-y-2 text-sm text-[#000000]">
                {["Private saltwater pool", "Full chef kitchen", "Open-air dining terrace", "Up to 8 guests", "Daily housekeeping"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="text-[#b8924a]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-[#ede5d5] mb-24" />

          {/* Villa 2 — Couples Villa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <VillaCarousel
                images={[8,9,10,11,12,1,2,3,4,5,6,7].map(n => `/villas/villa-couples/${n}.jpg`)}
                villaName="The Couples Villa"
              />
            </div>
            <div className="lg:order-1">
              <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Exclusively for Two</p>
              <h3 className="font-serif text-3xl text-[#000000] mb-5">The Couples Villa</h3>
              <div className="w-8 h-px bg-[#b8924a] mb-6" />
              <p className="text-[#7a8090] text-lg leading-relaxed mb-5">
                Perched in the mountains above Cefalù, this intimate villa is a world unto itself.
                Designed for two, it offers a level of seclusion, romance, and beauty that is genuinely
                difficult to find anywhere else in Sicily. Wake to mountain air, share a private terrace
                overlooking the Tyrrhenian Sea, and let the evenings unfold at your own pace.
              </p>
              <p className="text-[#7a8090] text-lg leading-relaxed mb-8">
                Whether you are celebrating a honeymoon, a wedding, renewing your vows, or simply
                seeking an extraordinary escape for two — this villa was made for you. Intimate,
                elevated, and completely unforgettable.
              </p>
              <ul className="space-y-2 text-sm text-[#000000]">
                {["Mountain views over Cefalù", "Private terrace & pool", "Ideal for honeymoons & weddings", "Vow renewal packages available", "Exclusive access for two"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="text-[#b8924a]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#000000] mb-4">Ready to Join Us?</h2>
        <p className="text-[#000000]/70 mb-8">September 1–10, 2026 · Limited spots available</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://form.jotform.com/242294677009059"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#000000] text-[#fdfaf4] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#0d1829] transition-colors"
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

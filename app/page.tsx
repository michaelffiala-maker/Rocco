import Link from "next/link";

const highlights = [
  { title: "Hands-On Cooking", desc: "Pasta making, pizza parties, and chef-led dinners in your private villa" },
  { title: "Winery Visits", desc: "Tastings at Abbazia Santa Anastasia and local Sicilian wineries" },
  { title: "Sicily & Taormina", desc: "Cefalù's coastline, Taormina's hilltop views, and Mt. Etna on the horizon" },
  { title: "4 World-Class Chefs", desc: "Chef Rocco, Roberto, Ryan & Keo guide every culinary moment" },
  { title: "History & Culture", desc: "Ancient theaters, medieval castles, open-air markets, and Cathedral piazzas" },
  { title: "Saltwater Villa", desc: "9 nights in private Sicilian villas with pools, sunsets, and aperitivo" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <p className="text-[#ede5d5] text-base md:text-lg mb-3 tracking-wide italic font-light">
          Travel and experience the culinary traditions and beauty of the Old Country
        </p>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-10">
          September 1 – 10, 2026 · Sicily, Italy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b8924a] text-[#fdfaf4] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#c9a45a] transition-colors"
          >
            Book Italy
          </a>
          <Link
            href="/itinerary"
            className="border border-[#ede5d5]/60 text-[#ede5d5] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:border-[#ede5d5] transition-colors"
          >
            View Itinerary
          </Link>
        </div>
      </section>

      {/* Dates banner */}
      <section className="bg-[#000000] border-y border-[#b8924a]/30 text-[#ede5d5] py-4 text-center">
        <p className="text-xs tracking-[0.3em] uppercase">
          September 1–10, 2026 &nbsp;·&nbsp; Cefalù & Taormina, Sicily &nbsp;·&nbsp;{" "}
          <span className="text-[#b8924a]">Early bird from $5,600 pp</span>
        </p>
      </section>

      {/* Highlights grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-4">What Awaits You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#000000]">Ten Days of Pure Italy</h2>
          <div className="w-16 h-px bg-[#b8924a] mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white border border-[#ede5d5] p-8 hover:shadow-lg hover:border-[#b8924a]/30 transition-all">
              <div className="w-8 h-px bg-[#b8924a] mb-5" />
              <h3 className="font-serif text-xl text-[#000000] mb-2">{h.title}</h3>
              <p className="text-[#7a8090] text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story section */}
      <section className="bg-[#000000] text-[#ede5d5] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-4">45 Years of Italian Tradition</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-3 leading-tight">It&apos;s a Family Thing</h2>
          <div className="w-12 h-px bg-[#b8924a] mx-auto mb-10" />
          <p className="text-[#ede5d5]/80 text-lg leading-relaxed mb-6">
            Rocco is our name. It all began 45 years ago when my father Joe Rocco opened
            the very first Rocco&apos;s Pizza. Growing up with an Italian father who was
            passionate and strict about quality taught us early on about hard work, pride,
            respect, and family.
          </p>
          <p className="text-[#ede5d5]/80 text-lg leading-relaxed mb-10">
            Now, we invite you to travel with us back to the source — the villages,
            vineyards, and kitchens of Southern Italy where it all began. This isn&apos;t
            just a visit. It&apos;s a homecoming.
          </p>
          <Link
            href="/story"
            className="border border-[#b8924a] text-[#b8924a] px-10 py-3 text-xs tracking-[0.25em] uppercase hover:bg-[#b8924a] hover:text-[#fdfaf4] transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#000000] mb-4">Spots Are Limited</h2>
        <p className="text-[#000000]/70 mb-8 text-lg">
          Early bird pricing available through March 9th, 2026.
          <br />
          Groups of 5+ can request custom itineraries and dates.
        </p>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#000000] text-[#fdfaf4] px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#0d1829] transition-colors"
        >
          Book Italy Now
        </a>
      </section>
    </>
  );
}

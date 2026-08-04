import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Book — Rocco's Italy",
  description:
    "Pricing for the Southern Italy Epicurean Experience with Chef Rocco Garibaldi. Early bird $5,600 per person. Book by March 9th, 2026.",
};

const included = [
  "9 nights accommodation in Sicily (Cefalù & Taormina)",
  "Transfers to/from Palermo Airport (PMO)",
  "All excursion transportation",
  "Welcome Prosecco toast & aperitivo",
  "All meals (except during free-time periods)",
  "All wine, beer & cocktails throughout the experience",
  "Chef lunches & dinners with wine/beer pairings",
  "Hands-on cooking lessons — pasta, pizza, chef course",
  "Wood-fired pizza party at the villa",
  "Festa Della Pizza — Italian Pizza Festival",
  "Winery visits & tastings",
  "Sunset aperitivo at Al Chiosco",
  "Live music",
  "Saltwater pool & gym at the villa",
  "Grape harvest at Rocco Garibaldi Vineyard (weather permitting)",
  "Welcome bottle of wine in your room",
  "English/Italian speaking chefs throughout",
  "All tax, VAT & gratuities included",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Pricing & Book — Chef Rocco Garibaldi Sicily Experience</h1>
        <p className="text-[#c9a45a] text-xs tracking-[0.3em] uppercase mb-3">Invest in the Experience</p>
        <p className="text-[#b0a090] text-lg max-w-xl mx-auto">
          All-exclusive. No hidden fees. Every detail covered.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Early bird */}
          <div className="border-2 border-[#b8924a] bg-white p-10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b8924a] text-[#fdfaf4] text-xs px-4 py-1 tracking-widest uppercase">
              Best Value
            </div>
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Early Bird</p>
            <p className="font-serif text-5xl text-[#000000] mb-1">$5,600</p>
            <p className="text-[#7a8090] text-sm mb-6">per person · double occupancy</p>
            <p className="text-[#000000] text-sm mb-8 leading-relaxed">
              Book on or before <strong>March 9th, 2026</strong> to lock in this rate.
              Payment secures your reservation based on availability.
            </p>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#b8924a] text-[#fdfaf4] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#c9a45a] transition-colors"
            >
              Book at This Price
            </a>
          </div>

          {/* Standard */}
          <div className="border border-[#ede5d5] bg-white p-10">
            <p className="text-[#7a8090] text-xs tracking-[0.3em] uppercase mb-3">Standard Rate</p>
            <p className="font-serif text-5xl text-[#000000] mb-1">$6,500</p>
            <p className="text-[#7a8090] text-sm mb-6">per person · double occupancy</p>
            <p className="text-[#7a8090] text-sm mb-8 leading-relaxed">
              Available after March 9th, 2026. Payment secures your reservation
              based on availability.
            </p>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-[#000000] text-[#000000] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#000000] hover:text-[#fdfaf4] transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Single supplement */}
        <div className="bg-[#ede5d5] border border-[#e8c8a0] px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif text-lg text-[#000000]">Single Room Supplement</p>
            <p className="text-[#7a8090] text-sm">Traveling solo? Add a private room.</p>
          </div>
          <p className="font-serif text-3xl text-[#b8924a]">+$490</p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#ede5d5] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">No Surprises</p>
            <h2 className="font-serif text-4xl text-[#000000]">Everything That&apos;s Included</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white px-5 py-3 border border-[#ede5d5]">
                <span className="text-[#b8924a] flex-shrink-0 mt-0.5">✓</span>
                <span className="text-[#000000] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Policies</p>
          <h2 className="font-serif text-4xl text-[#000000]">Payment & Cancellation</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-[#ede5d5] p-6">
            <h3 className="font-serif text-lg text-[#000000] mb-2">Payment</h3>
            <p className="text-[#7a8090] text-sm leading-relaxed">
              Payments are secured via US Bank Transfer to Bank of America in USD funds.
              Payment secures your reservation based on availability.
            </p>
          </div>

          <div className="bg-white border border-[#ede5d5] p-6">
            <h3 className="font-serif text-lg text-[#000000] mb-2">Cancellation Policy</h3>
            <p className="text-[#7a8090] text-sm leading-relaxed">
              A full refund is available upon cancellation <strong className="text-[#000000]">120 days or more</strong> prior
              to the experience start date. All other cancellations will be applied as a credit toward a future
              culinary experience. A <strong className="text-[#000000]">$470 administrative fee</strong> will be
              deducted from the payment amount.
            </p>
          </div>

          <div className="bg-white border border-[#ede5d5] p-6">
            <h3 className="font-serif text-lg text-[#000000] mb-2">Trip Change Policy</h3>
            <p className="text-[#7a8090] text-sm leading-relaxed">
              Payment made may be applied toward a future experience date.
            </p>
          </div>

          <div className="bg-white border border-[#ede5d5] p-6">
            <h3 className="font-serif text-lg text-[#000000] mb-2">Groups of 5+</h3>
            <p className="text-[#7a8090] text-sm leading-relaxed">
              Custom itineraries and alternate dates are available for groups of 5 or more.{" "}
              <Link href="/contact" className="text-[#b8924a] hover:underline">
                Contact us
              </Link>{" "}
              to discuss your group.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Book?</h2>
        <p className="text-[#000000]/70 mb-8">
          Early bird pricing ends March 9th, 2026. Don&apos;t miss it.
        </p>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#b8924a] px-12 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#ede5d5] transition-colors"
        >
          Book Italy Now
        </a>
      </section>
    </>
  );
}

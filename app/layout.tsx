import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef Rocco Garibaldi — A Southern Italy Epicurean Experience",
  description:
    "Travel and experience the culinary traditions and beauty of Southern Italy with Chef Rocco Garibaldi. September 1–10, 2026 in Sicily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${cormorant.variable}`}>
      <body className="min-h-full flex flex-col bg-[#fdfaf4] text-[#000000]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
        <Nav />
        {/* Global white logo banner — top of every page */}
        <div className="pt-16 bg-white border-b border-[#ede5d5] flex justify-center py-10 px-6">
          <Image
            src="/logos/logo-horizontal.png"
            alt="Chef Rocco Garibaldi — Authentic Culinary Experiences in Sicily"
            width={800}
            height={220}
            className="w-64 md:w-96 lg:w-[480px] h-auto"
            priority
          />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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
  metadataBase: new URL("https://roccogaribaldi.com"),
  title: "Chef Rocco Garibaldi — A Southern Italy Epicurean Experience",
  description:
    "Travel and experience the culinary traditions and beauty of Southern Italy with Chef Rocco Garibaldi. September 1–10, 2026 in Sicily.",
  openGraph: {
    title: "Chef Rocco Garibaldi — A Southern Italy Epicurean Experience",
    description:
      "Travel and experience the culinary traditions and beauty of Southern Italy with Chef Rocco Garibaldi. September 1–10, 2026 in Sicily.",
    url: "https://roccogaribaldi.com",
    siteName: "Chef Rocco Garibaldi",
    images: [
      {
        url: "/logos/logo-full.png",
        width: 560,
        height: 560,
        alt: "Chef Rocco Garibaldi — A Southern Italy Epicurean Experience",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chef Rocco Garibaldi — A Southern Italy Epicurean Experience",
    description:
      "Travel and experience the culinary traditions and beauty of Southern Italy with Chef Rocco Garibaldi. September 1–10, 2026 in Sicily.",
    images: ["/logos/logo-full.png"],
  },
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
        {/* Global black logo banner — top of every page */}
        <div className="pt-20 bg-[#000000] flex justify-center items-center px-6">
          <Image
            src="/logos/logo-full.png"
            alt="Chef Rocco Garibaldi — Authentic Culinary Experiences in Sicily"
            width={560}
            height={560}
            className="w-60 md:w-80 lg:w-[360px] h-auto"
            priority
          />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

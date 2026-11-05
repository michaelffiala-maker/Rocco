import type { Metadata } from "next";
import Image from "next/image";
import { readdirSync, readFileSync } from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Past Experiences — Chef Rocco Garibaldi Sicily",
  description:
    "Photos from past culinary experiences hosted by Chef Rocco Garibaldi — cooking, wine, villa life, and the beauty of Sicily.",
};

type GalleryItem = { src: string; width: number; height: number; caption?: string };

const ESTATE_CAPTIONS: Record<string, string> = {
  "DSC00643.jpg": "Lemons · Limoni",
  "DSC00651.jpg": "Apricots · Albicocche",
  "DSC00685.jpg": "Apricots · Albicocche",
  "DSC00659.jpg": "Plums · Susine",
  "DSC00667.jpg": "Plums · Susine",
  "DSC00689.jpg": "Plums · Susine",
  "DSC00664.jpg": "Quince · Mela Cotogna",
  "DSC00687.jpg": "Quince · Mela Cotogna",
  "DSC00694.jpg": "Figs · Fichi",
  "DSC00847.jpg": "Pears · Pere",
  "DSC00701.jpg": "Olive Trees · Olivo Frantoio",
  "DSC00857.jpg": "Grapevines · Vigneto",
  "3b0aaf7e-8219-4197-9bcb-87df53fa207e_orig.jpeg": "Grapevines · Vigneto",
  "ac97e039-8f23-40b6-bcab-df18df19e1cb.jpeg": "Harvested Grapes · Vendemmia",
};

function readJpegDimensions(buf: Buffer): { width: number; height: number } | null {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 4 <= buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    if (marker === 0xd9 || marker === 0xda) break;
    const length = buf.readUInt16BE(offset + 2);
    const isSOF =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);
    if (isSOF) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    offset += 2 + length;
  }
  return null;
}

function readPngDimensions(buf: Buffer): { width: number; height: number } | null {
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readImageDimensions(filePath: string): { width: number; height: number } {
  try {
    const buf = readFileSync(filePath);
    const dims = readPngDimensions(buf) ?? readJpegDimensions(buf);
    if (dims && dims.width > 0 && dims.height > 0) return dims;
  } catch {
    // fall through to default
  }
  return { width: 4, height: 3 };
}

function getImages(subdir: string, captions?: Record<string, string>): GalleryItem[] {
  const dir = path.join(process.cwd(), "public", "gallery", subdir);
  try {
    return readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && f !== "featured-property.jpg")
      .map((f) => {
        const { width, height } = readImageDimensions(path.join(dir, f));
        return { src: `/gallery/${subdir}/${f}`, width, height, caption: captions?.[f] };
      });
  } catch {
    return [];
  }
}

const PER_ROW = 3;

function PhotoGrid({ images, altPrefix }: { images: GalleryItem[]; altPrefix: string }) {
  const rows: GalleryItem[][] = [];
  for (let i = 0; i < images.length; i += PER_ROW) rows.push(images.slice(i, i + PER_ROW));

  return (
    <div className="space-y-4">
      {rows.map((row, rowIndex) => {
        const isFullRow = row.length === PER_ROW;
        return (
          <div key={rowIndex} className="flex gap-4">
            {row.map((item, i) => {
              const aspect = item.width / item.height;
              return (
                <div
                  key={item.src}
                  className="min-w-0"
                  style={
                    isFullRow
                      ? { flexGrow: aspect, flexBasis: 0 }
                      : { flexGrow: 0, flexShrink: 0, width: `${aspect * 15}rem`, maxWidth: "100%" }
                  }
                >
                  <Image
                    src={item.src}
                    alt={item.caption ? `${item.caption} — ${altPrefix}` : `${altPrefix} photo ${rowIndex * PER_ROW + i + 1}`}
                    width={item.width}
                    height={item.height}
                    unoptimized
                    loading="eager"
                    className="w-full h-auto hover:opacity-90 transition-opacity"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  {item.caption && (
                    <p className="mt-2 text-[#7a8090] text-xs tracking-[0.15em] uppercase text-center">
                      {item.caption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">{eyebrow}</p>
      <h2 className="font-serif text-3xl md:text-4xl text-[#000000]">{title}</h2>
    </div>
  );
}

export default function PastExperiencesPage() {
  const foodWineImages = getImages("food-wine");
  const cultureImages = getImages("culture");
  const estateImages = getImages("estate", ESTATE_CAPTIONS);
  const hasAny = foodWineImages.length + cultureImages.length + estateImages.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#000000] py-20 px-6 text-center">
        <h1 className="sr-only">Past Experiences — Chef Rocco Garibaldi</h1>
        <p className="text-[#b8924a] text-xs tracking-[0.3em] uppercase mb-3">Memories from Sicily</p>
        <p className="text-[#ede5d5] font-serif text-4xl md:text-5xl italic font-light">
          Past Experiences
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {!hasAny ? (
          <div className="text-center py-24">
            <div className="w-12 h-px bg-[#b8924a] mx-auto mb-8" />
            <p className="text-[#7a8090] text-lg">Photos coming soon.</p>
          </div>
        ) : (
          <div className="space-y-24">
            {foodWineImages.length > 0 && (
              <div>
                <SectionHeading eyebrow="Cucina & Vino" title="Food & Wine" />
                <PhotoGrid images={foodWineImages} altPrefix="Food & wine" />
              </div>
            )}

            {cultureImages.length > 0 && (
              <div>
                <SectionHeading eyebrow="Sicilia" title="Culture" />
                <PhotoGrid images={cultureImages} altPrefix="Sights of Sicily" />
              </div>
            )}

            {estateImages.length > 0 && (
              <div>
                <SectionHeading eyebrow="Tenuta & Vigneto" title="The Rocco Garibaldi Estate & Vineyard" />
                <div className="mb-8 overflow-hidden">
                  <Image
                    src="/gallery/estate/featured-property.jpg"
                    alt="The Rocco Garibaldi Estate"
                    width={1600}
                    height={1067}
                    unoptimized
                    className="w-full h-auto object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
                <PhotoGrid images={estateImages} altPrefix="Rocco Garibaldi Estate & Vineyard" />
              </div>
            )}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#b8924a] py-16 px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#000000] mb-4">Join Us in Sicily</h2>
        <p className="text-[#000000]/70 mb-8 text-lg">September 2–11, 2027 · Limited spots available</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/pricing"
            className="bg-[#000000] text-[#fdfaf4] px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#000000]/80 transition-colors"
          >
            Book Italy
          </a>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

const CATEGORIES = ["All", "Campus", "Academics", "Sports", "Arts", "Events"];

const IMAGES = [
  { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80&fit=crop", caption: "Classroom Learning", category: "Academics" },
  { url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&fit=crop", caption: "Sports Day", category: "Sports" },
  { url: "https://images.unsplash.com/photo-1549646440-ae74c86add5f?w=600&q=80&fit=crop", caption: "Choir Performance", category: "Arts" },
  { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&fit=crop", caption: "Junior Assembly", category: "Events" },
  { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80&fit=crop", caption: "Science Lab", category: "Academics" },
  { url: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80&fit=crop", caption: "Art Class", category: "Arts" },
  { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&fit=crop", caption: "School Building", category: "Campus" },
  { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80&fit=crop", caption: "Morning Assembly", category: "Events" },
  { url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&fit=crop", caption: "Computer Lab", category: "Academics" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? IMAGES : IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Gallery" breadcrumb="Gallery" image="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80&auto=format&fit=crop" />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "border border-primary/30 text-primary bg-transparent hover:bg-primary-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="relative group break-inside-avoid mb-4 cursor-pointer"
                onClick={() => setLightboxIdx(i)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    width={600}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 rounded-xl transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-accent-light text-accent text-[10px] uppercase tracking-wide font-semibold px-3 py-1 rounded-full mb-2 inline-block">{img.category}</span>
                    <p className="font-sans text-sm text-white font-medium">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <button className="absolute top-4 right-4 text-white text-2xl w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors z-10" onClick={() => setLightboxIdx(null)} aria-label="Close">
            <X className="w-5 h-5" />
          </button>
          <Image
            src={filtered[lightboxIdx].url}
            alt={filtered[lightboxIdx].caption}
            width={1200}
            height={800}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

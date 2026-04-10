"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

const CATEGORIES = ["All", "School Life", "Achievements", "Events"];

const IMAGES = [
  // School Life
  { url: "/images/hoyo/IMG_6966.JPG", caption: "Students in Blue Blazers at School Entrance", category: "School Life", objectPosition: "center 30%" },
  { url: "/images/hoyo/IMG_6967.JPG", caption: "Formal Uniform Group — Entrance Arch", category: "School Life", objectPosition: "center 30%" },
  { url: "/images/hoyo/IMG_6968.JPG", caption: "Students & Building — Academic Day", category: "School Life", objectPosition: "center 35%" },
  { url: "/images/hoyo/IMG_6970.JPG", caption: "School Building — Widest Angle", category: "School Life", objectPosition: "center 50%" },
  { url: "/images/hoyo/IMG_6956.JPG", caption: "Jersey Day — School Community Comes Together", category: "School Life", objectPosition: "center 35%" },
  { url: "/images/hoyo/IMG_6957.JPG", caption: "Man Utd Jersey Day Crowd", category: "School Life", objectPosition: "center 30%" },
  { url: "/images/hoyo/IMG_6958.JPG", caption: "Liverpool Jersey Day Group", category: "School Life", objectPosition: "center 30%" },
  { url: "/images/hoyo/IMG_6969.JPG", caption: "School Facade — Blue Sky & Students", category: "School Life", objectPosition: "center 25%" },

  // Achievements
  { url: "/images/hoyo/IMG_6964.JPG", caption: "Gold Medal Bite — Pure Joy", category: "Achievements", objectPosition: "center 15%" },
  { url: "/images/hoyo/IMG_6965.JPG", caption: "Trophy & Medals — Provincial Champions", category: "Achievements", objectPosition: "center 20%" },
  { url: "/images/hoyo/IMG_6963.JPG", caption: "Three Athletes — Race Bibs", category: "Achievements", objectPosition: "center 20%" },
  { url: "/images/hoyo/IMG_6947.JPG", caption: "Football Team — Regional Trophy Winners", category: "Achievements", objectPosition: "center 25%" },
  { url: "/images/hoyo/IMG_6950.JPG", caption: "Athletics Medal Moment with Teacher", category: "Achievements", objectPosition: "center 20%" },
  { url: "/images/hoyo/IMG_6951.JPG", caption: "Teacher & Student Celebrating Win", category: "Achievements", objectPosition: "center 20%" },

  // Events
  { url: "/images/hoyo/IMG_6976.JPG", caption: "Speech & Prize Giving Day — Stage", category: "Events", objectPosition: "center 15%" },
  { url: "/images/hoyo/IMG_6977.JPG", caption: "Prize Giving Banquet Hall", category: "Events", objectPosition: "center 30%" },
  { url: "/images/hoyo/IMG_6980.JPG", caption: "Top Student Award on Red Carpet", category: "Events", objectPosition: "center 20%" },
  { url: "/images/hoyo/IMG_6981.JPG", caption: "Outstanding Student with Principal", category: "Events", objectPosition: "center 12%" },
  { url: "/images/hoyo/IMG_6979.JPG", caption: "Teacher Giving Speech at Ceremony", category: "Events", objectPosition: "center 25%" },
  { url: "/images/hoyo/IMG_6953.JPG", caption: "Athletics Team with Coach", category: "Events", objectPosition: "center 20%" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? IMAGES : IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Gallery" breadcrumb="Gallery" image="/images/hoyo/IMG_6970.JPG" objectPosition="center 55%" overlayIntensity="light" />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setLightboxIdx(null); }}
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
                key={`${activeFilter}-${i}`}
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
                    style={{ objectPosition: img.objectPosition }}
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

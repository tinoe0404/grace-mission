"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop",
    headline: "Grade 7 pupils achieve outstanding ZIMSEC results.",
  },
  {
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
    headline: "New computer lab officially opened for students.",
  },
  {
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&auto=format&fit=crop",
    headline: "Annual Sports Day 2024 — a day to remember.",
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80&auto=format&fit=crop",
    headline: "Art exhibition showcases student creativity.",
  },
];

export default function LatestNewsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-2 block">Stay Updated</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Latest News</h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll("left")} className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="Scroll left">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll("right")} className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="Scroll right">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-snap-x no-scrollbar pb-2">
          {NEWS_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="snap-start shrink-0 w-[220px] sm:w-[260px] cursor-pointer group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <Image src={item.image} alt={item.headline} fill sizes="(max-width: 640px) 220px, 260px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-sm font-semibold text-charcoal leading-snug group-hover:text-primary transition-colors line-clamp-3 font-sans">
                {item.headline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

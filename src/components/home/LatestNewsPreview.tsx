"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    image: "/images/hoyo/IMG_6976.JPG",
    headline: "Form 4 Students Achieve Outstanding O-Level Results",
  },
  {
    image: "/images/hoyo/IMG_6965.JPG",
    headline: "Athletics: Provincial Champions for Third Year Running",
  },
  {
    image: "/images/hoyo/IMG_6980.JPG",
    headline: "Inter-Schools Debate Championship: Grace Missions Win",
  },
  {
    image: "/images/hoyo/IMG_6977.JPG",
    headline: "New Science Laboratory Opens for A-Level Students",
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
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-primary/5">
                <Image src={item.image} alt={item.headline} fill sizes="(max-width: 640px) 220px, 260px" className="object-contain group-hover:scale-105 transition-transform duration-500" />
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

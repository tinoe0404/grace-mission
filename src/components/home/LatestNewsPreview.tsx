"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop",
    category: "Academic",
    headline: "Grade 7 pupils achieve outstanding ZIMSEC results",
    date: "March 15, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
    category: "Facilities",
    headline: "New state-of-the-art computer lab officially opened",
    date: "March 02, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&auto=format&fit=crop",
    category: "Sports",
    headline: "Annual Sports Day 2026 sets new school records",
    date: "February 24, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80&auto=format&fit=crop",
    category: "Arts",
    headline: "Annual art exhibition showcases student creativity",
    date: "February 10, 2026",
  },
];

export default function LatestNewsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Latest News
          </h2>
          <div className="hidden md:flex flex-col items-end gap-4">
            <Link 
              href="/news" 
              className="group inline-flex items-center gap-2 text-primary font-sans font-medium hover:text-gold transition-colors"
            >
              View all news 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all hover:bg-cream"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all hover:bg-cream"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-snap-x no-scrollbar pb-4"
        >
          {NEWS_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] cursor-pointer group flex flex-col items-start"
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gold-light text-gold text-[12px] uppercase tracking-wide px-3 py-1 rounded-full font-sans font-semibold mb-3">
                {item.category}
              </div>
              <p className="font-serif text-[17px] font-bold text-primary leading-snug group-hover:text-gold transition-colors line-clamp-3 mb-2">
                {item.headline}
              </p>
              <span className="font-sans text-[12px] text-muted">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden flex justify-center">
          <Link 
            href="/news" 
            className="group inline-flex items-center gap-2 text-primary font-sans font-medium hover:text-gold transition-colors"
          >
            View all news 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

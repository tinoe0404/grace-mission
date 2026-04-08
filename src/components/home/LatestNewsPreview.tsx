"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const NEWS_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop",
    date: "March 2025",
    headline: "Grade 7 pupils achieve outstanding ZIMSEC results",
    excerpt: "Our final year class posted a remarkable 98% pass rate, with 15 pupils earning distinctions across all subjects.",
  },
  {
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&auto=format&fit=crop",
    date: "February 2025",
    headline: "Annual Sports Day 2025 — a day to remember",
    excerpt: "Pupils from ECD to Grade 7 competed across 20 events in one of the most spirited Sports Days in our school's history.",
  },
  {
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
    date: "January 2025",
    headline: "New computer lab officially opened",
    excerpt: "The fully equipped ICT lab with 30 workstations was officially opened, bringing digital literacy to every student.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function LatestNewsPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Latest from Grace Mission
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {NEWS_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image with date badge */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary mb-2 leading-tight group-hover:text-secondary transition-colors">
                  {item.headline}
                </h3>
                <p className="text-textPrimary/60 text-sm leading-relaxed mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <Link
                  href="/news"
                  className="text-secondary text-sm font-bold hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                >
                  Read more
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View all news
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { ArrowRight, Calendar } from "lucide-react";

const NEWS_PREVIEWS = [
  {
    title: "Grade 7 Pupils Excel in Mid-Year Mock Examinations",
    excerpt: "Our senior pupils have shown tremendous dedication resulting in an outstanding 94% pass rate across core subjects.",
    date: "14 Jul, 2025",
    image: "news1",
    category: "Academic",
  },
  {
    title: "Annual Sports Day 2025: A Resounding Success",
    description: "Athletics, teamwork, and excellent sportsmanship were on full display as the houses battled for the floating trophy.",
    date: "04 Jul, 2025",
    image: "news2",
    category: "Sports",
  },
  {
    title: "New Modern ECD Wing Officially Commissioned",
    description: "With expanded facilities and modern play materials, our youngest learners now have an even better start to their journey.",
    date: "22 Jun, 2025",
    image: "news3",
    category: "Campus",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Stay Updated</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-textPrimary leading-tight">
              Latest News & Events
            </h2>
          </div>
          <Link 
            href="/news" 
            className="hidden md:inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-textPrimary hover:border-primary hover:text-primary transition-colors rounded-full font-medium shadow-sm group whitespace-nowrap shrink-0"
          >
            View all news
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {NEWS_PREVIEWS.map((news, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp as any}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/0 z-10" />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500 font-medium tracking-wide">
                  [ Image Placeholder ]
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-xl z-20 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xl font-bold font-serif leading-none">{news.date.split(' ')[0]}</span>
                  <span className="text-xs uppercase tracking-wider font-medium mt-0.5">{news.date.split(' ')[1].replace(',', '')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-3 block">
                  {news.category}
                </span>
                <h3 className="font-bold text-xl text-textPrimary mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-textMuted leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {news.excerpt || news.description}
                </p>
                <Link 
                  href="/news"
                  className="text-secondary font-semibold flex items-center gap-2 group-hover:text-primary transition-colors mt-auto inline-flex w-max"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile-only button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link 
            href="/news" 
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-textPrimary active:bg-gray-50 transition-colors rounded-full font-medium"
          >
            View all news
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] bg-gradient-to-br from-[#122238] via-[#1A2E44] to-[#182a45] flex flex-col justify-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-24 md:py-32 flex flex-col items-center text-center mt-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={item}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5 max-w-4xl tracking-tight italic"
          >
            Nurturing Minds,<br />Shaping Futures.
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-base md:text-lg text-white/75 mb-10 max-w-md leading-relaxed font-light"
          >
            A Christ-centered primary school in Harare,<br className="hidden sm:block" />
            Zimbabwe — ECD to Grade 7
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex justify-center items-center px-7 py-3 bg-secondary text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Apply for Admission
            </Link>
            <Link 
              href="/about" 
              className="inline-flex justify-center items-center px-7 py-3 border-2 border-white/40 text-white rounded-full font-semibold transition-all hover:border-white hover:bg-white/10 text-sm sm:text-base"
            >
              Explore the School
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]">
          <path d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}

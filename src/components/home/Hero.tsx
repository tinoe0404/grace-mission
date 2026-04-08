"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { slideInRight } from "@/lib/motion";

export default function Hero() {
  // Custom staggering for words
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-primary flex flex-col justify-center overflow-hidden pt-20">

      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              variants={titleContainer}
              initial="hidden"
              animate="visible"
              className="mt-12 lg:mt-6 mb-8 font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.12]"
            >
              <div className="overflow-hidden pb-1">
                <motion.span className="inline-block mr-4" variants={wordAnimation}>Nurturing</motion.span>
                <motion.span className="inline-block" variants={wordAnimation}>Minds,</motion.span>
              </div>
              <div className="overflow-hidden pb-4 text-white/95">
                <motion.span className="inline-block mr-4" variants={wordAnimation}>Shaping</motion.span>
                <motion.span className="inline-block text-secondary" variants={wordAnimation}>Futures.</motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed font-light tracking-wide"
            >
              A Christ-centered primary school in Harare, Zimbabwe — ECD to Grade 7
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <Link 
                href="/admissions" 
                className="inline-flex justify-center items-center px-8 py-3.5 bg-secondary text-white rounded-full font-medium transition-all hover:scale-105 shadow-[0_4px_14px_rgba(232,114,154,0.4)]"
              >
                Apply for Admission
              </Link>
              <Link 
                href="/about" 
                className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-white/30 text-white rounded-full font-medium transition-all hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                Explore the School
              </Link>
            </motion.div>
          </div>

          {/* Abstract Illustration */}
          <div className="hidden lg:block relative">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-square max-w-lg ml-auto"
            >
              {/* Soft decorative background shapes behind the image card */}
              <div className="absolute top-10 -right-4 w-72 h-72 bg-secondary/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-[60px]" />
              
              {/* Image Card */}
              <div className="relative w-full h-[90%] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-md overflow-hidden mt-8 flex flex-col items-center justify-center group">
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500 z-10" />
                <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80&auto=format&fit=crop" alt="Grace Mission Students" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute bottom-16 -left-8 md:-left-12 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/50 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 duration-300">
                  <ArrowRight className="text-secondary w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <p className="text-primary font-bold text-lg leading-none tracking-tight">Excellence</p>
                  <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mt-1">In Education</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Shape Divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}

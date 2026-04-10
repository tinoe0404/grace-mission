"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, User, GraduationCap, Flag } from "lucide-react";

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
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: 'url("/images/hoyo/IMG_6969.JPG")', backgroundPosition: 'center bott' }}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/20 w-full" />

      {/* Decorative Watermark */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
        <Image
          src="/images/logo.png"
          alt=""
          aria-hidden="true"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-24 md:py-32 flex flex-col items-start mt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start w-full"
        >
          <motion.h1
            variants={item}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-4 max-w-2xl tracking-tight"
          >
            Soaring High on the Wings of<br />
            <span className="italic">Enlightenment.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[18px] text-white/80 mb-10 max-w-xl leading-relaxed font-sans"
          >
            A Christ-centered high school in Zimbabwe, offering Form 1 to Form 6 — O-Level & A-Level.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/admissions"
              className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white rounded-full font-semibold transition-all hover:scale-105 hover:bg-[#b0800c] shadow-lg font-sans text-sm md:text-base"
            >
              Apply for Form 1
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold transition-all hover:bg-white/10 hover:text-white font-sans text-sm md:text-base"
            >
              Explore Our School
            </Link>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}

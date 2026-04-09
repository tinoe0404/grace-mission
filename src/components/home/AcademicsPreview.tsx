"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Calculator, BookOpen, Microscope, Monitor, Dumbbell, Palette } from "lucide-react";

const SUBJECTS = [
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Develop fluency at currency and problem-solving in ECO to Grade 7.",
  },
  {
    icon: BookOpen,
    title: "English & Literacy",
    description: "Developing confident oral, responsibility, and respect sports.",
  },
  {
    icon: Microscope,
    title: "Science & Tech",
    description: "The attra an incooperation of natural and physical works.",
  },
  {
    icon: Monitor,
    title: "ICT & Computing",
    description: "Moderate computer all with debitating from ECO grade.",
  },
  {
    icon: Dumbbell,
    title: "Sports & PE",
    description: "The fally sports, teachcerk, swimming, sports fiturns and teamworks.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Music, paleit, visual, and cultural expression.",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as any,
    },
  },
};

export default function AcademicsPreview() {
  return (
    <section className="py-16 md:py-24 bg-surface-warm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight font-serif">
            Academic Curriculum Overview
          </h2>
          <div className="w-12 h-1 bg-secondary mt-4 rounded-full" />
        </motion.div>

        {/* Subject cards — vertical list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {SUBJECTS.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex items-start gap-4 group border-l-4 border-l-transparent hover:border-l-primary/20"
              >
                <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                  <Icon className="w-5 h-5 text-primary/70" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary text-base mb-1">{subject.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed mb-2">{subject.description}</p>
                  <Link
                    href="/academics"
                    className="text-secondary text-sm font-semibold hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                  >
                    Learn more
                    <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

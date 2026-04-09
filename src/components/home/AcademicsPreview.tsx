"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Calculator, BookOpen, Microscope, Monitor, Dumbbell, Palette } from "lucide-react";

const SUBJECTS = [
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Building number fluency, problem-solving, and logical reasoning from ECD through Grade 7.",
  },
  {
    icon: BookOpen,
    title: "English",
    description: "Developing confident readers, writers, and speakers through structured literacy programmes.",
  },
  {
    icon: Microscope,
    title: "Science",
    description: "Hands-on exploration of the natural world, aligned with the updated ZIMSEC syllabus.",
  },
  {
    icon: Monitor,
    title: "ICT",
    description: "Practical computing skills including typing, internet safety, and introductory coding.",
  },
  {
    icon: Dumbbell,
    title: "Sports",
    description: "Football, athletics, netball, swimming, and team games developing fitness and character.",
  },
  {
    icon: Palette,
    title: "Arts",
    description: "Music, visual art, drama, and cultural expression celebrating Zimbabwean heritage.",
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
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Academic Curriculum
          </h2>
        </motion.div>

        {/* Subject cards — grid layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SUBJECTS.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-card-hover transition-shadow duration-300 border-l-4 border-l-primary flex flex-col items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-[16px] text-primary mb-2">{subject.title}</h3>
                  <p className="font-sans text-muted text-[14px] leading-relaxed mb-4">{subject.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

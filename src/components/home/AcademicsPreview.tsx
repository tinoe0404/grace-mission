"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Calculator, BookOpen, Microscope, Monitor, Dumbbell, Palette } from "lucide-react";

const SUBJECTS = [
  { icon: Calculator, title: "Mathematics", description: "Building strong numeracy and problem-solving from ECD to Grade 7." },
  { icon: BookOpen, title: "English & Literacy", description: "Developing confident reading, writing, and oral communication skills." },
  { icon: Microscope, title: "Science & Technology", description: "Exploring the natural and physical world through hands-on experiments." },
  { icon: Monitor, title: "ICT & Computing", description: "Modern computer skills and digital literacy from an early age." },
  { icon: Dumbbell, title: "Sports & PE", description: "Athletics, swimming, soccer, netball — building fitness and teamwork." },
  { icon: Palette, title: "Arts & Culture", description: "Music, visual arts, drama, and cultural expression." },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AcademicsPreview() {
  return (
    <section className="section-padding bg-primary-light">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
          <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-3 block">ZIMSEC-Aligned</span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight">Academic Curriculum</h2>
          <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col gap-4">
          {SUBJECTS.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-200 flex items-start gap-4 group hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-base text-charcoal mb-1">{subject.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-2 font-sans">{subject.description}</p>
                  <Link href="/academics" className="text-gold text-sm font-semibold hover:text-primary transition-colors inline-flex items-center gap-1 group/link font-sans">
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
